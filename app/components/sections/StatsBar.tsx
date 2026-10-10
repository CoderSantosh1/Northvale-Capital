
"use client";

import { useEffect, useRef, useState } from "react";
import { stats } from "@/app/data/category";
import type { IconName } from "@/types";
import { Growth, Presentation, Users } from "../ui/Icons";

const icons: Record<IconName, typeof Users> = {
  users: Users,
  presentation: Presentation,
  growth: Growth,
};

function AnimatedNumber({ value }: { value: string | number }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  // Extract numeric value, including decimals and comma-formatted numbers
  const numericValue =
    typeof value === "number"
      ? value
      : Number(value.replace(/,/g, "").match(/[\d.]+/)?.[0] ?? 0);

  const suffix =
    typeof value === "string"
      ? value.replace(/[\d,.]+/g, "")
      : "";

  const hasDecimal =
    typeof value === "string" && /\.\d+/.test(value);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    let frameId: number;
    const duration = 1800;
    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;

      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 4);

      setCount(numericValue * easedProgress);

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      }
    };

    frameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frameId);
  }, [started, numericValue]);

  return (
    <span ref={ref}>
      {count.toLocaleString("en-IN", {
        minimumFractionDigits: hasDecimal ? 1 : 0,
        maximumFractionDigits: hasDecimal ? 1 : 0,
      })}
      {suffix}
    </span>
  );
}

export default function StatsBar() {
  return (
    <section
      aria-label="NorthVale Capital in numbers"
      className="container-x"
    >
      <div className="relative overflow-hidden rounded-lg bg-navy-800 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.08),transparent_60%)]">
        <ul className="grid divide-y divide-gold/50 py-4 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:py-8">
          {stats.map((s) => {
            const Icon = icons[s.icon];

            return (
              <li
                key={s.label}
                className="flex items-center justify-center gap-5 px-6 py-5 sm:py-1"
              >
                <Icon
                  className="size-14 shrink-0 text-gold"
                  strokeWidth={1.4}
                />

                <div>
                  <p className="font-heading text-3xl font-bold text-white lg:text-[34px]">
                    <AnimatedNumber value={s.value} />
                  </p>

                  <p className="mt-1 text-[17px] text-white/85">
                    {s.label}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
