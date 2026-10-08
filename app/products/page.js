import { Suspense } from "react";
import ProductCatalog from "@/components/ProductCatalog";

export const metadata = {
  title: "Laboratory Products & Diagnostic Supplies",
  description:
    "Browse Swift Diagnostics products for hospitals, pathology labs and research teams, including diagnostic consumables, laboratory equipment, molecular biology kits, reagents and test kits.",
  alternates: { canonical: "/products" },
  openGraph: { url: "/products" },
};

export default function ProductsPage({ searchParams }) {
  const initialCategory = typeof searchParams?.category === "string" ? searchParams.category : "All";

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <section className="pb-10 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">Swift Diagnostics</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-slate-900 sm:text-5xl">
          Laboratory Products &amp; Diagnostic Solutions
        </h1>
        <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
          Explore our range of diagnostic consumables, laboratory equipment, molecular biology kits, immunoassays and histopathology products.
        </p>
      </section>

      <div className="mb-10 rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-[0_18px_40px_rgba(15,23,42,0.04)] sm:p-6">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-sky-700">Product portfolio</p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-900">Curated for hospitals, labs and research teams</h2>
          </div>
          <div className="grid grid-cols-3 gap-3 text-center sm:min-w-[260px]">
            <div className="rounded-2xl bg-slate-50 px-3 py-2">
              <div className="text-lg font-semibold text-slate-900">13+</div>
              <div className="text-[10px] uppercase tracking-[0.12em] text-slate-500">Categories</div>
            </div>
            <div className="rounded-2xl bg-slate-50 px-3 py-2">
              <div className="text-lg font-semibold text-slate-900">90+</div>
              <div className="text-[10px] uppercase tracking-[0.12em] text-slate-500">Products</div>
            </div>
            <div className="rounded-2xl bg-sky-50 px-3 py-2">
              <div className="text-lg font-semibold text-sky-700">24/7</div>
              <div className="text-[10px] uppercase tracking-[0.12em] text-sky-700">Support</div>
            </div>
          </div>
        </div>
      </div>

      <Suspense fallback={<div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 text-center text-slate-600">Loading product catalogue...</div>}>
        <ProductCatalog initialCategory={initialCategory} />
      </Suspense>
    </div>
  );
}
