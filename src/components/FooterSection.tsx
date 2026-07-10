import { Github, Linkedin, Mail, Phone, Code2 } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { FOOTER_BG_DARK, FOOTER_BG_LIGHT } from "@/lib/themeImages";
import Marquee from "./Marquee";

const FooterSection = () => {
  const { resolvedTheme } = useTheme();
  const bgImage = resolvedTheme === "light" ? FOOTER_BG_LIGHT : FOOTER_BG_DARK;

  const contacts = [
    { icon: Github, label: "GitHub", href: "https://github.com/17MaNN" },
    { icon: Code2, label: "LeetCode", href: "https://leetcode.com/u/17MaNN/" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/man-mohan-sharma/" },
    { icon: Mail, label: "Email", href: "mailto:manmohansharma1117@gmail.com" },
    { icon: Phone, label: "Phone", href: "tel:+919259412501" },
  ];

  return (
    <footer id="contact" className="relative border-t border-border">
      <div className="bg-foreground text-primary-foreground py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={bgImage}
            alt=""
            className="w-full h-full object-cover opacity-[0.4] mix-blend-luminosity"
          />
        </div>
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            className="mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <a
              href="mailto:manmohansharma1117@gmail.com"
              className="block border-t border-b border-primary-foreground/20 overflow-hidden hover:bg-primary-foreground/5 transition-colors cursor-pointer h-[100px] md:h-[120px]"
            >
              <Marquee speed={80} className="h-full flex items-center">
                <span className="font-display font-bold whitespace-nowrap flex items-center gap-6 text-2xl md:text-[32px] pr-6">
                  Get In Touch
                  <span className="text-primary-foreground/30 font-mono text-xl">🟐</span>
                  Let's Build Together
                  <span className="text-primary-foreground/30 font-mono text-xl">🟐</span>
                  Hire Me
                  <span className="text-primary-foreground/30 font-mono text-xl">🟐</span>
                  Say Hello
                  <span className="text-primary-foreground/30 font-mono text-xl">🟐</span>
                </span>
              </Marquee>
            </a>
          </motion.div>

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
                className="link-underline text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.08 * index }}
              >
                <span className="index-label text-primary-foreground/40">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <contact.icon className="w-4 h-4" />
                <span className="font-body font-medium text-sm uppercase tracking-wider hidden sm:inline">
                  {contact.label}
                </span>
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            className="text-center border-t border-primary-foreground/10 pt-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
<<<<<<< HEAD
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
              © 2026 Man Mohan Sharma • Crafted with code & creativity
=======
            <p className="font-mono text-xs text-primary-foreground/40 uppercase tracking-widest">
              © 2026 Man Mohan Sharma — Crafted with code
>>>>>>> 45e590e (updating to v2)
            </p>
          </motion.div>
        </div>

        {/* Giant faded background wordmark */}
        <div
          aria-hidden="true"
          className="absolute -bottom-8 md:-bottom-16 left-0 right-0 flex justify-center z-0"
        >
          <span
            className="bg-wordmark whitespace-nowrap"
            style={{ color: "hsl(var(--primary-foreground) / 0.36)" }}
          >
            MaNN.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
