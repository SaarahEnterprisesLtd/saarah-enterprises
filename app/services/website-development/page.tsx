import Link from "next/link";
import ContactForm from "@/components/ContactForm";

const pricing = [
  {
    name: "Starter",
    price: "£499",
    note: "Best for small business websites",
    features: ["1–3 pages", "Mobile responsive", "Contact form", "Basic SEO"],
  },
  {
    name: "Business",
    price: "£1,299",
    note: "Best for growing companies",
    features: ["Up to 8 pages", "CMS ready", "Speed optimization", "Advanced SEO setup"],
  },
  {
    name: "Premium",
    price: "£2,499+",
    note: "Best for web apps & custom builds",
    features: ["Custom UI/UX", "Integrations", "Admin panel", "Deployment + support"],
  },
];

export default function WebsiteDevelopmentPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <Link
        href="/services"
        className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-900"
      >
        ← Back to Services
      </Link>

      <h1 className="mt-6 text-3xl font-bold">Website Development</h1>
      <p className="mt-3 text-gray-700 dark:text-gray-300">
        Responsive websites, landing pages, and web applications built for speed, SEO, and conversions.
      </p>

      {/* Pricing */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold">Pricing</h2>
        <p className="mt-2 text-gray-700 dark:text-gray-300">
          Transparent starting prices. Final cost depends on pages, features, and integrations.
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

      {/* Quote form */}
      <section className="mt-12 grid gap-8 md:grid-cols-2">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
          <h2 className="text-xl font-semibold">What you get</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-gray-700 dark:text-gray-300">
            <li>Modern UI + mobile responsive</li>
            <li>Fast performance + SEO setup</li>
            <li>Contact forms + integrations</li>
            <li>Deployment on Vercel</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
          <h2 className="text-xl font-semibold">Request a quote</h2>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            Fill the form and we’ll contact you.
          </p>
          <div className="mt-6">
            <ContactForm defaultService="Website Development" />
          </div>
        </div>
      </section>
    </main>
  );
}
