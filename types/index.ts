export interface SectionProps<T = unknown> {
  data?: T;
  className?: string;
  contentClassName?: string;
  variant?: string;
  isEditable?: boolean;
  onUpdate?: (newData: Partial<T>) => void;
}

export type ContactInfo = {
  addressLine1: string;
  addressLine2: string;
  phone: string;
  phoneUrl: string;
  email: string;
};

export type FooterInfo = {
  logo: string;
  logoAlt: string;
};

export type CommonData = {
  contactInfo: ContactInfo;
  footer: FooterInfo;
};

export type SiteAddress = {
  line1: string;
  line2: string;
  line3: string;
};

export type SocialLinks = {
  linkedin: string;
  facebook: string;
  instagram: string;
  youtube: string;
};

export type SiteConfig = {
  name: string;
  legalName: string;
  tagline: string;
  url: string;
  description: string;
  phone: string;
  phoneHref: string;
  email: string;
  city: string;
  address: SiteAddress;
  hours: string;
  mapEmbed: string;
  social: SocialLinks;
};

export type HeroData = {
  eyebrow: string;
  headline: [string, string, string];
  description: string;
  image: string;
  imageAlt: string;
  primaryCta: QuickLink;
  secondaryCta: QuickLink;
};

export type NavItem = {
  label: string;
  href: string;
  dropdown?: "services" | "team";
};

export type QuickLink = {
  label: string;
  href: string;
};

export type IconName = "users" | "presentation" | "growth";

export type StatItem = {
  value: string;
  label: string;
  icon: IconName;
};

export type ProcessStep = {
  title: string;
  text: string;
};

export type Testimonial = {
  name: string;
  role: string;
  image: string;
  short: string;
  quote: string;
};

export type ServiceBenefit = {
  icon: "growth" | "shield" | "users" | "document";
  title: string;
  text: string;
};

export type Service = {
  slug: string;
  title: string;
  summary: string;
  image: string;
  detailImage?: string;
  imageAlt: string;
  headline: [string, string];
  overview: string[];
  benefits: ServiceBenefit[];
};

export type BlogPoint = {
  title: string;
  text: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  headline: [string, string];
  category: string;
  date: string;
  author: string;
  readTime: string;
  excerpt: string;
  image: string;
  coverImage: string;
  imageAlt: string;
  intro: string;
  points: BlogPoint[];
  conclusion: string;
};

export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  image: string;
  portrait: string;
  email: string;
  linkedin: string;
  bio: string[];
  expertise: { icon: "growth" | "pie" | "coins" | "document"; title: string; text: string }[];
  education: { title: string; institute: string }[];
};

export type BankingPartner = {
  name: string;
  logo: string;
};

export type FaqItem = {
  q: string;
  a: string;
};

export type AppData = {
  common: CommonData;
  site: SiteConfig;
  hero: HeroData;
  mainNav: NavItem[];
  quickLinks: QuickLink[];
  stats: StatItem[];
  processSteps: ProcessStep[];
  services: Service[];
  bankingPartners: BankingPartner[];
  faqs: FaqItem[];
  blogs: BlogPost[];
  team: TeamMember[];
  testimonials: Testimonial[];
};

export type NorthvaleSectionsData = {
  NorthvaleCapital: {
    sections: {
      Common: { variants: { NorthvaleCommon1: CommonData } };
      Site: { variants: { NorthvaleSite1: SiteConfig } };
      Hero: { variants: { NorthvaleHero1: HeroData } };
      MainNav: { variants: { NorthvaleMainNav1: { items: NavItem[] } } };
      QuickLinks: { variants: { NorthvaleQuickLinks1: { items: QuickLink[] } } };
      Stats: { variants: { NorthvaleStats1: { items: StatItem[] } } };
      ProcessSteps: { variants: { NorthvaleProcessSteps1: { steps: ProcessStep[] } } };
      Services: { variants: { NorthvaleServices1: { services: Service[] } } };
      BankingPartners: { variants: { NorthvaleBankingPartners1: { partners: BankingPartner[] } } };
      Faqs: { variants: { NorthvaleFaqs1: { faqs: FaqItem[] } } };
      Blogs: { variants: { NorthvaleBlogs1: { blogs: BlogPost[] } } };
      Team: { variants: { NorthvaleTeam1: { team: TeamMember[] } } };
      Testimonials: { variants: { NorthvaleTestimonials1: { testimonials: Testimonial[] } } };
    };
  };
};

export const commonData: CommonData = {
  contactInfo: {
    addressLine1: "1234 Main Street, Suite 100",
    addressLine2: "Springfield, IL 62701, USA",
    phone: "+1 0000000",
    phoneUrl: "tel:+10000000",
    email: "info@xyz.com",
  },
  footer: {
    logo: "/common/northvale-capital-logo-white.png",
    logoAlt: "Northvale Capital",
  },
};
