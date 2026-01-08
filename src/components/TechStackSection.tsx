import { motion } from "framer-motion";

const TechStackSection = () => {
  const techCategories = [
    {
      label: "Languages",
      techs: ["Python", "Java", "JavaScript", "HTML", "CSS"],
    },
    {
      label: "ML / AI",
      techs: ["TensorFlow", "Scikit-learn", "CNN", "NLP"],
    },
    {
      label: "Frameworks",
      techs: ["Flask", "NumPy", "Pandas", "Matplotlib"],
    },
    {
      label: "Database",
      techs: ["MySQL", "JDBC", "SQL"],
    },
    {
      label: "Tools",
      techs: ["Git", "GitHub", "VS Code"],
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-secondary/30 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-10 left-10 font-mono text-8xl text-muted-foreground/5">
        {"</>"}
      </div>
      <div className="absolute bottom-10 right-10 font-mono text-8xl text-muted-foreground/5">
        {"{ }"}
      </div>

      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Heading */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <span className="text-small text-muted-foreground mb-4 block">
            ✦ What I Work With
          </span>
          <h2 className="text-section-heading">Tech Stack</h2>
        </motion.div>

        {/* Tech Categories */}
        <div className="max-w-5xl mx-auto space-y-10">
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.label}
              className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            >
              {/* Category Label */}
              <div className="w-32 shrink-0">
                <span className="text-small text-muted-foreground">
                  {category.label}
                </span>
              </div>

              {/* Tech Pills */}
              <div className="flex flex-wrap gap-3">
                {category.techs.map((tech, techIndex) => (
                  <motion.span
                    key={tech}
                    className="pill font-mono text-sm cursor-pointer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: categoryIndex * 0.1 + techIndex * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Decorative Bottom Element */}
        <motion.div 
          className="mt-20 flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="flex items-center gap-6 text-muted-foreground/40">
            <span className="w-16 h-px bg-border" />
            <span className="font-mono text-sm">// always learning</span>
            <span className="w-16 h-px bg-border" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStackSection;
