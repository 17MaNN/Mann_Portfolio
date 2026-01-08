import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-between pt-24 pb-0 relative overflow-hidden bg-background"
    >
      {/* Floating Code Brackets - Top Right */}
      <div className="absolute top-28 right-16 lg:right-24 font-mono animate-float hidden lg:block text-muted-foreground/30" style={{ fontSize: '60px' }}>
        {"{ }"}
      </div>

      {/* Scattered Sparkles */}
      <div className="absolute top-40 left-[15%] animate-float hidden md:block text-muted-foreground/40" style={{ fontSize: '40px' }}>
        ✦
      </div>
      <div className="absolute top-60 right-[25%] animate-float delay-200 hidden lg:block text-muted-foreground/30" style={{ fontSize: '28px' }}>
        ✦
      </div>
      <div className="absolute bottom-[35%] left-[8%] animate-float delay-400 hidden md:block text-muted-foreground/40" style={{ fontSize: '24px' }}>
        ✦
      </div>
      <div className="absolute top-[45%] right-[12%] animate-float delay-300 hidden xl:block text-muted-foreground/35" style={{ fontSize: '32px' }}>
        ✦
      </div>
      <div className="absolute bottom-[45%] right-[35%] animate-float delay-500 hidden lg:block text-muted-foreground/30" style={{ fontSize: '20px' }}>
        ✦
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 lg:px-12 flex-1 flex flex-col justify-center items-center">
        <div className="max-w-6xl w-full text-center">
          {/* Name Typography - Centered */}
          <div className="relative mb-16">
            <h1 className="text-hero-large text-foreground opacity-0 animate-fade-up">
              Man Mohan
            </h1>
            <h1 className="text-hero-large text-foreground opacity-0 animate-fade-up delay-100 mt-2 md:mt-4">
              Sharma
            </h1>

            {/* Decorative Sparkle */}
            <span className="absolute top-0 right-[5%] md:right-[10%] text-4xl md:text-5xl animate-float text-muted-foreground/50">
              ✦
            </span>
          </div>

          {/* Role Oval - Large Organic Shape */}
          <div className="flex justify-center mb-16 opacity-0 animate-fade-up delay-200">
            <div className="hero-oval-large border-2 border-foreground dark:border-foreground/80">
              <span className="font-body text-lg md:text-xl text-foreground">
                Software Developer <span className="mx-3 text-muted-foreground">|</span>{" "}
                ML Engineer <span className="mx-3 text-muted-foreground">|</span> Full Stack
                Developer
              </span>
            </div>
          </div>

          {/* Info Badge - Smaller Organic Pill */}
          <div className="flex justify-center mb-16 opacity-0 animate-fade-up delay-300">
            <div className="hero-pill-organic border border-border">
              <span className="w-2 h-2 rounded-full bg-foreground animate-pulse mr-3" />
              <span className="font-body text-base text-foreground">
                Computer Science undergraduate passionate about ML
              </span>
            </div>
          </div>

          {/* Location with Asterisks */}
          <div className="flex items-center justify-center gap-3 text-muted-foreground opacity-0 animate-fade-up delay-400">
            <span className="text-sm text-muted-foreground/60">*</span>
            <span className="font-body font-medium text-sm uppercase tracking-wider">
              📍 Gurugram, India
            </span>
            <span className="text-sm text-muted-foreground/60">*</span>
            <span className="text-xs text-muted-foreground/50">✦</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="text-center pb-10 opacity-0 animate-fade-up delay-500">
        <div className="flex flex-col items-center gap-3 text-muted-foreground">
          <span className="font-body text-sm tracking-wide">
            Scroll down to explore
          </span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </div>
      </div>

      {/* Marquee Banner - 100px tall, 22px text */}
      <div className="border-t border-b border-border bg-foreground text-primary-foreground overflow-hidden" style={{ height: '100px' }}>
        <div className="marquee-container h-full flex items-center">
          <div className="marquee-content">
            {[...Array(6)].map((_, i) => (
              <span
                key={i}
                className="font-body font-medium whitespace-nowrap flex items-center gap-4"
                style={{ fontSize: '22px' }}
              >
                Building intelligent systems with clean code 
                <span className="text-primary-foreground/60">✦</span>
                Creating real-world solutions 
                <span className="text-primary-foreground/60">✦</span>
                Machine Learning enthusiast 
                <span className="text-primary-foreground/60">✦</span>
                Full Stack Developer 
                <span className="text-primary-foreground/60 mr-4">✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
