import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const TechStackSection = () => {
  const techCategories = [
    { label: "Languages", techs: ["Python", "Java", "JavaScript", "HTML", "CSS"] },
    { label: "ML / AI", techs: ["TensorFlow", "XGBoost", "Scikit-learn", "CNN", "NLP"] },
    { label: "Frameworks", techs: ["FastAPI", "Flask", "React", "NumPy", "Pandas"] },
    { label: "Database", techs: ["MySQL", "JDBC", "SQL"] },
    { label: "Tools", techs: ["Git", "GitHub", "Vercel", "Render", "VS Code"] },
  ];

  return (
    <section className="py-24 md:py-32 border-t border-border relative">
      <div className="container mx-auto px-6 lg:px-12">
        <ScrollReveal className="mb-16">
          <span className="index-label mb-4 block">/ WHAT I WORK WITH</span>
          <h2 className="text-section-heading">Tech Stack</h2>
        </ScrollReveal>

        <div className="max-w-5xl space-y-8">
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.label}
              className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 border-t border-border py-6"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="w-40 shrink-0">
                <span className="text-small">{category.label}</span>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.techs.map((tech) => (
                  <span key={tech} className="tag-pill">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
