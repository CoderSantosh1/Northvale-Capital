"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Testimonial } from "@/app/data/category";
import { Quote } from "../ui/Icons";
import { Stars } from "../cards/TestimonialCard";

export default function TestimonialsSlider({ items }: { items: Testimonial[] }) {
  const track = useRef<HTMLUListElement>(null);
  const [pages, setPages] = useState(Math.ceil(items.length / 3));
  const [page, setPage] = useState(0);
  const [paused, setPaused] = useState(false);

  const perView = useCallback(() => {
    const el = track.current;
    const card = el?.firstElementChild as HTMLElement | null;
    if (!el || !card) return 1;
    return Math.max(1, Math.round(el.clientWidth / card.offsetWidth));
  }, []);

  const goTo = useCallback(
    (p: number) => {
      const el = track.current;
      if (!el) return;
      el.scrollTo({ left: p * el.clientWidth, behavior: "smooth" });
    },
    [],
  );

  // Keep page count and active dot in sync with layout and scroll position.
  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const update = () => {
      setPages(Math.ceil(items.length / perView()));
      setPage(Math.round(el.scrollLeft / el.clientWidth));
    };
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [items.length, perView]);

  // Auto-advance.
  useEffect(() => {
    if (paused || pages < 2) return;
    const id = window.setInterval(() => goTo((page + 1) % pages), 6000);
    return () => window.clearInterval(id);
  }, [page, pages, paused, goTo]);

  return (
    <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <ul
        ref={track}
        className="no-scrollbar -mx-3 flex snap-x snap-mandatory overflow-x-auto py-3"
        aria-label="Client testimonials"
      >
        {items.map((t) => (
          <li key={t.name} className="w-full shrink-0 snap-start px-3 md:w-1/2 lg:w-1/3">
            <figure className="flex h-full gap-5 rounded-lg border border-line bg-white p-6">
              <Image
                src={t.image}
                alt={t.name}
                width={76}
                height={76}
                className="size-[76px] shrink-0 rounded-full object-cover"
              />
              <div className="relative">
                <Quote aria-hidden="true" className="absolute -top-1 -left-0.5 size-6 text-gold/70" />
                <blockquote className="pl-8 text-[14px] leading-relaxed text-ink/80">“{t.short}”</blockquote>
                <figcaption className="mt-4">
                  <p className="font-heading font-bold text-navy">{t.name}</p>
                  <p className="text-[14px]">{t.role}</p>
                  <Stars className="mt-2" />
                </figcaption>
              </div>
            </figure>
          </li>
        ))}
      </ul>
      {pages > 1 && (
        <div className="mt-6 flex justify-center gap-2.5">
          {Array.from({ length: pages }, (_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Show testimonials page ${i + 1}`}
              aria-current={i === page}
              className={`size-2.5 rounded-full transition-colors ${i === page ? "bg-gold" : "bg-line hover:bg-gold/50"}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
