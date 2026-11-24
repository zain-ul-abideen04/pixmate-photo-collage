"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Wrapper from "../../components/wrapper";
import { pagesContent } from "../../data/pageContent"; // file ka naam jo aapke yahan hai wahi likhein
import { pricingContent } from "../../data/pricingContent";

const defaults = { ...pagesContent, pricing: pricingContent };
const API = "http://localhost:8080/backend/pages";
const NAV_API = "http://localhost:8080/backend/nav";
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
    const token = localStorage.getItem("token");
    try {
      setSaving(true);
      const res = await fetch(`${API}/${slug}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify({ content }),
      });
      const data = await res.json();
      if (!data.success) {
        setMsg({ type: "danger", text: data.message || "Could not save." });
        return;
      }

      const pageTitle = content?.title ?? content?.hero?.title;
      if (typeof pageTitle === "string") {
        const navRes = await fetch(`${NAV_API}/pages/${encodeURIComponent(slug)}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
          body: JSON.stringify({ title: pageTitle.trim() }),
        });
        const navData = await navRes.json().catch(() => ({}));
        if (!navRes.ok || !navData.success) {
          setMsg({
            type: "warning",
            text: `Page content saved, but the website navbar title could not be updated: ${navData.message || "Please try again."}`,
          });
          return;
        }
      }

      setMsg({ type: "success", text: "Saved. Refresh the website page to see the change." });
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
                <button type="button" className="btn btn-soft-danger" onClick={resetToDefault}>
                  Delete / Reset
                </button>
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
            <div className="bg-white rounded shadow p-4 mt-4">
              <Field label="" value={content} path={[]} update={update} />
            </div>
          )}
        </div>
      </div>
    </Wrapper>
  );
}