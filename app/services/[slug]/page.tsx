import type { Metadata } from "next";
import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getService, services, site } from "../../data/category";
import PageBanner from "../../components/ui/PageBanner";
import { Eyebrow } from "../../components/ui/SectionHeading";
import ButtonLink from "../../components/ui/ButtonLink";
import JsonLd from "../../components/seo/JsonLd";
import DetailSkeleton from "../../components/ui/DetailSkeleton";
import { ChevronRight, FileText, Growth, Mail, MapPin, Phone, Shield, Users } from "../../components/ui/Icons";

const benefitIcons = { growth: Growth, shield: Shield, users: Users, document: FileText };

/** Renders **bold** segments inside a plain paragraph. */
function RichText({ text }: { text: string }) {
  return text.split(/(\*\*[^*]+\*\*)/).map((part, i) =>
    part.startsWith("**") ? (
      <strong key={i} className="text-navy">
        {part.slice(2, -2)}
      </strong>
    ) : (
      part
    ),
  );
}

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.summary,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: { images: [service.image] },
  };
}

async function ServiceDetailContent({ params }: Pick<PageProps<"/services/[slug]">, "params">) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: service.title,
          description: service.summary,
          areaServed: "IN",
          provider: { "@type": "FinancialService", name: site.name, url: site.url },
        }}
      />
      <PageBanner title={service.title} trail={[{ label: "Services", href: "/services" }]} />

      <section className="py-20 lg:py-24">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_300px]">
          <article>
            <div className="relative h-52 overflow-hidden md:h-auto md:aspect-[792/224] rounded-lg">
              <Image
                src={service.detailImage ?? service.image}
                alt={service.imageAlt}
                fill
                priority
                sizes="(min-width: 1024px) 800px, 100vw"
                className="object-cover"
              />
            </div>
            <Eyebrow className="mt-8">Overview</Eyebrow>
            <h2 className="mt-3 text-3xl leading-tight font-extrabold tracking-tight sm:text-[34px]">
              {service.headline[0]}
              <br />
              <span className="text-gold">{service.headline[1]}</span>
            </h2>
            <div className="mt-5 space-y-4 text-[16px] leading-relaxed">
              {service.overview.map((p) => (
                <p key={p.slice(0, 24)}>
                  <RichText text={p} />
                </p>
              ))}
            </div>

            <Eyebrow className="mt-10">Key Benefits</Eyebrow>
            <ul className="mt-5 grid gap-5 sm:grid-cols-2">
              {service.benefits.map((b) => {
                const Icon = benefitIcons[b.icon];
                return (
                  <li key={b.title} className="flex gap-5 rounded-lg border border-line bg-white p-6 shadow-card">
                    <Icon className="size-10 shrink-0 text-gold" strokeWidth={1.5} />
                    <div>
                      <h3 className="font-bold">{b.title}</h3>
                      <p className="mt-1 text-[14px] leading-snug">{b.text}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </article>

          <aside className="space-y-6">
            <nav aria-label="Our services" className="rounded-lg bg-white p-4 shadow-card">
              <h2 className="px-1 pb-3 text-lg font-bold">Our Services</h2>
              <ul className="space-y-1">
                {services.map((s) => {
                  const active = s.slug === service.slug;
                  return (
                    <li key={s.slug}>
                      <Link
                        href={`/services/${s.slug}`}
                        aria-current={active ? "page" : undefined}
                        className={`flex items-center justify-between rounded-md px-5 py-2.5 text-[14px] font-semibold transition-colors ${
                          active
                            ? "border-l-4 border-gold bg-gold-100 text-navy"
                            : "text-ink hover:bg-cream hover:text-navy"
                        }`}
                      >
                        {s.title}
                        <ChevronRight className="size-4" />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="rounded-lg bg-navy-800 bg-[radial-gradient(ellipse_at_bottom_right,rgba(255,255,255,0.1),transparent_60%)] p-6 text-white">
              <p className="flex items-center gap-3 font-heading text-[11px] font-bold tracking-[0.2em] uppercase">
                <span aria-hidden="true" className="h-0.5 w-8 bg-gold" />
                Have any questions?
              </p>
              <h2 className="mt-3 text-2xl leading-tight font-bold text-white">
                Let&apos;s Discuss Your Financial Goals
              </h2>
              <p className="mt-3 text-[14px] text-white/85">
                Connect with our experts and get personalised guidance for your financial journey.
              </p>
              <ButtonLink href="/enquire-now" size="sm" className="mt-5">
                Get a Free Consultation
              </ButtonLink>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-card">
              <h2 className="text-lg font-bold">Need Assistance?</h2>
              <ul className="mt-4 space-y-4 text-[14px]">
                <li className="flex gap-3">
                  <Phone className="mt-0.5 size-[18px] shrink-0 text-navy" />
                  <span>
                    <a href={site.phoneHref} className="font-bold text-navy hover:text-gold">
                      {site.phone}
                    </a>
                    <span className="block">{site.hours}</span>
                  </span>
                </li>
                <li className="flex gap-3">
                  <Mail className="mt-0.5 size-[18px] shrink-0 text-navy" />
                  <span>
                    <a href={`mailto:${site.email}`} className="font-bold text-navy hover:text-gold">
                      {site.email}
                    </a>
                    <span className="block">We reply within 24 hours</span>
                  </span>
                </li>
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 size-[18px] shrink-0 text-navy" />
                  <span>
                    <span className="font-bold text-navy">{site.city}</span>
                    <span className="block">Meet us at our office</span>
                  </span>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

// The banner and layout shell render instantly; slug-specific content streams in.
export default function ServiceDetailPage({ params }: PageProps<"/services/[slug]">) {
  return (
    <Suspense fallback={<DetailSkeleton withBanner />}>
      <ServiceDetailContent params={params} />
    </Suspense>
  );
}
