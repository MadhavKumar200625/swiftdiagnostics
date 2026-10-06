import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, FlaskConical, ShieldCheck, Truck } from "lucide-react";
import CTASection from "@/components/CTASection";
import ComplianceSection from "@/components/ComplianceSection";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import SectionHeading from "@/components/SectionHeading";
import StatsSection from "@/components/StatsSection";
import TrustBar from "@/components/TrustBar";
import { productCategories, products } from "@/data/products";

export const metadata = {
  title: "Swift Diagnostics | Diagnostic Equipment & Laboratory Supplies India",
  description:
    "Swift Diagnostics supplies diagnostic laboratory equipment, blood collection tubes, centrifuges, microtomes, RNA/DNA kits, ELISA kits, dialysis equipment and histopathology reagents across India.",
};

const showcaseProducts = products.slice(0, 9);
const carePoints = [
  {
    title: "Quality Assurance",
    text: "Every product is selected for traceability, sterility and dependable clinical performance.",
    icon: ShieldCheck,
  },
  {
    title: "Fast Supply Support",
    text: "Bulk procurement support, quick dispatch and reliable fulfilment across India.",
    icon: Truck,
  },
  {
    title: "Research Ready",
    text: "Hospital, pathology and research-grade laboratory solutions built for precision workflows.",
    icon: FlaskConical,
  },
];

const solutionPillars = [
  "Blood Collection & Sample Handling",
  "Microbiology & Histopathology",
  "Molecular Diagnostics & ELISA",
  "Dialysis & Clinical Equipment",
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />

      <section id="about" className="py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <div>
            <SectionHeading
              eyebrow="About Swift Diagnostics"
              title="Precision equipment and laboratory supply you can trust."
              description="Swift Diagnostics supports hospitals, diagnostic laboratories, pathology centres and research institutions with dependable diagnostic equipment, consumables and reagents across India."
            />
            <p className="mt-5 text-base leading-7 text-slate-600">
              We combine clinical-grade quality, product traceability, fast institutional support and consistent availability for high-demand laboratory operations.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {solutionPillars.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-sky-100 bg-sky-50 px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-sky-800"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 rounded-full bg-sky-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-700/20 transition hover:bg-sky-800"
              >
                Explore Our Products
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-sky-200 hover:text-sky-700"
              >
                Request Catalogue
              </Link>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-3 shadow-[0_18px_40px_rgba(15,23,42,0.08)]">
            <div className="overflow-hidden rounded-[1.5rem] bg-slate-100">
              <Image
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=80"
                alt="Modern laboratory workbench with diagnostic equipment in a premium clinical environment"
                width={900}
                height={700}
                className="h-[300px] w-full object-cover sm:h-[360px]"
              />
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-[10px] uppercase tracking-[0.14em] text-sky-700">Clinical excellence</p>
                <p className="mt-2 text-base font-semibold text-slate-900">Hospital-grade reliability</p>
              </div>
              <div className="rounded-2xl border border-sky-100 bg-sky-50 p-4">
                <p className="text-[10px] uppercase tracking-[0.14em] text-sky-700">Quality focus</p>
                <p className="mt-2 text-base font-semibold text-slate-900">Trusted by labs and institutions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Why Swift Diagnostics"
            title="Built for precision, trust and continuity of care."
            description="Our product portfolio is designed to support every critical step in diagnostics and laboratory workflow, from collection to analysis."
            centered
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {carePoints.map(({ title, text, icon: Icon }) => (
              <div key={title} className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_20px_40px_rgba(15,23,42,0.04)] transition hover:-translate-y-1 hover:shadow-[0_25px_55px_rgba(20,99,195,0.12)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-slate-900">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Product Range"
            title="Clinical-grade diagnostics and laboratory essentials."
            description="Explore our range of blood collection consumables, analytical equipment, molecular kits and histopathology supplies."
            centered
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {productCategories.map((category) => (
              <Link
                key={category.slug}
                href={`/products?category=${encodeURIComponent(category.name)}`}
                className="group overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white p-3 shadow-[0_18px_40px_rgba(15,23,42,0.04)] transition hover:-translate-y-1 hover:border-sky-200 hover:shadow-[0_25px_55px_rgba(20,99,195,0.12)]"
              >
                <div className="overflow-hidden rounded-[1.25rem] border border-slate-200 bg-slate-50">
                  <Image
                    src={category.image}
                    alt={category.title}
                    width={800}
                    height={700}
                    className="h-52 w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="px-2 pb-2 pt-5">
                  <h3 className="text-xl font-semibold text-slate-900">{category.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{category.description}</p>
                  <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-sky-700">
                    View Products
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Popular Product Selection"
            title="Hospital and research-ready products from our core range."
            description="A focused selection of products used across path labs, diagnostic centres and research environments."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {showcaseProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <StatsSection />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-3 shadow-[0_24px_60px_rgba(15,23,42,0.06)]">
              <Image
                src="https://images.unsplash.com/photo-1532187863486-3a7f7f36df1e?auto=format&fit=crop&w=1200&q=80"
                alt="Clinical laboratory workspace and equipment for precision testing"
                width={1100}
                height={800}
                className="h-[420px] w-full rounded-[1.5rem] object-cover sm:h-[500px]"
              />
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">Built for Precision-Critical Laboratories</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                Reliable supply for every demanding workflow.
              </h2>
              <p className="mt-5 text-base leading-7 text-slate-600">
                We operate under a Government MII (Made in India) licence with product approval and traceability, helping ensure dependable procurement for hospitals, pathology departments, diagnostic centres and research institutions.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Government MII (Made in India) Licence",
                  "Full Product Approval & Traceability",
                  "Hospital & Research Grade Quality",
                  "Bulk Pricing for Institutional Orders",
                  "Pan-India Logistics & Technical Support",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-600" />
                    <span className="text-base font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Reliable Supply for Institutional Procurement"
        description="From routine laboratory consumables to advanced molecular biology kits and high-capacity centrifuge systems, Swift Diagnostics supports hospitals, diagnostic centres and research institutions with dependable supply, technical support and bulk procurement options."
        primaryLabel="Request a Product Catalogue"
        primaryHref="/products"
        secondaryLabel="Send Bulk Enquiry"
        secondaryHref="/contact"
      />

      <ComplianceSection />

      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Need Diagnostic Equipment or Laboratory Supplies?
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Talk to our team for product availability, bulk pricing and institutional procurement.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
            <a href="tel:+917292020389" className="inline-flex items-center justify-center rounded-full bg-sky-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-800">
              Call Us
            </a>
            <a href="mailto:info@swiftdiagnostics.co.in" className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-sky-200 hover:text-sky-700">
              Email Us
            </a>
            <a
              href="https://wa.me/917292020389?text=Hello%20Swift%20Diagnostics%2C%20I%20would%20like%20to%20enquire%20about%20your%20laboratory%20products."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-sky-200 hover:text-sky-700"
            >
              WhatsApp Us
            </a>
          </div>

          <div className="mt-8 flex flex-col items-center gap-2 text-base text-slate-600 sm:flex-row sm:justify-center sm:gap-8">
            <a href="tel:+917292020389" className="hover:text-sky-700">+91 7292020389</a>
            <a href="mailto:info@swiftdiagnostics.co.in" className="hover:text-sky-700">info@swiftdiagnostics.co.in</a>
            <a
              href="https://wa.me/917292020389?text=Hello%20Swift%20Diagnostics%2C%20I%20would%20like%20to%20enquire%20about%20your%20laboratory%20products."
              target="_blank"
              rel="noreferrer"
              className="hover:text-sky-700"
            >
              +91 7292020389
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
