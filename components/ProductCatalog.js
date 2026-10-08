"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useMemo, useState } from "react";
import ProductFilter from "@/components/ProductFilter";
import { categoryOptions, productCategories, products } from "@/data/products";

export default function ProductCatalog({ initialCategory = "All" }) {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCategories = useMemo(() => {
    const relevantCategories =
      selectedCategory === "All"
        ? productCategories
        : productCategories.filter((category) => category.name === selectedCategory);

    return relevantCategories
      .map((category) => {
        const items = products.filter((product) => {
          const categoryMatch = product.category === category.name;
          const query = searchTerm.trim().toLowerCase();
          const searchMatch =
            !query ||
            product.name.toLowerCase().includes(query) ||
            product.description.toLowerCase().includes(query) ||
            product.category.toLowerCase().includes(query) ||
            product.specs.toLowerCase().includes(query);

          return categoryMatch && searchMatch;
        });

        return { ...category, items };
      })
      .filter((category) => category.items.length > 0);
  }, [searchTerm, selectedCategory]);

  const resultCount = filteredCategories.reduce((total, category) => total + category.items.length, 0);

  return (
    <>
      <ProductFilter
        categories={categoryOptions}
        selectedCategory={selectedCategory}
        searchTerm={searchTerm}
        onCategoryChange={setSelectedCategory}
        onSearchChange={setSearchTerm}
        resultCount={resultCount}
      />

      <div className="mt-10 space-y-8">
        {filteredCategories.length === 0 ? (
          <div className="rounded-[1.75rem] border border-dashed border-slate-300 bg-slate-50 px-6 py-12 text-center">
            <h3 className="text-xl font-semibold text-slate-900">No products match your search.</h3>
            <p className="mt-2 text-slate-600">Try adjusting the selected category or entering a different keyword.</p>
          </div>
        ) : (
          filteredCategories.map((category) => (
            <section
              key={category.name}
              className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-sky-50/40 p-4 shadow-[0_18px_50px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(15,23,42,0.07)] sm:p-6"
            >
              <div className="mb-6 flex flex-col gap-4 border-b border-slate-200 pb-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 overflow-hidden rounded-2xl border border-slate-200 bg-white p-1 shadow-sm transition-transform duration-300 group-hover:scale-[1.04]">
                    <Image
                      src={category.image}
                      alt={category.title}
                      width={200}
                      height={200}
                      className="h-full w-full rounded-xl object-contain"
                    />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-sky-700">{category.name}</p>
                    <h2 className="mt-1 text-xl font-semibold text-slate-900 sm:text-2xl">{category.title}</h2>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 self-start rounded-full bg-sky-700 px-4 py-2 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-sky-800"
                >
                  Enquire
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="mb-4 text-sm leading-6 text-slate-600 sm:text-base">{category.description}</div>

              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {category.items.map((product) => (
                  <article
                    key={product.id}
                    className="group/product flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white p-4 shadow-[0_10px_30px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-[0_18px_40px_rgba(14,116,144,0.08)]"
                  >
                    <div className="overflow-hidden rounded-[1.1rem] border border-slate-100 bg-slate-50">
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                          className="object-contain p-3 transition-transform duration-500 group-hover/product:scale-[1.03]"
                        />
                      </div>
                    </div>

                    <div className="mt-4 flex items-start justify-between gap-3">
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-sky-700">{category.name}</p>
                        <h3 className="mt-2 text-xl font-semibold text-slate-900">{product.name}</h3>
                      </div>
                      <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-emerald-700">
                        {product.grade}
                      </span>
                    </div>

                    <p className="mt-3 text-sm leading-6 text-slate-600">{product.description}</p>

                    <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-3">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-500">Specifications</p>
                      <p className="mt-1 text-sm font-medium text-slate-700">{product.specs}</p>
                    </div>

                    <div className="mt-5 flex items-center justify-between gap-3 pt-1">
                      <span className="text-xs font-medium uppercase tracking-[0.14em] text-slate-500">Ready to ship</span>
                      <Link
                        href={`/contact?product=${encodeURIComponent(product.name)}`}
                        className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-3.5 py-2 text-sm font-semibold text-white transition-all duration-200 hover:bg-sky-700"
                      >
                        Enquire
                        <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))
        )}
      </div>
    </>
  );
}
