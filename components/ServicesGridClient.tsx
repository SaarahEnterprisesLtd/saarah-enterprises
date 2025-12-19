"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Service = {
  title: string;
  desc: string;
  href: string;
  icon: string;
};

export default function ServicesGridClient({ services }: { services: Service[] }) {
  const pathname = usePathname();

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  return (
    <div className="mt-10 grid gap-6 md:grid-cols-3">
      {services.map((s) => {
        const active = isActive(s.href);

        return (
          <Link
            key={s.href}
            href={s.href}
            className={[
              "group rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:bg-gray-900",
              active
                ? "border-blue-500 ring-2 ring-blue-500/30 dark:border-blue-400"
                : "border-gray-200 hover:border-blue-400 dark:border-gray-800",
            ].join(" ")}
          >
            <div
              className={[
                "mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl text-xl transition",
                active
                  ? "bg-blue-200 dark:bg-blue-500/30"
                  : "bg-blue-100 group-hover:bg-blue-200 dark:bg-blue-500/20 dark:group-hover:bg-blue-500/30",
              ].join(" ")}
            >
              {s.icon}
            </div>

            <h2 className="text-lg font-semibold">{s.title}</h2>
            <p className="mt-2 text-gray-600 dark:text-gray-300">{s.desc}</p>

            <p className={["mt-4 font-semibold", active ? "text-blue-600" : "text-blue-500"].join(" ")}>
              {active ? "Currently viewing →" : "View details →"}
            </p>
          </Link>
        );
      })}
    </div>
  );
}
