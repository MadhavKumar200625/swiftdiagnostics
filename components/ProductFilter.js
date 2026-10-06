import { Search } from "lucide-react";

export default function ProductFilter({
  categories,
  selectedCategory,
  searchTerm,
  onCategoryChange,
  onSearchChange,
  resultCount,
}) {
  return (
    <div className="rounded-[1.75rem] border border-slate-200 bg-white p-4 shadow-[0_18px_40px_rgba(15,23,42,0.04)] sm:p-5">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => {
            const isActive = category === selectedCategory;
            return (
              <button
                key={category}
                type="button"
                onClick={() => onCategoryChange(category)}
                className={`rounded-full px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.08em] transition sm:text-sm ${
                  isActive
                    ? "bg-slate-900 text-white shadow-lg shadow-slate-900/15"
                    : "border border-slate-200 bg-slate-50 text-slate-700 hover:border-sky-200 hover:bg-sky-50 hover:text-sky-700"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        <div className="relative w-full max-w-sm">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            type="search"
            value={searchTerm}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="Search products"
            aria-label="Search products"
            className="w-full rounded-full border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-sm text-slate-800 outline-none transition focus:border-sky-300 focus:bg-white focus:ring-4 focus:ring-sky-100"
          />
        </div>
      </div>

      <div className="mt-4 text-sm text-slate-600">
        Showing <span className="font-semibold text-slate-900">{resultCount}</span> product{resultCount === 1 ? "" : "s"}
      </div>
    </div>
  );
}
