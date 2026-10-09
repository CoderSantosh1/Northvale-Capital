import Image from "next/image";
import type { Testimonial } from "@/app/data/testimonials";
import { Quote, Star } from "../ui/Icons";

export function Stars({ className = "" }: { className?: string }) {
  return (
    <div className={`flex gap-0.5 text-gold ${className}`} role="img" aria-label="Rated 5 out of 5">
      {Array.from({ length: 5 }, (_, i) => (
        <Star key={i} className="size-4" />
      ))}
    </div>
  );
}

/** Full testimonial card used on the Testimonials page. */
export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="flex h-full flex-col rounded-lg bg-white p-7 shadow-card">
      <div className="flex items-center justify-between">
        <Quote className="size-7 text-line" />
        <Stars />
      </div>
      <blockquote className="mt-4 flex-1 text-[16px] leading-relaxed">“{testimonial.quote}”</blockquote>
      <figcaption className="mt-6 flex items-center gap-5">
        <Image
          src={testimonial.image}
          alt={testimonial.name}
          width={80}
          height={80}
          className="size-20 rounded-full object-cover"
        />
        <div>
          <p className="font-heading text-lg font-bold text-navy">{testimonial.name}</p>
          <p className="text-[15px]">{testimonial.role}</p>
        </div>
      </figcaption>
    </figure>
  );
}
