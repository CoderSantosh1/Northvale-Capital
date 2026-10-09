export const site = {
  name: "NorthVale Capital",
  legalName: "NorthVale Capital Pvt. Ltd.",
  tagline: "Plan Today | Grow Tomorrow",
  url: "https://www.northvalecapital.com",
  description:
    "NorthVale Capital helps individuals and businesses build, protect and grow their wealth with expert investment advisory, financial planning and personalised wealth management solutions.",
  phone: "+91 98765 43210",
  phoneHref: "tel:+919876543210",
  email: "info@northvalecapital.com",
  city: "Mumbai, India",
  address: {
    line1: "414, Oberoi Commerz II,",
    line2: "Near Oberoi Mall, Goregaon (East),",
    line3: "Mumbai - 400063, India",
  },
  hours: "Mon - Sat: 9:00 AM - 6:00 PM",
  mapEmbed:
    "https://www.google.com/maps?q=Oberoi+Commerz+II,+Goregaon+East,+Mumbai+400063&output=embed",
  // Replace with the real profile URLs.
  social: {
    linkedin: "https://www.linkedin.com/",
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
    youtube: "https://www.youtube.com/",
  },
};

export type NavItem = { label: string; href: string; dropdown?: "services" | "team" };

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Team", href: "/team", dropdown: "team" },
  { label: "Services", href: "/services", dropdown: "services" },
  { label: "Partners", href: "/banking-partners" },
  { label: "Blog", href: "/blog" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact Us", href: "/contact" },
];

export const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Team", href: "/team" },
  { label: "Services", href: "/services" },
  { label: "Partners", href: "/banking-partners" },
  { label: "Blog", href: "/blog" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact Us", href: "/contact" },
];

export const stats = [
  { value: "500+", label: "Happy Clients", icon: "users" },
  { value: "15+", label: "Years of Experience", icon: "presentation" },
  { value: "₹2,000+ Cr", label: "Assets Under Advisory", icon: "growth" },
] as const;

export const processSteps = [
  {
    title: "Understand Your Goals",
    text: "We learn about your needs, priorities and future aspirations.",
  },
  {
    title: "Create a Strategy",
    text: "We design a tailored financial plan to match your goals.",
  },
  {
    title: "Implement Solutions",
    text: "We put the right investment strategies into action.",
  },
  {
    title: "Monitor & Grow",
    text: "We review, adapt and help you stay on track for long-term success.",
  },
];
