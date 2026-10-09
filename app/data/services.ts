export type Service = {
  slug: string;
  title: string;
  summary: string;
  image: string;
  /** Wider image for the detail page; falls back to `image`. */
  detailImage?: string;
  imageAlt: string;
  headline: [string, string];
  overview: string[];
  benefits: { icon: "growth" | "shield" | "users" | "document"; title: string; text: string }[];
};

const defaultBenefits: Service["benefits"] = [
  {
    icon: "growth",
    title: "Personalised Strategies",
    text: "Investment plans tailored to your unique goals.",
  },
  {
    icon: "shield",
    title: "Risk Management",
    text: "Diversify and protect your wealth with expert guidance.",
  },
  {
    icon: "users",
    title: "Long-Term Growth",
    text: "Build sustainable wealth for future generations.",
  },
  {
    icon: "document",
    title: "Expert Advisory",
    text: "Access to seasoned professionals with deep market insights.",
  },
];

export const services: Service[] = [
  {
    slug: "wealth-management",
    title: "Wealth Management",
    summary: "Personalized strategies to help you grow and preserve your wealth for the long term.",
    image: "/services/wealth-management.jpg",
    detailImage: "/services-details/strategic-wealth-management.jpg",
    imageAlt: "Stacks of gold coins rising with a growth arrow representing wealth management",
    headline: ["Strategic Wealth Management", "for a Brighter Tomorrow"],
    overview: [
      "Our **Wealth Management** service is designed to help you grow, preserve, and transfer your wealth with confidence. At NorthVale Capital, we take a personalised approach to understand your financial goals, risk appetite, and time horizon, and then create tailored strategies to build long-term financial security.",
      "Whether you are planning for retirement, funding your child's education, or looking to create generational wealth, our experienced advisors provide expert guidance and comprehensive solutions to help you make informed decisions.",
    ],
    benefits: defaultBenefits,
  },
  {
    slug: "financial-planning",
    title: "Financial Planning",
    summary: "Goal-based financial plans that bring clarity to your income, savings and investments.",
    image: "/blog/plan-your-finances.jpg",
    imageAlt: "Advisor preparing a financial plan with coins and a model house",
    headline: ["Goal-Based Financial Planning", "for Every Life Stage"],
    overview: [
      "Our **Financial Planning** service brings structure and clarity to your money. We map your income, expenses, savings and liabilities, and then build a step-by-step plan that connects your everyday financial decisions to your long-term goals.",
      "From buying a home and funding education to building an emergency corpus, we help you prioritise what matters most and review your plan regularly so it keeps pace with your life.",
    ],
    benefits: defaultBenefits,
  },
  {
    slug: "portfolio-advisory",
    title: "Portfolio Advisory",
    summary: "Expert guidance to help you make informed investment decisions aligned with your goals.",
    image: "/services/investment-advisory.jpg",
    imageAlt: "Investment advisor analysing a market chart with a pen",
    headline: ["Research-Driven Portfolio Advisory", "for Smarter Investing"],
    overview: [
      "Our **Portfolio Advisory** service helps you build a diversified, well-balanced portfolio across equities, debt, mutual funds and alternative assets. Every recommendation is backed by research and aligned with your goals and risk profile.",
      "We continuously monitor your investments, rebalance when markets shift, and keep you informed with clear, transparent reporting so you always know where you stand.",
    ],
    benefits: defaultBenefits,
  },
  {
    slug: "retirement-planning",
    title: "Retirement Planning",
    summary: "Plan today for a financially independent tomorrow with customized retirement solutions.",
    image: "/services/retirement-planning.jpg",
    imageAlt: "Jar of coins labelled retirement with a growing plant",
    headline: ["Retirement Planning", "for a Worry-Free Future"],
    overview: [
      "Our **Retirement Planning** service helps you build the corpus you need to enjoy a financially independent retirement. We estimate your future expenses, account for inflation, and design a disciplined savings and investment plan to get you there.",
      "As you approach retirement, we help you create a reliable income stream and protect your savings, so you can enjoy the years ahead with confidence and peace of mind.",
    ],
    benefits: defaultBenefits,
  },
  {
    slug: "tax-planning",
    title: "Tax Planning",
    summary: "Smart, compliant tax strategies that help you keep more of what you earn.",
    image: "/blog/manage-wealth-changing-economy.jpg",
    imageAlt: "Calculator, pen and financial reports used for tax planning",
    headline: ["Efficient Tax Planning", "to Maximise Your Returns"],
    overview: [
      "Our **Tax Planning** service helps you reduce your tax liability legally and efficiently. We review your income sources and investments and recommend tax-saving instruments that also support your long-term financial goals.",
      "With year-round planning instead of last-minute decisions, you can make the most of available deductions and exemptions while staying fully compliant.",
    ],
    benefits: defaultBenefits,
  },
  {
    slug: "estate-planning",
    title: "Estate & Planning",
    summary: "Protect your assets and create a lasting legacy for your loved ones.",
    image: "/services/estate-legacy-planning.jpg",
    imageAlt: "Model house beside stacked coins representing estate and legacy planning",
    headline: ["Estate & Legacy Planning", "to Protect What Matters"],
    overview: [
      "Our **Estate & Legacy Planning** service ensures your wealth is transferred smoothly and according to your wishes. We help you organise your assets, nominations and succession plans to minimise disputes and delays.",
      "Working alongside legal and tax professionals, we help you build a legacy that supports your family and the causes you care about for generations to come.",
    ],
    benefits: defaultBenefits,
  },
];

/** The four services featured on the home page, in mockup order. */
export const featuredServices = ["wealth-management", "retirement-planning", "portfolio-advisory", "estate-planning"].map(
  (slug) => services.find((s) => s.slug === slug)!,
);

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
