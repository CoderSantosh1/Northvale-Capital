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

export const team: TeamMember[] = [
  {
    slug: "rahul-mehta",
    name: "Rahul Mehta",
    role: "Founder & Chief Investment Officer",
    image: "/team/rahul-mehta.jpg",
    portrait: "/team-detail/rahul-mehta-founder-cio.jpg",
    email: "rahul@northvalecapital.com",
    linkedin: "linkedin.com/in/rahulmehta",
    bio: [
      "Rahul Mehta is the Founder & Chief Investment Officer at NorthVale Capital, with over 15 years of experience in investment advisory, financial planning and wealth management. He is passionate about helping individuals, families and businesses achieve their financial goals through disciplined strategies, deep market insights and a client-first approach.",
      "Under his leadership, NorthVale Capital has grown into a trusted advisory firm known for its transparency, integrity and personalised financial solutions. Rahul combines industry expertise with a practical, long-term perspective to create strategies that protect wealth today and build opportunities for tomorrow.",
    ],
    expertise: [
      { icon: "growth", title: "Wealth Management", text: "Building and preserving long-term wealth." },
      { icon: "pie", title: "Financial Planning", text: "Goal-based planning for a secure future." },
      { icon: "coins", title: "Portfolio Advisory", text: "Diversified strategies for sustainable growth." },
      { icon: "document", title: "Estate Planning", text: "Wealth transfer with confidence." },
    ],
    education: [
      { title: "MBA in Finance", institute: "Indian Institute of Management (IIM)" },
      { title: "Chartered Financial Analyst (CFA)", institute: "CFA Institute, USA" },
      { title: "Certified Financial Planner (CFP)", institute: "Financial Planning Standards Board" },
      {
        title: "Investment Management Certification",
        institute: "Global Association of Risk Professionals (GARP)",
      },
    ],
  },
  {
    slug: "priya-sharma",
    name: "Priya Sharma",
    role: "Senior Investment Advisor",
    image: "/team/priya-sharma.jpg",
    portrait: "/team/priya-sharma.jpg",
    email: "priya@northvalecapital.com",
    linkedin: "linkedin.com/in/priyasharma",
    bio: [
      "Priya Sharma is a Senior Investment Advisor at NorthVale Capital with over a decade of experience helping families and working professionals plan their finances. She specialises in goal-based investing and building diversified portfolios that balance growth with stability.",
      "Known for her clear communication and patient approach, Priya works closely with every client to understand their priorities and turn them into practical, achievable financial plans.",
    ],
    expertise: [
      { icon: "pie", title: "Financial Planning", text: "Goal-based planning for every life stage." },
      { icon: "coins", title: "Mutual Funds", text: "Research-backed fund selection." },
      { icon: "growth", title: "Retirement Planning", text: "Building a reliable retirement corpus." },
      { icon: "document", title: "Tax Planning", text: "Efficient, compliant tax strategies." },
    ],
    education: [
      { title: "MBA in Finance", institute: "Narsee Monjee Institute of Management Studies" },
      { title: "Certified Financial Planner (CFP)", institute: "Financial Planning Standards Board" },
      { title: "NISM Investment Adviser Certification", institute: "National Institute of Securities Markets" },
    ],
  },
  {
    slug: "amit-gupta",
    name: "Amit Gupta",
    role: "Portfolio Strategy Head",
    image: "/team/amit-gupta.jpg",
    portrait: "/team/amit-gupta.jpg",
    email: "amit@northvalecapital.com",
    linkedin: "linkedin.com/in/amitgupta",
    bio: [
      "Amit Gupta leads portfolio strategy at NorthVale Capital. With deep experience in equity research and asset allocation, he designs the investment frameworks that guide our client portfolios across market cycles.",
      "Amit believes in disciplined, data-driven investing and focuses on managing risk as carefully as he pursues returns.",
    ],
    expertise: [
      { icon: "growth", title: "Asset Allocation", text: "Balancing growth and stability." },
      { icon: "coins", title: "Equity Research", text: "In-depth analysis of market opportunities." },
      { icon: "pie", title: "Risk Management", text: "Protecting portfolios across cycles." },
      { icon: "document", title: "Portfolio Reviews", text: "Regular rebalancing and reporting." },
    ],
    education: [
      { title: "MBA in Finance", institute: "Indian Institute of Management (IIM)" },
      { title: "Chartered Financial Analyst (CFA)", institute: "CFA Institute, USA" },
      { title: "Financial Risk Manager (FRM)", institute: "Global Association of Risk Professionals (GARP)" },
    ],
  },
  {
    slug: "neha-kapoor",
    name: "Neha Kapoor",
    role: "Client Relationship Manager",
    image: "/team/neha-kapoor.jpg",
    portrait: "/team/neha-kapoor.jpg",
    email: "neha@northvalecapital.com",
    linkedin: "linkedin.com/in/nehakapoor",
    bio: [
      "Neha Kapoor is the Client Relationship Manager at NorthVale Capital and the first point of contact for many of our clients. She ensures every client receives timely support, clear communication and a seamless experience.",
      "Neha coordinates closely with our advisory team so that client needs are understood, addressed quickly and reflected in their financial plans.",
    ],
    expertise: [
      { icon: "pie", title: "Client Onboarding", text: "A smooth start to your financial journey." },
      { icon: "document", title: "Service Coordination", text: "Timely support and documentation." },
      { icon: "growth", title: "Plan Reviews", text: "Keeping your goals on track." },
      { icon: "coins", title: "Investor Education", text: "Helping clients make informed choices." },
    ],
    education: [
      { title: "MBA in Marketing & Finance", institute: "Symbiosis Institute of Business Management" },
      { title: "NISM Mutual Fund Distributors Certification", institute: "National Institute of Securities Markets" },
    ],
  },
];

export function getTeamMember(slug: string) {
  return team.find((m) => m.slug === slug);
}
