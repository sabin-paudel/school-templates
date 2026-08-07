import HeroSection from "./_components/home/hero-section";
import StatsSection from "./_components/home/stats-section";
import AboutSection from "./_components/home/about-section";
import ProgramsSection from "./_components/home/programs-section";
import FeatureRowsSection from "./_components/home/feature-rows-section";
import TestimonialsSection from "./_components/home/testimonials-section";
import EventsSection from "./_components/home/events-section";
import NewsSection from "./_components/home/news-section";
import CtaSection from "./_components/ui/cta-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <ProgramsSection />
      <FeatureRowsSection />
      <TestimonialsSection />
      <EventsSection />
      <NewsSection />
      <CtaSection
        title="Come and see what makes Aatreya different."
        description="Tour the campus, meet our educators, and see everyday learning in action. We welcome families Sunday through Friday."
        primaryHref="/admissions"
        primaryText="Apply Now"
        secondaryHref="/contact"
        secondaryText="Book a Visit"
        variant="primary"
      />
    </>
  );
}
