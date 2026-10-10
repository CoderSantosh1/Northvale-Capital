import categoryData from "./category.json";
import type {
  AppData,
  BlogPost,
  HeroData,
  NavItem,
  ProcessStep,
  QuickLink,
  Service,
  SiteConfig,
  StatItem,
  TeamMember,
  Testimonial,
} from "@/types";

export type { AppData, BlogPost, HeroData, NavItem, ProcessStep, QuickLink, Service, SiteConfig, StatItem, TeamMember, Testimonial } from "@/types";

const appData = categoryData as AppData;

export const site: SiteConfig = appData.site;
export const hero: HeroData = appData.hero;
export const mainNav: NavItem[] = appData.mainNav as NavItem[];
export const quickLinks: QuickLink[] = appData.quickLinks as QuickLink[];
export const stats: StatItem[] = appData.stats as StatItem[];
export const processSteps: ProcessStep[] = appData.processSteps as ProcessStep[];
export const services: Service[] = appData.services as Service[];
export const bankingPartners = appData.bankingPartners as { name: string; logo: string }[];
export const faqs = appData.faqs as { q: string; a: string }[];
export const blogs: BlogPost[] = appData.blogs as BlogPost[];
export const team: TeamMember[] = appData.team as TeamMember[];
export const testimonials: Testimonial[] = appData.testimonials as Testimonial[];

export const featuredServices = ["wealth-management", "retirement-planning", "portfolio-advisory", "estate-planning"].map(
  (slug) => services.find((s) => s.slug === slug)!,
);

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

export function getBlog(slug: string) {
  return blogs.find((b) => b.slug === slug);
}

export function getTeamMember(slug: string) {
  return team.find((m) => m.slug === slug);
}

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export function formatBlogDate(iso: string) {
  const [y, m, d] = iso.split("-");
  const month = MONTHS[Number(m) - 1];
  return { day: d, monthYear: `${month} ${y}`, full: `${d} ${month} ${y}` };
}
