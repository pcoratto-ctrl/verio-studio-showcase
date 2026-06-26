import { motion } from "framer-motion";
import { EASE } from "./motion";

export function Hairline({
  vertical = false,
  className = "",
  delay = 0,
}: {
  vertical?: boolean;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ scaleX: vertical ? 1 : 0, scaleY: vertical ? 0 : 1, opacity: 0.6 }}
      whileInView={{ scaleX: 1, scaleY: 1, opacity: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 1.1, ease: EASE, delay }}
      style={{
        transformOrigin: vertical ? "top" : "left",
      }}
      className={`bg-hairline ${vertical ? "w-px h-full" : "h-px w-full"} ${className}`}
    />
  );
}
