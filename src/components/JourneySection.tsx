import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { JOURNEY_BG_DARK, JOURNEY_BG_LIGHT } from "@/lib/themeImages";
import ScrollReveal from "./ScrollReveal";

const JourneySection = () => {
  const { resolvedTheme } = useTheme();
  const bgImage = resolvedTheme === "light" ? JOURNEY_BG_LIGHT : JOURNEY_BG_DARK;
  const journeyItems = [
    {
      type: "Education",
      title: "B.Tech Computer Science",
      organization: "Uttaranchal University",
      period: "2023 — 2027",
      details: "CGPA: 9.1/10",
<<<<<<< HEAD
      icon: "🕮",
=======
>>>>>>> 45e590e (updating to v2)
    },
    {
      type: "Experience",
      title: "Java Developer Intern",
      organization: "IIT Hyderabad Partnership",
      period: "Jun — Jul 2024",
      details: "Backend development & system design",
<<<<<<< HEAD
      icon: "⌨",
=======
>>>>>>> 45e590e (updating to v2)
    },
    {
      type: "Experience",
      title: "ML Engineer Intern",
      organization: "Unified Mentor",
<<<<<<< HEAD
      period: "May — Aug 2025",
      details: "Industry-Based Machine Learning Projects",
      icon: "⌨",
=======
      period: "2025",
      details: "Built production ML pipelines",
>>>>>>> 45e590e (updating to v2)
    },
    {
      type: "Experience",
      title: "Freelancer",
<<<<<<< HEAD
      organization: "Freelancer.com & Upwork",
      period: "Feb 2024 — Present",
      details: "Visual Design & Web Developer",
      icon: "⌨",
=======
      organization: "Remote",
      period: "Feb 2024 — Present",
      details: "Web development & system design",
>>>>>>> 45e590e (updating to v2)
    },
  ];

  return (
    <section className="py-24 md:py-32 border-t border-border relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={bgImage}
          alt=""
          className="w-full h-full object-cover opacity-[0.1]"
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <ScrollReveal className="mb-16">
          <span className="index-label mb-4 block">/ BACKGROUND</span>
          <h2 className="text-section-heading">Journey</h2>
        </ScrollReveal>

        <div className="max-w-3xl">
          {journeyItems.map((item, index) => (
            <motion.div
              key={item.title}
              className="relative grid grid-cols-[3rem_1fr] md:grid-cols-[5rem_1fr] gap-4 md:gap-8 border-t border-border py-8"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="index-label pt-1">{String(index + 1).padStart(2, "0")}</div>

              <div>
                <span className="text-small mb-2 block">{item.type}</span>
                <ScrollReveal as="h3" intensity="subtle" className="font-display font-bold text-xl md:text-2xl mb-1">
                  {item.title}
                </ScrollReveal>
                <p className="font-body font-medium text-foreground/70 mb-3 text-sm md:text-base">
                  {item.organization}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <span className="font-mono">{item.period}</span>
                  <span className="w-1 h-1 bg-muted-foreground" />
                  <span>{item.details}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
