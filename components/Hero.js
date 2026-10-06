import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Globe2, ShieldCheck } from "lucide-react";

const trustBadges = [
  "MII — MADE IN INDIA",
  "GOVT. LICENSED",
  "PRODUCT APPROVED",
  "PAN-INDIA SUPPLY",
  "HOSPITAL & RESEARCH GRADE",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top,#ecf7ff_0%,#f6fafd_42%,#f3f6fb_100%)] pt-20 pb-16 sm:pt-24">
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-sky-100/70 to-transparent" aria-hidden="true" />
      <div className="absolute left-1/2 top-10 h-60 w-60 -translate-x-1/2 rounded-full bg-sky-200/30 blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1.04fr_0.96fr] lg:px-8">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/80 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-sky-800 shadow-sm backdrop-blur-sm">
            <ShieldCheck className="h-3.5 w-3.5" />
            Trusted by institutions nationwide
          </div>

          <h1 className="mt-6 max-w-xl text-4xl font-semibold tracking-[-0.05em] text-slate-900 sm:text-5xl lg:text-[4rem]">
            Precision for
            <span className="block text-sky-700">every clinical workflow.</span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
            Hospital-grade and research-ready diagnostics, laboratory accessories, reagents and equipment engineered for accuracy, safety and dependable performance.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/products"
              className="inline-flex items-center justify-center rounded-full bg-sky-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-700/20 transition duration-200 hover:-translate-y-0.5 hover:bg-sky-800"
            >
              Explore Products
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/90 px-6 py-3 text-sm font-semibold text-slate-800 shadow-sm transition duration-200 hover:border-sky-200 hover:text-sky-700"
            >
              Send Enquiry
            </Link>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {trustBadges.map((badge) => (
              <div
                key={badge}
                className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white/80 px-3 py-3 text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-700 shadow-sm"
              >
                <ShieldCheck className="h-4 w-4 text-sky-700" />
                {badge}
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-3 shadow-[0_18px_40px_rgba(15,23,42,0.08)]">
            <div className="overflow-hidden rounded-[1.5rem] bg-slate-100">
              <Image
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80"
                alt="Premium diagnostic laboratory equipment and research workbench"
                width={900}
                height={700}
                priority
                className="h-[320px] w-full object-cover sm:h-[360px] lg:h-[430px]"
              />
            </div>

            <div className="absolute -bottom-4 left-6 right-6 rounded-[1.5rem] border border-slate-200 bg-white/90 p-4 shadow-[0_18px_35px_rgba(15,23,42,0.08)] backdrop-blur-sm">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.18em] text-sky-700">Diagnostics partner</p>
                  <p className="mt-1 text-lg font-semibold text-slate-900">Reliable supply network</p>
                </div>
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-sky-50 text-sky-700">
                  <BadgeCheck className="h-5 w-5" />
                </div>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-3 text-center">
                <div className="rounded-xl bg-slate-50 px-3 py-2">
                  <div className="text-base font-semibold text-slate-900">1200+</div>
                  <div className="text-[10px] uppercase tracking-[0.12em] text-slate-500">Orders</div>
                </div>
                <div className="rounded-xl bg-slate-50 px-3 py-2">
                  <div className="text-base font-semibold text-slate-900">95%</div>
                  <div className="text-[10px] uppercase tracking-[0.12em] text-slate-500">Repeat</div>
                </div>
                <div className="rounded-xl bg-slate-50 px-3 py-2">
                  <div className="text-base font-semibold text-slate-900">24/7</div>
                  <div className="text-[10px] uppercase tracking-[0.12em] text-slate-500">Support</div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -right-3 top-5 rounded-full border border-slate-200 bg-white px-3 py-2 shadow-lg shadow-slate-200/60">
            <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-600">
              <Globe2 className="h-3.5 w-3.5 text-sky-700" />
              Pan-India
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
