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
 
export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
 
  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
 
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError("Enter a valid email address.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }
 
    try {
      setLoading(true);
      // TODO: apni API / NextAuth call yahan lagayen
      // await signIn("credentials", { email, password, redirect: false });
      await new Promise((r) => setTimeout(r, 800));
    } catch {
      setError("Email or password is incorrect.");
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
          <span className="hidden rounded-full bg-white px-8 py-3 text-base text-neutral-900 sm:block">
            Login
          </span>
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
            Welcome
            <br />
            <span className="text-[#E8A317]">back</span>
          </h1>
          <p className="mt-5 text-xl leading-relaxed text-white/95">
            Log in to pick up your collages, vision boards and social posts
            where you left them.
          </p>
 
          <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-4">
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
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
 
            <div className="relative">
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                placeholder="Password"
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
 
            <div className="flex items-center justify-between text-base">
              <label className="flex cursor-pointer items-center gap-2">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                  className="h-4 w-4 accent-[#E8A317]"
                />
                Remember me
              </label>
              <Link href="/forgot-password" className="text-[#6BC9DB] hover:underline">
                Forgot password?
              </Link>
            </div>
 
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
              className="w-full rounded-full bg-[#6BC9DB] py-3.5 text-lg font-semibold text-[#8A0042] transition hover:bg-[#E8A317] disabled:cursor-not-allowed disabled:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {loading ? "Logging in…" : "Login"}
            </button>
 
            <div className="flex items-center gap-4 py-1 text-white/80">
              <span className="h-px flex-1 bg-white/30" />
              or
              <span className="h-px flex-1 bg-white/30" />
            </div>
 
            <button
              type="button"
              className="flex w-full items-center justify-center gap-3 rounded-full bg-neutral-200 py-3.5 text-base font-medium text-neutral-800 transition hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <svg width="20" height="20" viewBox="0 0 48 48" aria-hidden="true">
                <path fill="#FFC107" d="M43.6 20.1H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 8 3l5.7-5.7C34 6.1 29.3 4 24 4 13 4 4 13 4 24s9 20 20 20 20-9 20-20c0-1.3-.1-2.6-.4-3.9z" />
                <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 8 3l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" />
                <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2c-2 1.5-4.5 2.4-7.2 2.4-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z" />
                <path fill="#1976D2" d="M43.6 20.1H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.6-.4-3.9z" />
              </svg>
              Continue with Google
            </button>
 
            <p className="pt-2 text-center text-base">
              New to Pixmate?{" "}
              <Link href="/signup" className="font-semibold text-[#E8A317] hover:underline">
                Create an account
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
 