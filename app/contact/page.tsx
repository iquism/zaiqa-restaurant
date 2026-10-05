import type { Metadata } from "next";
import ReservationForm from "@/components/ReservationForm";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Reserve a Table — Contact Zaiqa Restaurant",
  description:
    "Book your table at Zaiqa Restaurant Lahore. Call +92 300 123 4567 or reserve online. 14-B Food Street, Fort Road. Open daily 12pm–11pm.",
};

const INFO = [
  ["Visit Us", "14-B Food Street, Fort Road, Lahore, Pakistan"],
  ["Call Us", "+92 300 123 4567"],
  ["Write to Us", "hello@zaiqarestaurant.pk"],
  ["Hours", "Mon–Thu 12pm–11pm · Fri–Sun 12pm–12am"],
];

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
      <Reveal className="text-center">
        <p className="text-xs uppercase tracking-widest2 text-saffron">We Keep the Tandoor Hot</p>
        <h1 className="mt-3 font-serif text-5xl text-cream sm:text-6xl">
          Reserve a <span className="italic text-saffron">Table</span>
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-smoke">
          Tell us when you&apos;re coming and we&apos;ll handle the rest —
          confirmation call within 30 minutes during opening hours.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-8 lg:grid-cols-5">
        <Reveal className="lg:col-span-3">
          <ReservationForm />
        </Reveal>
        <div className="lg:col-span-2">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {INFO.map(([t, d], i) => (
              <Reveal key={t} delay={i * 100}>
                <div className="rounded-2xl border border-cream/10 bg-coal p-6 transition hover:border-saffron/40">
                  <p className="text-xs uppercase tracking-widest2 text-saffron">{t}</p>
                  <p className="mt-2 font-serif text-lg leading-snug text-cream">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <div className="mt-4 rounded-2xl border border-saffron/25 bg-ember p-6">
              <p className="font-serif text-xl text-cream">Hosting a dawat?</p>
              <p className="mt-2 text-sm leading-relaxed text-smoke">
                We cater weddings, corporate dinners and family events for
                20–300 guests. Call us and we&apos;ll design a menu around your
                budget.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
