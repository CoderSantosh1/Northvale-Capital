"use client";

import { ArrowUp } from "../ui/Icons";

export default function ScrollTopButton() {
  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className="flex size-10 items-center justify-center rounded-full border border-gold text-gold transition-colors hover:bg-gold hover:text-navy"
    >
      <ArrowUp className="size-[18px]" />
    </button>
  );
}
