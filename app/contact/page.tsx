import type { Metadata } from "next";
import Image from "next/image";
import { site } from "../data/category";
import PageBanner from "../components/ui/PageBanner";
import SectionHeading from "../components/ui/SectionHeading";
import IconBadge from "../components/ui/IconBadge";
import EnquiryForm from "../components/forms/EnquiryForm";
import { Clock, Mail, MapPin, Phone } from "../components/ui/Icons";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Get in touch with NorthVale Capital in Mumbai. Call ${site.phone}, email ${site.email} or visit our office at Oberoi Commerz II, Goregaon (East).`,
  alternates: { canonical: "/contact" },
};

const channels = [
  { Icon: Phone, label: "Call Us", value: site.phone, href: site.phoneHref, note: "Mon - Sat : 9:00 AM - 6:00 PM" },
  { Icon: Mail, label: "Email Us", value: site.email, href: `mailto:${site.email}`, note: "We reply within 24 hours" },
  { Icon: MapPin, label: "Our Office", value: site.city, href: "#office", note: "Meet us at our office" },
];

export default function ContactPage() {
  return (
    <>
      <PageBanner title="Contact Us" />

      <section className="pt-20 pb-12 lg:pt-24">
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

      <section id="office" className="scroll-mt-32 pb-20 lg:pb-24">
        <div className="container-x">
          <div className="grid gap-6 rounded-xl bg-cream p-4 sm:p-6 lg:grid-cols-[1.2fr_1fr]">
            <div className="min-h-80 overflow-hidden rounded-lg">
              <iframe
                src={site.mapEmbed}
                title="NorthVale Capital Mumbai office on Google Maps"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="size-full min-h-80 border-0"
              />
            </div>
            <div className="grid gap-6 sm:grid-cols-[1fr_auto]">
              <div>
                <h2 className="text-3xl font-extrabold tracking-tight">
                  <span aria-hidden="true" className="mb-3 block h-0.5 w-10 bg-gold" />
                  Our Office
                </h2>
                <address className="mt-5 flex gap-4 border-b border-line pb-5 not-italic">
                  <IconBadge size="sm">
                    <MapPin />
                  </IconBadge>
                  <span className="text-[15px]">
                    <strong className="block text-navy">{site.legalName}</strong>
                    {site.address.line1}
                    <br />
                    {site.address.line2}
                    <br />
                    {site.address.line3}
                  </span>
                </address>
                <ul className="mt-5 space-y-3 text-[15px]">
                  <li className="flex items-center gap-4">
                    <Phone className="size-[18px] text-navy" />
                    <a href={site.phoneHref} className="hover:text-gold">
                      {site.phone}
                    </a>
                  </li>
                  <li className="flex items-center gap-4">
                    <Mail className="size-[18px] text-navy" />
                    <a href={`mailto:${site.email}`} className="hover:text-gold">
                      {site.email}
                    </a>
                  </li>
                  <li className="flex items-center gap-4">
                    <Clock className="size-[18px] text-navy" />
                    {site.hours}
                  </li>
                </ul>
              </div>
              <div className="relative hidden aspect-[260/316] w-44 overflow-hidden rounded-lg sm:block xl:w-52">
                <Image
                  src="/contact/northvale-capital-mumbai-office.jpg"
                  alt="NorthVale Capital office reception in Mumbai"
                  fill
                  sizes="208px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
