import Reveal from "./Reveal";

const QUOTES = [
  {
    text: "The chicken karahi here ruined every other karahi for me. Smoky, rich, perfect heat — I dream about it.",
    name: "Ayesha R.",
    detail: "Regular since 2019",
  },
  {
    text: "Brought my parents for their anniversary. The BBQ platter, the ambience, the staff — flawless evening.",
    name: "Bilal K.",
    detail: "Celebrated 3 family events here",
  },
  {
    text: "Best doodh patti in Lahore, no contest. And the mango kulfi tastes like childhood summers.",
    name: "Fatima S.",
    detail: "Food blogger",
  },
];

export default function Testimonials() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {QUOTES.map((q, i) => (
        <Reveal key={q.name} delay={i * 120}>
          <figure className="flex h-full flex-col rounded-2xl border border-cream/10 bg-coal p-7 transition hover:border-saffron/40">
            <div className="flex gap-1" aria-label="5 star rating">
              {Array.from({ length: 5 }).map((_, s) => (
                <svg key={s} viewBox="0 0 24 24" className="h-4 w-4 fill-saffron">
                  <path d="M12 2l2.9 6.6 7.1.7-5.4 4.8 1.6 7-6.2-3.7L5.8 21l1.6-7L2 9.3l7.1-.7z" />
                </svg>
              ))}
            </div>
            <blockquote className="mt-4 flex-1 font-serif text-lg italic leading-relaxed text-cream">
              “{q.text}”
            </blockquote>
            <figcaption className="mt-6 border-t border-cream/10 pt-4">
              <p className="text-sm font-semibold uppercase tracking-widest2 text-saffron">
                {q.name}
              </p>
              <p className="mt-1 text-xs text-smoke">{q.detail}</p>
            </figcaption>
          </figure>
        </Reveal>
      ))}
    </div>
  );
}
