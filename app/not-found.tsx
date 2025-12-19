import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-xl px-6 py-24 text-center">
      <h1 className="text-3xl font-bold">Page not found</h1>
      <p className="mt-3 text-gray-700 dark:text-gray-300">
        The page you’re looking for doesn’t exist.
      </p>
      <Link
        href="/"
        className="mt-8 inline-block rounded-lg bg-orange-500 px-6 py-3 font-semibold text-white hover:bg-orange-600"
      >
        Go Home
      </Link>
    </main>
  );
}
