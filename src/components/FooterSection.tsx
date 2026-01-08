import { Github, Linkedin, Mail, Phone, Code2 } from "lucide-react";
import { motion } from "framer-motion";

const FooterSection = () => {
  const contacts = [
    { icon: Github, label: "GitHub", href: "https://github.com/17MaNN", number: "①" },
    { icon: Code2, label: "LeetCode", href: "https://leetcode.com/u/17MaNN/", number: "②" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/man-mohan-sharma/", number: "③" },
    { icon: Mail, label: "Email", href: "mailto:manmohansharma1117@gmail.com", number: "④" },
    { icon: Phone, label: "Phone", href: "tel:+919259412501", number: "⑤" },
  ];

  return (
    <footer id="contact" className="relative pt-0">
      {/* Wavy Top Border */}
      <div className="w-full overflow-hidden">
        <svg
          viewBox="0 0 1200 60"
          className="w-full h-12 md:h-16"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 C200,20 400,50 600,30 C800,10 1000,40 1200,20 L1200,60 L0,60 Z"
            fill="hsl(var(--foreground))"
          />
        </svg>
      </div>

      {/* Main Footer Content */}
      <div className="bg-foreground text-primary-foreground py-20 md:py-28">
        <div className="container mx-auto px-6 lg:px-12">
          {/* CTA Marquee */}
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* Marquee Banner */}
            <a 
              href="mailto:manmohansharma1117@gmail.com"
              className="block border-t border-b border-primary-foreground/20 overflow-hidden hover:bg-primary-foreground/5 transition-colors cursor-pointer"
              style={{ height: '120px' }}
            >
              <div className="marquee-container h-full flex items-center">
                <div className="marquee-content">
                  {[...Array(6)].map((_, i) => (
                    <span
                      key={i}
                      className="font-display font-bold whitespace-nowrap flex items-center gap-6"
                      style={{ fontSize: '32px' }}
                    >
                      Get In Touch 
                      <span className="text-primary-foreground/40">✦</span>
                      Let's Build Together 
                      <span className="text-primary-foreground/40">✦</span>
                      Hire Me 
                      <span className="text-primary-foreground/40">✦</span>
                      Say Hello 
                      <span className="text-primary-foreground/40 mr-6">✦</span>
                    </span>
                  ))}
                </div>
              </div>
            </a>
          </motion.div>

          {/* Contact Links */}
          <motion.div 
            className="flex flex-wrap justify-center gap-6 md:gap-10 mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {contacts.map((contact, index) => (
              <motion.a
                key={contact.label}
                href={contact.href}
                target={contact.label === "Email" || contact.label === "Phone" ? undefined : "_blank"}
                rel={contact.label === "Email" || contact.label === "Phone" ? undefined : "noopener noreferrer"}
                className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                whileHover={{ scale: 1.1 }}
              >
                <span className="font-display text-lg">{contact.number}</span>
                <contact.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="font-body font-medium text-sm uppercase tracking-wider hidden sm:inline">
                  {contact.label}
                </span>
              </motion.a>
            ))}
          </motion.div>

          {/* Decorative Separator */}
          <motion.div 
            className="flex items-center justify-center gap-4 mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <span className="w-12 h-px bg-primary-foreground/20" />
            <span className="text-xl text-primary-foreground/40">✦</span>
            <span className="w-12 h-px bg-primary-foreground/20" />
          </motion.div>

          {/* Copyright */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <p className="font-body text-sm text-primary-foreground/50">
              © 2025 Man Mohan Sharma • Crafted with code & creativity
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
