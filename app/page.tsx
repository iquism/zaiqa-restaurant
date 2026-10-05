import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { DISHES } from "@/data/menu";
import DishCard from "@/components/DishCard";
import Reveal from "@/components/Reveal";
import Testimonials from "@/components/Testimonials";

export const metadata: Metadata = {
  title: "Zaiqa Restaurant — Taste the Tradition | Desi Food in Lahore",
  description:
    "Zaiqa Restaurant Lahore — charcoal BBQ, chicken karahi, biryani & clay-tandoor naan. Reserve a table and taste the tradition.",
};

const MARQUEE = [
  "Charcoal BBQ",
  "Hand-Ground Spices",
  "Clay Tandoor",
  "Desi Ghee",
  "Family Platters",
  "Since 1998",
];

const signature = DISHES.filter((d) =>
  ["chicken-karahi", "seekh-kebab", "chicken-biryani", "bbq-platter"].includes(d.id)
);

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-[calc(100vh-72px)] items-center overflow-hidden sm:min-h-[calc(100vh-80px)]">
        <div className="absolute inset-0">
          <Image
            src="/hero-restaurant.webp"
            alt="Zaiqa Restaurant dining room"
            fill
            priority
            className="animate-hero-drift object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-espresso" />
        </div>
        <div className="relative mx-auto w-full max-w-7xl px-5 py-24 sm:px-8">
          <Reveal>
            <p className="text-xs uppercase tracking-widest2 text-saffron">
              Est. 1998 · Lahore
            </p>
            <h1 className="mt-5 max-w-3xl font-serif text-5xl leading-[1.05] text-cream sm:text-7xl">
              Taste the <span className="italic text-saffron">Tradition</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/75 sm:text-lg">
              Charcoal-fired BBQ, wok-tossed karahis and breads from our clay
              tandoor — recipes guarded by three generations of khansamas.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/menu"
                className="rounded-full bg-saffron px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.18em] text-espresso transition hover:bg-saffron-light"
              >
                View Menu
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-cream/40 px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.18em] text-cream transition hover:border-saffron hover:text-saffron"
              >
                Reserve a Table
              </Link>
            </div>
          </Reveal>
        </div>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-cream/50">
          <svg viewBox="0 0 24 24" className="h-6 w-6 animate-bounce fill-current">
            <path d="M12 16l-6-6h12z" />
          </svg>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="overflow-hidden border-y border-saffron/20 bg-coal py-4">
        <div className="animate-marquee flex w-max items-center gap-10">
          {[...MARQUEE, ...MARQUEE].map((m, i) => (
            <span key={i} className="flex items-center gap-10 whitespace-nowrap">
              <span className="text-sm uppercase tracking-widest2 text-saffron">{m}</span>
              <span className="h-1.5 w-1.5 rounded-full bg-saffron/50" />
            </span>
          ))}
        </div>
      </div>

      {/* SIGNATURE DISHES */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal className="text-center">
          <p className="text-xs uppercase tracking-widest2 text-saffron">Guest Favourites</p>
          <h2 className="mt-3 font-serif text-4xl text-cream sm:text-5xl">
            Signature <span className="italic text-saffron">Dishes</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-smoke">
            The plates people cross the city for — fired, folded and finished the way it has always been done.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {signature.map((d, i) => (
            <DishCard key={d.id} dish={d} delay={i * 100} />
          ))}
        </div>
        <Reveal className="mt-10 text-center">
          <Link
            href="/menu"
            className="inline-block rounded-full border border-saffron px-8 py-3 text-sm uppercase tracking-[0.18em] text-saffron transition hover:bg-saffron hover:text-espresso"
          >
            Explore Full Menu
          </Link>
        </Reveal>
      </section>

      {/* STORY TEASER + STATS */}
      <section className="border-y border-cream/10 bg-coal">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-2">
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src="/dishes/chicken-karahi.webp"
                alt="Chicken karahi in wok"
                width={900}
                height={700}
                className="h-auto w-full object-cover"
              />
              <div className="absolute bottom-5 right-5 rounded-2xl bg-espresso/90 px-6 py-4 text-center backdrop-blur">
                <p className="font-serif text-3xl text-saffron">1998</p>
                <p className="text-[11px] uppercase tracking-widest2 text-sand">Serving since</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <p className="text-xs uppercase tracking-widest2 text-saffron">Our Story</p>
            <h2 className="mt-3 font-serif text-4xl leading-tight text-cream sm:text-5xl">
              Three generations. <span className="italic text-saffron">One flame.</span>
            </h2>
            <p className="mt-5 leading-relaxed text-smoke">
              It began as a six-table dhaba near Fort Road, where Ustad Rahim&apos;s
              karahi drew queues around the block. Today Zaiqa is Lahore&apos;s
              beloved desi table — same charcoal, same hand-pounded spices,
              same welcome.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-6 border-t border-cream/10 pt-8">
              {[
                ["25+", "Years of fire"],
                ["40+", "Dishes on menu"],
                ["1M+", "Happy guests"],
              ].map(([n, l]) => (
                <div key={l}>
                  <p className="font-serif text-3xl text-saffron sm:text-4xl">{n}</p>
                  <p className="mt-1 text-xs uppercase tracking-widest2 text-smoke">{l}</p>
                </div>
              ))}
            </div>
            <Link
              href="/about"
              className="mt-8 inline-block text-sm uppercase tracking-[0.2em] text-saffron underline-offset-4 hover:underline"
            >
              Read our story →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal className="text-center">
          <p className="text-xs uppercase tracking-widest2 text-saffron">Word on the Street</p>
          <h2 className="mt-3 font-serif text-4xl text-cream sm:text-5xl">
            Guests <span className="italic text-saffron">Love Us</span>
          </h2>
        </Reveal>
        <div className="mt-12">
          <Testimonials />
        </div>
      </section>

      {/* RESERVATION CTA */}
      <section className="relative overflow-hidden">
        <Image
          src="/dishes/bbq-platter.webp"
          alt="BBQ platter"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-espresso/80" />
        <div className="relative mx-auto max-w-4xl px-5 py-24 text-center sm:px-8">
          <Reveal>
            <h2 className="font-serif text-4xl text-cream sm:text-6xl">
              Your table is <span className="italic text-saffron">waiting</span>
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-cream/70">
              Weekend evenings fill fast — book ahead and we&apos;ll keep the
              tandoor hot for you.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-block rounded-full bg-saffron px-10 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-espresso transition hover:bg-saffron-light"
            >
              Reserve a Table
            </Link>
          </Reveal>
        </div>
      </section>

      {/* HOURS / LOCATION STRIP */}
      <section className="border-t border-saffron/15 bg-coal">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 text-center sm:grid-cols-3 sm:px-8">
          {[
            ["Visit Us", "14-B Food Street, Fort Road, Lahore"],
            ["Call Us", "+92 300 123 4567"],
            ["Open Daily", "12pm – 11pm · Fri–Sun till 12am"],
          ].map(([t, d]) => (
            <Reveal key={t}>
              <p className="text-xs uppercase tracking-widest2 text-saffron">{t}</p>
              <p className="mt-2 font-serif text-xl text-cream">{d}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
