import Image from "next/image";
import Link from "next/link";
import type { TeamMember } from "@/app/data/team";
import { ArrowRight } from "../ui/Icons";

export default function TeamCard({ member }: { member: TeamMember }) {
  return (
    <article className="group overflow-hidden rounded-lg bg-white shadow-card">
      <Link href={`/team/${member.slug}`} className="block">
        <div className="relative aspect-[282/178] overflow-hidden bg-cream">
          <Image
            src={member.image}
            alt={`${member.name}, ${member.role}`}
            fill
            sizes="(min-width: 1024px) 282px, (min-width: 640px) 50vw, 100vw"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="flex items-center justify-between gap-3 px-4 py-4">
          <div>
            <h3 className="text-lg font-bold">{member.name}</h3>
            <p className="mt-0.5 text-[13px]">{member.role}</p>
          </div>
          <span className="flex size-8 shrink-0 items-center justify-center rounded border border-gold text-navy transition-colors group-hover:bg-gold">
            <ArrowRight className="size-4" />
          </span>
        </div>
      </Link>
    </article>
  );
}
