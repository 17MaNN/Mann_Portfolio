import { ArrowUpRight, Github } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

interface Project {
  title: string;
  tagline: string;
  description: string;
  tech: string[];
  github?: string;
  website?: string;
  isWebsite?: boolean;
  image?: string;
}

const ProjectsSection = () => {
  const projects: Project[] = [
    {
      title: "Credit Intelligence Copilot",
      tagline: "AGENTIC RAG • MULTI-SERVICE",
      description:
        "Multi-service agentic RAG system for credit risk and collections ops, combines a PyTorch risk model, CV/OCR document analysis, a fine-tuned NLP intent classifier, and RAG-based policy retrieval, orchestrated by an LLM agent with tool-calling. Deployed via Docker and Kubernetes.",
      tech: ["Python", "PyTorch", "Hugging Face", "FastAPI", "FAISS", "Docker", "Kubernetes", "AWS Bedrock", "Gemini"],
      github: "https://github.com/17MaNN/Credit-Intelligence-Copilot",
      website: "",
      isWebsite: false,
    },
    {
      title: "FIFA 26 : Match Prediction System",
      tagline: "XGBOOST · FASTAPI · REACT/VITE",
      description:
        "End-to-end FIFA World Cup 2026 prediction system: XGBoost modeling, a FastAPI backend, and a React/Vite frontend, deployed on Render and Vercel with live football-data.org integration.",
      tech: ["XGBoost", "FastAPI", "React", "Vite", "Render", "Vercel"],
      github: "https://github.com/17MaNN/WC26",
      website: "https://predictorfifa2026.vercel.app/",
      isWebsite: true,
    },
    {
      title: "Rainbow Prediction Framework",
      tagline: "ATMOSPHERIC ML · RESEARCH · arXiv (in progress)",
      description:
        "1.49M NASA POWER atmospheric records, 26 physics-derived features, and an XGBoost/RF/LightGBM ensemble, co-built with Laveena Armarkar, targeting an arXiv physics.ao-ph submission.",
      tech: ["XGBoost", "LightGBM", "Random Forest", "Python", "NASA POWER"],
      github: "https://github.com/17MaNN",
    },
    {
      title: "Medical AI Assistant",
      tagline: "LLM • RAG SYSTEM",
      description:
        "Retrieval-Augmented Generation pipeline for clinical document retrieval using vector databases and LLM-based contextual reasoning.",
      tech: ["Python", "LangChain", "Vector DB", "LLM", "FastAPI"],
      github: "https://github.com/17MaNN/MedSearchAI",
      website: "http://medsearchai.onrender.com/",
      isWebsite: true,
    },
    {
      title: "Hakkasan Mumbai",
      tagline: "RESTAURANT · WEB DESIGN",
      description:
        "Premium restaurant website showcasing a luxury dining experience with an elegant UI and seamless reservation system.",
      tech: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      website: "https://hakkasan-mumbai.vercel.app/",
      isWebsite: true,
    },
    {
      title: "Skin Cancer Detection",
      tagline: "DEEP LEARNING · MEDICAL AI",
      description:
        "CNN-based classification model achieving 98%+ accuracy in detecting malignant skin lesions. Deployed with Flask for real-time clinical analysis.",
      tech: ["TensorFlow", "CNN", "Flask", "Python"],
      github: "https://github.com/17MaNN/SCDM",
    },
    {
      title: "Tweet Sentiment Analysis",
      tagline: "NLP · TEXT CLASSIFICATION",
      description:
        "NLP classifier using TF-IDF vectorization for real-time sentiment detection, optimizing towards a 95%+ accuracy benchmark.",
      tech: ["NLP", "Scikit-learn", "TF-IDF", "Python"],
      github: "https://github.com/17MaNN/Tweet_sentiment_",
    },
    {
      title: "Phishing Detector",
      tagline: "ML SECURITY · NLP",
      description:
        "Machine learning security model leveraging NLP techniques to identify and flag phishing attempts with high precision.",
      tech: ["Machine Learning", "NLP", "Python", "Security"],
      github: "https://github.com/17MaNN/Phishing_Detector",
    },
    {
      title: "AgriConnect",
      tagline: "FULL STACK · AGRICULTURE TECH",
      description:
        "Java Swing application with a MySQL backend, connecting farmers with markets and resources for better agricultural outcomes.",
      tech: ["Java", "Swing", "MySQL", "JDBC"],
      github: "https://github.com/17MaNN/AgriConnect",
    },
  ];

  return (
    <section id="projects" className="py-24 md:py-32 relative bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <ScrollReveal className="mb-16 flex items-end justify-between border-b border-border pb-8">
          <div>
            <span className="index-label mb-4 block">03 / SELECTED WORK</span>
            <h2 className="text-section-heading">Projects</h2>
          </div>
          <span className="hidden md:block font-mono text-muted-foreground/40 text-lg">
            {String(projects.length).padStart(2, "0")} total
          </span>
        </ScrollReveal>

        <div>
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              className="project-row group relative"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: Math.min(index * 0.06, 0.3), ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="grid md:grid-cols-12 gap-6 md:gap-8 items-start px-2 md:px-4">
                <div className="md:col-span-1 flex md:block">
              
                  <motion.span
                    className="relative inline-flex items-center justify-center w-9 h-9 rounded-full index-label group-hover:text-signal-foreground transition-colors duration-200"
                    whileHover={{ scale: 1.15 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  >
                    <motion.span
                      className="absolute inset-0 rounded-full bg-signal scale-0 group-hover:scale-100"
                      transition={{ type: "spring", stiffness: 350, damping: 18 }}
                    />
                    <span className="relative z-10">{String(index + 1).padStart(2, "0")}</span>
                  </motion.span>
                </div>

                <div className="md:col-span-5">
                  <span className="text-small mb-2 block">{project.tagline}</span>
                  <ScrollReveal as="h3" intensity="subtle" className="font-display font-bold text-2xl md:text-3xl leading-tight">
                    {project.title}
                  </ScrollReveal>
                </div>

                <div className="md:col-span-4">
                  <p className="text-body text-muted-foreground text-sm md:text-base">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tech.map((t) => (
                      <span key={t} className="tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="md:col-span-2 flex md:justify-end">
                  {project.isWebsite ? (
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-underline text-sm font-medium"
                    >
                      Visit site
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  ) : (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-underline text-sm font-medium"
                    >
                      <Github className="w-4 h-4" />
                      View code
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
