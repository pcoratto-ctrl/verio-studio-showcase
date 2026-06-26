import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function Loader({ onDone }: { onDone?: () => void }) {
  const [pct, setPct] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const start = performance.now();
    const duration = 1500;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 2);
      setPct(Math.round(eased * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
      else {
        setTimeout(() => setDone(true), 220);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <AnimatePresence onExitComplete={onDone}>
      {!done && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
          className="fixed inset-0 z-[100] grid place-items-center bg-background"
        >
          <motion.div
            className="rounded-full bg-cobalt"
            initial={{ width: 18, height: 18 }}
            animate={{
              width: `${18 + pct * 25}vmax`,
              height: `${18 + pct * 25}vmax`,
            }}
            transition={{ ease: "linear", duration: 0.05 }}
          />
          <div className="pointer-events-none absolute inset-0 grid place-items-center">
            <span
              className="font-display text-2xl font-semibold tabular-nums tracking-tight"
              style={{ color: pct < 35 ? "var(--cobalt)" : "var(--cobalt-foreground)" }}
            >
              {pct}%
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
