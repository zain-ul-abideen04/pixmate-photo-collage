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
  const canDashboard = user.role === "admin" || user.role === "manager";

  return (
    <div ref={boxRef} className="relative ml-auto mr-10 mt-4">
      <button
        type="button"
        onClick={() => {
          setOpen((o) => !o);
          setMsg("");
        }}
        aria-label="Profile menu"
        className="flex h-13 w-13 items-center justify-center overflow-hidden rounded-full border-2 border-white bg-white text-xl font-bold text-pink-700"
      >
        {user.picture ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={imgSrc(user.picture)} alt="Profile" className="h-full w-full object-cover" />
        ) : (
          initial
        )}
      </button>

      {open && (
        <div className="absolute right-0 top-full z-50 mt-3 w-64 rounded-2xl border border-gray-100 bg-white p-4 text-slate-800 shadow-2xl">
          <div className="mb-3 border-b border-gray-100 pb-3">
            <p className="truncate font-semibold">{user.name || "My account"}</p>
            {user.email && <p className="truncate text-sm text-slate-500">{user.email}</p>}
            {user.role && user.role !== "user" && (
              <p className="mt-1 text-xs font-semibold uppercase text-pink-700">{user.role}</p>
            )}
          </div>

          <label className="block cursor-pointer rounded-lg px-3 py-2 text-sm hover:bg-slate-100">
            {busy ? "Uploading..." : "Update photo"}
            <input
              type="file"
              accept="image/png,image/jpeg,image/webp"
              onChange={pickPhoto}
              disabled={busy}
              className="hidden"
            />
          </label>

          {canDashboard && (
            <button
              type="button"
              onClick={goDashboard}
              className="block w-full rounded-lg px-3 py-2 text-left text-sm hover:bg-slate-100"
            >
              Dashboard
            </button>
          )}

          <button
            type="button"
            onClick={logout}
            className="block w-full rounded-lg px-3 py-2 text-left text-sm text-red-600 hover:bg-red-50"
          >
            Logout
          </button>

          {msg && <p className="mt-2 px-3 text-xs text-slate-600">{msg}</p>}
        </div>
      )}
    </div>
  );
}