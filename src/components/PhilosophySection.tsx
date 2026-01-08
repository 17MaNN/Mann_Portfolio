import { motion } from "framer-motion";

const PhilosophySection = () => {
  return (
    <section className="py-24 md:py-32 bg-foreground text-primary-foreground relative overflow-hidden">
      {/* Decorative Code Elements */}
      <div className="absolute top-10 left-10 font-mono text-6xl text-primary-foreground/10 hidden lg:block">
        {"<>"}
      </div>
      <div className="absolute bottom-10 right-10 font-mono text-6xl text-primary-foreground/10 hidden lg:block">
        {"</>"}
      </div>
      <div className="absolute top-1/2 left-1/4 font-mono text-4xl text-primary-foreground/5 hidden xl:block">
        {"[ ]"}
      </div>
      <div className="absolute top-1/3 right-1/4 font-mono text-4xl text-primary-foreground/5 hidden xl:block">
        {"{ }"}
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {/* Quote Mark */}
          <motion.div 
            className="text-6xl md:text-8xl font-display font-bold text-primary-foreground/20 mb-8"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, type: "spring" }}
          >
            "
          </motion.div>

          {/* Quote Text */}
          <motion.blockquote 
            className="font-display font-normal text-2xl md:text-3xl lg:text-4xl leading-relaxed mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Clean code meets intelligent systems. I believe in building solutions that
            are as{" "}
            <span className="relative inline-block">
              beautiful in architecture
              <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-primary-foreground/40" />
            </span>{" "}
            as they are{" "}
            <span className="relative inline-block">
              functional in purpose
              <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-primary-foreground/40" />
            </span>
            .
          </motion.blockquote>

          {/* Code Decoration */}
          <motion.div 
            className="flex items-center justify-center gap-6 font-mono text-primary-foreground/30 text-lg md:text-xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <span>{"<"}</span>
            <span>{">"}</span>
            <span className="text-primary-foreground/50">✦</span>
            <span>{"{"}</span>
            <span>{"}"}</span>
            <span>{"[ ]"}</span>
            <span>{"//"}</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PhilosophySection;
