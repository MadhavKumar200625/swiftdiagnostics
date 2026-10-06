import ProductCard from "@/components/ProductCard";

export default function ProductGrid({ products }) {
  if (!products.length) {
    return (
      <div className="rounded-[1.75rem] border border-dashed border-slate-300 bg-slate-50 px-6 py-12 text-center">
        <h3 className="text-xl font-semibold text-slate-900">No products match your search.</h3>
        <p className="mt-2 text-slate-600">Try adjusting the selected category or entering a different keyword.</p>
      </div>
    );
  }

  return (
    <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
