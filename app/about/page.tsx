import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Our Story — Three Generations of Fire",
  description:
    "The story of Zaiqa Restaurant — from a six-table dhaba in 1998 to Lahore's beloved desi table. Meet the family behind the flame.",
};

const TIMELINE = [
  ["1998", "Ustad Rahim opens a six-table dhaba near Fort Road with one wok and his mother's karahi recipe."],
  ["2005", "The charcoal grill arrives. Seekh kebabs join the menu and queues stretch around the block."],
  ["2013", "Second generation takes over — the dining hall expands, the recipes stay untouched."],
  ["2020", "Zaiqa goes family-platter famous; our BBQ platter becomes Lahore's weekend ritual."],
  ["2026", "Same fire, same welcome — now serving over a million happy guests and counting."],
];

const VALUES = [
  ["Real Fire Only", "No shortcuts. Charcoal, clay tandoor and slow simmer — the way it has always been done."],
  ["Spices, Hand-Pounded", "Our masalas are ground fresh every morning. You can taste the difference."],
  ["Guests Are Family", "Mehmaan-nawazi isn't a policy here, it's who we are."],
  ["Honest Prices", "Feasts shouldn't need a fortune. Big flavours, fair bills."],
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
      <Reveal className="text-center">
        <p className="text-xs uppercase tracking-widest2 text-saffron">Since 1998</p>
        <h1 className="mt-3 font-serif text-5xl text-cream sm:text-6xl">
          Our <span className="italic text-saffron">Story</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-smoke">
          Every great restaurant has a fire at its heart. Ours has been burning
          for over twenty-five years — and it started with a single wok.
        </p>
      </Reveal>

      <div className="mt-14 grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <div className="overflow-hidden rounded-2xl">
            <Image
              src="/dishes/seekh-kebab.webp"
              alt="Seekh kebabs over charcoal"
              width={900}
              height={700}
              className="h-auto w-full object-cover transition duration-700 hover:scale-105"
            />
          </div>
        </Reveal>
        <Reveal delay={120}>
          <h2 className="font-serif text-3xl text-cream sm:text-4xl">
            It began with <span className="italic text-saffron">one wok</span>
          </h2>
          <div className="mt-5 space-y-4 leading-relaxed text-smoke">
            <p>
              In 1998, Ustad Rahim set up six tables near Fort Road with his
              mother&apos;s karahi recipe and a stubborn belief: food tastes
              better over real fire. Lahore agreed — within a year, the queue
              outside his dhaba was longer than the street.
            </p>
            <p>
              Today his children and grandchildren run Zaiqa, but nothing
              essential has changed. The charcoal still comes from the same
              supplier. The spices are still pounded by hand each dawn. And
              every guest is still greeted like family coming home.
            </p>
          </div>
        </Reveal>
      </div>

      <div className="mt-20">
        <Reveal className="text-center">
          <h2 className="font-serif text-4xl text-cream sm:text-5xl">
            What We <span className="italic text-saffron">Stand By</span>
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map(([t, d], i) => (
            <Reveal key={t} delay={i * 100}>
              <div className="h-full rounded-2xl border border-cream/10 bg-coal p-7 transition hover:border-saffron/40">
                <span className="font-serif text-3xl text-saffron">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 font-serif text-xl text-cream">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-smoke">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="mt-20">
        <Reveal className="text-center">
          <h2 className="font-serif text-4xl text-cream sm:text-5xl">
            The <span className="italic text-saffron">Journey</span>
          </h2>
        </Reveal>
        <div className="mx-auto mt-10 max-w-3xl">
          {TIMELINE.map(([year, text], i) => (
            <Reveal key={year} delay={i * 60}>
              <div className="relative flex gap-6 border-l border-saffron/30 pb-10 pl-8 last:pb-0">
                <span className="absolute -left-[7px] top-1 h-3.5 w-3.5 rounded-full bg-saffron" />
                <div>
                  <p className="font-serif text-2xl text-saffron">{year}</p>
                  <p className="mt-1 leading-relaxed text-smoke">{text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal className="mt-16 text-center">
        <Link
          href="/contact"
          className="inline-block rounded-full bg-saffron px-10 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-espresso transition hover:bg-saffron-light"
        >
          Come Taste the Story
        </Link>
      </Reveal>
    </div>
  );
}
