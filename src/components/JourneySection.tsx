import { motion } from "framer-motion";

const JourneySection = () => {
  const journeyItems = [
    {
      type: "Education",
      title: "B.Tech Computer Science",
      organization: "Uttaranchal University",
      period: "2023 — 2027",
      details: "CGPA: 9.1/10",
      icon: "🎓",
    },
    {
      type: "Experience",
      title: "Java Programming Intern",
      organization: "IIT Hyderabad Partnership",
      period: "Jun — Jul 2024",
      details: "Backend development & system design",
      icon: "💼",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-secondary/30 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-64 h-64 rounded-full bg-muted/50 blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-48 h-48 rounded-full bg-muted/30 blur-3xl" />

      <div className="container mx-auto px-6 lg:px-12 relative">
        {/* Section Heading */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <span className="text-small text-muted-foreground mb-4 block">
            ✦ Background
          </span>
          <h2 className="text-section-heading">Journey</h2>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto space-y-8">
          {journeyItems.map((item, index) => (
            <motion.div
              key={item.title}
              className="relative flex gap-6 md:gap-10"
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            >
              {/* Timeline Line */}
              <div className="hidden md:flex flex-col items-center">
                <motion.div 
                  className="w-12 h-12 rounded-full bg-foreground text-primary-foreground flex items-center justify-center text-xl"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.15 + 0.2, type: "spring" }}
                >
                  {item.icon}
                </motion.div>
                {index < journeyItems.length - 1 && (
                  <div className="w-px h-full bg-border mt-4" />
                )}
              </div>

              {/* Content Card */}
              <div className="flex-1 pb-8">
                <motion.div 
                  className="bg-secondary rounded-2xl p-6 md:p-8 border border-border hover:shadow-lg transition-shadow"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Type Badge */}
                  <span className="text-small text-muted-foreground mb-2 block">
                    {item.type}
                  </span>

                  {/* Title & Organization */}
                  <h3 className="font-display font-semibold text-xl md:text-2xl mb-1">
                    {item.title}
                  </h3>
                  <p className="font-body font-medium text-foreground/80 mb-3">
                    {item.organization}
                  </p>

                  {/* Details Row */}
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <span className="font-mono">{item.period}</span>
                    <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                    <span>{item.details}</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
