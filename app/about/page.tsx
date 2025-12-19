export default function AboutPage() {
    return (
      <main className="mx-auto max-w-4xl px-6 py-12">
        <h1 className="text-3xl font-bold">About Saarah Enterprises</h1>
  
        <p className="mt-4 text-gray-700 dark:text-gray-300">
          Saarah Enterprises is a software development company focused on building
          reliable, scalable solutions for SMEs and startups. We specialize in web
          applications, mobile apps, automation tools, and SaaS products.
        </p>
  
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
            <h2 className="text-xl font-semibold">Mission</h2>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              Deliver modern software that increases revenue, reduces operational
              cost, and improves customer experience.
            </p>
          </div>
  
          <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
            <h2 className="text-xl font-semibold">How we work</h2>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              Clear milestones, rapid iterations, and transparent communication
              from planning to launch and ongoing support.
            </p>
          </div>
        </div>
      </main>
    );
  }
  