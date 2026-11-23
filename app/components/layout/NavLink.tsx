"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Suspense, type ReactNode } from "react";

type Props = {
  href: string;
  /** Match nested routes too (e.g. /services/... for /services). */
  matchNested?: boolean;
  className: (active: boolean) => string;
  onClick?: () => void;
  children: ReactNode;
};

function isActive(pathname: string, href: string, matchNested: boolean) {
  if (href === "/") return pathname === "/";
  return pathname === href || (matchNested && pathname.startsWith(`${href}/`));
}

function ActiveLink({ href, matchNested = true, className, onClick, children }: Props) {
  const active = isActive(usePathname(), href, matchNested);
  return (
    <Link href={href} onClick={onClick} className={className(active)} aria-current={active ? "page" : undefined}>
      {children}
    </Link>
  );
}

/**
 * Link that highlights itself on the current route. `usePathname` can suspend on
 * routes with unknown dynamic params, so only this link sits behind Suspense —
 * the surrounding menu stays interactive.
 */
export default function NavLink(props: Props) {
  return (
    <Suspense
      fallback={
        <Link href={props.href} onClick={props.onClick} className={props.className(false)}>
          {props.children}
        </Link>
      }
    >
      <ActiveLink {...props} />
    </Suspense>
  );
}
