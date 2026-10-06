const stats = [
  { value: "15+", label: "Years of Supply Excellence" },
  { value: "200+", label: "Products in Catalogue" },
  { value: "500+", label: "Institutions Served" },
  { value: "28", label: "States Covered Pan-India" },
];

export default function StatsSection() {
  return (
    <section className="bg-slate-900 py-16 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-[1.5rem] border border-slate-700 bg-white/5 px-6 py-7 text-center">
              <div className="text-4xl font-semibold tracking-tight text-white">{stat.value}</div>
              <p className="mt-2 text-sm leading-6 text-slate-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
