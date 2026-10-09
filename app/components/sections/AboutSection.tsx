import Image from "next/image";
import ButtonLink from "../ui/ButtonLink";
import SectionHeading from "../ui/SectionHeading";

export default function AboutSection({ showButton = true }: { showButton?: boolean }) {
  return (
    <section className="bg-cream py-20 lg:py-24">
      <div className="container-x grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
        <div className="relative mx-auto w-full max-w-[560px] pt-6 pr-6 pb-6 pl-6 sm:pl-9">
          <span aria-hidden="true" className="absolute top-0 left-0 h-1/2 w-1/4 rounded-lg bg-navy-800" />
          <span aria-hidden="true" className="absolute right-0 bottom-0 h-1/4 w-1/3 rounded-lg bg-gold" />
          <div className="relative aspect-[563/583] overflow-hidden rounded-lg">
            <Image
              src="/about/trusted-wealth-advisor-meeting.jpg"
              alt="NorthVale Capital advisor discussing an investment plan with a client"
              fill
              sizes="(min-width: 1024px) 560px, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <div>
          <SectionHeading eyebrow="About Us" title="Your Trusted Partner" highlight="in Wealth Creation" />
          <div className="mt-6 space-y-5 text-[17px] leading-relaxed">
            <p>
              At <strong className="text-navy">NorthVale Capital</strong>, we believe that financial success is built on
              clarity, discipline, and the right guidance. Our goal is to help individuals and businesses make informed
              investment decisions that create long-term value and financial security.
            </p>
            <p>
              With a client-first mindset and deep market expertise, we provide personalized investment solutions
              tailored to your goals. Whether you are planning for the future, building your portfolio, or seeking
              strategic wealth growth, we are here to guide you at every step with integrity, transparency, and a
              long-term perspective.
            </p>
          </div>
          {showButton && (
            <ButtonLink href="/about" className="mt-8">
              Learn More About Us
            </ButtonLink>
          )}
        </div>
      </div>
    </section>
  );
}
