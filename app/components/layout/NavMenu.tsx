"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, type ReactNode } from "react";
import { mainNav, services, site, team, type NavItem } from "@/app/data/category";
import { ArrowRight, ChevronDown, Close, Mail, Menu, Phone } from "../ui/Icons";
import NavLink from "./NavLink";

const desktopLinkClass = (active: boolean) =>
  `relative flex items-center gap-1 py-8 font-heading text-[14px] font-semibold xl:gap-1.5 xl:text-[15px] transition-colors hover:text-gold ${
    active
      ? "text-gold after:absolute after:inset-x-0 after:bottom-5 after:h-0.5 after:rounded after:bg-gold"
      : "text-ink"
  }`;

const dropdownLinkClass = (active: boolean) =>
  `block px-5 py-2.5 text-[15px] font-semibold transition-colors hover:bg-gold-100/60 hover:text-navy ${
    active ? "text-gold" : "text-ink"
  }`;

const teamLinkClass = (active: boolean) =>
  `group/member flex items-center gap-3.5 rounded-lg px-3 py-2.5 transition-colors hover:bg-gold-100/60 ${
    active ? "bg-gold-100/60" : ""
  }`;

const mobileLinkClass = (active: boolean) =>
  `block flex-1 py-3.5 font-heading font-semibold ${active ? "text-gold" : "text-ink"}`;

const panelClass =
  "invisible absolute top-full left-1/2 z-50 -translate-x-1/2 translate-y-2 rounded-lg border-t-2 border-gold bg-white opacity-0 shadow-card transition-all group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100";

function TeamAvatar({ src, name, size }: { src: string; name: string; size: number }) {
  return (
    <Image
      src={src}
      alt={name}
      width={size}
      height={size}
      className="shrink-0 rounded-full object-cover object-top ring-2 ring-gold/40"
      style={{ width: size, height: size }}
    />
  );
}

function DesktopDropdown({ item }: { item: NavItem }) {
  if (item.dropdown === "team") {
    return (
      <div className={`${panelClass} w-80 p-3`}>
        <p className="px-3 pt-1 pb-2 font-heading text-[11px] font-bold tracking-[0.2em] text-muted uppercase">
          Meet Our Experts
        </p>
        <ul>
          {team.map((m) => (
            <li key={m.slug}>
              <NavLink href={`/team/${m.slug}`} matchNested={false} className={teamLinkClass}>
                <TeamAvatar src={m.image} name={m.name} size={44} />
                <span className="min-w-0">
                  <span className="block font-heading text-[15px] font-bold text-navy group-hover/member:text-gold">
                    {m.name}
                  </span>
                  <span className="block truncate text-[13px] text-muted">{m.role}</span>
                </span>
              </NavLink>
            </li>
          ))}
        </ul>
        <Link
          href="/team"
          className="mt-2 flex items-center justify-center gap-2 rounded-md bg-navy py-2.5 font-heading text-sm font-bold text-white transition-colors hover:bg-gold hover:text-navy"
        >
          View Full Team <ArrowRight className="size-4" />
        </Link>
      </div>
    );
  }

  return (
    <ul className={`${panelClass} w-64 py-3`}>
      {services.map((s) => (
        <li key={s.slug}>
          <NavLink href={`/services/${s.slug}`} matchNested={false} className={dropdownLinkClass}>
            {s.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

function MobileSubmenu({ item, onNavigate }: { item: NavItem; onNavigate: () => void }) {
  const links: { href: string; label: string; avatar?: ReactNode }[] =
    item.dropdown === "team"
      ? team.map((m) => ({
          href: `/team/${m.slug}`,
          label: m.name,
          avatar: <TeamAvatar src={m.image} name={m.name} size={34} />,
        }))
      : services.map((s) => ({ href: `/services/${s.slug}`, label: s.title }));

  return (
    <ul className="mb-3 space-y-1 border-l-2 border-gold pl-4">
      {links.map((l) => (
        <li key={l.href}>
          <Link href={l.href} onClick={onNavigate} className="flex items-center gap-3 py-1.5 text-[15px] text-muted">
            {l.avatar}
            {l.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function NavMenu() {
  const [open, setOpen] = useState(false);
  const [openSub, setOpenSub] = useState<string | null>(null);

  const close = () => {
    setOpen(false);
    setOpenSub(null);
  };

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Desktop */}
      <nav aria-label="Main" className="hidden flex-1 justify-center lg:flex">
        <ul className="flex items-center gap-5 xl:gap-7">
          {mainNav.map((item) =>
            item.dropdown ? (
              <li key={item.href} className="group relative">
                <NavLink href={item.href} className={desktopLinkClass}>
                  {item.label}
                  <ChevronDown className="size-4 transition-transform group-hover:rotate-180" />
                </NavLink>
                <DesktopDropdown item={item} />
              </li>
            ) : (
              <li key={item.href}>
                <NavLink href={item.href} className={desktopLinkClass}>
                  {item.label}
                </NavLink>
              </li>
            ),
          )}
        </ul>
      </nav>

      {/* Mobile toggle */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        aria-expanded={open}
        aria-controls="mobile-menu"
        className="ml-auto flex size-11 items-center justify-center rounded-md bg-navy text-white lg:hidden"
      >
        <Menu className="size-6" />
      </button>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-[60] bg-navy-900/60 transition-opacity lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={close}
        aria-hidden="true"
      />
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        className={`fixed inset-y-0 right-0 z-[70] flex w-[86%] max-w-sm flex-col bg-white shadow-xl transition-transform duration-300 lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-line px-5 py-4">
          <span className="font-heading text-lg font-bold text-navy">Menu</span>
          <button
            type="button"
            onClick={close}
            aria-label="Close menu"
            className="flex size-10 items-center justify-center rounded-md bg-gold-100 text-navy"
          >
            <Close className="size-5" />
          </button>
        </div>
        <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-5 py-3">
          <ul className="divide-y divide-line">
            {mainNav.map((item) => {
              const subOpen = openSub === item.href;
              return (
                <li key={item.href}>
                  <div className="flex items-center justify-between">
                    <NavLink href={item.href} onClick={close} className={mobileLinkClass}>
                      {item.label}
                    </NavLink>
                    {item.dropdown && (
                      <button
                        type="button"
                        onClick={() => setOpenSub(subOpen ? null : item.href)}
                        aria-label={`Toggle ${item.label.toLowerCase()} menu`}
                        aria-expanded={subOpen}
                        className="flex size-9 items-center justify-center text-navy"
                      >
                        <ChevronDown className={`size-5 transition-transform ${subOpen ? "rotate-180" : ""}`} />
                      </button>
                    )}
                  </div>
                  {item.dropdown && subOpen && <MobileSubmenu item={item} onNavigate={close} />}
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="space-y-3 border-t border-line p-5 text-sm">
          <a href={site.phoneHref} className="flex items-center gap-2 text-ink">
            <Phone className="size-4 text-gold" /> {site.phone}
          </a>
          <a href={`mailto:${site.email}`} className="flex items-center gap-2 text-ink">
            <Mail className="size-4 text-gold" /> {site.email}
          </a>
          <Link
            href="/enquire-now"
            onClick={close}
            className="mt-2 block rounded-md bg-gold py-3 text-center font-heading font-bold text-navy"
          >
            Enquire Now
          </Link>
        </div>
      </div>
    </>
  );
}
