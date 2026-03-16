export const metadata = {
  title: "Demos | Saarah Enterprises",
  description:
    "Explore demo projects by Saarah Enterprises, including restaurant websites, ecommerce stores, and inventory billing systems.",
  alternates: {
    canonical: "https://www.saarahenterprises.com/demos",
  },
  locale: "en_GB",
};

export default function DemosPage() {
  const demos = [
    {
      title: "Restaurant Website",
      desc: "Modern restaurant site with menu, gallery, and online reservation flow.",
      status: "Live Demo",
      url: "https://restaurant-demo-frontend.vercel.app",
    },
    {
      title: "Ecommerce Store",
      desc: "Retail ecommerce site with products, cart, checkout, and order tracking.",
      status: "Coming soon",
    },
    {
      title: "Inventory + Billing Web App",
      desc: "Inventory management with billing, invoices, and accounting dashboard.",
      status: "Coming soon",
    },
  ];

  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <h1 className="text-3xl font-bold">Demos</h1>
      <p className="mt-2 text-gray-700 dark:text-gray-300">
        A few example projects we can build for businesses. More demos will be added soon.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {demos.map((d) => (
          <div
            key={d.title}
            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900"
          >
            <h2 className="text-lg font-semibold">{d.title}</h2>
            <p className="mt-2 text-gray-600 dark:text-gray-300">{d.desc}</p>

            {d.url ? (
              <a
                href={d.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex rounded-full bg-blue-600 px-3 py-1 text-sm font-semibold text-white"
              >
                {d.status}
              </a>
            ) : (
              <p className="mt-4 inline-flex rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700 dark:bg-blue-500/20 dark:text-blue-300">
                {d.status}
              </p>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}