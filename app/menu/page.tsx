import type { Metadata } from "next";
import MenuClient from "@/components/MenuClient";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Menu — BBQ, Karahi, Biryani & Desserts",
  description:
    "Zaiqa Restaurant full menu — charcoal BBQ, karahis, biryani, tandoori breads, desserts and drinks with prices in PKR.",
};

export default function MenuPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
      <Reveal className="text-center">
        <p className="text-xs uppercase tracking-widest2 text-saffron">Eat With Your Eyes First</p>
        <h1 className="mt-3 font-serif text-5xl text-cream sm:text-6xl">
          Our <span className="italic text-saffron">Menu</span>
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-smoke">
          Every dish is cooked to order over real fire. Prices include all taxes —
          the smile is on the house.
        </p>
      </Reveal>
      <div className="mt-10">
        <MenuClient />
      </div>
    </div>
  );
}
