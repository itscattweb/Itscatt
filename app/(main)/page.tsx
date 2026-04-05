// app/(main)/page.tsx
import HeroSection from "@/components/home/HeroSection";
import StatsBar from "@/components/home/StatsBar";
import AboutSnippet from "@/components/home/AboutSnippet";
import HowWeWork from "@/components/home/HowWeWork";
import Testimonials from "@/components/home/Testimonials";
import OurCenters from "@/components/home/OurCenters";
import DonateCTA from "@/components/home/DonateCTA";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <StatsBar />
      <AboutSnippet />
      <HowWeWork />
      <Testimonials />
      <OurCenters />
      <DonateCTA />
    </main>
  );
}