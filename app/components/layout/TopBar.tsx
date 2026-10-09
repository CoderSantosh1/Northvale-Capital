import { site } from "@/app/data/site";
import { Mail, MapPin, Phone } from "../ui/Icons";
import SocialLinks from "../ui/SocialLinks";

export default function TopBar() {
  return (
    <div className="hidden bg-navy-800 text-[13px] text-white md:block">
      <div className="container-x flex h-11 items-center justify-between">
        <ul className="flex items-center divide-x divide-white/20">
          <li className="flex items-center gap-2 pr-5">
            <MapPin className="size-4 text-gold" />
            {site.city}
          </li>
          <li className="pl-5">
            <a href={`mailto:${site.email}`} className="flex items-center gap-2 hover:text-gold">
              <Mail className="size-4 text-gold" />
              {site.email}
            </a>
          </li>
        </ul>
        <div className="flex items-center divide-x divide-white/20">
          <SocialLinks className="gap-4 pr-5" itemClassName="text-[15px] hover:text-gold" />
          <a href={site.phoneHref} className="flex items-center gap-2 pl-5 hover:text-gold">
            <Phone className="size-4 text-gold" />
            {site.phone}
          </a>
        </div>
      </div>
    </div>
  );
}
