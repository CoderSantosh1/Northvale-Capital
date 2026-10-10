import { featuredServices } from "@/app/data/category";
import ServiceCard from "../cards/ServiceCard";
import ButtonLink from "../ui/ButtonLink";
import SectionHeading from "../ui/SectionHeading";

export default function ServicesSection() {
  return (
    <section className="py-20 lg:py-24">
      <div className="container-x">
        <div className="grid items-center gap-6 lg:grid-cols-[1.1fr_1.1fr_auto] lg:gap-10">
          <SectionHeading eyebrow="Our Services" title="Smart Strategies" highlight="for a Secure Future" />
          <p className="text-[15px] leading-relaxed">
            At NorthVale Capital, we offer a comprehensive range of investment advisory services designed to help you
            grow, protect, and manage your wealth with confidence.
          </p>
          <ButtonLink href="/services" size="sm" className="justify-self-start">
            All Services
          </ButtonLink>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredServices.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </div>
    </section>
  );
}
