import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function ProductCard({ product }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-[0_18px_40px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-[0_24px_50px_rgba(20,99,195,0.12)]">
      <div className="overflow-hidden border-b border-slate-200 bg-slate-50">
        <Image
          src={product.image}
          alt={product.name}
          width={800}
          height={520}
          className="h-52 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <span className="inline-flex w-fit rounded-full bg-sky-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-sky-700">
          {product.category}
        </span>
        <h3 className="mt-4 text-xl font-semibold text-slate-900">{product.name}</h3>
        <p className="mt-3 text-sm leading-6 text-slate-600">{product.description}</p>
        <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs leading-5 text-slate-600">
          {product.specs}
        </div>

        <div className="mt-6 flex items-center justify-between">
          <Link
            href={`/contact?product=${encodeURIComponent(product.name)}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-sky-700 transition hover:text-sky-800"
          >
            Enquire Now
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}
