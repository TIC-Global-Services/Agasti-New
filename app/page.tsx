import HeroSection from "@/components/HeroSection";
import SpacePrivacySection from "@/components/SpacePrivacySection";
import AboutAgasti from "@/components/AboutAgasti";
import Services from "@/components/Services";
import WhyLiveWithAgasti from "@/components/WhyLiveWithAgasti";
import SmartFutureHomes from "@/components/SmartFutureHomes";
import VillaSeries from "@/components/VillaSeries";
import LifestyleGallery from "@/components/LifestyleGallery";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <SpacePrivacySection />
      <AboutAgasti />
      <Services />
      <WhyLiveWithAgasti />
      <SmartFutureHomes />
      <VillaSeries />
      <LifestyleGallery />
      <LocationSection />
      <Footer />
    </main>
  );
}
