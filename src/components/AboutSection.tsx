import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 font-mono text-6xl text-muted-foreground/10 hidden lg:block">
        {"{ }"}
      </div>
      <div className="absolute bottom-20 left-10 text-4xl text-muted-foreground/20 hidden lg:block">
        *
      </div>

      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Heading */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <span className="text-small text-muted-foreground mb-4 block">
            ✦ Introduction
          </span>
          <h2 className="text-section-heading">About Me</h2>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Display Text */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p className="font-display font-normal text-2xl md:text-3xl lg:text-[2rem] leading-snug">
              I craft{" "}
              <span className="relative inline-block">
                intelligent systems
                <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-foreground/30" />
              </span>{" "}
              that solve real-world problems through the fusion of{" "}
              <span className="font-mono text-[0.9em]">Machine Learning</span> and{" "}
              <span className="font-mono text-[0.9em]">Full Stack Development</span>.
            </p>

            {/* Highlight Stat */}
            <motion.div 
              className="inline-flex items-center gap-4 px-6 py-4 rounded-2xl border border-border bg-secondary/50"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <span className="text-4xl md:text-5xl font-display font-bold">98%+</span>
              <span className="text-body text-muted-foreground">
                accuracy in
                <br />
                production models
              </span>
            </motion.div>
          </motion.div>

          {/* Bio & Details */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* Decorative Bracket */}
            <div className="font-mono text-2xl text-muted-foreground/40 hidden md:block">
              {"<about>"}
            </div>

            <p className="text-body text-muted-foreground leading-relaxed pl-0 md:pl-8">
              As a Computer Science undergraduate at Uttaranchal University with a 9.1
              CGPA, I'm deeply passionate about building systems that bridge the gap
              between cutting-edge research and practical applications.
            </p>

            <p className="text-body text-muted-foreground leading-relaxed pl-0 md:pl-8">
              My journey spans from developing CNN-based medical diagnosis systems with
              98%+ accuracy to creating full-stack applications that serve real
              agricultural communities. I believe in code that's as elegant as it is
              functional.
            </p>

            <p className="text-body text-muted-foreground leading-relaxed pl-0 md:pl-8">
              When I'm not training models or writing APIs, you'll find me exploring
              the latest in AI research and contributing to open-source projects that
              make technology accessible to everyone.
            </p>

            {/* Decorative Bracket */}
            <div className="font-mono text-2xl text-muted-foreground/40 hidden md:block">
              {"</about>"}
            </div>
          </motion.div>
        </div>

        {/* Decorative Divider */}
        <motion.div 
          className="mt-24 flex items-center justify-center gap-4 text-muted-foreground/40"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <span className="font-mono">{"["}</span>
          <span className="text-2xl">✦</span>
          <span className="font-mono">{"]"}</span>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
