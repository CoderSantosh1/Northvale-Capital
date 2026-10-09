import Image from "next/image";
import Link from "next/link";
import type { Service } from "@/app/data/services";
import { ArrowRight } from "../ui/Icons";

export default function ServiceCard({ service }: { service: Service }) {
  const href = `/services/${service.slug}`;
  return (
    <article className="group flex flex-col overflow-hidden rounded-lg border border-line bg-white transition-shadow hover:shadow-card">
      <Link href={href} tabIndex={-1} aria-hidden="true" className="relative block aspect-[284/183] overflow-hidden">
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          sizes="(min-width: 1024px) 284px, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </Link>
      <div className="flex flex-1 flex-col px-5 pt-6 pb-6">
        <h3 className="text-xl font-bold tracking-tight">
          <Link href={href} className="hover:text-gold">
            {service.title}
          </Link>
        </h3>
        <span aria-hidden="true" className="mt-3.5 block h-[3px] w-9 rounded bg-gold" />
        <p className="mt-4 flex-1 text-[15px] leading-relaxed">{service.summary}</p>
        <Link
          href={href}
          aria-label={`Learn more about ${service.title}`}
          className="mt-5 inline-flex items-center gap-4 self-start font-heading text-[15px] font-bold text-navy"
        >
          <span className="border-b-2 border-gold pb-1">Learn More</span>
          <span className="flex size-8 items-center justify-center rounded-full bg-gold-100 transition-colors group-hover:bg-gold">
            <ArrowRight className="size-4" />
          </span>
        </Link>
      </div>
    </article>
  );
}
