import categoryData from "./category.json";
import type {
  AppData,
  BankingPartner,
  BlogPost,
  CommonData,
  FaqItem,
  HeroData,
  NavItem,
  NorthvaleSectionsData,
  ProcessStep,
  QuickLink,
  Service,
  SiteConfig,
  StatItem,
  TeamMember,
  Testimonial,
} from "@/types";

export type {
  AppData,
  BankingPartner,
  BlogPost,
  CommonData,
  FaqItem,
  HeroData,
  NavItem,
  NorthvaleSectionsData,
  ProcessStep,
  QuickLink,
  Service,
  SiteConfig,
  StatItem,
  TeamMember,
  Testimonial,
} from "@/types";

const rawData = categoryData as unknown as NorthvaleSectionsData;
const sec = rawData.NorthvaleCapital.sections;

export const common: CommonData = sec.Common.variants.NorthvaleCommon1;
export const site: SiteConfig = sec.Site.variants.NorthvaleSite1;
export const hero: HeroData = sec.Hero.variants.NorthvaleHero1;
export const mainNav: NavItem[] = sec.MainNav.variants.NorthvaleMainNav1.items;
export const quickLinks: QuickLink[] = sec.QuickLinks.variants.NorthvaleQuickLinks1.items;
export const stats: StatItem[] = sec.Stats.variants.NorthvaleStats1.items;
export const processSteps: ProcessStep[] = sec.ProcessSteps.variants.NorthvaleProcessSteps1.steps;
export const services: Service[] = sec.Services.variants.NorthvaleServices1.services;
export const bankingPartners: BankingPartner[] = sec.BankingPartners.variants.NorthvaleBankingPartners1.partners;
export const faqs: FaqItem[] = sec.Faqs.variants.NorthvaleFaqs1.faqs;
export const blogs: BlogPost[] = sec.Blogs.variants.NorthvaleBlogs1.blogs;
export const team: TeamMember[] = sec.Team.variants.NorthvaleTeam1.team;
export const testimonials: Testimonial[] = sec.Testimonials.variants.NorthvaleTestimonials1.testimonials;

export const appData: AppData = {
  common,
  site,
  hero,
  mainNav,
  quickLinks,
  stats,
  processSteps,
  services,
  bankingPartners,
  faqs,
  blogs,
  team,
  testimonials,
};

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