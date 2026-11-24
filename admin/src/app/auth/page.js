"use client";
import { useEffect, useState } from "react";

const LOGIN_URL = "http://localhost:3000/login";
const SITE_URL = "http://localhost:3000";
const API = "http://localhost:8080/backend";

// NEW: ye roles dashboard mein aa sakte hain (user nahi)
const DASHBOARD_ROLES = ["admin", "manager", "editor", "support", "viewer"];

// NEW: login ke baad har role pehle kis page par jaye (jo uske sidebar mein hai)
const HOME_BY_ROLE = {
  admin: "/",
  manager: "/pixmate-users",
  editor: "/website-pages/pricing",
  support: "/pixmate-users",
  viewer: "/pixmate-users",
};

export default function AuthPage() {
  const [message, setMessage] = useState("Signing you in...");

  useEffect(() => {
    async function run() {
      const params = new URLSearchParams(window.location.search);
      const token = params.get("token");

      // Token nahi mila to login par wapas
      if (!token) {
        window.location.replace(LOGIN_URL);
        return;
      }

      try {
        // Backend se pooch lo ke ye user kaun hai aur uska role kya hai
        const res = await fetch(`${API}/users/me`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.json().catch(() => ({}));
        const role = data && data.user ? data.user.role : null;

        // NEW: sirf DASHBOARD_ROLES wale dashboard mein aa sakte hain
        if (!res.ok || !data.success || !DASHBOARD_ROLES.includes(role)) {
          localStorage.removeItem("token");
          localStorage.removeItem("loggedInUser");
          localStorage.removeItem("role");
          localStorage.removeItem("isAdmin");
          setMessage("Aap ko dashboard ki ijazat nahi hai. Website par bheja ja raha hai...");
          setTimeout(() => window.location.replace(SITE_URL), 1500);
          return;
        }

        localStorage.setItem("token", token);
        localStorage.setItem("loggedInUser", data.user.name || params.get("name") || "");
        localStorage.setItem("role", role);
        // Purani files (sidebar) ke liye: abhi sirf admin ko "1"
        localStorage.setItem("isAdmin", role === "admin" ? "1" : "0");

        // NEW: role ke hisaab se pehla page (admin ko dashboard home)
        window.location.replace(HOME_BY_ROLE[role] || "/");
      } catch (err) {
        console.log("auth error:", err);
        setMessage("Server se connect nahi hua. Backend (port 8080) chal raha hai?");
      }
    }

    run();
  }, []);

  return <p style={{ padding: 24 }}>{message}</p>;
}