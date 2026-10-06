import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://www.swiftdiagnostics.co.in"),
  title: {
    default: "Swift Diagnostics | Diagnostic Equipment & Laboratory Supplies India",
    template: "%s | Swift Diagnostics",
  },
  description:
    "Swift Diagnostics supplies diagnostic laboratory equipment, blood collection tubes, centrifuges, microtomes, molecular biology kits, ELISA kits and histopathology reagents across India.",
  openGraph: {
    title: "Swift Diagnostics | Diagnostic Equipment & Laboratory Supplies India",
    description:
      "India's Trusted Diagnostics Partner for hospital, pathology and research laboratory supply.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Swift Diagnostics",
    description: "India's Trusted Diagnostics Partner",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-slate-50 text-slate-900">
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
