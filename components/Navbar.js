"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, PhoneCall, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "About", href: "/#about" },
  { label: "Certifications", href: "/#certifications" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-slate-200/80 backdrop-blur-xl transition-all ${
        isScrolled ? "bg-white/90 shadow-[0_10px_35px_rgba(15,23,42,0.06)]" : "bg-white/85"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="Swift Diagnostics home">
          <Image
            src="/logo-logo.webp"
            alt="Swift Diagnostics"
            width={1411}
            height={299}
            priority
            className="h-9 w-auto brightness-0 sm:h-10"
          />
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-slate-700 transition hover:text-sky-700"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-4 lg:flex">
          <a href="tel:+917292020389" className="flex items-center gap-2 text-sm font-medium text-slate-700 transition hover:text-sky-700">
            <PhoneCall className="h-4 w-4" />
            +91 7292020389
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-sky-700 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-sky-700/20 transition hover:bg-sky-800"
          >
            Send Enquiry
          </Link>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-sky-700 px-3.5 py-2 text-xs font-semibold text-white transition hover:bg-sky-800"
          >
            Enquiry
          </Link>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((value) => !value)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-sky-200 hover:text-sky-700"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {isOpen ? (
        <div className="border-t border-slate-200 bg-white px-4 py-4 shadow-lg lg:hidden">
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-xl px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-sky-700"
              >
                {item.label}
              </Link>
            ))}
            <a
              href="tel:+917292020389"
              className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700"
            >
              Call +91 7292020389
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
