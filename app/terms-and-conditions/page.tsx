import type { Metadata } from "next";
import { site } from "../data/category";
import PageBanner from "../components/ui/PageBanner";
import LegalContent from "../components/sections/LegalContent";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions for using the NorthVale Capital website.",
  alternates: { canonical: "/terms-and-conditions" },
};

// Placeholder copy — have it reviewed by your compliance/legal team before launch.
const sections = [
  {
    heading: "Use of This Website",
    body: "The content on this website is provided for general information only and does not constitute investment, tax or legal advice. Please consult our advisors before making any financial decision.",
  },
  {
    heading: "Investment Risks",
    body: "Investments in securities markets are subject to market risks. Past performance is not indicative of future returns. Read all related documents carefully before investing.",
  },
  {
    heading: "Intellectual Property",
    body: `All content, logos and graphics on this website are the property of ${site.legalName} unless stated otherwise and may not be reproduced without permission.`,
  },
  {
    heading: "Limitation of Liability",
    body: `${site.name} is not liable for any loss arising from the use of information on this website or from reliance on third-party links.`,
  },
  {
    heading: "Governing Law",
    body: "These terms are governed by the laws of India, and any disputes are subject to the exclusive jurisdiction of the courts in Mumbai.",
  },
];

export default function TermsPage() {
  return (
    <>
      <PageBanner title="Terms & Conditions" />
      <LegalContent updated="1 January 2026" sections={sections} />
    </>
  );
}
