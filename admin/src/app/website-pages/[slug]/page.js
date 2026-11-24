"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Wrapper from "../../components/wrapper";
import { pagesContent } from "../../data/pageContent"; // file ka naam jo aapke yahan hai wahi likhein
import { pricingContent } from "../../data/pricingContent";

const defaults = { ...pagesContent, pricing: pricingContent };
const API = "http://localhost:8080/backend/pages";
const NAV_API = "http://localhost:8080/backend/nav"; // NEW: navbar ka naam yahan se badalta hai
const clone = (o) => JSON.parse(JSON.stringify(o));

// Naye list item ke liye khali copy
function blank(t) {
  if (typeof t === "string") return "";
  if (typeof t === "boolean") return false;
  if (Array.isArray(t)) return [];
  if (t && typeof t === "object")
    return Object.fromEntries(Object.entries(t).map(([k, v]) => [k, blank(v)]));
  return "";
}

function Field({ label, value, path, update }) {
  if (typeof value === "boolean") {
    return (
      <div className="form-check mb-3">
        <input
          type="checkbox"
          className="form-check-input"
          checked={value}
          onChange={(e) => update(path, e.target.checked)}
        />
        <label className="form-check-label text-capitalize">{label}</label>
      </div>
    );
  }

  if (Array.isArray(value)) {
    return (
      <div className="mb-3">
        <label className="form-label fw-semibold text-capitalize">{label}</label>
        {value.map((item, i) => (
          <div key={i} className="border rounded p-3 mb-2 bg-light">
            <div className="d-flex justify-content-between mb-2">
              <small className="text-muted">#{i + 1}</small>
              <button
                type="button"
                className="btn btn-sm btn-soft-danger"
                onClick={() => update(path, value.filter((_, idx) => idx !== i))}
              >
                Delete
              </button>
            </div>
            <Field label="" value={item} path={[...path, i]} update={update} />
          </div>
        ))}
        <button
          type="button"
          className="btn btn-sm btn-soft-primary"
          onClick={() => update(path, [...value, blank(value[0] ?? "")])}
        >
          + Add
        </button>
      </div>
    );
  }

  if (value && typeof value === "object") {
    return (
      <div className={label ? "mb-3 ps-3 border-start" : ""}>
        {label && <label className="form-label fw-semibold text-capitalize">{label}</label>}
        {Object.entries(value).map(([k, v]) => (
          <Field key={k} label={k} value={v} path={[...path, k]} update={update} />
        ))}
      </div>
    );
  }

  const text = value ?? "";
  return (
    <div className="mb-3">
      {label && <label className="form-label text-capitalize">{label}</label>}
      {String(text).length > 70 ? (
        <textarea
          className="form-control"
          rows={3}
          value={text}
          onChange={(e) => update(path, e.target.value)}
        />
      ) : (
        <input
          className="form-control"
          value={text}
          onChange={(e) => update(path, e.target.value)}
        />
      )}
    </div>
  );
}

export default function WebsitePageEditor() {
  const { slug } = useParams();
  const [content, setContent] = useState(null);
  const [msg, setMsg] = useState({ type: "", text: "" });
  const [saving, setSaving] = useState(false);
  // NEW: navbar ka naam aur dikhana/chhupana
  const [navTitle, setNavTitle] = useState("");
  const [navVisible, setNavVisible] = useState(true);
  const [navNote, setNavNote] = useState("");
  // NEW: role dashboard ke auth page ne localStorage mein rakha hai
  const [role, setRole] = useState("");
  // NEW: teen alag ijazatein
  const canOpen = ["admin", "manager", "editor"].includes(role); // page khol kar text edit kar sakte hain
  const allowed = role === "admin" || role === "manager"; // Navbar settings (naam, dikhana/chhupana)
  const isAdmin = role === "admin"; // Delete / Reset sirf admin

  useEffect(() => {
    setRole(localStorage.getItem("role") || (localStorage.getItem("isAdmin") === "1" ? "admin" : ""));
  }, []);

  // Page badalne par: pehle default dikhao, phir database ka content ho to wo load karo
  useEffect(() => {
    setMsg({ type: "", text: "" });
    if (!defaults[slug]) {
      setContent(null);
      return;
    }
    setContent(clone(defaults[slug]));

    fetch(`${API}/${slug}`)
      .then((r) => r.json())
      .then((data) => {
        if (data.content) setContent({ ...clone(defaults[slug]), ...data.content });
      })
      .catch(() =>
        setMsg({ type: "danger", text: "Could not reach the server. Showing default text." })
      );

    // NEW: is page ka navbar naam aur visible database se lao
    const pretty = (slug || "").replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
    setNavTitle(pretty);
    setNavVisible(true);
    setNavNote("");
    const navToken = localStorage.getItem("token");
    fetch(`${NAV_API}/manage`, { headers: { Authorization: `Bearer ${navToken}` } })
      .then((r) => r.json())
      .then((data) => {
        if (!data.success) throw new Error("manage failed");
        return data;
      })
      .catch(() => fetch(NAV_API).then((r) => r.json())) // manage na chale to public list
      .then((data) => {
        const item = (data.items || []).find((i) => i.slug === slug);
        if (item) {
          setNavTitle(item.title || pretty);
          setNavVisible(item.visible !== false);
        } else {
          setNavNote("Is page ka navbar item list mein nahi mila.");
        }
      })
      .catch(() => setNavNote("Navbar ki list load nahi ho saki (backend ya token check karo)."));
  }, [slug]);

  function update(path, value) {
    setContent((c) => {
      const n = clone(c);
      let t = n;
      path.slice(0, -1).forEach((k) => (t = t[k]));
      t[path[path.length - 1]] = value;
      return n;
    });
  }

  // Save: database mein PUT
  async function save() {
    setMsg({ type: "", text: "" });

    // NEW: navbar ka naam kam az kam 2 harf ka ho
    if (allowed && navTitle.trim().length < 2) {
      setMsg({ type: "danger", text: "Navbar name must be at least 2 characters." });
      return;
    }

    const token = localStorage.getItem("token");
    try {
      setSaving(true);
      const res = await fetch(`${API}/${slug}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify({ content }),
      });
      const data = await res.json();

      // NEW: page ka text save ho gaya to navbar ka naam bhi save karo (editor ke liye nahi)
      let navError = "";
      if (data.success && allowed) {
        try {
          const navRes = await fetch(`${NAV_API}/pages/${slug}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
            body: JSON.stringify({ title: navTitle.trim(), visible: navVisible }),
          });
          const navData = await navRes.json();
          if (!navData.success) navError = navData.message || "Navbar name could not be saved.";
        } catch {
          navError = "Navbar name could not be saved.";
        }
      }

      if (!data.success) {
        setMsg({ type: "danger", text: data.message || "Could not save." });
      } else if (navError) {
        setMsg({ type: "warning", text: `Page text saved, but: ${navError}` });
      } else {
        setMsg({ type: "success", text: "Saved. Refresh the website page to see the change." });
      }
    } catch {
      setMsg({ type: "danger", text: "Could not reach the server." });
    } finally {
      setSaving(false);
    }
  }

  // Delete / Reset: database se hata do, page default text par wapas
  async function resetToDefault() {
    if (!window.confirm("Reset this page to its default text?")) return;
    const token = localStorage.getItem("token");
    try {
      const res = await fetch(`${API}/${slug}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (data.success) {
        setContent(clone(defaults[slug]));
        setMsg({ type: "success", text: "Page reset to default text." });
      } else {
        setMsg({ type: "danger", text: data.message || "Could not reset." });
      }
    } catch {
      setMsg({ type: "danger", text: "Could not reach the server." });
    }
  }

  const title = (slug || "").replace(/-/g, " ");

  // NEW: sirf admin, manager aur editor is page ko khol sakte hain
  if (role && !canOpen) {
    return (
      <Wrapper>
        <div className="alert alert-danger m-4">You do not have permission to open this page.</div>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <div className="container-fluid">
        <div className="layout-specing">
          <div className="d-md-flex justify-content-between align-items-center">
            <div>
              <h5 className="mb-0 text-capitalize">{title}</h5>
              <p className="text-muted mb-0 mt-1">Website page content</p>
            </div>
            {content && (
              <div className="d-flex gap-2 mt-3 mt-md-0">
                {/* NEW: Delete / Reset sirf admin ko */}
                {isAdmin && (
                  <button type="button" className="btn btn-soft-danger" onClick={resetToDefault}>
                    Delete / Reset
                  </button>
                )}
                <button type="button" className="btn btn-primary" onClick={save} disabled={saving}>
                  {saving ? "Saving..." : "Save"}
                </button>
              </div>
            )}
          </div>

          {msg.text && <div className={`alert alert-${msg.type || "info"} mt-4`}>{msg.text}</div>}

          {!content ? (
            <div className="alert alert-warning mt-4">
              No data found for "{slug}". Check that this slug exists in your pages data file.
            </div>
          ) : (
            <>
              {/* NEW: navbar ka naam aur dikhana/chhupana (admin + manager) */}
              {allowed && (
                <div className="bg-white rounded shadow p-4 mt-4">
                  <h6 className="mb-3">Navbar settings</h6>
                  <div className="mb-3">
                    <label className="form-label">Navbar name</label>
                    <input
                      className="form-control"
                      value={navTitle}
                      maxLength={40}
                      onChange={(e) => setNavTitle(e.target.value)}
                    />
                    <small className="text-muted">
                      Website ke navbar mein ye naam dikhega. Page ka address (/{slug}) nahi badalta.
                    </small>
                    {navNote && <div className="text-warning small mt-1">{navNote}</div>}
                  </div>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="navVisible"
                      checked={navVisible}
                      onChange={(e) => setNavVisible(e.target.checked)}
                    />
                    <label className="form-check-label" htmlFor="navVisible">
                      Navbar mein dikhao
                    </label>
                  </div>
                </div>
              )}

              <div className="bg-white rounded shadow p-4 mt-4">
                <Field label="" value={content} path={[]} update={update} />
              </div>
            </>
          )}
        </div>
      </div>
    </Wrapper>
  );
}