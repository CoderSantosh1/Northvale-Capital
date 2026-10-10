import Image from "next/image";
import Link from "next/link";
import { quickLinks, services, site } from "@/app/data/category";
import { ChevronRight, Clock, Mail, MapPin, Phone } from "../ui/Icons";
import SocialLinks from "../ui/SocialLinks";
import ScrollTopButton from "./ScrollTopButton";

function FooterHeading({ children }: { children: string }) {
  return (
    <h2 className="mb-7 text-lg font-bold text-white">
      {children}
      <span aria-hidden="true" className="mt-2.5 block h-[3px] w-9 rounded bg-gold" />
    </h2>
  );
}

function LinkList({ links }: { links: { label: string; href: string }[] }) {
  return (
    <ul className="space-y-3.5">
      {links.map((l) => (
        <li key={l.href}>
          <Link
            href={l.href}
            className="flex max-w-56 items-center justify-between gap-3 text-[15px] text-white/85 transition-colors hover:text-gold"
          >
            {l.label}
            <ChevronRight className="size-4 shrink-0" />
          </Link>
        </li>
      ))}
    </ul>
  );
}

const contactItems = [
  { Icon: MapPin, text: site.city },
  { Icon: Mail, text: site.email, href: `mailto:${site.email}` },
  { Icon: Phone, text: site.phone, href: site.phoneHref },
  { Icon: Clock, text: site.hours },
];

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white/80">
      <div className="container-x grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-[1.35fr_0.9fr_1fr_1.2fr] lg:gap-0 lg:divide-x lg:divide-white/10">
        <div className="lg:pr-10">
          <Link href="/" aria-label={`${site.name} home`}>
            <Image
              src="/common/northvale-capital-logo-white.png"
              alt={`${site.name} logo`}
              width={2035}
              height={773}
              className="h-20 w-auto"
            />
          </Link>
          <p className="mt-6 max-w-xs text-[15px] leading-relaxed">
            Helping individuals and businesses achieve their financial goals with trusted investment advisory and
            personalised solutions.
          </p>
          <SocialLinks
            className="mt-7 gap-3"
            itemClassName="size-10 rounded-full border border-white/25 text-[17px] text-white hover:border-gold hover:bg-gold hover:text-navy"
          />
        </div>

        <div className="lg:px-9">
          <FooterHeading>Quick Links</FooterHeading>
          <LinkList links={quickLinks} />
        </div>

        <div className="lg:px-9">
          <FooterHeading>Our Services</FooterHeading>
          <LinkList links={services.map((s) => ({ label: s.title, href: `/services/${s.slug}` }))} />
        </div>

        <div className="lg:pl-10">
          <FooterHeading>Contact Us</FooterHeading>
          <ul className="space-y-4">
            {contactItems.map(({ Icon, text, href }) => (
              <li key={text} className="flex items-center gap-4 text-[15px]">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-white/15 text-gold">
                  <Icon className="size-[18px]" />
                </span>
                {href ? (
                  <a href={href} className="hover:text-gold">
                    {text}
                  </a>
                ) : (
                  text
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-gold/70">
        <div className="container-x flex flex-col items-center justify-between gap-4 py-6 text-sm sm:flex-row">
          <p>© 2026 {site.name}. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <ul className="flex items-center divide-x divide-gold/70">
              <li className="pr-4">
                <Link href="/privacy-policy" className="hover:text-gold">
                  Privacy Policy
                </Link>
              </li>
              <li className="px-4">
                <Link href="/terms-and-conditions" className="hover:text-gold">
                  Terms &amp; Conditions
                </Link>
              </li>
              <li className="pl-4">
                <a href="/sitemap.xml" className="hover:text-gold">
                  Sitemap
                </a>
              </li>
            </ul>
            <ScrollTopButton />
          </div>
        </div>
      </div>
    </footer>
  );
}
