import Link from "next/link";
import ContactForm from "@/components/ContactForm";

const pricing = [
  { name: "Starter", price: "£999", features: ["Product listing", "Cart UI", "Basic checkout"] },
  { name: "Business", price: "£2,499", features: ["Payments", "Admin panel", "Order management"] },
  { name: "Premium", price: "£4,999+", features: ["Custom features", "Integrations", "Performance + SEO"] },
];

export default function EcommerceDevelopmentPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <Link href="/services" className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-900">
        ← Back to Services
      </Link>

      <h1 className="mt-6 text-3xl font-bold">Ecommerce Development</h1>
      <p className="mt-3 text-gray-700 dark:text-gray-300">
        Online stores with product management, payments, and order workflows.
      </p>

      <section className="mt-10">
        <h2 className="text-2xl font-bold">Pricing</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {pricing.map((p) => (
            <div key={p.name} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
              <div className="flex items-baseline justify-between">
                <h3 className="text-lg font-semibold">{p.name}</h3>
                <p className="text-xl font-bold text-blue-500">{p.price}</p>
              </div>
              <ul className="mt-4 space-y-2 text-gray-700 dark:text-gray-300">
                {p.features.map((f) => (
                  <li key={f}>✅ {f}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 grid gap-8 md:grid-cols-2">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
          <h2 className="text-xl font-semibold">Includes</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-gray-700 dark:text-gray-300">
            <li>Product catalog + search</li>
            <li>Cart + checkout</li>
            <li>Payments integration</li>
            <li>Admin order management</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
          <h2 className="text-xl font-semibold">Request a quote</h2>
          <div className="mt-6">
            <ContactForm defaultService="Ecommerce-Development" />
          </div>
        </div>
      </section>
    </main>
  );
}
