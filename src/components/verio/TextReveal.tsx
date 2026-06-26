import { motion, type HTMLMotionProps } from "framer-motion";
import { Children, type ReactNode } from "react";
import { EASE } from "./motion";

/**
 * Splits children into lines via <br /> and masks each with overflow-hidden.
 * Use for headlines where you want a cinematic line-by-line entrance.
 */
export function MaskedLines({
  lines,
  start = true,
  delay = 0,
  className = "",
  as: Tag = "span",
}: {
  lines: ReactNode[];
  start?: boolean;
  delay?: number;
  className?: string;
  as?: "span" | "div";
}) {
  return (
    <Tag className={className}>
      {Children.toArray(lines).map((line, i) => (
        <span key={i} className="block overflow-hidden">
          <motion.span
            className="block"
            initial={{ y: "110%" }}
            animate={start ? { y: "0%" } : { y: "110%" }}
            transition={{ duration: 0.95, ease: EASE, delay: delay + i * 0.1 }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}

export function FadeIn({
  children,
  start = true,
  delay = 0,
  y = 16,
  className,
  ...rest
}: {
  children: ReactNode;
  start?: boolean;
  delay?: number;
  y?: number;
  className?: string;
} & HTMLMotionProps<"div">) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      animate={start ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.8, ease: EASE, delay }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
