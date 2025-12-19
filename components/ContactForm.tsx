"use client";

import { useEffect, useState } from "react";

type Props = {
  defaultService?: string;
};

export default function ContactForm({ defaultService }: Props) {
  const [form, setForm] = useState({
    service: defaultService || "General Enquiry",
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | "success" | "error">(null);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (defaultService) {
      setForm((prev) => ({ ...prev, service: defaultService }));
    }
  }, [defaultService]);

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Something went wrong");

      setStatus("success");
      setForm((prev) => ({ ...prev, name: "", email: "", message: "" }));
    } catch (err: any) {
      setStatus("error");
      setErrorMsg(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={submit} className="space-y-4">
      <select
        className="w-full rounded border p-2"
        value={form.service}
        onChange={(e) => setForm({ ...form, service: e.target.value })}
      >
        <option>General Enquiry</option>
        <option>Website Development</option>
        <option>Android App Development</option>
        <option>iOS App Development</option>
        <option>Ecommerce-Development</option>
        <option>UI/UX Design</option>
        <option>Inventory + Billing System</option>
      </select>

      <input
        type="text"
        required
        placeholder="Name"
        className="w-full rounded border p-2"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <input
        type="email"
        required
        placeholder="Email"
        className="w-full rounded border p-2"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />

      <textarea
        required
        placeholder="Message"
        className="w-full rounded border p-2"
        rows={4}
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
      />

      <button
        type="submit"
        disabled={loading}
        className="rounded bg-blue-500 px-4 py-2 font-semibold text-white disabled:opacity-50"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>

      {status === "success" && (
        <p className="text-green-600">Message sent successfully ✅</p>
      )}
      {status === "error" && <p className="text-red-600">❌ {errorMsg}</p>}
    </form>
  );
}
