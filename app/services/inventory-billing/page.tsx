import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Software Development Services",
  description:
    "Retail inventory management with billing, invoicing, and accounting overview.",

    alternates: {
      canonical: "https://www.saarahenterprises.com/services/inventory-billing",
    }, 
    locale: "en_GB" 
};

const pricing = [
  { name: "Starter", price: "£1,499", features: ["Stock items", "Basic billing", "Simple dashboard"] },
  { name: "Business", price: "£3,499", features: ["Invoices", "Customers", "Reports", "Role access"] },
  { name: "Premium", price: "£6,999+", features: ["Accounting overview", "Integrations", "Advanced reporting"] },
];

export default function InventoryBillingPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <Link href="/services" className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-900">
        ← Back to Services
      </Link>

      <h1 className="mt-6 text-3xl font-bold">Inventory + Billing System</h1>
      <p className="mt-3 text-gray-700 dark:text-gray-300">
        Retail inventory management with billing, invoicing, and accounting overview.
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
            <li>Inventory tracking</li>
            <li>Billing + invoices</li>
            <li>Customer management</li>
            <li>Reports & summaries</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
          <h2 className="text-xl font-semibold">Request a quote</h2>
          <div className="mt-6">
            <ContactForm defaultService="Inventory + Billing System" />
          </div>
        </div>
      </section>
    </main>
  );
}
