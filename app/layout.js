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
  applicationName: "Swift Diagnostics",
  title: {
    default: "Diagnostic Equipment & Laboratory Supplies in India",
    template: "%s | Swift Diagnostics",
  },
  description:
    "Swift Diagnostics supplies diagnostic laboratory equipment, blood collection tubes, centrifuges, microtomes, molecular biology kits, ELISA kits and histopathology reagents across India.",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "diagnostic equipment India",
    "laboratory supplies India",
    "pathology lab equipment",
    "blood collection tubes",
    "laboratory reagents",
    "Swift Diagnostics",
  ],
  category: "Healthcare and laboratory supplies",
  creator: "Swift Diagnostics",
  publisher: "Swift Diagnostics",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Swift Diagnostics | Diagnostic Equipment & Laboratory Supplies India",
    description:
      "India's Trusted Diagnostics Partner for hospital, pathology and research laboratory supply.",
    type: "website",
    locale: "en_IN",
    siteName: "Swift Diagnostics",
    url: "/",
    images: [
      {
        url: "/swift-diagnostics-social.png",
        width: 1200,
        height: 630,
        alt: "Swift Diagnostics",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Swift Diagnostics",
    description: "India's Trusted Diagnostics Partner",
    images: ["/swift-diagnostics-social.png"],
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
