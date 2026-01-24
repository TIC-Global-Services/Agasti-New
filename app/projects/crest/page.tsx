import Navbar from "@/components/Navbar";
import VillaDetailPage from "@/components/VillaDetailPage";
import Footer from "@/components/Footer";

export default function CrestVillaPage() {
  return (
    <main>
      <Navbar />
      <VillaDetailPage villaType="crest" />
      <Footer />
    </main>
  );
}