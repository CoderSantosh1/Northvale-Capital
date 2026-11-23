import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import ServicesSection from "./components/sections/ServicesSection";
import ProcessSection from "./components/sections/ProcessSection";
import StatsBar from "./components/sections/StatsBar";
import TestimonialsSection from "./components/sections/TestimonialsSection";
import BlogSection from "./components/sections/BlogSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection className="pt-12 pb-20 lg:pt-16 lg:pb-24" />
      <ServicesSection />
      <ProcessSection />
      <StatsBar />
      <TestimonialsSection />
      <BlogSection />
    </>
  );
}
