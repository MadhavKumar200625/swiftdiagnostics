import Link from "next/link";
import { ArrowRight, MessageSquareText, Phone } from "lucide-react";

export default function CTASection({
  title,
  description,
  primaryLabel = "Send Enquiry",
  primaryHref = "/contact",
  secondaryLabel = "Call Us",
  secondaryHref = "tel:+917292020389",
}) {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] bg-slate-900 px-6 py-10 text-white shadow-[0_30px_80px_rgba(15,23,42,0.3)] sm:px-10 lg:px-12 lg:py-12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">Swift Diagnostics</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
              <p className="mt-4 text-base leading-7 text-slate-300">{description}</p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href={primaryHref}
                className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-400"
              >
                {primaryLabel}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <a
                href={secondaryHref}
                className="inline-flex items-center justify-center rounded-full border border-slate-600 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-sky-300 hover:text-sky-200"
              >
                <Phone className="mr-2 h-4 w-4" />
                {secondaryLabel}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
