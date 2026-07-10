import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  assets: string[];
  onComplete: () => void;
}

const LoadingScreen = ({ assets, onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let loaded = 0;
    const total = assets.length || 1;

    const bump = () => {
      loaded += 1;
      setProgress(Math.round((loaded / total) * 100));
      if (loaded >= total) {
        // brief hold at 100 before revealing
        setTimeout(() => setDone(true), 350);
      }
    };

    if (assets.length === 0) {
      setProgress(100);
      setTimeout(() => setDone(true), 350);
      return;
    }

    assets.forEach((src) => {
      const isVideo = /\.(mp4|webm|mov)$/i.test(src);
      if (isVideo) {
        const video = document.createElement("video");
        video.preload = "auto";
        video.oncanplaythrough = bump;
        video.onerror = bump; // never block the site on a failed asset
        video.src = src;
      } else {
        const img = new Image();
        img.onload = bump;
        img.onerror = bump; // never block the site on a failed asset
        img.src = src;
      }
    });

    // Safety timeout — never trap the user on the loader
    const safety = setTimeout(() => {
      setProgress(100);
      setDone(true);
    }, 6000);

    return () => clearTimeout(safety);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (done) {
      const t = setTimeout(onComplete, 600);
      return () => clearTimeout(t);
    }
  }, [done, onComplete]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[10000] bg-background flex flex-col items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex flex-col items-center gap-8">
            <div className="font-display font-bold text-foreground tabular-nums" style={{ fontSize: "clamp(4rem, 14vw, 9rem)", letterSpacing: "-0.04em", lineHeight: 1 }}>
              {String(progress).padStart(2, "0")}
            </div>

            <div className="w-[220px] md:w-[320px] h-px bg-border relative overflow-hidden">
              <motion.div
                className="absolute top-0 left-0 h-full bg-foreground"
                style={{ width: `${progress}%` }}
                transition={{ ease: "linear" }}
              />
            </div>

            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Loading portfolio
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
