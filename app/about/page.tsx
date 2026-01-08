import AboutStory from "@/components/AboutStory";
import AboutExcellence from "@/components/AboutExcellence";
import AboutTestimonial from "@/components/AboutTestimonial";
import AboutCommitments from "@/components/AboutCommitments";
import AboutCTA from "@/components/AboutCTA";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <main>
      <AboutStory />
      <AboutExcellence />
      <AboutTestimonial />
      <AboutCommitments />
      <AboutCTA />
      <Footer />
    </main>
  );
}