import Image from "next/image";
import { processSteps } from "@/app/data/category";
import SectionHeading from "../ui/SectionHeading";

export default function ProcessSection() {
  return (
    <section className="py-20 lg:py-24">
      <div className="container-x grid items-center gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-14">
        <div className="relative aspect-[622/378] overflow-hidden rounded-lg">
          <Image
            src="/about/financial-planning-process.jpg"
            alt="Advisor reviewing financial charts and reports with a client"
            fill
            sizes="(min-width: 1024px) 560px, 100vw"
            className="object-cover"
          />
        </div>
        <div>
          <SectionHeading eyebrow="Our Process" title="A Simple Path to" highlight="Financial Success" />
          <p className="mt-5 max-w-lg text-[16px] leading-relaxed">
            Our proven process ensures clear guidance, personalized strategies and continuous support at every step of
            your investment journey.
          </p>
          <ol className="relative mt-9 grid grid-cols-2 gap-y-8 sm:grid-cols-4">
            <span
              aria-hidden="true"
              className="absolute top-7 right-[12.5%] left-[12.5%] hidden h-0.5 bg-gold sm:block"
            />
            {processSteps.map((step, i) => (
              <li key={step.title} className="relative px-2 text-center">
                <span className="mx-auto flex size-14 items-center justify-center rounded-full bg-navy font-heading text-lg font-bold text-white ring-6 ring-gold-100">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-[15px] leading-snug font-bold">{step.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
