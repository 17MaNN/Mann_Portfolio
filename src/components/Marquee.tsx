import { useRef, useState, ReactNode } from "react";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";

interface MarqueeProps {
  children: ReactNode;
  /** Base speed in px/second */
  speed?: number;
  className?: string;
}

/**
 * An infinite-scroll marquee driven by requestAnimationFrame (not CSS
 * keyframes), so its speed is a live value we can ease toward zero.
 * On hover the target speed drops to 0 and the current speed eases toward
 * it every frame — a smooth decelerating "spiral to a stop" rather than an
 * abrupt CSS animation-play-state pause. Un-hovering eases it back up.
 */
const Marquee = ({ children, speed = 60, className = "" }: MarqueeProps) => {
  const x = useMotionValue(0);
  const currentSpeed = useRef(speed);
  const [isHovering, setIsHovering] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const halfWidth = useRef(0);

  useAnimationFrame((_, delta) => {
    const track = trackRef.current;
    if (track && halfWidth.current === 0) {
      // Track contains two duplicated copies back to back — half its width
      // is exactly one loop, which is what we wrap on.
      halfWidth.current = track.scrollWidth / 2;
    }

    const target = isHovering ? 0 : speed;
    // Ease current speed toward target — this is the "spiral" deceleration.
    currentSpeed.current += (target - currentSpeed.current) * 0.06;

    if (Math.abs(currentSpeed.current) > 0.02) {
      let next = x.get() - (currentSpeed.current * delta) / 1000;
      if (halfWidth.current > 0 && Math.abs(next) >= halfWidth.current) {
        next += halfWidth.current;
      }
      x.set(next);
    }
  });

  return (
    <div
      className={`overflow-hidden whitespace-nowrap ${className}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <motion.div ref={trackRef} className="inline-flex" style={{ x }}>
        {children}
        {children}
        {children}
        {children}
      </motion.div>
    </div>
  );
};

export default Marquee;
