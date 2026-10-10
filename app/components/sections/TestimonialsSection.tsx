import { testimonials } from "@/app/data/category";
import ButtonLink from "../ui/ButtonLink";
import SectionHeading from "../ui/SectionHeading";
import TestimonialsSlider from "./TestimonialsSlider";

export default function TestimonialsSection() {
  return (
    <section className="pt-20 pb-6 lg:pt-24">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="Testimonials" title="What Our" highlight="Clients Say" />
          <ButtonLink href="/testimonials" size="sm">
            View All Testimonials
          </ButtonLink>
        </div>
        <div className="mt-10">
          <TestimonialsSlider items={testimonials} />
        </div>
      </div>
    </section>
  );
}
