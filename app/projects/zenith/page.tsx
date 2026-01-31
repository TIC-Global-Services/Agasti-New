import Navbar from "@/components/Navbar";
import VillaDetailPage from "@/components/VillaDetailPage";
import Footer from "@/components/Footer";
import AboutCTA from "@/components/AboutCTA";
import ProjectContentGrid from "@/components/ProjectContentGrid";
import ProjectShowcase from "@/components/ProjectShowcase";

export default function ZenithVillaPage() {
  return (
    <main>
      <Navbar />
      <VillaDetailPage villaType="zenith" />
      <ProjectContentGrid />
      <ProjectShowcase />
      <AboutCTA/>
      <Footer />
    </main>
  );
}