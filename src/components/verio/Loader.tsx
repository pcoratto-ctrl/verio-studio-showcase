import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { EASE_INOUT } from "./motion";

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
        setTimeout(() => setPhase("expand"), 180);
        setTimeout(() => setPhase("done"), 180 + 750);
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
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: EASE_INOUT }}
          className="fixed inset-0 z-[100] grid place-items-center overflow-hidden bg-background"
        >
          {/* Expanding cobalt circle */}
          <motion.div
            className="rounded-full bg-cobalt"
            initial={{ width: 16, height: 16 }}
            animate={
              phase === "expand"
                ? { width: "260vmax", height: "260vmax" }
                : { width: 16 + pct * 1.6, height: 16 + pct * 1.6 }
            }
            transition={
              phase === "expand"
                ? { duration: 0.8, ease: EASE_INOUT }
                : { ease: "linear", duration: 0.05 }
            }
          />
          {/* Counter */}
          <div className="pointer-events-none absolute inset-0 flex items-end justify-between px-6 pb-6 sm:px-10 sm:pb-10">
            <motion.span
              animate={{ opacity: phase === "expand" ? 0 : 1 }}
              transition={{ duration: 0.3 }}
              className="font-display text-xs uppercase tracking-[0.25em] text-foreground/60"
            >
              Verio Studio®
            </motion.span>
            <motion.span
              animate={{ opacity: phase === "expand" ? 0 : 1 }}
              transition={{ duration: 0.3 }}
              className="font-display text-5xl font-semibold tabular-nums tracking-tight text-foreground sm:text-7xl"
            >
              {String(pct).padStart(2, "0")}
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
