import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { PHILOSOPHY_BG_DARK, PHILOSOPHY_BG_LIGHT } from "@/lib/themeImages";
import ScrollReveal from "./ScrollReveal";

const PhilosophySection = () => {
  const { resolvedTheme } = useTheme();
  const bgImage = resolvedTheme === "light" ? PHILOSOPHY_BG_LIGHT : PHILOSOPHY_BG_DARK;
  return (
    <section className="py-24 md:py-32 bg-foreground text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={bgImage}
          alt=""
          className="w-full h-full object-cover opacity-[0.4] mix-blend-luminosity"
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="font-mono text-xs uppercase tracking-widest text-primary-foreground/50 mb-8 block">
            / PHILOSOPHY
          </span>

          <ScrollReveal
            as="p"
            intensity="strong"
            className="font-display font-bold text-3xl md:text-4xl lg:text-5xl leading-[1.15] mb-10 tracking-tight block"
          >
            Clean code meets intelligent systems. I believe in building solutions
            that are as{" "}
            <span className="relative inline-block">
              beautiful in architecture
              <span className="absolute -bottom-1 left-0 right-0 h-px bg-primary-foreground/40" />
            </span>{" "}
            as they are{" "}
            <span className="relative inline-block">
              functional in purpose
              <span className="absolute -bottom-1 left-0 right-0 h-px bg-primary-foreground/40" />
            </span>
            .
          </ScrollReveal>

          <motion.p
            className="font-mono text-sm text-primary-foreground/50"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            — Man Mohan Sharma
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default PhilosophySection;
