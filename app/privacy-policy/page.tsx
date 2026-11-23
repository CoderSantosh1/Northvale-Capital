import type { Metadata } from "next";
import { site } from "../data/category";
import PageBanner from "../components/ui/PageBanner";
import LegalContent from "../components/sections/LegalContent";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How NorthVale Capital collects, uses and protects your personal information.",
  alternates: { canonical: "/privacy-policy" },
};

// Placeholder copy — have it reviewed by your compliance/legal team before launch.
const sections = [
  {
    heading: "Information We Collect",
    body: "We collect the information you provide when you fill out an enquiry or contact form, such as your name, email address, phone number, city and message, along with basic technical data like browser type and pages visited.",
  },
  {
    heading: "How We Use Your Information",
    body: "Your information is used to respond to your enquiries, provide our advisory services, improve our website and, with your consent, share relevant updates. We do not sell your personal information.",
  },
  {
    heading: "Data Security",
    body: "We use reasonable technical and organisational measures to protect your information against unauthorised access, loss or misuse.",
  },
  {
    heading: "Your Choices",
    body: `You may request access to, correction of, or deletion of your personal information at any time by writing to ${site.email}.`,
  },
  {
    heading: "Contact",
    body: `For any privacy-related questions, contact ${site.legalName} at ${site.email} or ${site.phone}.`,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageBanner title="Privacy Policy" />
      <LegalContent updated="1 January 2026" sections={sections} />
    </>
  );
}
