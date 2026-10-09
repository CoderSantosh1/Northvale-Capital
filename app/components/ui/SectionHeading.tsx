import type { ReactNode } from "react";

type Props = {
  eyebrow: string;
  title: ReactNode;
  highlight: string;
  /** Put the highlight on its own line (default) or inline after the title. */
  inline?: boolean;
  as?: "h1" | "h2";
  className?: string;
};

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p
      className={`flex items-center gap-4 font-heading text-xs font-bold uppercase tracking-[0.25em] text-navy ${className}`}
    >
      <span aria-hidden="true" className="h-0.5 w-10 bg-gold" />
      {children}
    </p>
  );
}

export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  inline = false,
  as: Tag = "h2",
  className = "",
}: Props) {
  return (
    <div className={className}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <Tag className="mt-4 text-3xl leading-[1.12] font-extrabold tracking-tight sm:text-4xl lg:text-[44px]">
        {title}
        {inline ? " " : <br />}
        <span className="text-gold">{highlight}</span>
      </Tag>
    </div>
  );
}

/** Heading on the left, short description on the right separated by a gold rule. */
export function SplitHeading({
  description,
  ...heading
}: Props & { description: string }) {
  return (
    <div className="grid items-center gap-6 lg:grid-cols-[1.1fr_1fr] lg:gap-12">
      <SectionHeading {...heading} />
      <p className="border-gold/60 text-[15px] leading-relaxed lg:border-l-2 lg:pl-8">{description}</p>
    </div>
  );
}
