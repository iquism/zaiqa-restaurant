import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Zaiqa Restaurant — Taste the Tradition",
    template: "%s · Zaiqa Restaurant",
  },
  description:
    "Zaiqa Restaurant — authentic Pakistani & desi cuisine. Charcoal BBQ, hand-ground spices, clay-tandoor naan. Dine in, takeaway & family platters.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans bg-espresso text-cream antialiased">
        <Header />
        <main className="pt-[72px] sm:pt-[80px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
