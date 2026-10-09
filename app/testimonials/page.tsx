import type { Metadata } from "next";
import { testimonials } from "../data/testimonials";
import PageBanner from "../components/ui/PageBanner";
import { SplitHeading } from "../components/ui/SectionHeading";
import TestimonialCard from "../components/cards/TestimonialCard";

export const metadata: Metadata = {
  title: "Client Testimonials",
  description:
    "Read what individuals, families and businesses say about their experience with NorthVale Capital's investment advisory and wealth management services.",
  alternates: { canonical: "/testimonials" },
};

export default function TestimonialsPage() {
  return (
    <>
      <PageBanner title="Testimonials" />
      <section className="bg-cream py-20 lg:py-24">
        <div className="container-x">
          <SplitHeading
            eyebrow="Testimonials"
            title="What Our Clients Say"
            highlight="About NorthVale Capital"
            description="Our clients' trust and satisfaction drive everything we do. Here's what individuals, families and businesses say about their experience with NorthVale Capital."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} testimonial={t} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
