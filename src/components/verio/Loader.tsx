import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { EASE, EASE_INOUT } from "./motion";

export function Loader({ onDone }: { onDone?: () => void }) {
  const [pct, setPct] = useState(0);
  const [phase, setPhase] = useState<"count" | "expand" | "done">("count");

  useEffect(() => {
    const start = performance.now();
    const duration = 1400;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 2);
      setPct(Math.round(eased * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
      else {
        setTimeout(() => setPhase("expand"), 160);
        setTimeout(() => setPhase("done"), 160 + 700);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <AnimatePresence onExitComplete={onDone}>
      {phase !== "done" && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ clipPath: "inset(0 0 100% 0)" }}
          transition={{ duration: 0.6, ease: EASE_INOUT }}
          className="fixed inset-0 z-[100] grid place-items-center overflow-hidden bg-background"
        >
          {/* Expanding cobalt circle */}
          <motion.div
            className="rounded-full bg-cobalt"
            initial={{ width: 12, height: 12 }}
            animate={
              phase === "expand"
                ? { width: "260vmax", height: "260vmax" }
                : { width: 12, height: 12 }
            }
            transition={
              phase === "expand"
                ? { duration: 0.7, ease: EASE_INOUT }
                : { duration: 0.2, ease: EASE }
            }
          />
          {/* Counter */}
          <div className="pointer-events-none absolute inset-x-0 bottom-10 flex flex-col items-center gap-3 sm:bottom-16">
            <motion.span
              animate={{ opacity: phase === "expand" ? 0 : 1 }}
              transition={{ duration: 0.3 }}
              className="font-display text-[10px] uppercase tracking-[0.3em] text-foreground/50"
            >
              Verio Studio®
            </motion.span>
            <motion.span
              animate={{ opacity: phase === "expand" ? 0 : 1 }}
              transition={{ duration: 0.3 }}
              className="font-display text-5xl font-semibold tabular-nums tracking-tight text-foreground sm:text-6xl"
            >
              {String(pct).padStart(2, "0")}
            </motion.span>
          </div>
          <div className="pointer-events-none absolute left-6 top-6 font-display text-[10px] uppercase tracking-[0.3em] text-foreground/40 sm:left-10 sm:top-10">
            Index / 01
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
