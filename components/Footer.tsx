import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-saffron/15 bg-coal">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-saffron/60 bg-ember font-serif text-xl text-saffron">
              Z
            </span>
            <span className="leading-tight">
              <span className="block font-serif text-xl text-cream">Zaiqa</span>
              <span className="block text-[10px] uppercase tracking-widest2 text-saffron">
                Restaurant
              </span>
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-smoke">
            Authentic Pakistani &amp; desi cuisine — charcoal BBQ,
            hand-ground spices and clay-tandoor breads, served with love
            since 1998.
          </p>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-widest2 text-saffron">
            Explore
          </h4>
          <ul className="mt-4 space-y-2.5 text-sm text-sand">
            <li><Link href="/" className="transition hover:text-saffron">Home</Link></li>
            <li><Link href="/menu" className="transition hover:text-saffron">Full Menu</Link></li>
            <li><Link href="/about" className="transition hover:text-saffron">Our Story</Link></li>
            <li><Link href="/contact" className="transition hover:text-saffron">Reserve a Table</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-widest2 text-saffron">
            Opening Hours
          </h4>
          <ul className="mt-4 space-y-2.5 text-sm text-sand">
            <li className="flex justify-between gap-4"><span>Mon – Thu</span><span>12pm – 11pm</span></li>
            <li className="flex justify-between gap-4"><span>Fri – Sun</span><span>12pm – 12am</span></li>
            <li className="flex justify-between gap-4"><span>Ramadan</span><span>Iftar – Sehri</span></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-widest2 text-saffron">
            Find Us
          </h4>
          <ul className="mt-4 space-y-2.5 text-sm text-sand">
            <li>14-B Food Street, Fort Road</li>
            <li>Lahore, Pakistan</li>
            <li className="text-cream">+92 300 123 4567</li>
            <li className="text-cream">hello@zaiqarestaurant.pk</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 text-xs text-smoke sm:flex-row sm:px-8">
          <span>© 2026 Zaiqa Restaurant. Taste the Tradition.</span>
          <span className="uppercase tracking-widest2">Crafted with desi ghee &amp; love</span>
        </div>
      </div>
    </footer>
  );
}
