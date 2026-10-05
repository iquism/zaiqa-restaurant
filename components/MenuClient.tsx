"use client";

import { useMemo, useState } from "react";
import { CATEGORIES, DISHES, MenuCategory } from "@/data/menu";
import DishCard from "./DishCard";

export default function MenuClient() {
  const [cat, setCat] = useState<"All" | MenuCategory>("All");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<"featured" | "low" | "high">("featured");

  const dishes = useMemo(() => {
    let list = DISHES.filter(
      (d) =>
        (cat === "All" || d.category === cat) &&
        (query.trim() === "" ||
          d.name.toLowerCase().includes(query.toLowerCase()) ||
          d.description.toLowerCase().includes(query.toLowerCase()))
    );
    if (sort === "low") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "high") list = [...list].sort((a, b) => b.price - a.price);
    return list;
  }, [cat, query, sort]);

  return (
    <div>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`rounded-full px-5 py-2.5 text-xs uppercase tracking-[0.15em] transition ${
                cat === c
                  ? "bg-saffron text-espresso"
                  : "border border-cream/15 text-cream/70 hover:border-saffron/60 hover:text-saffron"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="flex gap-3">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search dishes…"
            className="w-full rounded-full border border-cream/15 bg-coal px-5 py-2.5 text-sm text-cream placeholder:text-smoke focus:border-saffron focus:outline-none lg:w-56"
          />
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as "featured" | "low" | "high")}
            className="rounded-full border border-cream/15 bg-coal px-4 py-2.5 text-sm text-cream focus:border-saffron focus:outline-none"
          >
            <option value="featured">Featured</option>
            <option value="low">Price: Low → High</option>
            <option value="high">Price: High → Low</option>
          </select>
        </div>
      </div>

      <p className="mt-6 text-sm text-smoke">
        Showing <span className="text-saffron">{dishes.length}</span> of {DISHES.length} dishes
        {cat !== "All" && <> in <span className="text-cream">{cat}</span></>}
      </p>

      {dishes.length === 0 ? (
        <div className="mt-10 rounded-2xl border border-cream/10 bg-coal p-14 text-center">
          <p className="font-serif text-2xl text-cream">No dishes found</p>
          <p className="mt-2 text-sm text-smoke">
            Try a different search or category — the tandoor is always hot.
          </p>
        </div>
      ) : (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {dishes.map((d, i) => (
            <DishCard key={d.id} dish={d} delay={(i % 3) * 90} />
          ))}
        </div>
      )}

      <div className="mt-12 flex items-center justify-center gap-6 rounded-2xl border border-saffron/20 bg-ember p-6 text-sm text-smoke">
        <span className="flex items-center gap-2">
          <span className="flex h-5 w-5 items-center justify-center rounded border border-green-500">
            <span className="h-2 w-2 rounded-full bg-green-500" />
          </span>
          Veg
        </span>
        <span className="flex items-center gap-2">
          <span className="flex h-5 w-5 items-center justify-center rounded border border-green-500">
            <span className="h-2 w-2 rounded-full bg-red-500" />
          </span>
          Non-veg
        </span>
        <span className="flex items-center gap-2">
          <svg viewBox="0 0 24 24" className="h-4 w-4 fill-saffron">
            <path d="M12 2c1 4-3 5-3 9a5 5 0 0 0 10 0c0-2-1-3-2-4 3 1 4 3 4 5a8 8 0 1 1-16 0c0-5 6-6 7-10z" />
          </svg>
          Spice level
        </span>
      </div>
    </div>
  );
}
