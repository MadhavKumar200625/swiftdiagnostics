"use client";

import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";

const initialState = {
  fullName: "",
  company: "",
  email: "",
  phone: "",
  productRequirement: "",
  message: "",
};

export default function EnquiryForm({ prefilledProduct = "" }) {
  const [formData, setFormData] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "idle", message: "" });

  useEffect(() => {
    if (prefilledProduct) {
      setFormData((current) => ({
        ...current,
        productRequirement: `I am interested in ${prefilledProduct}.`,
      }));
    }
  }, [prefilledProduct]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ type: "idle", message: "" });

    const sanitized = {
      fullName: formData.fullName.trim(),
      company: formData.company.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      productRequirement: formData.productRequirement.trim(),
      message: formData.message.trim(),
    };

    const missingRequired = [
      sanitized.fullName,
      sanitized.email,
      sanitized.phone,
      sanitized.productRequirement,
      sanitized.message,
    ].some((value) => !value);

    if (missingRequired) {
      setStatus({ type: "error", message: "Please complete all required fields before sending your enquiry." });
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(sanitized.email)) {
      setStatus({ type: "error", message: "Please enter a valid email address." });
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(sanitized),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Unable to send your enquiry at the moment.");
      }

      setStatus({
        type: "success",
        message: "Your enquiry has been sent successfully. Our team will contact you shortly.",
      });
      setFormData({ ...initialState, productRequirement: prefilledProduct ? `I am interested in ${prefilledProduct}.` : "" });
    } catch (error) {
      setStatus({
        type: "error",
        message: error.message || "There was a problem sending your enquiry. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_22px_55px_rgba(15,23,42,0.06)] sm:p-8">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label htmlFor="fullName" className="mb-2 block text-sm font-medium text-slate-700">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-sky-300 focus:bg-white focus:ring-4 focus:ring-sky-100"
            placeholder="Your full name"
            autoComplete="name"
          />
        </div>

        <div className="sm:col-span-1">
          <label htmlFor="company" className="mb-2 block text-sm font-medium text-slate-700">
            Company / Institution
          </label>
          <input
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-sky-300 focus:bg-white focus:ring-4 focus:ring-sky-100"
            placeholder="Hospital, lab, institution or company"
            autoComplete="organization"
          />
        </div>

        <div className="sm:col-span-1">
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-sky-300 focus:bg-white focus:ring-4 focus:ring-sky-100"
            placeholder="name@example.com"
            autoComplete="email"
          />
        </div>

        <div className="sm:col-span-1">
          <label htmlFor="phone" className="mb-2 block text-sm font-medium text-slate-700">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-sky-300 focus:bg-white focus:ring-4 focus:ring-sky-100"
            placeholder="+91 98765 43210"
            autoComplete="tel"
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="productRequirement" className="mb-2 block text-sm font-medium text-slate-700">
            Product / Requirement <span className="text-red-500">*</span>
          </label>
          <input
            id="productRequirement"
            name="productRequirement"
            value={formData.productRequirement}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-sky-300 focus:bg-white focus:ring-4 focus:ring-sky-100"
            placeholder="I am interested in Centrifuge Machines."
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-700">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-sky-300 focus:bg-white focus:ring-4 focus:ring-sky-100"
            placeholder="Tell us about your requirement, quantity, or institutional procurement needs."
          />
        </div>
      </div>

      {status.message ? (
        <div
          className={`mt-5 rounded-xl border px-4 py-3 text-sm ${
            status.type === "error"
              ? "border-red-200 bg-red-50 text-red-700"
              : "border-emerald-200 bg-emerald-50 text-emerald-700"
          }`}
          role="alert"
        >
          {status.message}
        </div>
      ) : null}

      <button
        type="submit"
        disabled={loading}
        className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-sky-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-700/20 transition hover:bg-sky-800 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {loading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending Enquiry...
          </>
        ) : (
          "Send Enquiry"
        )}
      </button>
    </form>
  );
}
