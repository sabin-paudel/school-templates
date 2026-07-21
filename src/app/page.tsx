import AboutSection from "./_components/sections/about-section";
import AchievementsSection from "./_components/sections/achievements-section";
import AdmissionsCta from "./_components/sections/admissions-cta";
import ContactStrip from "./_components/sections/contact-strip";
import EventsSection from "./_components/sections/events-section";
import FacilitiesSection from "./_components/sections/facilities-section";
import FaqSection from "./_components/sections/faq-section";
import GalleryPreview from "./_components/sections/gallery-preview";
import HeroSection from "./_components/sections/hero-section";
import NewsSection from "./_components/sections/news-section";
import PrincipalMessage from "./_components/sections/principal-message";
import ProgramsSection from "./_components/sections/programs-section";
import StatsBand from "./_components/sections/stats-band";
import StudentLifeSection from "./_components/sections/student-life-section";
import TestimonialsSection from "./_components/sections/testimonials-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsBand />
      <AboutSection />
      <PrincipalMessage />
      <ProgramsSection />
      <FacilitiesSection />
      <AchievementsSection />
      <StudentLifeSection />
      <GalleryPreview />
      <EventsSection />
      <TestimonialsSection />
      <NewsSection />
      <AdmissionsCta />
      <FaqSection />
      <ContactStrip />
    </>
  );
}
