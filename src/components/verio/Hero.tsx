import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { EASE } from "./motion";
import { MaskedLines, FadeIn } from "./TextReveal";
import { ExploreButton } from "./ExploreButton";
import { WhatsAppIcon } from "./WhatsAppIconButton";

export function Hero({ start = true }: { start?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -40]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen border-b border-hairline pb-12 pt-28 sm:pt-32"
    >
      {/* Animated vertical hairline grid */}
      <div className="pointer-events-none absolute inset-y-0 left-0 right-0 mx-auto hidden max-w-[1400px] grid-cols-12 px-4 sm:grid sm:px-8">
        {Array.from({ length: 13 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ scaleY: 0 }}
            animate={start ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 1.1, ease: EASE, delay: 0.1 + i * 0.04 }}
            style={{ transformOrigin: "top" }}
            className="col-span-1 h-full w-px bg-hairline/60 last:hidden"
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-8">
        {/* Top meta row */}
        <FadeIn start={start} delay={0.15} className="mb-10 sm:mb-14">
          <div className="flex items-end justify-between border-b border-hairline pb-4 text-[10px] uppercase tracking-[0.22em] text-muted-foreground sm:text-xs">
            <span>Verio Studio® — IT</span>
            <span className="hidden sm:inline">Studio di web design — 2026</span>
            <span>Index / 01</span>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Brand card */}
          <motion.div
            style={{ y }}
            initial={{ opacity: 0, x: -30 }}
            animate={start ? { opacity: 1, x: 0 } : { opacity: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.35 }}
            className="lg:col-span-3"
          >
            <div className="relative aspect-[3/4] w-full max-w-[260px] overflow-hidden rounded-lg bg-cobalt">
              <span className="absolute bottom-5 left-5 font-display text-2xl font-semibold text-cobalt-foreground [writing-mode:vertical-rl] [transform:rotate(180deg)] sm:text-3xl">
                Verio Studio®
              </span>
              <span className="absolute right-4 top-4 text-[10px] uppercase tracking-[0.2em] text-cobalt-foreground/70">
                Est. 2026
              </span>
            </div>
          </motion.div>

          {/* Headline */}
          <div className="lg:col-span-9">
            <MaskedLines
              as="div"
              start={start}
              delay={0.45}
              className="font-display font-semibold leading-[0.95] tracking-[-0.035em]"
              lines={[
                <span key="1" style={{ fontSize: "clamp(2.75rem, 9vw, 8.5rem)" }}>
                  Creiamo siti web
                </span>,
                <span
                  key="2"
                  className="text-cobalt"
                  style={{ fontSize: "clamp(2.75rem, 9vw, 8.5rem)" }}
                >
                  professionali.
                </span>,
              ]}
            />

            <FadeIn start={start} delay={0.9} className="mt-8 max-w-2xl">
              <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                Verio Studio realizza siti web moderni, chiari e responsive per attività locali e
                professionisti che vogliono presentarsi meglio online.
              </p>
            </FadeIn>

            <FadeIn start={start} delay={1.05} className="mt-10 flex flex-wrap items-center gap-3">
              <ExploreButton />
              <a
                href="#contatti"
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
              >
                Contattaci
              </a>
              <WhatsAppIcon variant="outline" />
            </FadeIn>

            <FadeIn
              start={start}
              delay={1.2}
              className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-[10px] uppercase tracking-[0.2em] text-muted-foreground sm:text-xs"
            >
              <span>— siti responsive</span>
              <span>— design moderno</span>
              <span>— identità digitale</span>
              <span>— supporto diretto</span>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
