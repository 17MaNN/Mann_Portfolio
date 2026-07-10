import { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TechStackSection from "@/components/TechStackSection";
import ProjectsSection from "@/components/ProjectsSection";
import JourneySection from "@/components/JourneySection";
import AchievementsSection from "@/components/AchievementsSection";
import PhilosophySection from "@/components/PhilosophySection";
import FooterSection from "@/components/FooterSection";
import LoadingScreen from "@/components/LoadingScreen";
import {
  HERO_REVEAL_DARK, HERO_REVEAL_LIGHT,
  HERO_VIDEO_DARK, HERO_VIDEO_LIGHT,
  JOURNEY_BG_DARK, JOURNEY_BG_LIGHT,
  ACHIEVEMENTS_BG_DARK, ACHIEVEMENTS_BG_LIGHT,
  PHILOSOPHY_BG_DARK, PHILOSOPHY_BG_LIGHT,
  FOOTER_BG_DARK, FOOTER_BG_LIGHT,
} from "@/lib/themeImages";

const SHARED_ASSETS = [
  "/images/project-rainbow.webp",
  "/images/project-wc26.webp",
  "/images/about-visual.webp",
];

// Only preload the image pair for the theme currently active — the other
// theme's assets load lazily the first time someone actually switches to it.
const assetsForTheme = (isLight: boolean) => [
  isLight ? HERO_VIDEO_LIGHT : HERO_VIDEO_DARK,
  isLight ? HERO_REVEAL_LIGHT : HERO_REVEAL_DARK,
  isLight ? JOURNEY_BG_LIGHT : JOURNEY_BG_DARK,
  isLight ? ACHIEVEMENTS_BG_LIGHT : ACHIEVEMENTS_BG_DARK,
  isLight ? PHILOSOPHY_BG_LIGHT : PHILOSOPHY_BG_DARK,
  isLight ? FOOTER_BG_LIGHT : FOOTER_BG_DARK,
  ...SHARED_ASSETS,
];

const Index = () => {
  const { resolvedTheme } = useTheme();
  const isLight = resolvedTheme === "light";
  const [isLoading, setIsLoading] = useState(true);
  const firstThemeRef = useRef(true);

  // Re-show the loading screen every time the theme is toggled (not just on
  // first page load) — matches the "0 -> 100" loader reappearing per swap.
  useEffect(() => {
    if (firstThemeRef.current) {
      firstThemeRef.current = false;
      return;
    }
    setIsLoading(true);
  }, [resolvedTheme]);

  return (
    <>
      <LoadingScreen
        key={resolvedTheme}
        assets={assetsForTheme(isLight)}
        onComplete={() => setIsLoading(false)}
      />
      <main
        className="min-h-screen bg-background"
        style={{
          opacity: isLoading ? 0 : 1,
          transition: "opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
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
    </>
  );
};

export default Index;
