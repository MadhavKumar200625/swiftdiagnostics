import { CheckCircle2, ShieldCheck } from "lucide-react";

const items = [
  "MII — Made in India",
  "Government Licensed",
  "Product Approved",
  "Traceable Supply",
  "Hospital Grade",
  "Research Grade",
];

export default function ComplianceSection() {
  return (
    <section id="certifications" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_20px_50px_rgba(15,23,42,0.04)] sm:p-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">Quality &amp; Compliance</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                Quality you can rely on
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                Swift Diagnostics supports dependable procurement for institutional laboratories with traceable supply, product approval and quality-conscious sourcing.
              </p>
            </div>
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">
              <ShieldCheck className="h-8 w-8" />
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {items.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm font-medium text-slate-700">
                <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
