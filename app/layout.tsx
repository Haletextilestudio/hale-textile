import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://haletextilestudio.com"),
  title: {
    default: "Hale Textile Studio — Premium Fabrics & Textiles for the Hawaiian Home",
    template: "%s | Hale Textile Studio",
  },
  description:
    "Hale Textile Studio is Hawaii's premier textile resource — curated fabrics, designer wallpaper, and bespoke accessories for the island interior. Serving Oahu and the Hawaiian Islands.",
  keywords: [
    "interior design fabrics Hawaii",
    "textile studio Honolulu",
    "designer fabrics Oahu",
    "luxury upholstery fabric Hawaii",
    "designer wallpaper Hawaii",
    "interior design Hawaii",
    "Hale Textile Studio",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://haletextilestudio.com",
    siteName: "Hale Textile Studio",
    title: "Hale Textile Studio — Premium Fabrics & Textiles for the Hawaiian Home",
    description:
      "Hawaii's premier textile resource. Curated fabrics, designer wallpaper, and bespoke accessories for the island interior.",
    images: [
      {
        url: "/hero-image-new.jpg",
        width: 1200,
        height: 630,
        alt: "Hale Textile Studio — Premium Fabrics for the Hawaiian Home",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hale Textile Studio",
    description: "Premium fabrics, designer wallpaper, and bespoke accessories for Hawaii's finest interiors.",
    images: ["/hero-image-new.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${jost.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-warm-white text-charcoal">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
