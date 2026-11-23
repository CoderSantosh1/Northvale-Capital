import type { Metadata } from "next";
import { testimonials } from "../data/category";
import PageBanner from "../components/ui/PageBanner";
import { SplitHeading } from "../components/ui/SectionHeading";
import TestimonialsGrid from "../components/sections/TestimonialsGrid";

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
      <section className="bg-cream pt-12 pb-20 lg:pt-16 lg:pb-24">
        <div className="container-x">
          <SplitHeading
            eyebrow="Testimonials"
            title="What Our Clients Say"
            highlight="About NorthVale Capital"
            description="Our clients' trust and satisfaction drive everything we do. Here's what individuals, families and businesses say about their experience with NorthVale Capital."
          />
          <TestimonialsGrid items={testimonials} />
        </div>
      </section>
    </>
  );
}
