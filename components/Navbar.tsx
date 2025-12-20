"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";
import logo from '../public/logo.png'

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/demos", label: "Demos" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Close mobile menu on route changes (simple: close when user clicks a link)
  const close = () => setOpen(false);

  // Prevent body scroll when menu open (optional but nice)
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur supports-backdrop-filter:bg-white/70 dark:border-gray-800 dark:bg-gray-950/80">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        {/* Left: Logo */}
        <Link href="/" className="flex items-center gap-2">
        <Image src={logo} alt="Saarah Enterprises" width={36} height={36} priority />
          <span className="text-base font-bold sm:text-lg">Saarah Enterprises</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-blue-500">
              {l.label}
            </Link>
          ))}
        </div>

        {/* Right: CTA + Theme + Mobile button */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Request Quote (visible always) */}
          <Link
            href="/contact"
            className="px-3 py-2 text-sm font-semibold transition hover:underline underline-offset-4"
          >
            Request Quote
          </Link>

          <ThemeToggle />

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="inline-flex items-center justify-center rounded-lg border border-gray-300 p-2 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-900 md:hidden"
          >
            {/* Icon */}
            <span className="text-xl leading-none">{open ? "✕" : "☰"}</span>
          </button>
        </div>
      </nav>

      {/* Mobile menu panel */}
      {open && (
        <div className="md:hidden">
          <div className="border-t border-gray-200 bg-white/95 px-4 py-4 backdrop-blur dark:border-gray-800 dark:bg-gray-950/90">
            <div className="flex flex-col gap-3">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={close}
                  className="rounded-lg px-3 py-2 font-semibold hover:bg-gray-100 dark:hover:bg-gray-900"
                >
                  {l.label}
                </Link>
              ))}

              {/* Mobile CTA button */}
              <Link
                href="/contact"
                onClick={close}
                className="mt-2 rounded-lg bg-blue-500 px-4 py-3 text-center font-semibold text-white hover:bg-blue-600"
              >
                Request Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
