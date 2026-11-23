import type { ReactNode } from "react";

/** Round cream badge holding a gold icon, used across feature lists. */
export default function IconBadge({ children, size = "md" }: { children: ReactNode; size?: "sm" | "md" | "lg" }) {
  const sizes = { sm: "size-11 text-xl", md: "size-14 text-[26px]", lg: "size-16 text-[28px]" };
  return (
    <span className={`flex shrink-0 items-center justify-center rounded-full bg-gold-100 text-gold ${sizes[size]}`}>
      {children}
    </span>
  );
}
