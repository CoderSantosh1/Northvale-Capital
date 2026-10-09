import type { Metadata } from "next";
import { team } from "../data/team";
import PageBanner from "../components/ui/PageBanner";
import { SplitHeading } from "../components/ui/SectionHeading";
import TeamCard from "../components/cards/TeamCard";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the experienced investment advisors and wealth managers at NorthVale Capital driving your financial success.",
  alternates: { canonical: "/team" },
};

export default function TeamPage() {
  return (
    <>
      <PageBanner title="Our Team" />
      <section className="py-20 lg:py-24">
        <div className="container-x rounded-xl bg-cream px-4 py-12 sm:px-8 lg:px-10">
          <SplitHeading
            eyebrow="Our Team"
            title="Experienced Professionals"
            highlight="Driving Your Financial Success"
            description="Our team of seasoned investment advisors brings deep industry knowledge and a client-first approach to help you make smarter financial decisions for a secure future."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((m) => (
              <TeamCard key={m.slug} member={m} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
