import { useRef, ReactNode } from "react";
import { motion, useScroll, useTransform, useSpring, MotionStyle } from "framer-motion";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "span" | "h2" | "h3" | "p";
  /** How far into the viewport the element must travel to go from dull -> bold */
  intensity?: "subtle" | "normal" | "strong";
}

/**
 * Continuously ties opacity / blur / weight-ish contrast to the element's
 * position in the viewport — NOT a one-shot "whileInView" trigger.
 *
 * Scrolling down: dull -> bold as it enters the reveal band.
 * Scrolling up: bold -> dull as it exits the same band, exactly reversed.
 * Because it's driven by scrollYProgress (a continuous value tied to
 * element position, not a discrete enter/exit event), it works identically
 * in both directions with no snapping.
 */
const ScrollReveal = ({ children, className, as = "div", intensity = "normal" }: ScrollRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 88%", "start 42%"],
  });

  const smooth = useSpring(scrollYProgress, { stiffness: 260, damping: 32, mass: 0.4 });

  const dullOpacity = intensity === "subtle" ? 0.45 : intensity === "strong" ? 0.18 : 0.3;
  const dullBlur = intensity === "subtle" ? 2 : intensity === "strong" ? 6 : 4;

  const opacity = useTransform(smooth, [0, 1], [dullOpacity, 1]);
  const blurPx = useTransform(smooth, [0, 1], [dullBlur, 0]);
  const y = useTransform(smooth, [0, 1], [14, 0]);
  const filter = useTransform(blurPx, (v) => `blur(${v}px)`);

  const Comp = motion[as] as typeof motion.div;

  return (
    <Comp
      ref={ref}
      className={className}
      style={{ opacity, y, filter } as MotionStyle}
    >
      {children}
    </Comp>
  );
};

export default ScrollReveal;
