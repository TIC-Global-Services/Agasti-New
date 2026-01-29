import Navbar from "@/components/Navbar";
import VillaDetailPage from "@/components/VillaDetailPage";
import Footer from "@/components/Footer";
import ProjectContentGrid from "@/components/ProjectContentGrid";
import ProjectShowcase from "@/components/ProjectShowcase";

export default function CrestVillaPage() {
  return (
    <main>
      <Navbar />
      <VillaDetailPage villaType="crest" />
      <ProjectContentGrid />
      <ProjectShowcase />
      <Footer />
    </main>
  );
}