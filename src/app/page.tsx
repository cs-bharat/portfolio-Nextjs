import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructor from "@/components/Instructor";
import ProjectSection from "@/components/ProjectSection";
import SkillsSection from "@/components/SkillsSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection/>
      <SkillsSection/>
      <ProjectSection/>
      <Instructor/>
      <Footer/>
    </main>
  
  );
}
