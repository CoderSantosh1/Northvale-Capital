import { site } from "@/app/data/site";
import { Facebook, Instagram, Linkedin, Youtube } from "./Icons";

const items = [
  { label: "LinkedIn", href: site.social.linkedin, Icon: Linkedin },
  { label: "Facebook", href: site.social.facebook, Icon: Facebook },
  { label: "Instagram", href: site.social.instagram, Icon: Instagram },
  { label: "YouTube", href: site.social.youtube, Icon: Youtube },
];

export default function SocialLinks({ className = "", itemClassName = "" }: { className?: string; itemClassName?: string }) {
  return (
    <ul className={`flex items-center ${className}`}>
      {items.map(({ label, href, Icon }) => (
        <li key={label}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`NorthVale Capital on ${label}`}
            className={`flex items-center justify-center transition-colors ${itemClassName}`}
          >
            <Icon />
          </a>
        </li>
      ))}
    </ul>
  );
}
