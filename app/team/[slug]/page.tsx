import type { Metadata } from "next";
import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getTeamMember, team } from "../../data/team";
import { site } from "../../data/site";
import PageBanner from "../../components/ui/PageBanner";
import { Eyebrow } from "../../components/ui/SectionHeading";
import IconBadge from "../../components/ui/IconBadge";
import JsonLd from "../../components/seo/JsonLd";
import DetailSkeleton from "../../components/ui/DetailSkeleton";
import {
  Coins,
  Download,
  FileText,
  Growth,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  PieChart,
  XTwitter,
  Youtube,
} from "../../components/ui/Icons";

const expertiseIcons = { growth: Growth, pie: PieChart, coins: Coins, document: FileText };

export function generateStaticParams() {
  return team.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: PageProps<"/team/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const member = getTeamMember(slug);
  if (!member) return {};
  return {
    title: `${member.name} – ${member.role}`,
    description: member.bio[0].slice(0, 160),
    alternates: { canonical: `/team/${member.slug}` },
    openGraph: { type: "profile", images: [member.portrait] },
  };
}

async function TeamDetailContent({ params }: Pick<PageProps<"/team/[slug]">, "params">) {
  const { slug } = await params;
  const member = getTeamMember(slug);
  if (!member) notFound();

  const [first, ...rest] = member.name.split(" ");
  const socials = [
    { label: "LinkedIn", href: `https://${member.linkedin}`, Icon: Linkedin },
    { label: "X", href: "https://x.com/", Icon: XTwitter },
    { label: "Instagram", href: site.social.instagram, Icon: Instagram },
    { label: "YouTube", href: site.social.youtube, Icon: Youtube },
  ];

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Person",
          name: member.name,
          jobTitle: member.role,
          email: member.email,
          image: `${site.url}${member.portrait}`,
          worksFor: { "@type": "Organization", name: site.name, url: site.url },
        }}
      />

      <section className="py-20 lg:py-24">
        <div className="container-x grid gap-8 lg:grid-cols-[320px_1fr]">
          {/* Photo + download */}
          <div className="space-y-4">
            <div className="relative aspect-[320/386] overflow-hidden rounded-lg bg-cream">
              <Image
                src={member.portrait}
                alt={`${member.name}, ${member.role} at ${site.name}`}
                fill
                priority
                sizes="(min-width: 1024px) 320px, 100vw"
                className="object-cover object-top"
              />
            </div>
            <Link
              href="/enquire-now"
              className="group flex items-center gap-4 rounded-lg border border-line bg-white p-4 shadow-card"
            >
              <FileText className="size-8 shrink-0 text-gold" strokeWidth={1.5} />
              <span className="flex-1">
                <span className="block font-heading font-bold text-navy">Download Profile</span>
                <span className="block text-[13px]">Get a quick overview of {member.name}&apos;s profile.</span>
              </span>
              <span className="flex size-9 items-center justify-center rounded border border-gold text-gold transition-colors group-hover:bg-gold group-hover:text-navy">
                <Download className="size-4" />
              </span>
            </Link>
          </div>

          <div className="space-y-6">
            {/* Bio + contact */}
            <div className="grid gap-8 xl:grid-cols-[1fr_240px]">
              <div>
                <Eyebrow>{member.role}</Eyebrow>
                <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
                  {first} <span className="text-gold">{rest.join(" ")}</span>
                </h1>
                <div className="mt-5 space-y-4 text-[15px] leading-relaxed">
                  {member.bio.map((p) => (
                    <p key={p.slice(0, 20)}>{p}</p>
                  ))}
                </div>
              </div>
              <aside className="border-gold/60 text-[14px] xl:border-l xl:pl-6">
                <ul className="space-y-4 border-b border-line pb-6">
                  <li>
                    <a href={`mailto:${member.email}`} className="flex items-center gap-3 hover:text-gold">
                      <Mail className="size-4 shrink-0 text-navy" /> {member.email}
                    </a>
                  </li>
                  <li>
                    <a href={site.phoneHref} className="flex items-center gap-3 hover:text-gold">
                      <Phone className="size-4 shrink-0 text-navy" /> {site.phone}
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <MapPin className="size-4 shrink-0 text-navy" /> {site.city}
                  </li>
                  <li>
                    <a
                      href={`https://${member.linkedin}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 break-all hover:text-gold"
                    >
                      <Linkedin className="size-4 shrink-0 text-navy" /> {member.linkedin}
                    </a>
                  </li>
                </ul>
                <p className="mt-5 font-heading font-bold text-navy">Follow Me</p>
                <ul className="mt-3 flex gap-2.5">
                  {socials.map(({ label, href, Icon }) => (
                    <li key={label}>
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name} on ${label}`}
                        className="flex size-9 items-center justify-center rounded-full bg-navy text-[15px] text-white transition-colors hover:bg-gold hover:text-navy"
                      >
                        <Icon />
                      </a>
                    </li>
                  ))}
                </ul>
              </aside>
            </div>

            {/* Expertise + education */}
            <div className="grid gap-6 xl:grid-cols-[1.4fr_1fr]">
              <div className="rounded-lg bg-cream p-6">
                <h2 className="text-xl font-bold">Areas of Expertise</h2>
                <ul className="mt-5 grid gap-6 sm:grid-cols-2">
                  {member.expertise.map((e) => {
                    const Icon = expertiseIcons[e.icon];
                    return (
                      <li key={e.title} className="flex gap-4">
                        <IconBadge size="sm">
                          <Icon strokeWidth={1.6} />
                        </IconBadge>
                        <div>
                          <h3 className="text-[15px] font-bold">{e.title}</h3>
                          <p className="mt-1 text-[14px] leading-snug">{e.text}</p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="rounded-lg bg-cream p-6">
                <h2 className="text-xl font-bold">Education &amp; Certifications</h2>
                <ol className="relative mt-5 space-y-5 border-l border-gold/40 pl-6">
                  {member.education.map((ed) => (
                    <li key={ed.title} className="relative">
                      <span
                        aria-hidden="true"
                        className="absolute top-1.5 -left-[29px] size-2.5 rounded-full bg-gold ring-4 ring-cream"
                      />
                      <h3 className="text-[15px] font-bold">{ed.title}</h3>
                      <p className="text-[13px]">{ed.institute}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// The banner and layout shell render instantly; slug-specific content streams in.
export default function TeamDetailPage({ params }: PageProps<"/team/[slug]">) {
  return (
    <>
      <PageBanner title="Team Detail" trail={[{ label: "Our Team", href: "/team" }]} />
      <Suspense fallback={<DetailSkeleton />}>
        <TeamDetailContent params={params} />
      </Suspense>
    </>
  );
}
