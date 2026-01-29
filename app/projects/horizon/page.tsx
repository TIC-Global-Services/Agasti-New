import Navbar from "@/components/Navbar";
import VillaDetailPage from "@/components/VillaDetailPage";
import Footer from "@/components/Footer";
import ProjectContentGrid from "@/components/ProjectContentGrid";
import ProjectShowcase from "@/components/ProjectShowcase";

export default function HorizonVillaPage() {
  return (
    <main>
      <Navbar />
      <VillaDetailPage villaType="horizon" />
      <ProjectContentGrid />
      <ProjectShowcase />
      <Footer />
    </main>
  );
}