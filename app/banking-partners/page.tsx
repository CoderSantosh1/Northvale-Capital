import type { Metadata } from "next";
import Image from "next/image";
import { bankingPartners } from "../data/category";
import PageBanner from "../components/ui/PageBanner";
import { SplitHeading } from "../components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Our Banking Partners",
  description:
    "NorthVale Capital collaborates with leading banks including HDFC, ICICI, SBI, Axis, Kotak and HSBC to provide reliable investment solutions and seamless transactions.",
  alternates: { canonical: "/banking-partners" },
};

export default function BankingPartnersPage() {
  return (
    <>
      <PageBanner title="Our Banking Partners" />
      <section className="py-20 lg:py-24">
        <div className="container-x rounded-xl bg-cream px-4 py-12 sm:px-8 lg:px-10">
          <SplitHeading
            eyebrow="Banking Partners"
            title="Trusted Banking Partners"
            highlight="for Your Financial Growth"
            description="We collaborate with leading banks and financial institutions to provide our clients with reliable investment solutions, seamless transactions and long-term financial support."
          />
          <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {bankingPartners.map((p) => (
              <li
                key={p.name}
                className="flex h-24 items-center justify-center rounded-lg bg-white px-4 shadow-card transition-transform hover:-translate-y-1"
              >
                <Image
                  src={p.logo}
                  alt={`${p.name} logo`}
                  width={214}
                  height={82}
                  className="h-auto max-h-16 w-auto max-w-full mix-blend-multiply"
                />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
