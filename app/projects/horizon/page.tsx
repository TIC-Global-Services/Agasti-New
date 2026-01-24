import Navbar from "@/components/Navbar";
import VillaDetailPage from "@/components/VillaDetailPage";
import Footer from "@/components/Footer";

export default function HorizonVillaPage() {
  return (
    <main>
      <Navbar />
      <VillaDetailPage villaType="horizon" />
      <Footer />
    </main>
  );
}