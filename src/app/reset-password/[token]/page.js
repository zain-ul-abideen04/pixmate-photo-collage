"use client";
 
import { useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
 
const navLinks = [
  "Create",
  "Editing Tools",
  "Templates",
  "Design Library",
  "Enterprise",
  "Learning & Support",
  "Pricing",
];
 
export default function ResetPasswordPage() {
  const router = useRouter();
  const params = useParams();
  const token = params?.token;

  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
 
  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setSuccess("");
 
    if (password.length < 8) {
      setError("New password must be at least 8 characters.");
      return;
    }
    if (password !== confirm) {
      setError("Passwords do not match.");
      return;
    }
 
    try {
      setLoading(true);
      const res = await fetch("http://localhost:8080/backend/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, password }),
      });
      const data = await res.json();
      console.log("reset-password response:", res.status, data);

      if (data.success) {
        setSuccess("Password updated. Taking you to login...");
        setTimeout(() => router.push("/login"), 1500);
      } else {
        setError(data.message || "Could not update the password. Try again.");
      }
    } catch (err) {
      console.log("reset-password error:", err);
      setError("Could not reach the server. Make sure the backend is running.");
    } finally {
      setLoading(false);
    }
  }
 
  const input =
    "w-full rounded-full bg-white px-6 py-3.5 text-base text-neutral-900 placeholder:text-neutral-400 outline-none ring-2 ring-transparent transition focus:ring-[#6BC9DB]";
 
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#C8005D] text-white">
      {/* Header */}
      <header className="relative z-20 mx-auto flex max-w-375 items-center justify-between px-6 py-6 lg:px-20">
        <Link href="/" className="text-4xl font-sans font-bold tracking-tight">
          Pixmate
        </Link>
 
        <nav className="hidden items-center gap-8 text-lg xl:flex">
          {navLinks.map((item) => (
            <Link key={item} href="#" className="transition hover:text-[#6BC9DB]">
              {item}
            </Link>
          ))}
        </nav>
 
        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="hidden rounded-full bg-white px-8 py-3 text-base text-neutral-900 transition hover:bg-[#6BC9DB] sm:block focus-visible:outline-2 focus-visible:outline-white"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="rounded-full border-2 border-[#6BC9DB] px-7 py-2.5 text-base text-[#6BC9DB] transition hover:bg-[#6BC9DB] hover:text-[#C8005D] focus-visible:outline-2 focus-visible:outline-white"
          >
            Signup
          </Link>
        </div>
      </header>
 
      {/* Main */}
      <main className="relative z-10 mx-auto grid max-w-375 items-center gap-12 px-6 pb-16 pt-6 lg:grid-cols-2 lg:px-20 lg:pt-10">
        {/* Left: form */}
        <section className="max-w-xl lg:pl-22">
          <h1 className="text-6xl font-extrabold leading-[1.05] text-[#6BC9DB] md:text-7xl">
            New
            <br />
            <span className="text-[#E8A317]">password</span>
          </h1>
          <p className="mt-5 text-xl leading-relaxed text-white/95">
            Choose a new password for your Pixmate account.
          </p>
 
          <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-4">
            <div className="relative">
              <label htmlFor="password" className="sr-only">
                New password
              </label>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                autoComplete="new-password"
                placeholder="New password (8+ characters)"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`${input} pr-20`}
              />
              <button
                type="button"
                onClick={() => setShowPassword((s) => !s)}
                aria-label={showPassword ? "Hide password" : "Show password"}
                className="absolute right-5 top-1/2 -translate-y-1/2 text-sm font-medium text-[#C8005D] hover:underline focus-visible:outline-2 focus-visible:outline-[#6BC9DB]"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
 
            <div>
              <label htmlFor="confirm" className="sr-only">
                Confirm new password
              </label>
              <input
                id="confirm"
                type={showPassword ? "text" : "password"}
                autoComplete="new-password"
                placeholder="Confirm new password"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                className={input}
              />
            </div>
 
            {error && (
              <p
                role="alert"
                className="rounded-2xl bg-white/15 px-4 py-3 text-base text-white"
              >
                {error}
              </p>
            )}
 
            {success && (
              <p
                role="status"
                className="rounded-2xl bg-[#6BC9DB] px-4 py-3 text-base font-medium text-[#8A0042]"
              >
                {success}
              </p>
            )}
 
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-full bg-[#6BC9DB] py-3.5 text-lg font-semibold text-[#8A0042] transition hover:bg-[#E8A317] disabled:cursor-not-allowed disabled:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {loading ? "Updating…" : "Update password"}
            </button>
 
            <p className="pt-2 text-center text-base">
              Link expired?{" "}
              <Link href="/forgot-password" className="font-semibold text-[#E8A317] hover:underline">
                Request a new one
              </Link>
            </p>
          </form>
        </section>
 
        {/* Right: collage */}
        <section
          aria-hidden="true"
          className="relative mx-auto hidden h-160 w-full max-w-140 lg:block"
        >
          {/* rings */}
          <div className="absolute right-0 top-27.5 h-60 w-60 rounded-full border-20 border-[#5BB5D5]" />
          <div className="absolute right-2.5 top-57.5 h-55 w-55 rounded-full border-20 border-[#5BB5D5]" />
          <div className="absolute bottom-0 left-15 h-62.5 w-62.5 rounded-full border-20 border-[#5BB5D5]" />
 
          {/* dots + lines */}
          <span className="absolute -left-10 top-15 h-16 w-16 rounded-full bg-white" />
          <span className="absolute bottom-7.5 right-0 h-7 w-7 rounded-full bg-white" />
          <span className="absolute right-2.5 -top-7.5 h-27.5 w-px rotate-40 bg-[#6BC9DB]" />
 
          {/* photo cards */}
          <div
            className="absolute right-20 top-5 h-67.5 w-62.5 rotate-15 rounded-[28px] border-6 border-[#4DBFD9] bg-linear-to-br from-[#E9B7A0] to-[#5A3B2E] shadow-2xl"
            style={{ backgroundImage: "url(/pic1.png)", backgroundSize: "cover" }}
          />
          <div
            className="absolute left-20 top-52.5 h-62.5 w-60 -rotate-4 rounded-[28px] border-6 border-[#4DBFD9] bg-linear-to-br from-[#D9C3B8] to-[#2B1D1A] shadow-2xl"
            style={{ backgroundImage: "url(/pic2.png)", backgroundSize: "cover" }}
          />
          <div
            className="absolute bottom-12.5 right-10 h-62.5 w-60 rotate-20 rounded-[28px] border-6 border-[#4DBFD9] bg-linear-to-br from-[#8C8F96] to-[#14161A] shadow-2xl"
            style={{ backgroundImage: "url(/pic3.png)", backgroundSize: "cover" }}
          />
        </section>
      </main>
    </div>
  );
}