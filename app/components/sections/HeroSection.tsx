import Image from "next/image";
import ButtonLink from "../ui/ButtonLink";
import { hero } from "@/app/data/category";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#141c22]">
      <div className="absolute inset-y-0 right-0 w-full lg:w-[62%]">
        <Image
          src={hero.image}
          alt={hero.imageAlt}
          fill
          priority
          sizes="(min-width: 1024px) 62vw, 100vw"
          className="object-cover object-[70%_center]"
        />
        <div aria-hidden="true" className="absolute inset-y-0 left-0 hidden w-2/5 bg-linear-to-r from-[#141c22] to-transparent lg:block" />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-linear-to-r from-[#141c22] from-0% via-[#141c22]/90 via-45% to-transparent to-80% max-lg:via-[#141c22]/80"
      />
      <div className="container-x relative flex min-h-[540px] items-center py-20 lg:min-h-[600px]">
        <div className="max-w-xl">
          <p className="flex items-center gap-4 font-heading text-xs font-bold tracking-[0.3em] text-white uppercase sm:text-[13px]">
            <span aria-hidden="true" className="h-[3px] w-9 bg-gold" />
            {hero.eyebrow}
          </p>
          <h1 className="mt-5 text-[40px] leading-[1.08] font-extrabold tracking-tight text-white sm:text-6xl lg:text-[64px]">
            {hero.headline[0]}
            <br />
            <span className="text-gold">{hero.headline[1]}</span>
            <br />
            <span className="text-[0.72em]">{hero.headline[2]}</span>
          </h1>
          <p className="mt-5 max-w-lg text-[17px] leading-relaxed text-white/90">
            {hero.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <ButtonLink href={hero.primaryCta.href}>{hero.primaryCta.label}</ButtonLink>
            <ButtonLink href={hero.secondaryCta.href} variant="outline" arrow={false} className="min-w-[168px]">
              {hero.secondaryCta.label}
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
