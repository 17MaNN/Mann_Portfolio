import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative border-t border-border overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <ScrollReveal className="mb-16">
          <span className="index-label mb-4 block">02 / INTRODUCTION</span>
          <h2 className="text-section-heading">Hello,</h2>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            className="relative aspect-[4/5] overflow-hidden border border-border order-2 lg:order-1"
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <img
              src="/images/cya.png"
              alt="Abstract geometric composition"
              className="w-full h-full object-cover grayscale"
            />
          </motion.div>

          <motion.div
            className="space-y-10 order-1 lg:order-2"
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <ScrollReveal as="p" intensity="strong" className="font-display font-bold text-2xl md:text-3xl lg:text-[2rem] leading-snug">
              I craft{" "}
              <span className="relative inline-block">
                intelligent systems
                <span className="absolute -bottom-1 left-0 right-0 h-px bg-signal" />
              </span>{" "}
              that solve real-world problems through the fusion of{" "}
              <span className="font-mono text-[0.9em]">Machine Learning</span> and{" "}
              <span className="font-mono text-[0.9em]">Full Stack Development</span>.
            </ScrollReveal>

            <motion.div
              className="inline-flex items-center gap-4 px-6 py-4 border border-border"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <span className="text-4xl md:text-5xl font-display font-bold">98%+</span>
              <span className="text-body text-muted-foreground text-sm">
                accuracy in
                <br />
                production models
              </span>
            </motion.div>

            <div className="space-y-6 pt-2">
              <p className="text-body text-muted-foreground leading-relaxed">
               My name is Man Mohan Sharma. I got bitten by machine learning somewhere around my first 'Hello World,' and for the last three years, I've been the one turning messy data into systems that actually work. And things are going... pretty well, honestly..
              </p>

              <p className="text-body text-muted-foreground leading-relaxed">
                I don't do average, and I definitely don't do sloppy, every model I ship is built to survive the real world, not just a demo. Clean pipelines, reproducible results, code that scales instead of just running once and quitting..
              </p>

              <p className="text-body text-muted-foreground leading-relaxed">
                When I'm not building, I'm chasing whatever's on the research frontier or contributing to open-source, because the best ideas shouldn't just sit in a paper nobody reads. Call it obsession. Call it the origin story. I'm just getting started..
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Giant faded background wordmark — matches the "MA.JD" reference treatment */}
      <div
        aria-hidden="true"
        className="absolute -bottom-6 md:-bottom-10 left-0 right-0 flex justify-center z-0"
      >
        <span className="bg-wordmark whitespace-nowrap"></span>
      </div>
    </section>
  );
};

export default AboutSection;
