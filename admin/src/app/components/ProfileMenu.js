"use client";
// NEW FILE: Navbar ke top right ka profile icon + menu (Update photo, Dashboard, Logout)
// Login nahi hai to children (Login / Signup buttons) dikhata hai.
import { useEffect, useRef, useState, useSyncExternalStore } from "react";

const BASE = "http://localhost:8080";
const API = `${BASE}/backend/users`;
const DASHBOARD_URL = "http://localhost:3001/auth";

// Local photo: /uploads/abc.jpg  |  Google/Facebook photo: https://...
const imgSrc = (p) => (!p ? "" : p.startsWith("http") ? p : `${BASE}${p}`);

// localStorage ko React ke andar safely padhne ke liye (server par khali, browser mein asli)
const noopSubscribe = () => () => {};

function clearSession() {
  ["token", "loggedInUser", "role", "isAdmin"].forEach((k) => localStorage.removeItem(k));
}

export default function ProfileMenu({ children }) {
  const mounted = useSyncExternalStore(noopSubscribe, () => true, () => false);
  const hasToken = useSyncExternalStore(noopSubscribe, () => !!localStorage.getItem("token"), () => false);
  const storedName = useSyncExternalStore(noopSubscribe, () => localStorage.getItem("loggedInUser") || "", () => "");
  const storedRole = useSyncExternalStore(noopSubscribe, () => localStorage.getItem("role") || "", () => "");

  const [fetched, setFetched] = useState(null); // backend (/users/me) se aayi info
  const [invalid, setInvalid] = useState(false); // token kharab nikla
  const [open, setOpen] = useState(false);
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState("");
  const boxRef = useRef(null);
  const [pos, setPos] = useState({ top: 64, right: 8, width: 256, maxHeight: 400 });

  // Token ho to backend se user ki info lao
  useEffect(() => {
    if (!hasToken) return;
    const token = localStorage.getItem("token");
    fetch(`${API}/me`, { headers: { Authorization: `Bearer ${token}` } })
      .then((r) => r.json().then((d) => ({ status: r.status, d })))
      .then(({ status, d }) => {
        if (d.success && d.user) {
          setFetched(d.user);
          localStorage.setItem("role", d.user.role || "user");
        } else if (status === 401 || status === 403) {
          // Token kharab ya expire: logout jaisa
          clearSession();
          setInvalid(true);
        }
      })
      .catch((err) => console.log("profile menu error:", err));
  }, [hasToken]);

  // Menu ke bahar click karne par band
  useEffect(() => {
    function onDown(e) {
      if (boxRef.current && !boxRef.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, []);

  // Menu ko button ke neeche rakho, lekin screen ke andar hi rakho
  useEffect(() => {
    if (!open) return;
    function place() {
      if (!boxRef.current) return;
      const r = boxRef.current.getBoundingClientRect();
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const width = Math.min(256, vw - 16);
      const right = Math.max(8, Math.min(vw - r.right, vw - width - 8));
      const top = r.bottom + 8;
      setPos({ top, right, width, maxHeight: Math.max(160, vh - top - 8) });
    }
    place();
    window.addEventListener("resize", place);
    window.addEventListener("scroll", place, true);
    return () => {
      window.removeEventListener("resize", place);
      window.removeEventListener("scroll", place, true);
    };
  }, [open]);

  function logout() {
    clearSession();
    window.location.href = "/";
  }

  const user =
    hasToken && !invalid
      ? { name: storedName, email: "", picture: "", role: storedRole || "user", ...(fetched || {}) }
      : null;

  function goDashboard() {
    const token = localStorage.getItem("token") || "";
    window.location.href = `${DASHBOARD_URL}?token=${encodeURIComponent(token)}&name=${encodeURIComponent(user?.name || "")}`;
  }

  async function pickPhoto(e) {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;
    setMsg("");
    if (!["image/jpeg", "image/png", "image/webp"].includes(file.type)) {
      setMsg("Photo must be a JPG, PNG or WEBP image.");
      return;
    }
    if (file.size > 2 * 1024 * 1024) {
      setMsg("Photo must be 2 MB or smaller.");
      return;
    }
    const token = localStorage.getItem("token");
    try {
      setBusy(true);
      const formData = new FormData();
      formData.append("avatar", file);
      const res = await fetch(`${API}/me/photo`, {
        method: "PUT",
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      });
      const data = await res.json();
      console.log("photo response:", res.status, data);
      if (data.success && data.user) {
        setFetched((u) => ({ ...(u || {}), ...data.user }));
        setMsg("Photo updated.");
      } else {
        setMsg(data.message || "Could not update the photo.");
      }
    } catch (err) {
      console.log("photo error:", err);
      setMsg("Could not reach the server.");
    } finally {
      setBusy(false);
    }
  }

  // Server render / pehli baar: kuch nahi (hydration ka masla na ho)
  if (!mounted) return null;

  // Login nahi: Login / Signup buttons
  if (!user) return <>{children}</>;

  const initial = (user.name || user.email || "?").trim()[0]?.toUpperCase();
  const canDashboard = ["admin", "manager", "editor", "support", "viewer"].includes(user.role); // NEW

  const roleLabel = user.role && user.role !== "user" ? user.role : "";

  return (
    <div ref={boxRef} className="pm-root" style={{ width: 48, height: 48 }}>
      <style>{CSS}</style>

      <button
        type="button"
        onClick={() => {
          setOpen((o) => !o);
          setMsg("");
        }}
        aria-label="Profile menu"
        aria-expanded={open}
        className={`pm-btn${open ? " pm-btn-open" : ""}`}
      >
        {user.picture ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={imgSrc(user.picture)} alt="Profile" className="pm-btn-img" />
        ) : (
          initial
        )}
      </button>

      {open && (
        <div
          className="pm-menu"
          style={{ top: pos.top, right: pos.right, width: pos.width, maxHeight: pos.maxHeight }}
        >
          <div className="pm-head">
            <div className="pm-avatar">
              {user.picture ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={imgSrc(user.picture)} alt="Profile" />
              ) : (
                initial
              )}
            </div>
            <div className="pm-info">
              <p className="pm-name">{user.name || "My account"}</p>
              {user.email && <p className="pm-email">{user.email}</p>}
              {roleLabel && <span className="pm-role">{roleLabel}</span>}
            </div>
          </div>

          <div className="pm-list">
            <label className="pm-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                <circle cx="12" cy="13" r="4" />
              </svg>
              <span>{busy ? "Uploading..." : "Update photo"}</span>
              <input
                type="file"
                accept="image/png,image/jpeg,image/webp"
                onChange={pickPhoto}
                disabled={busy}
                style={{ display: "none" }}
              />
            </label>

            {canDashboard && (
              <button type="button" onClick={goDashboard} className="pm-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3" y="3" width="7" height="9" rx="1.5" />
                  <rect x="14" y="3" width="7" height="5" rx="1.5" />
                  <rect x="14" y="12" width="7" height="9" rx="1.5" />
                  <rect x="3" y="16" width="7" height="5" rx="1.5" />
                </svg>
                <span>Dashboard</span>
              </button>
            )}
          </div>

          <div className="pm-list pm-list-last">
            <button type="button" onClick={logout} className="pm-item pm-logout">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                <polyline points="16 17 21 12 16 7" />
                <line x1="21" y1="12" x2="9" y2="12" />
              </svg>
              <span>Logout</span>
            </button>
          </div>

          {msg && <p className="pm-msg">{msg}</p>}
        </div>
      )}
    </div>
  );
}

// Plain CSS: Tailwind par depend nahi karta, isliye hamesha apply hota hai.
// Rang badalna ho to sirf --pm-accent aur --pm-accent-soft badlein.
const CSS = `
.pm-root{
  --pm-accent:#be185d;
  --pm-accent-soft:#fdf2f8;
  position:relative;
  margin-left:auto;
  margin-right:40px;
  margin-top:16px;
  font-family:inherit;
}
.pm-btn{
  width:48px;height:48px;min-width:48px;max-width:48px;min-height:48px;max-height:48px;
  padding:0;border:0;border-radius:50%;overflow:hidden;cursor:pointer;
  display:flex;align-items:center;justify-content:center;flex-shrink:0;
  background:#fff;color:var(--pm-accent);font-size:18px;font-weight:700;
  box-shadow:0 0 0 2px #fff,0 4px 12px rgba(15,23,42,.18);
  transition:box-shadow .2s ease,transform .2s ease;
}
.pm-btn:hover{transform:scale(1.05)}
.pm-btn-open{box-shadow:0 0 0 3px rgba(190,24,93,.35),0 6px 16px rgba(15,23,42,.18)}
.pm-btn-img{width:100%;height:100%;object-fit:cover;display:block}

.pm-menu{
  position:fixed;z-index:9999;overflow-y:auto;box-sizing:border-box;
  background:#fff;color:#1e293b;border:1px solid #f1f5f9;border-radius:16px;
  box-shadow:0 20px 40px -12px rgba(15,23,42,.25),0 4px 12px rgba(15,23,42,.08);
  font-size:14px;line-height:1.4;text-align:left;
  animation:pm-pop .15s ease-out;
}
@keyframes pm-pop{from{opacity:0;transform:translateY(-6px)}to{opacity:1;transform:translateY(0)}}

.pm-head{display:flex;align-items:center;gap:12px;padding:16px;border-bottom:1px solid #f1f5f9}
.pm-avatar{
  width:46px;height:46px;min-width:46px;border-radius:50%;overflow:hidden;
  display:flex;align-items:center;justify-content:center;
  background:var(--pm-accent-soft);color:var(--pm-accent);font-size:18px;font-weight:700;
  box-shadow:0 0 0 2px #fce7f3;
}
.pm-avatar img{width:100%;height:100%;object-fit:cover;display:block}
.pm-info{min-width:0;flex:1}
.pm-name,.pm-email{margin:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.pm-name{font-size:15px;font-weight:600;color:#0f172a}
.pm-email{font-size:12px;color:#64748b;margin-top:2px}
.pm-role{
  display:inline-block;margin-top:6px;padding:2px 8px;border-radius:999px;
  background:var(--pm-accent-soft);color:var(--pm-accent);
  font-size:10px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;
}

.pm-list{padding:8px}
.pm-list-last{border-top:1px solid #f1f5f9}
.pm-item{
  display:flex;align-items:center;gap:12px;width:100%;box-sizing:border-box;
  padding:10px 12px;margin:0;border:0;border-radius:12px;background:transparent;
  font:inherit;font-size:14px;font-weight:500;color:#334155;text-align:left;cursor:pointer;
  transition:background .15s ease,color .15s ease;
}
.pm-item:hover{background:var(--pm-accent-soft);color:var(--pm-accent)}
.pm-logout{color:#dc2626}
.pm-logout:hover{background:#fef2f2;color:#dc2626}
.pm-msg{margin:0;padding:8px 16px;border-top:1px solid #f1f5f9;background:#f8fafc;font-size:12px;color:#475569}
`;