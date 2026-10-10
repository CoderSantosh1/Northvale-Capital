"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { services } from "@/app/data/category";
import { ArrowRight, Building, ChevronDown, Lock, Mail, MapPin, Message, Phone, User } from "../ui/Icons";

const cities = ["Mumbai", "Delhi NCR", "Bengaluru", "Pune", "Hyderabad", "Chennai", "Ahmedabad", "Kolkata", "Other"];

type Props = {
  title: string;
  subtitle: string;
  /** Show the city selector (Enquire Now page). */
  withCity?: boolean;
};

function Field({ icon, children, className = "" }: { icon: ReactNode; children: ReactNode; className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <span className="pointer-events-none absolute top-[15px] left-4 text-navy">{icon}</span>
      {children}
    </div>
  );
}

const inputClass =
  "w-full rounded-md border border-line bg-white py-3 pr-4 pl-11 text-[15px] text-ink placeholder:text-muted/80 outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/25";

export default function EnquiryForm({ title, subtitle, withCity = false }: Props) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    // TODO: send `new FormData(form)` to the enquiry API / CRM once it is available.
    await new Promise((r) => setTimeout(r, 600));
    form.reset();
    setStatus("sent");
  }

  return (
    <div className="rounded-xl bg-white p-6 shadow-card sm:p-8">
      <h2 className="text-2xl font-bold tracking-tight sm:text-[28px]">{title}</h2>
      <p className="mt-1.5 text-[15px]">{subtitle}</p>

      {status === "sent" ? (
        <div role="status" className="mt-8 rounded-lg border border-gold/40 bg-gold-100/50 p-6 text-center">
          <p className="font-heading text-lg font-bold text-navy">Thank you for reaching out!</p>
          <p className="mt-2 text-[15px]">Our team will get back to you within 24 hours.</p>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="mt-4 font-heading text-sm font-bold text-navy underline decoration-gold decoration-2 underline-offset-4"
          >
            Send another enquiry
          </button>
        </div>
      ) : (
        <form onSubmit={onSubmit} className="mt-6 grid gap-4 sm:grid-cols-2">
          <Field icon={<User className="size-[18px]" />}>
            <label htmlFor="name" className="sr-only">
              Your name
            </label>
            <input id="name" name="name" required autoComplete="name" placeholder="Your Name*" className={inputClass} />
          </Field>
          <Field icon={<Mail className="size-[18px]" />}>
            <label htmlFor="email" className="sr-only">
              Your email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="Your Email*"
              className={inputClass}
            />
          </Field>
          <Field icon={<Phone className="size-[18px]" />}>
            <label htmlFor="phone" className="sr-only">
              Your phone
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              autoComplete="tel"
              pattern="[0-9+\-\s]{10,15}"
              title="Enter a valid phone number"
              placeholder="Your Phone*"
              className={inputClass}
            />
          </Field>
          <Field icon={<Building className="size-[18px]" />}>
            <label htmlFor="service" className="sr-only">
              Select service
            </label>
            <select id="service" name="service" required defaultValue="" className={`${inputClass} appearance-none`}>
              <option value="" disabled>
                Select Service*
              </option>
              {services.map((s) => (
                <option key={s.slug} value={s.title}>
                  {s.title}
                </option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute top-4 right-4 size-4 text-navy" />
          </Field>
          {withCity && (
            <Field icon={<MapPin className="size-[18px]" />} className="sm:col-span-2">
              <label htmlFor="city" className="sr-only">
                Your city
              </label>
              <select id="city" name="city" required defaultValue="" className={`${inputClass} appearance-none`}>
                <option value="" disabled>
                  Your City*
                </option>
                {cities.map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
              <ChevronDown className="pointer-events-none absolute top-4 right-4 size-4 text-navy" />
            </Field>
          )}
          <Field icon={<Message className="size-[18px]" />} className="sm:col-span-2">
            <label htmlFor="message" className="sr-only">
              Your message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              placeholder="Your Message*"
              className={`${inputClass} resize-y`}
            />
          </Field>
          <label className="flex items-center gap-3 text-sm sm:col-span-2">
            <input type="checkbox" name="consent" required className="size-4 accent-gold" />I agree to be contacted by
            NorthVale Capital.
          </label>
          <button
            type="submit"
            disabled={status === "sending"}
            className="flex items-center justify-center gap-2.5 rounded-md bg-gold py-3.5 font-heading font-bold text-navy transition-colors hover:bg-gold-600 disabled:opacity-70 sm:col-span-2"
          >
            {status === "sending" ? "Sending..." : "Submit Enquiry"}
            <ArrowRight className="size-4" />
          </button>
          <p className="flex items-center justify-center gap-2 text-[13px] sm:col-span-2">
            <Lock className="size-4 text-navy" />
            Your information is secure and will never be shared.
          </p>
        </form>
      )}
    </div>
  );
}
