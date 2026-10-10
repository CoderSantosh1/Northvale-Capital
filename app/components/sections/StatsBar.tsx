import { stats } from "@/app/data/category";
import type { IconName } from "@/types";
import { Growth, Presentation, Users } from "../ui/Icons";

const icons: Record<IconName, typeof Users> = {
  users: Users,
  presentation: Presentation,
  growth: Growth,
};

export default function StatsBar() {
  return (
    <section aria-label="NorthVale Capital in numbers" className="container-x">
      <div className="relative overflow-hidden rounded-lg bg-navy-800 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.08),transparent_60%)]">
        <ul className="grid divide-y divide-gold/50 py-4 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:py-8">
          {stats.map((s) => {
            const Icon = icons[s.icon];
            return (
              <li key={s.label} className="flex items-center justify-center gap-5 px-6 py-5 sm:py-1">
                <Icon className="size-14 shrink-0 text-gold" strokeWidth={1.4} />
                <div>
                  <p className="font-heading text-3xl font-bold text-white lg:text-[34px]">{s.value}</p>
                  <p className="mt-1 text-[17px] text-white/85">{s.label}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
