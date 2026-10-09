import type { Metadata } from "next";
import { faqs } from "../data/faqs";
import PageBanner from "../components/ui/PageBanner";
import { SplitHeading } from "../components/ui/SectionHeading";
import ButtonLink from "../components/ui/ButtonLink";
import JsonLd from "../components/seo/JsonLd";
import { ChevronDown } from "../components/ui/Icons";

export const metadata: Metadata = {
  title: "FAQs",
  description:
    "Answers to common questions about NorthVale Capital's investment advisory, financial planning, consultations and portfolio reviews.",
  alternates: { canonical: "/faqs" },
};

export default function FaqsPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }}
      />
      <PageBanner title="FAQs" />
      <section className="py-20 lg:py-24">
        <div className="container-x">
          <SplitHeading
            eyebrow="FAQs"
            title="Frequently Asked"
            highlight="Questions"
            description="Find quick answers to the most common questions about working with NorthVale Capital. Can't find what you're looking for? Our team is happy to help."
          />
          <div className="mt-12 space-y-4">
            {faqs.map((f, i) => (
              <details
                key={f.q}
                open={i === 0}
                className="group rounded-lg border border-line bg-white shadow-card open:border-gold/50"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 font-heading text-[17px] font-bold text-navy [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-gold-100 transition-transform group-open:rotate-180">
                    <ChevronDown className="size-4" />
                  </span>
                </summary>
                <p className="px-6 pb-6 text-[15px] leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
          <div className="mt-12 flex flex-col items-center gap-4 rounded-lg bg-cream p-8 text-center">
            <p className="font-heading text-xl font-bold text-navy">Still have questions?</p>
            <ButtonLink href="/contact">Contact Our Team</ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
