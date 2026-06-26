import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { MaskedLines, FadeIn } from "./TextReveal";
import { EASE } from "./motion";

export function Bridge() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], [reduce ? 0 : -40, reduce ? 0 : 40]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden border-b border-hairline py-28 sm:py-40"
    >
      <div className="mx-auto max-w-[1400px] px-4 sm:px-8">
        <MaskedLines
          as="div"
          start
          className="font-display font-semibold leading-[1.02] tracking-[-0.03em]"
          lines={[
            <span key="1" style={{ fontSize: "clamp(2rem, 5.5vw, 5rem)" }}>
              Non mostriamo solo siti.
            </span>,
            <span
              key="2"
              className="text-muted-foreground"
              style={{ fontSize: "clamp(2rem, 5.5vw, 5rem)" }}
            >
              Mostriamo come un'attività può presentarsi meglio.
            </span>,
          ]}
        />

        <div className="mt-12 flex items-center gap-6">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.1, ease: EASE }}
            style={{ transformOrigin: "left" }}
            className="h-px flex-1 bg-cobalt"
          />
          <motion.span
            style={{ x }}
            className="block h-3 w-3 rounded-full bg-cobalt"
          />
        </div>

        <FadeIn start delay={0.4} className="mt-10 max-w-3xl">
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            Ogni progetto parte da una domanda semplice: cosa deve capire un potenziale cliente nei
            primi secondi?
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
