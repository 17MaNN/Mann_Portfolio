import { motion } from "framer-motion";

const AchievementsSection = () => {
  const achievements = [
    {
      number: "①",
      title: "Top 30 among 3000+ teams",
      subtitle: "National Hackathon Competition",
      description: "Selected in the top 1% of participating teams nationwide",
    },
    {
      number: "②",
      title: "Smart India Hackathon",
      subtitle: "Government of India Initiative",
      description: "Qualified for one of India's largest hackathon competitions",
    },
  ];

  return (
    <section className="py-24 md:py-32 relative">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-20 text-7xl text-muted-foreground/10 font-mono hidden lg:block">
        {"**"}
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
            ✦ Recognition
          </span>
          <h2 className="text-section-heading">Milestones</h2>
        </motion.div>

        {/* Achievements Grid */}
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              className="group relative"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            >
              {/* Organic Shape Container */}
              <motion.div
                className="relative p-8 md:p-10 bg-secondary border border-border transition-all duration-500 group-hover:shadow-xl"
                style={{
                  borderRadius:
                    index % 2 === 0
                      ? "60% 40% 50% 50% / 40% 50% 50% 60%"
                      : "40% 60% 50% 50% / 50% 40% 60% 50%",
                }}
                whileHover={{ y: -4 }}
              >
                {/* Number Badge */}
                <motion.div 
                  className="text-5xl md:text-6xl mb-6 font-display font-bold text-foreground/80"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.15 + 0.2, type: "spring" }}
                >
                  {achievement.number}
                </motion.div>

                {/* Content */}
                <h3 className="font-display font-semibold text-xl md:text-2xl mb-2">
                  {achievement.title}
                </h3>
                <p className="font-body font-medium text-muted-foreground mb-3">
                  {achievement.subtitle}
                </p>
                <p className="text-body text-muted-foreground/80">
                  {achievement.description}
                </p>

                {/* Decorative Sparkle */}
                <span className="absolute top-6 right-6 text-xl opacity-0 group-hover:opacity-50 transition-opacity">
                  ✦
                </span>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Decorative Divider */}
        <motion.div 
          className="mt-20 flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex items-center gap-3 text-muted-foreground/30">
            <span className="font-mono">{"{"}</span>
            <span className="text-xl">✦</span>
            <span className="text-xl">✦</span>
            <span className="font-mono">{"}"}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;
