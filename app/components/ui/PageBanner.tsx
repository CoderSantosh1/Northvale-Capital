import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  /** Extra crumbs between Home and the current page. */
  trail?: { label: string; href: string }[];
};

function Dash() {
  return <span aria-hidden="true" className="h-0.5 w-4 bg-[#3fa7bf]" />;
}

export default function PageBanner({ title, trail = [] }: Props) {
  return (
    <section className="relative overflow-hidden bg-[#0b2d3a]">
      <Image
        src="/common/page-banner.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-[75%_center]"
      />

      {/* Teal tint so the white title stays readable on any part of the photo */}
      <div aria-hidden="true" className="absolute inset-0 bg-[#0b2d3a]/35" />

      {/* Soft blurred fade under the header, as in the design */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-7 bg-linear-to-b from-white/80 via-white/30 to-transparent blur-[3px]"
      />

      <div className="container-x relative flex min-h-[220px] flex-col items-center justify-center py-14 text-center sm:min-h-[280px] lg:min-h-[320px]">
        <h1 className="font-heading text-4xl font-extrabold tracking-tight text-white uppercase drop-shadow-sm sm:text-5xl lg:text-[64px] lg:leading-none">
          {title}
        </h1>

        <nav aria-label="Breadcrumb" className="mt-5">
          <ol className="flex flex-wrap items-center justify-center gap-3 font-heading text-sm font-bold tracking-wide text-white/85 uppercase">
            <li>
              <Link href="/" className="hover:text-gold">
                Home
              </Link>
            </li>
            {trail.map((crumb) => (
              <li key={crumb.href} className="flex items-center gap-3">
                <Dash />
                <Link href={crumb.href} className="hover:text-gold">
                  {crumb.label}
                </Link>
              </li>
            ))}
            <li className="flex items-center gap-3">
              <Dash />
              <span aria-current="page" className="text-white">
                {title}
              </span>
            </li>
          </ol>
        </nav>
      </div>
    </section>
  );
}
