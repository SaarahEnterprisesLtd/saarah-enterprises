import Link from "next/link";
import ServicesGridClient from "@/components/ServicesGridClient";

const services = [
  {
    title: "Website Development",
    desc: "Modern responsive websites and web apps built for speed, SEO, and conversions.",
    href: "/services/website-development",
    icon: "🌐",
  },
  {
    title: "Android App Development",
    desc: "High-performance Android apps with smooth UI and backend integration.",
    href: "/services/android-app",
    icon: "🤖",
  },
  {
    title: "iOS App Development",
    desc: "Premium iOS apps designed for performance, security, and user experience.",
    href: "/services/ios-app",
    icon: "🍎",
  },
  {
    title: "UI/UX Design",
    desc: "Professional UI/UX design that improves usability and boosts conversions.",
    href: "/services/ui-ux-design",
    icon: "🎨",
  },
  {
    title: "Ecommerce Development",
    desc: "Online stores with product management, payments, and order workflows.",
    href: "/services/ecommerce-development",
    icon: "🛒",
  },
  {
    title: "Inventory + Billing System",
    desc: "Retail inventory management with billing, invoicing, and accounting overview.",
    href: "/services/inventory-billing",
    icon: "📦",
  },
];

export default function ServicesPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Services</h1>
          <p className="mt-3 text-gray-700 dark:text-gray-300">
            Explore our services and request a quote for your project.
          </p>
        </div>

        <div className="flex items-center">
</div>
      </div>

      {/* ✅ Client component handles active highlighting */}
      <ServicesGridClient services={services} />
    </main>
  );
}
