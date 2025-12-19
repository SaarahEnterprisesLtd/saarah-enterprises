"use client";

import Link from "next/link";
import { resetCookieConsent } from "@/components/CookieBanner";

export default function Footer() {
  return (
    <footer className="border-t px-6 py-4 text-sm text-gray-600 dark:text-gray-400">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 md:flex-row">
        
        {/* Left */}
        <span>
          © {new Date().getFullYear()} Saarah Enterprises. All rights reserved.
        </span>

        {/* Right */}
        <div className="flex items-center gap-4">
          <Link
            href="/privacy-policy"
            className="hover:underline underline-offset-4"
          >
            Privacy Policy
          </Link>

          <Link
            href="/terms-and-conditions"
            className="hover:underline underline-offset-4"
          >
            Terms & Conditions
          </Link>

          <button
            onClick={resetCookieConsent}
            className="hover:underline underline-offset-4"
          >
            Cookie Preferences
          </button>
        </div>

      </div>
    </footer>
  );
}
