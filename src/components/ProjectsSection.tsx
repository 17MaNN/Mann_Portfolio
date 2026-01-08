import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

interface Project {
  title: string;
  tagline: string;
  description: string;
  tech: string[];
  github?: string;
  website?: string;
  isWebsite?: boolean;
}

const ProjectsSection = () => {
  const projects: Project[] = [
    {
      title: "Hakkasan Mumbai",
      tagline: "RESTAURANT • WEB DESIGN",
      description:
        "Premium restaurant website showcasing luxury dining experience with elegant UI and seamless reservation system.",
      tech: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      website: "https://hakkasan-mumbai.vercel.app/",
      isWebsite: true,
    },
    {
      title: "Skin Cancer Detection",
      tagline: "DEEP LEARNING • MEDICAL AI",
      description:
        "CNN-based classification model achieving 98%+ accuracy in detecting malignant skin lesions. Deployed with Flask for real-time clinical analysis.",
      tech: ["TensorFlow", "CNN", "Flask", "Python"],
      github: "https://github.com/17MaNN/SCDM",
    },
    {
      title: "Tweet Sentiment Analysis",
      tagline: "NLP • TEXT CLASSIFICATION",
      description:
        "Advanced NLP classifier using TF-IDF vectorization for real-time sentiment detection. Currently optimizing towards 95%+ accuracy benchmark.",
      tech: ["NLP", "Scikit-learn", "TF-IDF", "Python"],
      github: "https://github.com/17MaNN/Tweet_sentiment_",
    },
    {
      title: "Phishing Detector",
      tagline: "ML SECURITY • NLP",
      description:
        "Machine learning security model leveraging NLP techniques to identify and flag phishing attempts with high precision.",
      tech: ["Machine Learning", "NLP", "Python", "Security"],
      github: "https://github.com/17MaNN/Phishing_Detector",
    },
    {
      title: "AgriConnect",
      tagline: "FULL STACK • AGRICULTURE TECH",
      description:
        "Comprehensive Java Swing application with MySQL backend, connecting farmers with markets and resources for better agricultural outcomes.",
      tech: ["Java", "Swing", "MySQL", "JDBC"],
      github: "https://github.com/17MaNN/AgriConnect",
    },
  ];

  return (
    <section id="projects" className="py-24 md:py-32 relative bg-background">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 text-5xl text-muted-foreground/20 animate-float hidden lg:block">
        ✦
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
            ✦ Selected Works
          </span>
          <div className="flex items-end gap-6">
            <h2 className="text-section-heading">Featured Work</h2>
            <span className="hidden md:block font-mono text-muted-foreground/40 text-2xl mb-2">
              {"{ 05 }"}
            </span>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              className="project-card group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              whileHover={{ y: -8 }}
            >
              {/* Project Number */}
              <span className="absolute top-6 right-6 font-mono text-sm text-muted-foreground">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Tagline */}
              <span className="text-small text-muted-foreground mb-3 block">
                {project.tagline}
              </span>

              {/* Title */}
              <h3 className="font-display font-semibold text-2xl md:text-[1.75rem] mb-4">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-body text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="font-mono px-3 py-1.5 rounded-full text-muted-foreground transition-colors hover:text-foreground bg-muted"
                    style={{ fontSize: '13px' }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-4 pt-4 border-t border-border">
                {project.isWebsite ? (
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium hover:text-muted-foreground transition-colors group/link"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Visit Website</span>
                    <ExternalLink className="w-3 h-3 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" />
                  </a>
                ) : (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium hover:text-muted-foreground transition-colors group/link"
                  >
                    <Github className="w-4 h-4" />
                    <span>View Code</span>
                    <ExternalLink className="w-3 h-3 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" />
                  </a>
                )}
              </div>

              {/* Hover Decoration */}
              <div className="absolute bottom-4 right-4 text-2xl opacity-0 group-hover:opacity-20 transition-opacity">
                ✦
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
