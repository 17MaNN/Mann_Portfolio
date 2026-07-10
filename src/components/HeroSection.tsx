import { useTheme } from "next-themes";
import RevealLayer, { useSmoothCursor } from "./SpotlightReveal";
import Marquee from "./Marquee";
import {
  HERO_REVEAL_DARK, HERO_REVEAL_LIGHT,
  HERO_VIDEO_DARK, HERO_VIDEO_DARK_POSTER,
  HERO_VIDEO_LIGHT, HERO_VIDEO_LIGHT_POSTER,
} from "@/lib/themeImages";

const HeroSection = () => {
  const { resolvedTheme } = useTheme();
  const isLight = resolvedTheme === "light";
  const cursorPos = useSmoothCursor();

  const videoSrc = isLight ? HERO_VIDEO_LIGHT : HERO_VIDEO_DARK;
  const videoPoster = isLight ? HERO_VIDEO_LIGHT_POSTER : HERO_VIDEO_DARK_POSTER;
  const revealImage = isLight ? HERO_REVEAL_LIGHT : HERO_REVEAL_DARK;

  const textColor = isLight ? "text-neutral-900" : "text-white";
  const textColorMuted = isLight ? "text-neutral-900/75" : "text-white/80";
  const scrimTop = isLight
    ? "bg-gradient-to-b from-white/70 via-white/25 to-transparent"
    : "bg-gradient-to-b from-black/65 via-black/25 to-transparent";
  const scrimBottom = isLight
    ? "bg-gradient-to-t from-white/75 via-white/30 to-transparent"
    : "bg-gradient-to-t from-black/70 via-black/30 to-transparent";

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section
        id="home"
        className="relative w-full overflow-hidden h-screen bg-black"
        style={{ height: "100dvh" }}
      >

        <video
          key={videoSrc}
          className="absolute inset-0 w-full h-full object-cover z-10"
          src={videoSrc}
          poster={videoPoster}
          autoPlay
          loop
          muted
          playsInline
        />

        <RevealLayer
          key={revealImage}
          image={revealImage}
          cursorX={cursorPos.x}
          cursorY={cursorPos.y}
        />

        <div className={`absolute top-0 inset-x-0 h-[45%] z-40 pointer-events-none ${scrimTop}`} />
        <div className={`absolute bottom-0 inset-x-0 h-[50%] z-40 pointer-events-none ${scrimBottom}`} />

        {/* Heading */}
        <div className="absolute top-[14%] left-0 right-0 flex flex-col items-center text-center px-5 pointer-events-none z-50">
          <h1 className={`${textColor} leading-[0.95] transition-colors duration-300`}>
            <span
              className="hero-anim hero-reveal block font-playfair italic font-normal text-5xl sm:text-7xl md:text-8xl"
              style={{ letterSpacing: "-0.03em", animationDelay: "0.25s" }}
            >
              Man Mohan
            </span>
            <span
              className="hero-anim hero-reveal block font-display font-bold text-5xl sm:text-7xl md:text-8xl -mt-1"
              style={{ letterSpacing: "-0.03em", animationDelay: "0.42s" }}
            >
              Sharma<span className="text-signal">.</span>
            </span>
          </h1>
        </div>

        {/* Bottom-left paragraph */}
        <div
          className="hero-anim hero-fade hidden sm:block absolute bottom-14 left-10 md:left-14 max-w-[260px] z-50"
          style={{ animationDelay: "0.7s" }}
        >
          <p className={`text-sm leading-relaxed transition-colors duration-300 ${textColorMuted}`}>
            Every model, every API, every deployed line of code is one layer
            in a system built to run in production, not just in a notebook.
          </p>
        </div>

        {/* Bottom-right block */}
        <div
          className="hero-anim hero-fade absolute bottom-10 sm:bottom-24 left-5 right-5 sm:left-auto sm:right-10 md:right-14 max-w-full sm:max-w-[260px] flex flex-col items-start gap-4 sm:gap-5 z-50"
          style={{ animationDelay: "0.85s" }}
        >
          <p className={`text-xs sm:text-sm leading-relaxed transition-colors duration-300 ${textColorMuted}`}>
            Software developer & ML engineer building intelligent systems, from million-record data pipelines to prediction APIs running live in production.
          </p>
          <button
            onClick={scrollToProjects}
            className="bg-signal hover:brightness-110 text-signal-foreground text-sm font-medium px-7 py-3 rounded-full transition-all hover:scale-[1.03] active:scale-95 hover:shadow-lg hover:shadow-signal/30"
          >
            See the work
          </button>
        </div>
      </section>

      {/* Marquee banner */}
      <div className="border-t border-b border-border bg-foreground text-primary-foreground relative z-10 h-[72px] md:h-[100px] flex items-center">
        <Marquee speed={70} className="w-full">
          <span className="font-logo font-bold whitespace-nowrap flex items-center gap-6 text-lg md:text-[22px] pr-6">
            Building intelligent systems with clean code
            <span className="text-primary-foreground/30 font-logo">✦</span>
            Machine learning
            <span className="text-primary-foreground/30 font-logo">✦</span>
            Clean architecture
            <span className="text-primary-foreground/30 font-logo">✦</span>
            Production ready
            <span className="text-primary-foreground/30 font-logo">✦</span>
            Always building
            <span className="text-primary-foreground/30 font-logo">✦</span>
            Research driven
            <span className="text-primary-foreground/30 font-logo">✦</span>
            Full stack development
            <span className="text-primary-foreground/30 font-logo">✦</span>
          </span>
        </Marquee>
      </div>
    </>
  );
};

export default HeroSection;
