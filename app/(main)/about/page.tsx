// app/about/page.tsx

import AboutHero from "@/components/about/AboutHero";
import AboutStats from "@/components/home/StatsBar";
import AboutVisionMission from "@/components/about/vision";
// import AboutApproach from "@/components/about/AboutApproach";
// import AboutObjectives from "@/components/about/AboutObjectives";
import AboutTimeline from "@/components/about/AboutTimeline";
import AboutFounder from "@/components/about/AboutFounder";
// import AboutFuture from "@/components/about/AboutFuture";

export default function AboutPage() {
  return (
    <main className="bg-white">
      <AboutHero />
       <AboutStats />
      <AboutVisionMission />
      <AboutFounder />
      {/*<AboutApproach />
      <AboutObjectives />*/}
      <AboutTimeline />
      {/* <AboutFuture />  */}
    </main>
  );
}