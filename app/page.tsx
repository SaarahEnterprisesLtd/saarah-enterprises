import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import HeroHeading from "@/components/HeroHeading";

export default function HomePage() {
  return (
    <main>
      {/* Hero (no background image) */}
      <section className="relative flex min-h-[70vh] items-center justify-center px-4 py-16 sm:px-6 sm:py-20 bg-white dark:bg-gray-950">
        <AnimatedSection>
          <div className="mx-auto w-full max-w-4xl text-center">
            <HeroHeading />

            <p className="mx-auto mt-6 max-w-2xl text-base text-gray-700 sm:text-lg md:text-xl dark:text-gray-300">
              We build websites, Mobile Apps for Android and iOS, scalable software, SaaS platforms,
              and automation solutions for modern businesses.
            </p>

            <div className="mt-10 flex w-full flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="w-full rounded-lg px-6 py-3 text-center font-semibold bg-black text-white transition hover:bg-gray-500 sm:w-auto"
              >
                Get a Free Quote
              </Link>

              <Link
                href="/services"
                className="w-full rounded-lg border border-gray-900 px-6 py-3 text-center font-semibold text-gray-900 transition hover:bg-gray-100 dark:border-white dark:text-white dark:hover:bg-white/10 sm:w-auto"
              >
                View Services
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Core Services */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
        <h2 className="text-2xl font-bold">Our Core Services</h2>
        <p className="mt-2 max-w-3xl text-gray-700 dark:text-gray-300">
          We build high-quality apps with modern UI, fast performance, and scalable architecture.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          <ServiceCard
            href="/services/website-development"
            icon="🌐"
            title="Website Development"
            desc="Modern responsive websites and web applications designed to convert visitors into customers."
          />
          <ServiceCard
            href="/services/android-app"
            icon="🤖"
            title="Android Mobile App"
            desc="High-performance Android apps with clean UI, smooth experience, and backend integration."
          />
          <ServiceCard
            href="/services/ios-app"
            icon="🍎"
            title="iOS Mobile App"
            desc="Professional iOS apps built for speed, security, and a premium user experience."
          />
          <ServiceCard
            href="/services/ui-ux-design"
            icon="🎨"
            title="UI/UX Design"
            desc="Professional UI/UX design that improves usability and boosts conversions."
          />
          <ServiceCard
            href="/services/ecommerce-development"
            icon="🛒"
            title="Ecommerce Development"
            desc="Online stores with product management, payments, and order workflows."
          />
          <ServiceCard
            href="/services/inventory-billing"
            icon="📦"
            title="Inventory + Billing System"
            desc="Retail inventory management with billing, invoicing, and accounting overview."
          />
        </div>
      </section>

      {/* Quick Features */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
        <h2 className="text-2xl font-bold">What we do</h2>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {[
            {
              title: "Custom Software",
              desc: "Web apps and internal tools tailored to your business processes.",
            },
            {
              title: "Automation & Integrations",
              desc: "APIs, workflows, and system integrations to save time and reduce errors.",
            },
            {
              title: "SaaS Products",
              desc: "Subscription platforms built for scale, performance, and growth.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900"
            >
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

/** Small reusable card component */
function ServiceCard({
  href,
  icon,
  title,
  desc,
}: {
  href: string;
  icon: string;
  title: string;
  desc: string;
}) {
  return (
    <Link
      href={href}
      className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
    >
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-xl dark:bg-blue-500/20">
        {icon}
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-gray-600 dark:text-gray-300">{desc}</p>
      <p className="mt-4 font-semibold text-blue-600 dark:text-blue-400">
        Learn more →
      </p>
    </Link>
  );
}
