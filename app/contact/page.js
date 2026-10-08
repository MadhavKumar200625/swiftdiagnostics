import Image from "next/image";
import { Clock3, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import EnquiryForm from "@/components/EnquiryForm";

export const metadata = {
  title: "Contact & Institutional Procurement",
  description: "Contact Swift Diagnostics for product enquiries, laboratory supply requirements, and institutional procurement support across India.",
  alternates: { canonical: "/contact" },
  openGraph: { url: "/contact" },
};

export default function ContactPage({ searchParams }) {
  const productName = typeof searchParams?.product === "string" ? searchParams.product : "";

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">Swift Diagnostics</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">Let&apos;s Work Together</h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
          Contact Swift Diagnostics for product enquiries, institutional procurement, bulk orders and laboratory supply requirements.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <aside className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_20px_50px_rgba(15,23,42,0.04)] sm:p-8">
          <div className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-slate-50">
            <Image
              src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
              alt="Clinical laboratory environment showing diagnostics equipment and testing workflow"
              width={1000}
              height={760}
              className="h-52 w-full object-cover"
            />
          </div>

          <h2 className="mt-6 text-2xl font-semibold text-slate-900">Contact Information</h2>

          <div className="mt-8 space-y-5">
            <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 text-sky-700">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm text-slate-500">Phone</p>
                <a href="tel:+917292020389" className="mt-1 block text-base font-medium text-slate-800 hover:text-sky-700">
                  +91 7292020389
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 text-sky-700">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm text-slate-500">Email</p>
                <a href="mailto:info@swiftdiagnostics.co.in" className="mt-1 block text-base font-medium text-slate-800 hover:text-sky-700">
                  info@swiftdiagnostics.co.in
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 text-sky-700">
                <MessageCircle className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm text-slate-500">WhatsApp</p>
                <a
                  href="https://wa.me/917292020389?text=Hello%20Swift%20Diagnostics%2C%20I%20would%20like%20to%20enquire%20about%20your%20laboratory%20products."
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1 block text-base font-medium text-slate-800 hover:text-sky-700"
                >
                  +91 7292020389
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 text-sky-700">
                <Clock3 className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm text-slate-500">Hours</p>
                <p className="mt-1 text-base font-medium text-slate-800">Mon–Sat</p>
                <p className="text-sm text-slate-600">10:00 AM – 7:00 PM</p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 text-sky-700">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm text-slate-500">Supply Network</p>
                <p className="mt-1 text-base font-medium text-slate-800">Pan-India Supply Network</p>
              </div>
            </div>
          </div>
        </aside>

        <EnquiryForm prefilledProduct={productName} />
      </div>
    </div>
  );
}
