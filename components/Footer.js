import Image from "next/image";
import Link from "next/link";
import { Clock3, Mail, Phone } from "lucide-react";

const footerProducts = [
  "Blood Collection Tubes",
  "Urine Containers",
  "Microtomes",
  "Centrifuge Machines",
  "RNA/DNA Kits",
  "ELISA Kits",
  "Dialysis Equipment",
  "Histopathology Reagents",
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "About", href: "/#about" },
  { label: "Certifications", href: "/#certifications" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-200">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
          <div>
            <Image
              src="/images/logo/swiftdiagnostics-logo.svg"
              alt="Swift Diagnostics logo"
              width={220}
              height={64}
              className="h-12 w-auto"
            />
            <p className="mt-5 max-w-md text-sm leading-7 text-slate-300">
              Swift Diagnostics is India&apos;s trusted supplier of precision diagnostic equipment, laboratory consumables, reagents and research-grade kits.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Products</h3>
            <ul className="mt-5 space-y-3 text-sm text-slate-300">
              {footerProducts.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="mt-5 space-y-3 text-sm text-slate-300">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="transition hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Contact</h3>
            <ul className="mt-5 space-y-4 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 text-sky-300" />
                <a href="tel:+917292020389" className="transition hover:text-white">
                  +91 7292020389
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 text-sky-300" />
                <a href="mailto:info@swiftdiagnostics.co.in" className="transition hover:text-white">
                  info@swiftdiagnostics.co.in
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock3 className="mt-0.5 h-4 w-4 text-sky-300" />
                <span>Mon–Sat, 10am–7pm</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-800 pt-6 text-sm text-slate-400 sm:flex sm:items-center sm:justify-between">
          <p>© 2026 Swift Diagnostics. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">MII — Made in India</p>
        </div>
      </div>
    </footer>
  );
}
