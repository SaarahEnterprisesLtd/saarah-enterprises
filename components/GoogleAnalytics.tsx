"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

type Consent = "accepted" | "rejected";
const STORAGE_KEY = "cookie_consent_v1";

export default function GoogleAnalytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const checkConsent = () => {
      const consent = (localStorage.getItem(STORAGE_KEY) as Consent | null) ?? null;
      setEnabled(consent === "accepted");
    };

    checkConsent();
    window.addEventListener("cookie-consent-updated", checkConsent);

    return () => window.removeEventListener("cookie-consent-updated", checkConsent);
  }, []);

  // Don't load GA if missing ID or user didn't accept cookies
  if (!gaId || !enabled) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}', { anonymize_ip: true });
        `}
      </Script>
    </>
  );
}
