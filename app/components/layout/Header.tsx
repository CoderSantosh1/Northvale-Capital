import Image from "next/image";
import Link from "next/link";
import { site } from "@/app/data/site";
import ButtonLink from "../ui/ButtonLink";
import TopBar from "./TopBar";
import NavMenu from "./NavMenu";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 shadow-[0_2px_12px_rgba(13,52,64,0.06)]">
      <TopBar />
      <div className="bg-white">
        <div className="container-x flex h-[76px] items-center justify-between gap-6 md:h-[86px]">
          <Link href="/" aria-label={`${site.name} home`} className="shrink-0">
            <Image
              src="/common/northvale-capital-logo.png"
              alt={`${site.name} logo`}
              width={2035}
              height={773}
              priority
              className="h-12 w-auto md:h-[60px]"
            />
          </Link>
          <NavMenu />
          <div className="hidden lg:block">
            <ButtonLink href="/enquire-now" size="sm">
              Enquire Now
            </ButtonLink>
          </div>
        </div>
      </div>
    </header>
  );
}
