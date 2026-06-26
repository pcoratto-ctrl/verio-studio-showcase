import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { EASE } from "./motion";

export function ExploreButton({
  href = "#casi-studio",
  label = "Esplora i casi",
  className = "",
}: {
  href?: string;
  label?: string;
  className?: string;
}) {
  function onClick(e: React.MouseEvent<HTMLAnchorElement>) {
    if (!href.startsWith("#")) return;
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <motion.a
      href={href}
      onClick={onClick}
      initial="rest"
      whileHover="hover"
      animate="rest"
      className={`group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-foreground px-6 py-3.5 text-sm font-medium ${className}`}
    >
      {/* Cobalt expanding circle */}
      <motion.span
        aria-hidden
        variants={{
          rest: { scale: 0, opacity: 0 },
          hover: { scale: 1, opacity: 1 },
        }}
        transition={{ duration: 0.55, ease: EASE }}
        style={{ transformOrigin: "center" }}
        className="absolute left-1/2 top-1/2 -z-0 aspect-square w-[140%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cobalt"
      />
      <motion.span
        variants={{
          rest: { color: "var(--color-foreground)" },
          hover: { color: "var(--color-cobalt-foreground)" },
        }}
        transition={{ duration: 0.3, ease: EASE }}
        className="relative z-10"
      >
        {label}
      </motion.span>
      <motion.span
        variants={{
          rest: { x: 0, color: "var(--color-foreground)" },
          hover: { x: 4, color: "var(--color-cobalt-foreground)" },
        }}
        transition={{ duration: 0.3, ease: EASE }}
        className="relative z-10 inline-flex"
      >
        <ArrowRight className="h-4 w-4" />
      </motion.span>
    </motion.a>
  );
}
