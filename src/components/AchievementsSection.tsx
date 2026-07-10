import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { ACHIEVEMENTS_BG_DARK, ACHIEVEMENTS_BG_LIGHT } from "@/lib/themeImages";
import ScrollReveal from "./ScrollReveal";

const AchievementsSection = () => {
  const { resolvedTheme } = useTheme();
  const bgImage = resolvedTheme === "light" ? ACHIEVEMENTS_BG_LIGHT : ACHIEVEMENTS_BG_DARK;
  const achievements = [
    {
      number: "01",
      title: "Top 30 among 3000+ teams",
      subtitle: "National Hackathon Competition",
      description: "Selected in the top 1% of participating teams nationwide",
    },
    {
      number: "02",
      title: "Smart India Hackathon",
      subtitle: "Government of India Initiative",
      description: "Qualified for one of India's largest hackathon competitions",
    },
  ];

  return (
    <section className="py-24 md:py-32 relative border-t border-border overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={bgImage}
          alt=""
          className="w-full h-full object-cover opacity-[0.1]"
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <ScrollReveal className="mb-16">
          <span className="index-label mb-4 block">/ RECOGNITION</span>
          <h2 className="text-section-heading">Milestones</h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-px bg-border">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              className="group relative bg-background p-8 md:p-10"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="text-5xl md:text-6xl mb-6 font-display font-bold text-muted-foreground/50">
                {achievement.number}
              </div>

              <ScrollReveal as="h3" intensity="subtle" className="font-display font-bold text-xl md:text-2xl mb-2">
                {achievement.title}
              </ScrollReveal>
              <p className="font-body font-medium text-muted-foreground mb-3 text-sm">
                {achievement.subtitle}
              </p>
              <p className="text-body text-muted-foreground/80 text-sm">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
