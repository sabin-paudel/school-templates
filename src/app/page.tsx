import HeroSection from "./_components/home/hero-section";
import QuickInfoCards from "./_components/home/quick-info-cards";
import PrincipalMessage from "./_components/home/principal-message";
import AboutSection from "./_components/home/about-section";
import ProgramsSection from "./_components/home/programs-section";
import WhyChooseUs from "./_components/home/why-choose-us";
import FacilitiesSection from "./_components/home/facilities-section";
import StudentLifeSection from "./_components/home/student-life-section";
import AchievementsSection from "./_components/home/achievements-section";
import NewsSection from "./_components/home/news-section";
import EventsSection from "./_components/home/events-section";
import NoticeBoard from "./_components/home/notice-board";
import GallerySection from "./_components/home/gallery-section";
import TestimonialsSection from "./_components/home/testimonials-section";
import AdmissionsCta from "./_components/home/admissions-cta";
import GoogleMapSection from "./_components/home/google-map-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <QuickInfoCards />
      <PrincipalMessage />
      <AboutSection />
      <ProgramsSection />
      <WhyChooseUs />
      <FacilitiesSection />
      <StudentLifeSection />
      <AchievementsSection />
      <NewsSection />
      <EventsSection />
      <NoticeBoard />
      <GallerySection />
      <TestimonialsSection />
      <AdmissionsCta />
      <GoogleMapSection />
    </>
  );
}
