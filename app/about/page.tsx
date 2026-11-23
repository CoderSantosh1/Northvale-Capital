import type { Metadata } from "next";
import PageBanner from "../components/ui/PageBanner";
import AboutSection from "../components/sections/AboutSection";
import ProcessSection from "../components/sections/ProcessSection";
import StatsBar from "../components/sections/StatsBar";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about NorthVale Capital, an investment advisory firm helping individuals and businesses build long-term wealth with integrity, transparency and personalised guidance.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageBanner title="About Us" />
      <AboutSection showButton={false} className="pt-12 pb-20 lg:pt-16 lg:pb-24" />
      <ProcessSection className="py-16 lg:py-20" />
      <div className="pb-16 lg:pb-20">
        <StatsBar />
      </div>
    </>
  );
}
