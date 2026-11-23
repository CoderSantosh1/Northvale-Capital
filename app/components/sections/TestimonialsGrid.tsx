"use client";

import { useRef, useState } from "react";
import type { Testimonial } from "@/app/data/category";
import TestimonialCard from "../cards/TestimonialCard";
import { ArrowRight } from "../ui/Icons";

const btnBase =
  "flex size-11 items-center justify-center rounded-md border font-heading text-[15px] font-bold transition-colors disabled:pointer-events-none disabled:opacity-40";

/** Testimonial cards split into pages with numbered pagination. */
export default function TestimonialsGrid({ items, perPage = 6 }: { items: Testimonial[]; perPage?: number }) {
  const [page, setPage] = useState(1);
  const top = useRef<HTMLDivElement>(null);
  const totalPages = Math.ceil(items.length / perPage);
  const visible = items.slice((page - 1) * perPage, page * perPage);

  const goTo = (p: number) => {
    setPage(p);
    top.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div ref={top} className="scroll-mt-40">
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {visible.map((t) => (
          <TestimonialCard key={t.name} testimonial={t} />
        ))}
      </div>

      {totalPages > 1 && (
        <nav aria-label="Testimonials pagination" className="mt-12 flex items-center justify-center gap-2.5">
          <button
            type="button"
            onClick={() => goTo(page - 1)}
            disabled={page === 1}
            aria-label="Previous page"
            className={`${btnBase} border-line bg-white text-navy hover:border-gold hover:bg-gold`}
          >
            <ArrowRight className="size-4 rotate-180" />
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => goTo(p)}
              aria-label={`Page ${p}`}
              aria-current={p === page ? "page" : undefined}
              className={`${btnBase} ${
                p === page
                  ? "border-navy bg-navy text-white"
                  : "border-line bg-white text-navy hover:border-gold hover:bg-gold"
              }`}
            >
              {p}
            </button>
          ))}
          <button
            type="button"
            onClick={() => goTo(page + 1)}
            disabled={page === totalPages}
            aria-label="Next page"
            className={`${btnBase} border-line bg-white text-navy hover:border-gold hover:bg-gold`}
          >
            <ArrowRight className="size-4" />
          </button>
        </nav>
      )}
    </div>
  );
}
