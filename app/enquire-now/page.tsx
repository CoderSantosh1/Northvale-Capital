import type { Metadata } from "next";
import PageBanner from "../components/ui/PageBanner";
import SectionHeading from "../components/ui/SectionHeading";
import IconBadge from "../components/ui/IconBadge";
import EnquiryForm from "../components/forms/EnquiryForm";
import { Growth, Headset, Message, Shield } from "../components/ui/Icons";

export const metadata: Metadata = {
  title: "Enquire Now – Free Financial Consultation",
  description:
    "Share your details and NorthVale Capital's experts will connect with you to understand your needs and suggest the right investment and financial planning solutions.",
  alternates: { canonical: "/enquire-now" },
};

const highlights = [
  { Icon: Message, title: "Expert Guidance", text: "Talk to our experienced financial advisors." },
  { Icon: Shield, title: "Personalised Solutions", text: "Strategies tailored to your financial goals." },
  { Icon: Growth, title: "No Obligation", text: "Get advice with no commitment." },
  { Icon: Headset, title: "Quick Response", text: "Our team will get back to you within 24 hours." },
];

export default function EnquireNowPage() {
  return (
    <>
      <PageBanner title="Enquire Now" />
      <section className="py-20 lg:py-24">
        <div className="container-x grid items-start gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <SectionHeading eyebrow="Enquire Now" title="Let’s Plan Your" highlight="Financial Goals Together" />
            <p className="mt-6 max-w-xl text-[16px] leading-relaxed">
              Whether you&apos;re planning to invest, save for a big milestone, build retirement corpus, or simply need
              expert advice, our team is here to help. Fill out the form and we&apos;ll get in touch with you to
              understand your needs and suggest the right solutions.
            </p>
            <ul className="mt-10 grid gap-8 border-b border-line pb-10 sm:grid-cols-2">
              {highlights.map(({ Icon, title, text }) => (
                <li key={title} className="flex gap-5">
                  <IconBadge>
                    <Icon strokeWidth={1.6} />
                  </IconBadge>
                  <div>
                    <h3 className="font-bold">{title}</h3>
                    <p className="mt-1 text-[15px] leading-snug">{text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <EnquiryForm
            title="Enquire Now"
            subtitle="Share your details and our experts will connect with you soon."
            withCity
          />
        </div>
      </section>
    </>
  );
}
