"use client";
import { useEffect, useState } from "react";
import Wrapper from "../components/wrapper"; // <- doctors/page.js wali import line se match karein

const BASE = "http://localhost:8080";
const API = `${BASE}/backend/users`;
const LOGIN_URL = "http://localhost:3000/login";

// Local photo: /uploads/abc.jpg  |  Google/Facebook photo: https://...
const imgSrc = (p) => (!p ? "" : p.startsWith("http") ? p : `${BASE}${p}`);

function joinedDate(id) {
  try {
    return new Date(parseInt(id.substring(0, 8), 16) * 1000).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  } catch {
    return "";
  }
}

// User ne kaise join kiya
function joinMethod(u) {
  if (u.googleId) return { label: "Google", cls: "bg-soft-danger" };
  if (u.facebookId) return { label: "Facebook", cls: "bg-soft-primary" };
  return { label: "Email", cls: "bg-soft-success" };
}

// NEW: role ka badge (backend asli role bhejta hai)
function roleBadge(u) {
  const r = u.role || "user";
  if (r === "admin") return { label: "Admin", cls: "bg-soft-danger" };
  if (r === "manager") return { label: "Manager", cls: "bg-soft-warning" };
  if (r === "editor") return { label: "Editor", cls: "bg-soft-info" };
  if (r === "support") return { label: "Support", cls: "bg-soft-primary" };
  if (r === "viewer") return { label: "Viewer", cls: "bg-soft-success" };
  return { label: "User", cls: "bg-soft-secondary" };
}

function Avatar({ user, size = 40 }) {
  const style = { width: size, height: size, borderRadius: "50%", objectFit: "cover", flexShrink: 0 };
  if (user.picture) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={imgSrc(user.picture)} alt={user.name} style={style} />;
  }
  return (
    <div
      style={{
        ...style,
        background: "#e8effe",
        color: "#2f55d4",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: 600,
      }}
    >
      {user.name?.[0]?.toUpperCase()}
    </div>
  );
}

export default function PixmateUsersPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [myRole, setMyRole] = useState(""); // NEW: abhi login kaun hai (admin / manager)
  const [roleBusy, setRoleBusy] = useState(""); // NEW: jis user ka role badal raha hai uski id

  // Edit popup
  const [editUser, setEditUser] = useState(null);
  const [editName, setEditName] = useState("");
  const [editEmail, setEditEmail] = useState("");
  const [editRole, setEditRole] = useState("user"); // NEW
  const [editFile, setEditFile] = useState(null);
  const [editPreview, setEditPreview] = useState("");
  const [editError, setEditError] = useState("");
  const [saving, setSaving] = useState(false);

  async function loadUsers() {
    const token = localStorage.getItem("token");
    if (!token) {
      window.location.replace(LOGIN_URL);
      return;
    }
    try {
      setLoading(true);
      setError("");
      const res = await fetch(API, { headers: { Authorization: `Bearer ${token}` } });
      const data = await res.json();

      if (data.success) {
        setUsers(data.users || []);
      } else if (res.status === 403 && /admin/i.test(data.message || "")) {
        setError("Only the admin can view this page.");
      } else if (res.status === 403) {
        setError(`Access denied: ${data.message}`);
      } else {
        setError(data.message || "Could not load users.");
      }
    } catch (err) {
      console.log("load users error:", err);
      setError("Could not reach the server. Make sure the backend is running.");
    } finally {
      setLoading(false);
    }
  }

  async function deleteUser(id, name) {
    if (!window.confirm(`Delete ${name || "this user"}? This cannot be undone.`)) return;
    const token = localStorage.getItem("token");
    try {
      const res = await fetch(`${API}/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (data.success) {
        setUsers((list) => list.filter((u) => u._id !== id));
      } else {
        alert(data.message || "Could not delete the user.");
      }
    } catch (err) {
      console.log("delete user error:", err);
      alert("Could not reach the server.");
    }
  }

  // NEW: table ke dropdown se seedha role badlo (sirf admin)
  async function changeRole(u, newRole) {
    if (newRole === (u.role || "user")) return;
    if (!window.confirm(`Make ${u.name || "this user"} a ${newRole}?`)) return;
    const token = localStorage.getItem("token");
    try {
      setRoleBusy(u._id);
      const formData = new FormData();
      formData.append("name", u.name || "");
      if (u.email) formData.append("email", u.email);
      formData.append("role", newRole);
      const res = await fetch(`${API}/${u._id}`, {
        method: "PUT",
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      });
      const data = await res.json();
      console.log("change role response:", res.status, data);
      if (data.success) {
        setUsers((list) => list.map((x) => (x._id === u._id ? { ...x, role: newRole } : x)));
      } else {
        alert(data.message || "Could not change the role.");
      }
    } catch (err) {
      console.log("change role error:", err);
      alert("Could not reach the server.");
    } finally {
      setRoleBusy("");
    }
  }

  function openEdit(u) {
    setEditUser(u);
    setEditName(u.name || "");
    setEditEmail(u.email || "");
    setEditRole(u.role || "user"); // NEW
    setEditFile(null);
    setEditPreview("");
    setEditError("");
  }

  function closeEdit() {
    if (editPreview) URL.revokeObjectURL(editPreview);
    setEditUser(null);
  }

  function pickFile(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!["image/jpeg", "image/png", "image/webp"].includes(file.type)) {
      setEditError("Photo must be a JPG, PNG or WEBP image.");
      return;
    }
    if (file.size > 2 * 1024 * 1024) {
      setEditError("Photo must be 2 MB or smaller.");
      return;
    }
    setEditError("");
    if (editPreview) URL.revokeObjectURL(editPreview);
    setEditFile(file);
    setEditPreview(URL.createObjectURL(file));
  }

  async function saveEdit(e) {
    e.preventDefault();
    setEditError("");
    if (editName.trim().length < 2) return setEditError("Enter a valid name.");
    if (!/^\S+@\S+\.\S+$/.test(editEmail)) return setEditError("Enter a valid email.");

    const token = localStorage.getItem("token");
    try {
      setSaving(true);
      const formData = new FormData();
      formData.append("name", editName.trim());
      formData.append("email", editEmail.trim());
      // NEW: role sirf admin bhejta hai, aur sirf tab jab badla ho
      if (myRole === "admin" && editRole !== (editUser.role || "user")) {
        formData.append("role", editRole);
      }
      if (editFile) formData.append("avatar", editFile);

      const res = await fetch(`${API}/${editUser._id}`, {
        method: "PUT",
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      });
      const data = await res.json();

      if (data.success) {
        closeEdit();
        loadUsers();
      } else {
        setEditError(data.message || "Could not update the user.");
      }
    } catch (err) {
      console.log("update user error:", err);
      setEditError("Could not reach the server.");
    } finally {
      setSaving(false);
    }
  }

  useEffect(() => {
    // NEW: pehle localStorage se, phir backend (/users/me) se pakka karo
    const saved = localStorage.getItem("role") || (localStorage.getItem("isAdmin") === "1" ? "admin" : "");
    setMyRole(saved);
    const t = localStorage.getItem("token");
    if (t) {
      fetch(`${API}/me`, { headers: { Authorization: `Bearer ${t}` } })
        .then((r) => r.json())
        .then((d) => {
          console.log("me response:", d);
          const r = d.role || d.user?.role;
          if (r) {
            setMyRole(r);
            localStorage.setItem("role", r);
          }
        })
        .catch((err) => console.log("me error:", err));
    }
    loadUsers();
  }, []);

  const q = search.trim().toLowerCase();
  const filtered = q
    ? users.filter((u) => (u.name || "").toLowerCase().includes(q) || (u.email || "").toLowerCase().includes(q))
    : users;

  return (
    <Wrapper>
      <div className="container-fluid">
        <div className="layout-specing">
          <div className="d-md-flex justify-content-between align-items-center">
            <div>
              <h5 className="mb-0">Pixmate Users</h5>
              <p className="text-muted mb-0 mt-1">
                {users.length} registered user{users.length === 1 ? "" : "s"}
                {myRole && <span> &middot; Logged in as <strong>{myRole}</strong></span>}{/* NEW */}
              </p>
            </div>

            <div className="d-flex gap-2 mt-4 mt-md-0">
              <input
                type="text"
                className="form-control"
                placeholder="Search name or email..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{ minWidth: 220 }}
              />
              <button type="button" className="btn btn-primary" onClick={loadUsers}>
                Refresh
              </button>
            </div>
          </div>

          {error && <div className="alert alert-danger mt-4">{error}</div>}

          {loading ? (
            <p className="mt-4">Loading...</p>
          ) : (
            !error && (
              <div className="row">
                <div className="col-12 mt-4">
                  <div className="table-responsive shadow rounded">
                    <table className="table table-center bg-white mb-0">
                      <thead>
                        <tr>
                          <th className="border-bottom p-3">#</th>
                          <th className="border-bottom p-3" style={{ minWidth: 220 }}>User</th>
                          <th className="border-bottom p-3">Email</th>
                          <th className="border-bottom p-3">Role</th>{/* NEW */}
                          <th className="border-bottom p-3">Joined via</th>
                          <th className="border-bottom p-3">Joined on</th>
                          <th className="border-bottom p-3 text-end">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filtered.length === 0 && (
                          <tr>
                            <td className="p-3" colSpan={7}>{/* NEW: 6 se 7 */}
                              No users found.
                            </td>
                          </tr>
                        )}
                        {filtered.map((u, i) => {
                          const via = joinMethod(u);
                          const rb = roleBadge(u); // NEW
                          // NEW: admin sab ko edit kare; manager admin ko edit nahi kar sakta
                          const canEdit = myRole === "admin" || (myRole === "manager" && u.role !== "admin");
                          return (
                            <tr key={u._id}>
                              <th className="p-3">{i + 1}</th>
                              <td className="p-3">
                                <div className="d-flex align-items-center gap-3">
                                  <Avatar user={u} />
                                  <span className="fw-semibold">{u.name}</span>
                                </div>
                              </td>
                              <td className="p-3">{u.email || "-"}</td>
                              {/* NEW: role ka badge */}
                              <td className="p-3">
                                {myRole === "admin" ? (
                                  <select
                                    className="form-select form-select-sm"
                                    style={{ minWidth: 130 }}
                                    value={u.role || "user"}
                                    disabled={roleBusy === u._id}
                                    onChange={(e) => changeRole(u, e.target.value)}
                                  >
                                    <option value="user">User</option>
                                    <option value="manager">Manager</option>
                                    <option value="admin">Admin</option>
                                    <option value="editor">Editor</option>
                                    <option value="support">Support</option>
                                    <option value="viewer">Viewer</option>
                                  </select>
                                ) : (
                                  <span className={`badge ${rb.cls} px-3 py-2`}>{rb.label}</span>
                                )}
                              </td>
                              <td className="p-3">
                                <span className={`badge ${via.cls} px-3 py-2`}>{via.label}</span>
                              </td>
                              <td className="p-3">{joinedDate(u._id)}</td>
                              <td className="text-end p-3">
                                {/* NEW: Edit sirf jis ko ijazat ho */}
                                {canEdit && (
                                  <button
                                    type="button"
                                    className="btn btn-sm btn-soft-primary me-2"
                                    onClick={() => openEdit(u)}
                                  >
                                    Edit
                                  </button>
                                )}
                                {/* NEW: Delete sirf admin ko */}
                                {myRole === "admin" && (
                                  <button
                                    type="button"
                                    className="btn btn-sm btn-soft-danger"
                                    onClick={() => deleteUser(u._id, u.name)}
                                  >
                                    Delete
                                  </button>
                                )}
                                {!canEdit && myRole !== "admin" && <span className="text-muted">-</span>}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>

      {/* Edit popup */}
      {editUser && (
        <div
          onClick={closeEdit}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.45)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 16,
            zIndex: 2000,
          }}
        >
          <form
            onClick={(e) => e.stopPropagation()}
            onSubmit={saveEdit}
            className="bg-white rounded shadow p-4"
            style={{ width: "100%", maxWidth: 440 }}
          >
            <h5 className="mb-4">Edit user</h5>

            <div className="d-flex align-items-center gap-3 mb-4">
              {editPreview ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={editPreview}
                  alt="Preview"
                  style={{ width: 64, height: 64, borderRadius: "50%", objectFit: "cover" }}
                />
              ) : (
                <Avatar user={editUser} size={64} />
              )}
              <label className="btn btn-sm btn-soft-primary mb-0">
                Change photo
                <input
                  type="file"
                  accept="image/png,image/jpeg,image/webp"
                  onChange={pickFile}
                  style={{ display: "none" }}
                />
              </label>
            </div>

            <div className="mb-3">
              <label className="form-label">Name</label>
              <input className="form-control" value={editName} onChange={(e) => setEditName(e.target.value)} />
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input className="form-control" value={editEmail} onChange={(e) => setEditEmail(e.target.value)} />
            </div>

            {/* NEW: role dropdown, sirf admin ko dikhta hai */}
            {myRole === "admin" && (
              <div className="mb-3">
                <label className="form-label">Role</label>
                <select
                  className="form-select"
                  value={editRole}
                  onChange={(e) => setEditRole(e.target.value)}
                >
                  <option value="user">User</option>
                  <option value="manager">Manager</option>
                  <option value="admin">Admin</option>
                  <option value="editor">Editor</option>
                  <option value="support">Support</option>
                  <option value="viewer">Viewer</option>
                </select>
              </div>
            )}

            {editError && <div className="alert alert-danger py-2">{editError}</div>}

            <div className="d-flex justify-content-end gap-2">
              <button type="button" className="btn btn-light" onClick={closeEdit}>
                Cancel
              </button>
              <button type="submit" className="btn btn-primary" disabled={saving}>
                {saving ? "Saving..." : "Save"}
              </button>
            </div>
          </form>
        </div>
      )}
    </Wrapper>
  );
}