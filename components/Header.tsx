"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "Our Story" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-espresso/95 shadow-[0_8px_30px_rgba(0,0,0,0.45)] backdrop-blur"
          : "bg-gradient-to-b from-black/70 to-transparent"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:h-[80px] sm:px-8">
        <Link href="/" className="group flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-saffron/60 bg-ember font-serif text-xl text-saffron transition group-hover:bg-saffron group-hover:text-espresso">
            Z
          </span>
          <span className="leading-tight">
            <span className="block font-serif text-xl tracking-wide text-cream">
              Zaiqa
            </span>
            <span className="block text-[10px] uppercase tracking-widest2 text-saffron">
              Restaurant
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm uppercase tracking-[0.18em] transition hover:text-saffron ${
                pathname === l.href ? "text-saffron" : "text-cream/80"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-full border border-saffron bg-saffron/10 px-6 py-2.5 text-sm uppercase tracking-[0.18em] text-saffron transition hover:bg-saffron hover:text-espresso"
          >
            Reserve
          </Link>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/20 text-cream md:hidden"
        >
          <span className="relative block h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-0.5 w-5 bg-current transition-all ${
                open ? "top-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] h-0.5 w-5 bg-current transition-all ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[14px] h-0.5 w-5 bg-current transition-all ${
                open ? "top-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {open && (
        <nav className="border-t border-cream/10 bg-espresso/98 px-5 pb-6 pt-2 backdrop-blur md:hidden">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`block border-b border-cream/5 py-4 font-serif text-lg ${
                pathname === l.href ? "text-saffron" : "text-cream"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-4 block rounded-full bg-saffron py-3 text-center text-sm uppercase tracking-[0.2em] text-espresso"
          >
            Reserve a Table
          </Link>
        </nav>
      )}
    </header>
  );
}
