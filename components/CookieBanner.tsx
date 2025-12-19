"use client";

import { useEffect, useState } from "react";

export type Consent = "accepted" | "rejected";
export const COOKIE_CONSENT_KEY = "cookie_consent_v1";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const checkConsent = () => {
      const consent = localStorage.getItem(COOKIE_CONSENT_KEY) as Consent | null;
      setVisible(!consent);
    };

    // Initial check
    checkConsent();

    // 🔥 Listen for preference reset
    window.addEventListener("cookie-consent-updated", checkConsent);

    return () => {
      window.removeEventListener("cookie-consent-updated", checkConsent);
    };
  }, []);

  const setConsent = (value: Consent) => {
    localStorage.setItem(COOKIE_CONSENT_KEY, value);
    setVisible(false);
    window.dispatchEvent(new Event("cookie-consent-updated"));
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-60 p-4">
      <div className="mx-auto max-w-7xl rounded-2xl border border-gray-200 bg-white p-4 shadow-lg dark:border-gray-800 dark:bg-gray-950">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="text-sm text-gray-700 dark:text-gray-300">
            <p className="font-semibold text-gray-900 dark:text-white">
              Cookies
            </p>
            <p className="mt-1">
              We use cookies to improve your experience and measure site traffic.
              Read our{" "}
              <a
                href="/privacy-policy"
                className="font-semibold hover:underline underline-offset-4"
              >
                Privacy Policy
              </a>
              .
            </p>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => setConsent("rejected")}
              className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-900"
            >
              Reject
            </button>
            <button
              onClick={() => setConsent("accepted")}
              className="rounded-lg bg-blue-500 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-600"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* 🔁 Called from Footer */
export function resetCookieConsent() {
  if (typeof window === "undefined") return;
  localStorage.removeItem(COOKIE_CONSENT_KEY);
  window.dispatchEvent(new Event("cookie-consent-updated"));
}
