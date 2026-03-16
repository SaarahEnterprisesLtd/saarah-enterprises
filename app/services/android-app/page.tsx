import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Software Development Services",
  description:
    "RAndroid apps with smooth UI, strong performance, and secure backend integration.",
    alternates: {
      canonical: "https://www.saarahenterprises.com/services/android-app",
    },
    locale: "en_GB"  
};

const pricing = [
  {
    name: "Starter",
    price: "£999",
    note: "Best for MVP / simple apps",
    features: ["1 platform (Android)", "Basic screens", "API integration", "Play Store ready build"],
  },
  {
    name: "Business",
    price: "£2,499",
    note: "Best for full-feature apps",
    features: ["Auth + user profiles", "Push notifications", "Admin features", "Performance tuning"],
  },
  {
    name: "Premium",
    price: "£4,999+",
    note: "Best for complex apps",
    features: ["Advanced workflows", "Payments (optional)", "Analytics", "Support + maintenance"],
  },
];

export default function AndroidAppPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <Link
        href="/services"
        className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-900"
      >
        ← Back to Services
      </Link>

      <h1 className="mt-6 text-3xl font-bold">Android App Development</h1>
      <p className="mt-3 text-gray-700 dark:text-gray-300">
        Android apps with smooth UI, strong performance, and secure backend integration.
      </p>

      <section className="mt-10">
        <h2 className="text-2xl font-bold">Pricing</h2>
        <p className="mt-2 text-gray-700 dark:text-gray-300">
          Starting prices for Android development. Final pricing depends on features and integrations.
        </p>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {pricing.map((p) => (
            <div
              key={p.name}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900"
            >
              <div className="flex items-baseline justify-between">
                <h3 className="text-lg font-semibold">{p.name}</h3>
                <p className="text-xl font-bold text-blue-500">{p.price}</p>
              </div>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{p.note}</p>

              <ul className="mt-4 space-y-2 text-gray-700 dark:text-gray-300">
                {p.features.map((f) => (
                  <li key={f}>✅ {f}</li>
                ))}
              </ul>

              <Link
                href="/contact"
                className="mt-6 inline-block w-full rounded-lg bg-blue-500 px-4 py-2 text-center font-semibold text-white hover:bg-blue-600"
              >
                Get Started
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 grid gap-8 md:grid-cols-2">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
          <h2 className="text-xl font-semibold">What you get</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-gray-700 dark:text-gray-300">
            <li>Modern Android UI</li>
            <li>API integration</li>
            <li>Push notifications (optional)</li>
            <li>Play Store ready build</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
          <h2 className="text-xl font-semibold">Request a quote</h2>
          <div className="mt-6">
            <ContactForm defaultService="Android App Development" />
          </div>
        </div>
      </section>
    </main>
  );
}
