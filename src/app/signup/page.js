"use client";
 
import { useState } from "react";
import Link from "next/link";
 
const navLinks = [
  "Create",
  "Editing Tools",
  "Templates",
  "Design Library",
  "Enterprise",
  "Learning & Support",
  "Pricing",
];
 
function getStrength(pw) {
  let score = 0;
  if (pw.length >= 8) score++;
  if (/[A-Z]/.test(pw) && /[a-z]/.test(pw)) score++;
  if (/\d/.test(pw)) score++;
  if (/[^A-Za-z0-9]/.test(pw)) score++;
  return score; // 0 - 4
}
 
const strengthMeta = [
  { label: "Too short", color: "#ffffff55" },
  { label: "Weak", color: "#ff7a7a" },
  { label: "Okay", color: "#E8A317" },
  { label: "Good", color: "#9BE15D" },
  { label: "Strong", color: "#6BC9DB" },
];
 
export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [agree, setAgree] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
 
  const strength = getStrength(password);
  const meta = password ? strengthMeta[strength] : null;
 
  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
 
    if (name.trim().length < 2) return setError("Enter your full name.");
    if (!/^\S+@\S+\.\S+$/.test(email))
      return setError("Enter a valid email address.");
    if (password.length < 8)
      return setError("Password must be at least 8 characters.");
    if (password !== confirm) return setError("Passwords do not match.");
    if (!agree)
      return setError("Accept the terms and privacy policy to continue.");
 
    try {
      setLoading(true);
      // TODO: apni API yahan lagayen
      // await fetch("/api/signup", { method: "POST", body: JSON.stringify({ name, email, password }) });
      await new Promise((r) => setTimeout(r, 900));
      setDone(true);
    } catch {
      setError("Could not create your account. Try again.");
    } finally {
      setLoading(false);
    }
  }
 
  const input =
    "w-full rounded-full bg-white px-6 py-3.5 text-base text-neutral-900 placeholder:text-neutral-400 outline-none ring-2 ring-transparent transition focus:ring-[#6BC9DB]";
 
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#C8005D] text-white">
      <style>{`
        @keyframes pm-rise {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes pm-float {
          0%, 100% { transform: translateY(0) rotate(var(--r)); }
          50%      { transform: translateY(-16px) rotate(var(--r)); }
        }
        @keyframes pm-spin { to { transform: rotate(360deg); } }
        @keyframes pm-pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50%      { transform: scale(1.25); opacity: .75; }
        }
        @keyframes pm-pop {
          0%   { transform: scale(.4); opacity: 0; }
          70%  { transform: scale(1.1); opacity: 1; }
          100% { transform: scale(1); }
        }
        @keyframes pm-draw { to { stroke-dashoffset: 0; } }
 
        .pm-rise  { opacity: 0; animation: pm-rise .7s cubic-bezier(.2,.8,.2,1) forwards; }
        .pm-float { animation: pm-float 6s ease-in-out infinite; }
        .pm-spin  { animation: pm-spin 28s linear infinite; }
        .pm-pulse { animation: pm-pulse 3s ease-in-out infinite; }
        .pm-pop   { animation: pm-pop .6s cubic-bezier(.2,.8,.2,1) forwards; }
        .pm-check { stroke-dasharray: 40; stroke-dashoffset: 40; animation: pm-draw .5s .4s ease forwards; }
 
        @media (prefers-reduced-motion: reduce) {
          .pm-rise, .pm-float, .pm-spin, .pm-pulse, .pm-pop, .pm-check {
            animation: none !important;
            opacity: 1 !important;
            stroke-dashoffset: 0 !important;
          }
          .pm-float { transform: rotate(var(--r)); }
        }
      `}</style>
 
      {/* Header */}
      <header className="relative z-20 mx-auto flex max-w-375 items-center justify-between px-6 py-6 lg:px-20">
        <Link href="/" className="text-3xl font-sans font-bold tracking-tight">
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
          <span className="rounded-full border-2 border-[#6BC9DB] bg-[#6BC9DB] px-7 py-2.5 text-base text-[#8A0042]">
            Signup
          </span>
        </div>
      </header>
 
      {/* Main */}
      <main className="relative z-10 mx-auto grid max-w-375 items-center gap-12 px-6 pb-16 pt-2 lg:grid-cols-2 lg:px-20">
        {/* Left */}
        <section className="max-w-xl lg:pl-22">
          {done ? (
            <div className="pm-rise flex flex-col items-start py-10">
              <div className="pm-pop flex h-24 w-24 items-center justify-center rounded-full bg-[#6BC9DB]">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    className="pm-check"
                    d="M5 12.5l4.5 4.5L19 7.5"
                    stroke="#8A0042"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h1 className="mt-6 text-5xl font-extrabold leading-tight text-[#6BC9DB]">
                You&apos;re in,{" "}
                <span className="text-[#E8A317]">{name.split(" ")[0]}</span>
              </h1>
              <p className="mt-4 text-xl text-white/95">
                Your Pixmate account is ready. Start your first collage now.
              </p>
              <Link
                href="/"
                className="mt-8 rounded-full bg-[#6BC9DB] px-10 py-3.5 text-lg font-semibold text-[#8A0042] transition hover:bg-[#E8A317] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Create your collage
              </Link>
            </div>
          ) : (
            <>
              <h1
                className="pm-rise text-6xl font-extrabold leading-[1.05] text-[#6BC9DB] md:text-7xl"
                style={{ animationDelay: "0ms" }}
              >
                Join
                <br />
                <span className="text-[#E8A317]">Pixmate</span>
              </h1>
              <p
                className="pm-rise mt-5 text-xl leading-relaxed text-white/95"
                style={{ animationDelay: "100ms" }}
              >
                Create free collages, vision boards and social posts in minutes.
              </p>
 
              {/* Social */}
              <div
                className="pm-rise mt-8 grid gap-3 sm:grid-cols-2"
                style={{ animationDelay: "200ms" }}
              >
                <button
                  type="button"
                  className="flex items-center justify-center gap-3 rounded-full bg-neutral-200 py-3.5 text-base font-medium text-neutral-800 transition hover:-translate-y-0.5 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  <svg width="20" height="20" viewBox="0 0 48 48" aria-hidden="true">
                    <path fill="#FFC107" d="M43.6 20.1H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 8 3l5.7-5.7C34 6.1 29.3 4 24 4 13 4 4 13 4 24s9 20 20 20 20-9 20-20c0-1.3-.1-2.6-.4-3.9z" />
                    <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 8 3l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" />
                    <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2c-2 1.5-4.5 2.4-7.2 2.4-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z" />
                    <path fill="#1976D2" d="M43.6 20.1H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.6-.4-3.9z" />
                  </svg>
                  Google
                </button>
 
                <button
                  type="button"
                  className="flex items-center justify-center gap-3 rounded-full bg-[#1877F2] py-3.5 text-base font-medium text-white transition hover:-translate-y-0.5 hover:bg-[#3b8cff] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff" aria-hidden="true">
                    <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07c0 6.02 4.39 11.01 10.13 11.93v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.69.24 2.69.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.88v2.26h3.33l-.53 3.49h-2.8V24C19.61 23.08 24 18.09 24 12.07z" />
                  </svg>
                  Facebook
                </button>
              </div>
 
              <div
                className="pm-rise flex items-center gap-4 pt-5 text-white/80"
                style={{ animationDelay: "260ms" }}
              >
                <span className="h-px flex-1 bg-white/30" />
                or sign up with email
                <span className="h-px flex-1 bg-white/30" />
              </div>
 
              {/* Form */}
              <form
                onSubmit={handleSubmit}
                noValidate
                className="pm-rise mt-5 space-y-4"
                style={{ animationDelay: "320ms" }}
              >
                <div>
                  <label htmlFor="name" className="sr-only">Full name</label>
                  <input
                    id="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={input}
                  />
                </div>
 
                <div>
                  <label htmlFor="email" className="sr-only">Email</label>
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={input}
                  />
                </div>
 
                <div>
                  <div className="relative">
                    <label htmlFor="password" className="sr-only">Password</label>
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      autoComplete="new-password"
                      placeholder="Password (8+ characters)"
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
 
                  {meta && (
                    <div className="mt-3 flex items-center gap-3 px-2">
                      <div className="flex flex-1 gap-1.5">
                        {[1, 2, 3, 4].map((i) => (
                          <span
                            key={i}
                            className="h-1.5 flex-1 rounded-full transition-all duration-500"
                            style={{
                              backgroundColor:
                                i <= strength ? meta.color : "rgba(255,255,255,0.25)",
                            }}
                          />
                        ))}
                      </div>
                      <span className="w-16 text-right text-sm text-white/90">
                        {meta.label}
                      </span>
                    </div>
                  )}
                </div>
 
                <div>
                  <label htmlFor="confirm" className="sr-only">Confirm password</label>
                  <input
                    id="confirm"
                    type={showPassword ? "text" : "password"}
                    autoComplete="new-password"
                    placeholder="Confirm password"
                    value={confirm}
                    onChange={(e) => setConfirm(e.target.value)}
                    className={input}
                  />
                </div>
 
                <label className="flex cursor-pointer items-start gap-3 text-base leading-snug">
                  <input
                    type="checkbox"
                    checked={agree}
                    onChange={(e) => setAgree(e.target.checked)}
                    className="mt-1 h-4 w-4 shrink-0 accent-[#E8A317]"
                  />
                  <span>
                    I agree to the{" "}
                    <Link href="/terms" className="text-[#6BC9DB] hover:underline">
                      Terms
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy" className="text-[#6BC9DB] hover:underline">
                      Privacy Policy
                    </Link>
                  </span>
                </label>
 
                {error && (
                  <p
                    role="alert"
                    className="rounded-2xl bg-white/15 px-4 py-3 text-base text-white"
                  >
                    {error}
                  </p>
                )}
 
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-full bg-[#6BC9DB] py-3.5 text-lg font-semibold text-[#8A0042] transition hover:-translate-y-0.5 hover:bg-[#E8A317] disabled:cursor-not-allowed disabled:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  {loading ? "Creating account…" : "Create account"}
                </button>
 
                <p className="pt-2 text-center text-base">
                  Already have an account?{" "}
                  <Link href="/login" className="font-semibold text-[#E8A317] hover:underline">
                    Login
                  </Link>
                </p>
              </form>
            </>
          )}
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
 
          {/* photo cards: apni images yahan lagayen (backgroundImage) */}
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
 