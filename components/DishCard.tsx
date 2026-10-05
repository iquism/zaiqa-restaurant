import Image from "next/image";
import { Dish, formatPKR } from "@/data/menu";
import Reveal from "./Reveal";

function SpiceMeter({ level }: { level: number }) {
  return (
    <span className="flex items-center gap-0.5" title={`Spice level ${level}/3`}>
      {[0, 1, 2].map((i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          className={`h-3.5 w-3.5 ${i < level ? "fill-saffron" : "fill-cream/15"}`}
        >
          <path d="M12 2c1 4-3 5-3 9a5 5 0 0 0 10 0c0-2-1-3-2-4 3 1 4 3 4 5a8 8 0 1 1-16 0c0-5 6-6 7-10z" />
        </svg>
      ))}
    </span>
  );
}

export default function DishCard({ dish, delay = 0 }: { dish: Dish; delay?: number }) {
  return (
    <Reveal delay={delay}>
      <article className="group overflow-hidden rounded-2xl border border-cream/10 bg-coal transition duration-300 hover:-translate-y-1.5 hover:border-saffron/40 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        <div className="relative h-56 overflow-hidden">
          <Image
            src={dish.image}
            alt={dish.name}
            fill
            className="object-cover transition duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          {dish.badge && (
            <span className="absolute left-4 top-4 rounded-full bg-saffron px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-espresso">
              {dish.badge}
            </span>
          )}
          <span className="absolute right-4 top-4 flex h-6 w-6 items-center justify-center rounded border border-green-500 bg-espresso/80">
            <span className={`h-2.5 w-2.5 rounded-full ${dish.veg ? "bg-green-500" : "bg-red-500"}`} />
          </span>
        </div>
        <div className="p-5">
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-serif text-xl text-cream">{dish.name}</h3>
            <span className="whitespace-nowrap font-serif text-lg text-saffron">
              {formatPKR(dish.price)}
            </span>
          </div>
          <p className="mt-2 text-sm leading-relaxed text-smoke">{dish.description}</p>
          <div className="mt-4 flex items-center justify-between border-t border-cream/10 pt-3">
            <span className="text-[11px] uppercase tracking-widest2 text-smoke">
              {dish.category}
            </span>
            <SpiceMeter level={dish.spicyLevel} />
          </div>
        </div>
      </article>
    </Reveal>
  );
}
