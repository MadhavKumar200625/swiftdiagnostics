import { BadgeCheck, Building2, Globe2, ShieldCheck } from "lucide-react";

const items = [
  { label: "Government MII Licensed", icon: ShieldCheck },
  { label: "Product Approved", icon: BadgeCheck },
  { label: "Hospital & Research Grade", icon: Building2 },
  { label: "Pan-India Supply", icon: Globe2 },
];

export default function TrustBar() {
  return (
    <section className="border-y border-slate-200 bg-white/75">
      <div className="mx-auto grid max-w-7xl gap-4 px-4 py-6 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        {items.map(({ label, icon: Icon }) => (
          <div key={label} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 text-sky-700">
              <Icon className="h-5 w-5" />
            </div>
            <p className="text-sm font-semibold text-slate-800">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
