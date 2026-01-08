import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TechStackSection from "@/components/TechStackSection";
import ProjectsSection from "@/components/ProjectsSection";
import JourneySection from "@/components/JourneySection";
import AchievementsSection from "@/components/AchievementsSection";
import PhilosophySection from "@/components/PhilosophySection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <TechStackSection />
      <ProjectsSection />
      <JourneySection />
      <AchievementsSection />
      <PhilosophySection />
      <FooterSection />
    </main>
  );
};

export default Index;
