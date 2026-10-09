import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  /** Extra crumbs between Home and the current page. */
  trail?: { label: string; href: string }[];
};

export default function PageBanner({ title, trail = [] }: Props) {
  return (
    <section className="relative overflow-hidden bg-navy-800">
      <div className="absolute inset-y-0 right-0 w-full md:w-[60%]">
        <Image
          src="/common/page-banner.jpg"
          alt=""
          fill
          priority
          sizes="(min-width: 768px) 60vw, 100vw"
          className="object-cover object-center"
        />
        <div aria-hidden="true" className="absolute inset-y-0 left-0 hidden w-1/2 bg-linear-to-r from-navy-800 to-transparent md:block" />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-navy-800/70"
      />
      <div className="container-x relative flex min-h-[220px] flex-col items-center justify-center py-16 text-center sm:min-h-[300px]">
        <h1 className="text-4xl font-extrabold tracking-tight text-white uppercase sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <nav aria-label="Breadcrumb" className="mt-4">
          <ol className="flex flex-wrap items-center justify-center gap-3 font-heading text-sm font-bold tracking-wide text-white/80 uppercase">
            <li>
              <Link href="/" className="hover:text-gold">
                Home
              </Link>
            </li>
            {trail.map((crumb) => (
              <li key={crumb.href} className="flex items-center gap-3">
                <span aria-hidden="true" className="h-0.5 w-4 bg-gold" />
                <Link href={crumb.href} className="hover:text-gold">
                  {crumb.label}
                </Link>
              </li>
            ))}
            <li className="flex items-center gap-3">
              <span aria-hidden="true" className="h-0.5 w-4 bg-gold" />
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
