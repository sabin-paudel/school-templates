import HeroSection from "./_components/home/hero-section";
import IntroSection from "./_components/home/intro-section";
import StatsSection from "./_components/home/stats-section";
import AboutSection from "./_components/home/about-section";
import ProgramsSection from "./_components/home/programs-section";
import VideoSection from "./_components/home/video-section";
import FeatureRowsSection from "./_components/home/feature-rows-section";
import EventsSection from "./_components/home/events-section";
import NewsSection from "./_components/home/news-section";
import CampusSection from "./_components/home/campus-section";
import TestimonialsSection from "./_components/home/testimonials-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <StatsSection />
      <AboutSection />
      <ProgramsSection />
      <VideoSection />
      <FeatureRowsSection />
      <EventsSection />
      <NewsSection />
      <CampusSection />
      <TestimonialsSection />

    </>
  );
}
