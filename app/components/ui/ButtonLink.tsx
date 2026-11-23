import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "./Icons";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "gold" | "outline";
  size?: "sm" | "md";
  arrow?: boolean;
  className?: string;
};

const variants = {
  gold: "bg-gold text-navy hover:bg-gold-600",
  outline: "border-2 border-gold text-white hover:bg-gold hover:text-navy",
};

const sizes = {
  sm: "px-5 py-2.5 text-sm",
  md: "px-6 py-3.5 text-[15px]",
};

export default function ButtonLink({
  href,
  children,
  variant = "gold",
  size = "md",
  arrow = true,
  className = "",
}: Props) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2.5 rounded-md font-heading font-bold transition-colors ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
      {arrow && <ArrowRight className="size-4" />}
    </Link>
  );
}
