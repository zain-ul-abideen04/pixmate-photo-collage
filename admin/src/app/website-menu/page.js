"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Wrapper from "../components/wrapper";

const NAV_API = "http://localhost:8080/backend/nav";
const authHeader = () => ({ Authorization: `Bearer ${localStorage.getItem("token")}` });

export default function WebsiteMenuPage() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [msg, setMsg] = useState({ type: "", text: "" });

  // NEW: Add page form
  const [showForm, setShowForm] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newLink, setNewLink] = useState("");
  const [saving, setSaving] = useState(false);

  async function load() {
    try {
      setLoading(true);
      const res = await fetch(`${NAV_API}/manage`, { headers: authHeader() });
      const data = await res.json();
      if (data.success) setItems(data.items || []);
      else setMsg({ type: "danger", text: data.message || "Could not load pages." });
    } catch (err) {
      setMsg({ type: "danger", text: `Load failed: ${err.message}` });
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  // sidebar ko batao ke menu badal gaya
  const notifySidebar = () => window.dispatchEvent(new Event("menu-changed"));

  async function removePage(item) {
    if (!window.confirm(`"${item.title}" ko menu se hatana hai?`)) return;
    try {
      const res = await fetch(`${NAV_API}/pages/${item.slug}`, {
        method: "DELETE",
        headers: authHeader(),
      });
      const data = await res.json();
      if (data.success) {
        setItems(data.items || []);
        setMsg({ type: "success", text: `"${item.title}" menu se hata diya.` });
        notifySidebar();
      } else {
        setMsg({ type: "danger", text: data.message || "Could not delete." });
      }
    } catch (err) {
      setMsg({ type: "danger", text: `Delete failed: ${err.message}` });
    }
  }

  async function addPage(e) {
    e.preventDefault();
    setMsg({ type: "", text: "" });
    if (!newTitle.trim() || !newLink.trim()) {
      return setMsg({ type: "danger", text: "Name aur link dono likhein." });
    }
    try {
      setSaving(true);
      const res = await fetch(`${NAV_API}/pages`, {
        method: "POST",
        headers: { "Content-Type": "application/json", ...authHeader() },
        body: JSON.stringify({ title: newTitle.trim(), slug: newLink.trim() }),
      });
      const data = await res.json();
      if (data.success) {
        setItems(data.items || []);
        setNewTitle("");
        setNewLink("");
        setShowForm(false);
        setMsg({ type: "success", text: "Page menu mein add ho gaya." });
        notifySidebar();
      } else {
        setMsg({ type: "danger", text: data.message || "Could not add page." });
      }
    } catch (err) {
      setMsg({ type: "danger", text: `Add failed: ${err.message}` });
    } finally {
      setSaving(false);
    }
  }

  return (
    <Wrapper>
      <div className="container-fluid">
        <div className="layout-specing">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h5 className="mb-0">Website Menu</h5>
              <p className="text-muted mb-0 mt-1">Pages shown in the website navbar</p>
            </div>
            <button type="button" className="btn btn-primary" onClick={() => setShowForm((s) => !s)}>
              + Add page
            </button>
          </div>

          {msg.text && <div className={`alert alert-${msg.type} mt-3`}>{msg.text}</div>}

          {showForm && (
            <form onSubmit={addPage} className="bg-white rounded shadow p-4 mt-3">
              <div className="row g-3">
                <div className="col-md-5">
                  <label className="form-label">Page name</label>
                  <input
                    className="form-control"
                    placeholder="Templates"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                  />
                </div>
                <div className="col-md-5">
                  <label className="form-label">Page link</label>
                  <input
                    className="form-control"
                    placeholder="/templates"
                    value={newLink}
                    onChange={(e) => setNewLink(e.target.value)}
                  />
                </div>
                <div className="col-md-2 d-flex align-items-end">
                  <button type="submit" className="btn btn-primary w-100" disabled={saving}>
                    {saving ? "Adding..." : "Add"}
                  </button>
                </div>
              </div>
              <small className="text-muted d-block mt-2">
                Link wohi hona chahiye jo website ke code mein bana hai (jaise /templates, /pricing).
              </small>
            </form>
          )}

          <div className="table-responsive shadow rounded mt-4">
            <table className="table table-center bg-white mb-0">
              <thead>
                <tr>
                  <th className="border-bottom p-3">#</th>
                  <th className="border-bottom p-3">Title</th>
                  <th className="border-bottom p-3">URL</th>
                  <th className="border-bottom p-3 text-end">Action</th>
                </tr>
              </thead>
              <tbody>
                {loading && (
                  <tr><td className="p-3" colSpan={4}>Loading...</td></tr>
                )}
                {!loading && items.length === 0 && (
                  <tr><td className="p-3" colSpan={4}>Menu mein koi page nahi.</td></tr>
                )}
                {items.map((item, i) => (
                  <tr key={item.slug}>
                    <th className="p-3">{i + 1}</th>
                    <td className="p-3">{item.title}</td>
                    <td className="p-3">/{item.slug}</td>
                    <td className="p-3 text-end">
                      <Link href={`/website-menu/${item.slug}`} className="btn btn-sm btn-soft-primary me-2">
                        Edit
                      </Link>
                      <button type="button" className="btn btn-sm btn-soft-danger" onClick={() => removePage(item)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}