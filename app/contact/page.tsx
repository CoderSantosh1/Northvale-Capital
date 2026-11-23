import type { Metadata } from "next";
import { site } from "../data/category";
import PageBanner from "../components/ui/PageBanner";
import SectionHeading from "../components/ui/SectionHeading";
import IconBadge from "../components/ui/IconBadge";
import EnquiryForm from "../components/forms/EnquiryForm";
import { Mail, MapPin, Phone } from "../components/ui/Icons";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Get in touch with NorthVale Capital. Call ${site.phone}, email ${site.email} or visit our office at ${site.address.line1}, ${site.address.line2}.`,
  alternates: { canonical: "/contact" },
};

const channels = [
  { Icon: Phone, label: "Call Us", value: site.phone, href: site.phoneHref, note: "Mon - Sat : 9:00 AM - 6:00 PM" },
  { Icon: Mail, label: "Email Us", value: site.email, href: `mailto:${site.email}`, note: "We reply within 24 hours" },
  { Icon: MapPin, label: "Our Office", value: site.city, href: "#office", note: `${site.address.line1}, ${site.address.line2}` },
];

export default function ContactPage() {
  return (
    <>
      <PageBanner title="Contact Us" />

      <section className="pt-12 pb-20 lg:pt-16 lg:pb-24">
        <div className="container-x grid items-start gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <SectionHeading eyebrow="Get in Touch" title="Let’s Build Your" highlight="Financial Future Together" />
            <p className="mt-6 max-w-xl text-[16px] leading-relaxed">
              Have questions, need expert advice, or want to discuss your financial goals? Our team is here to help.
              Reach out to us and we&apos;ll get back to you as soon as possible.
            </p>
            <ul className="mt-10 grid gap-6 sm:grid-cols-[1fr_1.5fr_1fr]">
              {channels.map(({ Icon, label, value, href, note }) => (
                <li key={label}>
                  <IconBadge>
                    <Icon />
                  </IconBadge>
                  <h3 className="mt-4 font-bold">{label}</h3>
                  <a href={href} className="mt-0.5 block font-heading text-[15px] font-bold text-navy hover:text-gold">
                    {value}
                  </a>
                  <p className="mt-0.5 text-[14px]">{note}</p>
                </li>
              ))}
            </ul>
          </div>
          <EnquiryForm title="Send Us a Message" subtitle="Fill out the form and our team will get back to you shortly." />
        </div>
      </section>

      <section id="office" aria-label="Office location" className="scroll-mt-32">
        <iframe
          src={site.mapEmbed}
          title={`${site.name} office on Google Maps`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="block h-[360px] w-full border-0 sm:h-[450px]"
        />
      </section>
    </>
  );
}
