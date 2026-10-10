import type { Metadata } from "next";
import { services } from "../data/category";
import PageBanner from "../components/ui/PageBanner";
import ServiceCard from "../components/cards/ServiceCard";
import SectionHeading from "../components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore NorthVale Capital's investment advisory services: wealth management, financial planning, portfolio advisory, retirement, tax and estate planning.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageBanner title="Services" />
      <section className="py-20 lg:py-24">
        <div className="container-x">
          <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
            <SectionHeading eyebrow="Our Services" title="Smart Strategies" highlight="for a Secure Future" />
            <p className="text-[15px] leading-relaxed">
              At NorthVale Capital, we offer a comprehensive range of investment advisory services designed to help you
              grow, protect, and manage your wealth with confidence.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
