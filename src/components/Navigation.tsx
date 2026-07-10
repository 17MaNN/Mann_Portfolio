import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  // Theme-tied colors instead of hardcoded white: dark mode -> a dark glass
  // pill with light text, light mode -> a light glass pill with dark text.
  // This is what was missing before — hardcoded white washed out on light
  // backgrounds/pills. Using --foreground/--background tokens means it
  // always flips correctly with the theme, no manual isLight branching needed.
  return (
    <nav className="fixed top-0 left-0 right-0 z-[60] flex items-center justify-between p-4 sm:p-5">
      {/* Logo — TODO(font): using JetBrains Mono (already loaded sitewide
          for tags/numbers) for a distinct, brutalist wordmark. Swap the
          className below if you want a different typeface instead. */}
      <a
        href="#home"
          className="font-logo font-bold text-2xl tracking-tight"
      >
        MaNN
      </a> 

      {/* Center glass pill nav */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 bg-background/50 backdrop-blur-md border border-foreground/15 rounded-full px-2 py-2 items-center gap-1 shadow-lg shadow-black/5">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="px-4 py-1.5 rounded-full text-sm font-medium text-foreground/70 hover:bg-foreground/10 hover:text-foreground transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Right side */}
      <div className="flex items-center gap-3">
        <button
          onClick={toggleTheme}
          className="p-2 border border-foreground/15 bg-background/50 backdrop-blur-md hover:bg-foreground/10 transition-colors rounded-full text-foreground shadow-lg shadow-black/5"
          aria-label="Toggle theme"
        >
          {mounted && (theme === "dark" ? <Sun size={16} /> : <Moon size={16} />)}
        </button>

        <a
          href="#contact"
          className="hidden md:inline-flex bg-signal hover:brightness-110 text-signal-foreground text-sm font-semibold px-6 py-2.5 rounded-full transition-all hover:scale-[1.03] active:scale-95"
        >
          Contact
        </a>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 bg-background/50 backdrop-blur-md border border-foreground/15 hover:bg-foreground/10 transition-colors rounded-full text-foreground shadow-lg shadow-black/5"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border animate-fade-up">
          <div className="px-6 py-8 flex flex-col gap-6">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-nav text-lg flex items-center gap-3"
              >
                <span className="font-mono text-sm text-muted-foreground">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-signal text-signal-foreground text-sm font-semibold px-6 py-3 rounded-full text-center"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
