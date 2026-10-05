"use client";

import { useState } from "react";

interface FormState {
  name: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  requests: string;
}

const EMPTY: FormState = {
  name: "",
  phone: "",
  date: "",
  time: "",
  guests: "2",
  requests: "",
};

const inputCls =
  "w-full rounded-xl border border-cream/15 bg-espresso px-4 py-3 text-sm text-cream placeholder:text-smoke focus:border-saffron focus:outline-none";

export default function ReservationForm() {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [done, setDone] = useState(false);

  const set = (k: keyof FormState, v: string) =>
    setForm((f) => ({ ...f, [k]: v }));

  const validate = (): boolean => {
    const e: Partial<FormState> = {};
    if (form.name.trim().length < 3) e.name = "Please enter your full name.";
    if (!/^(\+92|0)?3\d{2}[\s-]?\d{7}$/.test(form.phone.replace(/[\s-]/g, "")))
      e.phone = "Enter a valid Pakistani mobile number (e.g. 0300 1234567).";
    if (!form.date) e.date = "Please pick a date.";
    else {
      const picked = new Date(form.date + "T00:00:00");
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (picked < today) e.date = "Date can't be in the past.";
    }
    if (!form.time) e.time = "Please pick a time.";
    const g = parseInt(form.guests, 10);
    if (isNaN(g) || g < 1 || g > 40)
      e.guests = "Guests must be between 1 and 40.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (validate()) setDone(true);
  };

  if (done) {
    return (
      <div className="rounded-2xl border border-saffron/30 bg-coal p-10 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-saffron/15">
          <svg viewBox="0 0 24 24" className="h-8 w-8 fill-saffron">
            <path d="M9 16.2l-3.5-3.5L4 14.2 9 19.2 20 8.2l-1.4-1.4z" />
          </svg>
        </div>
        <h3 className="mt-5 font-serif text-3xl text-cream">
          Shukriya, {form.name.split(" ")[0]}!
        </h3>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-sand">
          Your table for <span className="text-saffron">{form.guests} guest{form.guests === "1" ? "" : "s"}</span> on{" "}
          <span className="text-saffron">{form.date}</span> at{" "}
          <span className="text-saffron">{form.time}</span> is requested.
          We&apos;ll call <span className="text-saffron">{form.phone}</span> shortly to confirm.
        </p>
        <p className="mt-4 text-xs text-smoke">
          (Demo form — no real booking was made.)
        </p>
        <button
          onClick={() => {
            setForm(EMPTY);
            setDone(false);
          }}
          className="mt-6 rounded-full border border-saffron/60 px-6 py-2.5 text-xs uppercase tracking-[0.2em] text-saffron transition hover:bg-saffron hover:text-espresso"
        >
          Make another reservation
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} noValidate className="rounded-2xl border border-cream/10 bg-coal p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-xs uppercase tracking-widest2 text-sand">Full name *</label>
          <input className={inputCls} value={form.name} onChange={(e) => set("name", e.target.value)} placeholder="Ali Raza" />
          {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
        </div>
        <div>
          <label className="mb-1.5 block text-xs uppercase tracking-widest2 text-sand">Phone *</label>
          <input className={inputCls} value={form.phone} onChange={(e) => set("phone", e.target.value)} placeholder="0300 1234567" inputMode="tel" />
          {errors.phone && <p className="mt-1 text-xs text-red-400">{errors.phone}</p>}
        </div>
        <div>
          <label className="mb-1.5 block text-xs uppercase tracking-widest2 text-sand">Date *</label>
          <input type="date" className={inputCls} value={form.date} onChange={(e) => set("date", e.target.value)} />
          {errors.date && <p className="mt-1 text-xs text-red-400">{errors.date}</p>}
        </div>
        <div>
          <label className="mb-1.5 block text-xs uppercase tracking-widest2 text-sand">Time *</label>
          <input type="time" className={inputCls} value={form.time} onChange={(e) => set("time", e.target.value)} />
          {errors.time && <p className="mt-1 text-xs text-red-400">{errors.time}</p>}
        </div>
        <div>
          <label className="mb-1.5 block text-xs uppercase tracking-widest2 text-sand">Guests *</label>
          <input type="number" min={1} max={40} className={inputCls} value={form.guests} onChange={(e) => set("guests", e.target.value)} />
          {errors.guests && <p className="mt-1 text-xs text-red-400">{errors.guests}</p>}
        </div>
        <div>
          <label className="mb-1.5 block text-xs uppercase tracking-widest2 text-sand">Special requests</label>
          <textarea rows={1} className={inputCls} value={form.requests} onChange={(e) => set("requests", e.target.value)} placeholder="Birthday, window seat…" />
        </div>
      </div>
      <button
        type="submit"
        className="mt-6 w-full rounded-full bg-saffron py-3.5 text-sm font-semibold uppercase tracking-[0.2em] text-espresso transition hover:bg-saffron-light"
      >
        Reserve My Table
      </button>
      <p className="mt-3 text-center text-xs text-smoke">
        For parties above 12, please call us directly at +92 300 123 4567.
      </p>
    </form>
  );
}
