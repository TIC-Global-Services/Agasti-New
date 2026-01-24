import Navbar from "@/components/Navbar";
import VillaDetailPage from "@/components/VillaDetailPage";
import Footer from "@/components/Footer";

export default function ZenithVillaPage() {
  return (
    <main>
      <Navbar />
      <VillaDetailPage villaType="zenith" />
      <Footer />
    </main>
  );
}