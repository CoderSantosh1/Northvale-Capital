import type { Metadata, Viewport } from "next";
import { Nunito_Sans, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import JsonLd from "./components/seo/JsonLd";
import { site } from "./data/category";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const nunito = Nunito_Sans({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Investment Advisory & Wealth Management in Mumbai`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "investment advisor Mumbai",
    "wealth management",
    "financial planning",
    "portfolio advisory",
    "retirement planning",
    "tax planning",
    "estate planning",
    "NorthVale Capital",
  ],
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_IN",
    url: "/",
    images: [{ url: "/home/investment-advisor-hero.jpg", alt: site.name }],
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0d3440",
};

const organizationLd = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  name: site.name,
  legalName: site.legalName,
  url: site.url,
  logo: `${site.url}/common/northvale-capital-logo.png`,
  image: `${site.url}/home/investment-advisor-hero.jpg`,
  description: site.description,
  telephone: site.phone,
  email: site.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "414, Oberoi Commerz II, Near Oberoi Mall, Goregaon (East)",
    addressLocality: "Mumbai",
    postalCode: "400063",
    addressCountry: "IN",
  },
  openingHours: "Mo-Sa 09:00-18:00",
  sameAs: Object.values(site.social),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-IN" data-scroll-behavior="smooth" className={`${jakarta.variable} ${nunito.variable}`}>
      <body className="flex min-h-screen flex-col">
        <JsonLd data={organizationLd} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
