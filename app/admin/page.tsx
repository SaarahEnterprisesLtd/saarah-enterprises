export default function AdminPage() {
    return (
      <main className="mx-auto max-w-6xl px-6 py-12">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <p className="mt-3 text-gray-700 dark:text-gray-300">
          (Next step: protect this route with login)
        </p>
  
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            { title: "📩 Contact Messages", desc: "View incoming enquiries." },
            { title: "📊 Analytics", desc: "See traffic and conversions." },
            { title: "🧩 CMS Content", desc: "Manage services and pages." },
          ].map((c) => (
            <div
              key={c.title}
              className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900"
            >
              <h2 className="text-lg font-semibold">{c.title}</h2>
              <p className="mt-2 text-gray-700 dark:text-gray-300">{c.desc}</p>
            </div>
          ))}
        </div>
      </main>
    );
  }
  