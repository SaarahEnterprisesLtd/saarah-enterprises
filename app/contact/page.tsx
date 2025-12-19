import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-xl px-6 py-12">
      <h1 className="text-3xl font-bold">Contact</h1>
      <p className="mt-3 text-gray-700 dark:text-gray-300">
        Tell us about your project and we’ll get back to you.
      </p>

      <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
        <ContactForm />
      </div>

      <p className="mt-6 text-sm text-gray-600 dark:text-gray-400">
        Or email: <span className="font-semibold">info@saarahenterprises.com</span>
      </p>
    </main>
  );
}

