import Navbar from "@/components/Navbar";
import VillaDetailPage from "@/components/VillaDetailPage";
import Footer from "@/components/Footer";
import ProjectContentGrid from "@/components/ProjectContentGrid";
import ProjectShowcase from "@/components/ProjectShowcase";
import AboutCTA from "@/components/AboutCTA";

export default function CrestVillaPage() {
  return (
    <main>
      <Navbar />
      <VillaDetailPage villaType="crest" />
      <ProjectContentGrid />
      <ProjectShowcase />
      <AboutCTA />
      <Footer />
    </main>
  );
}