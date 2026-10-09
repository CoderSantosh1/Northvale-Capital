export type BlogPost = {
  slug: string;
  title: string;
  /** Title split for the two-tone heading on the detail page. */
  headline: [string, string];
  category: string;
  date: string; // ISO
  author: string;
  readTime: string;
  excerpt: string;
  image: string;
  coverImage: string;
  imageAlt: string;
  intro: string;
  points: { title: string; text: string }[];
  conclusion: string;
};

export const blogs: BlogPost[] = [
  {
    slug: "smart-investment-strategies-for-long-term-wealth",
    title: "5 Smart Investment Strategies for Long-Term Wealth",
    headline: ["5 Smart Investment Strategies", "for Long-Term Wealth"],
    category: "Investment",
    date: "2025-09-12",
    author: "Admin",
    readTime: "6 Min Read",
    excerpt:
      "Discover practical investment strategies that can help you build and grow your wealth over time with reduced risk.",
    image: "/blog/smart-investment-strategies.jpg",
    coverImage: "/blog-details/smart-investment-strategies-long-term-wealth.jpg",
    imageAlt: "Seedlings growing on rising stacks of coins",
    intro:
      "Building long-term wealth is not about quick wins, but about making informed decisions, staying consistent, and following a strategy that aligns with your financial goals. Whether you are just starting your investment journey or looking to refine your portfolio, a well-planned approach can help you grow and protect your wealth over time. In this article, we share five smart investment strategies that can set you on the path to financial success.",
    points: [
      {
        title: "Start Early and Stay Consistent",
        text: "Time is one of the most powerful tools when it comes to investing. The earlier you start, the more time your money has to grow through the power of compounding. Even small, regular investments can make a significant difference over the long term. Consistency helps you ride out market fluctuations and stay focused on your goals.",
      },
      {
        title: "Diversify Your Portfolio",
        text: "A diversified portfolio reduces risk and helps you take advantage of different growth opportunities. By spreading your investments across asset classes such as equities, bonds, mutual funds, and real estate, you can balance potential returns with stability and protect your portfolio from market volatility.",
      },
      {
        title: "Focus on Your Financial Goals",
        text: "Every investment decision should be aligned with your financial goals—whether it's buying a home, funding your child's education, planning for retirement, or building generational wealth. Having clear, realistic goals helps you choose the right investment products and stay committed to your plan.",
      },
      {
        title: "Manage Risk Wisely",
        text: "Understanding your risk appetite is essential for long-term success. A well-balanced portfolio considers your financial goals, time horizon, and comfort with market fluctuations. Regular portfolio reviews and rebalancing ensure that your investments remain aligned with your risk profile.",
      },
      {
        title: "Seek Professional Guidance",
        text: "Partnering with an experienced investment advisor can provide valuable insights and help you make informed decisions. A professional can analyse your financial situation, suggest suitable investment options, and guide you through changing market conditions, giving you confidence and peace of mind.",
      },
    ],
    conclusion:
      "Investing for the long term is a disciplined and strategic journey. By starting early, diversifying your portfolio, focusing on your goals, managing risk, and seeking professional guidance, you can build a stronger and more secure financial future. At NorthVale Capital, we are committed to helping you make smarter investment decisions and achieve your long-term wealth goals.",
  },
  {
    slug: "how-to-plan-your-finances-for-a-secure-future",
    title: "How to Plan Your Finances for a Secure Future",
    headline: ["How to Plan Your Finances", "for a Secure Future"],
    category: "Financial Planning",
    date: "2025-09-08",
    author: "Admin",
    readTime: "5 Min Read",
    excerpt:
      "A step-by-step guide to managing your income, expenses and savings for long-term financial security.",
    image: "/blog/plan-your-finances.jpg",
    coverImage: "/blog/plan-your-finances.jpg",
    imageAlt: "Advisor writing a financial plan beside coins and a model house",
    intro:
      "A secure financial future rarely happens by chance. It is the result of clear goals, smart habits and a plan you can actually follow. Here is a simple, step-by-step framework to help you take control of your income, expenses and savings.",
    points: [
      {
        title: "Know Where Your Money Goes",
        text: "Track your income and expenses for a few months to understand your spending patterns. Separating needs from wants makes it easier to identify areas where you can save more without compromising your lifestyle.",
      },
      {
        title: "Build an Emergency Fund",
        text: "Set aside three to six months of essential expenses in a liquid, low-risk option. An emergency fund protects your long-term investments from being disrupted by unexpected events such as job loss or medical needs.",
      },
      {
        title: "Set Clear, Time-Bound Goals",
        text: "Define short, medium and long-term goals—such as a vacation, a home down payment or retirement—and attach a target amount and timeline to each. Clear goals make it easier to choose the right investment for each need.",
      },
      {
        title: "Protect Yourself with Insurance",
        text: "Adequate term life and health insurance ensure that your family's finances are protected. Insurance should be seen as protection, not an investment, and should be in place before you start building wealth.",
      },
      {
        title: "Review Your Plan Regularly",
        text: "Your life changes, and so should your financial plan. Review your progress at least once a year, and after major life events, to make sure your plan stays aligned with your goals.",
      },
    ],
    conclusion:
      "Good financial planning brings clarity and confidence. With a clear budget, a safety net, defined goals and regular reviews, you can build a secure future step by step. Our advisors at NorthVale Capital are here to help you create a plan that fits your life.",
  },
  {
    slug: "importance-of-retirement-planning-in-your-30s",
    title: "The Importance of Retirement Planning in Your 30s",
    headline: ["The Importance of Retirement", "Planning in Your 30s"],
    category: "Retirement",
    date: "2025-09-04",
    author: "Admin",
    readTime: "5 Min Read",
    excerpt:
      "Start early and enjoy a financially independent future. Learn why your 30s are the best time to plan for retirement.",
    image: "/blog/retirement-planning-in-your-30s.jpg",
    coverImage: "/blog/retirement-planning-in-your-30s.jpg",
    imageAlt: "Hand placing a coin into a piggy bank on a desk",
    intro:
      "Retirement may feel far away in your 30s, but this is exactly when planning for it delivers the biggest rewards. Starting now gives your money decades to grow and gives you the freedom to retire on your own terms.",
    points: [
      {
        title: "Compounding Works Best Over Time",
        text: "The longer your money stays invested, the more it can grow. Investing a modest amount every month from your 30s can build a significantly larger corpus than investing a much larger amount starting in your 40s.",
      },
      {
        title: "Account for Inflation",
        text: "Rising costs mean you will need far more money in the future to maintain the same lifestyle. A good retirement plan estimates your future expenses realistically and builds in protection against inflation.",
      },
      {
        title: "Balance Multiple Priorities",
        text: "Your 30s often bring home loans, children's education and other commitments. Planning early helps you balance these goals without neglecting your retirement savings.",
      },
      {
        title: "Use the Right Mix of Investments",
        text: "With a long time horizon, you can typically afford a higher allocation to growth assets such as equities, gradually shifting towards stability as retirement approaches.",
      },
      {
        title: "Stay Disciplined",
        text: "Automating your investments and reviewing them annually helps you stay on track, avoid emotional decisions during market swings, and steadily move towards your retirement goal.",
      },
    ],
    conclusion:
      "Planning for retirement in your 30s is one of the best financial decisions you can make. A small start today can lead to a comfortable, independent retirement tomorrow. Talk to NorthVale Capital to build a retirement plan tailored to you.",
  },
  {
    slug: "tips-to-manage-your-wealth-in-a-changing-economy",
    title: "Tips to Manage Your Wealth in a Changing Economy",
    headline: ["Tips to Manage Your Wealth", "in a Changing Economy"],
    category: "Wealth Management",
    date: "2025-08-28",
    author: "Admin",
    readTime: "4 Min Read",
    excerpt:
      "Explore expert tips to protect and grow your wealth, even during market uncertainties and economic shifts.",
    image: "/blog/manage-wealth-changing-economy.jpg",
    coverImage: "/blog/manage-wealth-changing-economy.jpg",
    imageAlt: "Calculator, pen and financial charts on a desk",
    intro:
      "Economic cycles, interest rate changes and market volatility are a normal part of investing. The key is not to predict every move, but to build a wealth strategy that can adapt. Here are practical tips to protect and grow your wealth in a changing economy.",
    points: [
      {
        title: "Avoid Emotional Decisions",
        text: "Market swings can tempt investors to buy high and sell low. Sticking to a well-defined plan helps you stay calm and avoid decisions that can hurt your long-term returns.",
      },
      {
        title: "Keep Your Portfolio Balanced",
        text: "Rebalancing periodically brings your asset allocation back in line with your goals and risk profile, locking in gains and managing risk.",
      },
      {
        title: "Maintain Adequate Liquidity",
        text: "Having enough liquid funds means you will not be forced to sell long-term investments at the wrong time to meet short-term needs.",
      },
      {
        title: "Look for Opportunities",
        text: "Market corrections can create opportunities to invest in quality assets at better valuations, especially through disciplined, systematic investing.",
      },
      {
        title: "Work with a Trusted Advisor",
        text: "An experienced advisor can help you interpret economic changes, adjust your strategy when needed and keep you focused on what matters most.",
      },
    ],
    conclusion:
      "A changing economy does not have to derail your financial goals. With discipline, balance and expert guidance, you can protect your wealth and continue to grow it. NorthVale Capital is here to help you navigate every market cycle with confidence.",
  },
];

export function getBlog(slug: string) {
  return blogs.find((b) => b.slug === slug);
}

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export function formatBlogDate(iso: string) {
  const [y, m, d] = iso.split("-");
  const month = MONTHS[Number(m) - 1];
  return { day: d, monthYear: `${month} ${y}`, full: `${d} ${month} ${y}` };
}
