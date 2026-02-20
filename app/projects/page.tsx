import ProjectHero from "@/components/ProjectHero";
import ProjectAbout from "@/components/ProjectAbout";
import ProjectVillaDescription from "@/components/ProjectVillaDescription";
import ProjectContentGrid from "@/components/ProjectContentGrid";
import ProjectShowcase from "@/components/ProjectShowcase";
import AboutCTA from "@/components/AboutCTA";
import Footer from "@/components/Footer";
import PropertyDesc from "@/components/Project/PropertyDesc";

export default function ProjectsPage() {
  return (
    <main>
      <ProjectHero />
      <ProjectAbout />
      <PropertyDesc />
      <ProjectVillaDescription />
      <ProjectContentGrid />
      <AboutCTA />
      <Footer />
    </main>
  );
}