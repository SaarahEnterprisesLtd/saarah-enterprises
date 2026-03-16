import type { ReactNode } from "react";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import type { Metadata } from "next";

/* ✅ SEO + Favicon configuration */
export const metadata: Metadata = {
  metadataBase: new URL("https://www.saarahenterprises.com"),

  title: {
    default: "Saarah Enterprises | Web & Mobile App Development Company",
    template: "%s | Saarah Enterprises",
  },

  description:
    "Saarah Enterprises is a software development company providing website development, Android & iOS mobile apps, SaaS platforms, ecommerce solutions, and custom business software.",

  keywords: [
    "Saarah Enterprises",
    "web development company",
    "mobile app development",
    "android app development",
    "ios app development",
    "custom software development",
    "saas development",
    "ecommerce development",
  ],

  authors: [{ name: "Saarah Enterprises" }],
  creator: "Saarah Enterprises",
  publisher: "Saarah Enterprises",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://www.saarahenterprises.com",
    siteName: "Saarah Enterprises",
    title: "Saarah Enterprises | Web & Mobile App Development Company",
    description:
      "We build modern websites, Android & iOS mobile apps, SaaS platforms, ecommerce systems, and scalable business software.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Saarah Enterprises – Software Development Company",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Saarah Enterprises | Web & Mobile App Development",
    description:
      "Professional web development, mobile apps, SaaS, ecommerce, and custom software solutions.",
    images: ["/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <CookieBanner />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
