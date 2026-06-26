import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { useRef } from "react";
import { WHATSAPP_URL } from "./constants";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -40]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen border-b border-hairline pb-12 pt-28 sm:pt-32"
    >
      <div className="mx-auto max-w-[1400px] px-4 sm:px-8">
        {/* Top meta row */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mb-10 flex items-end justify-between border-b border-hairline pb-4 text-xs uppercase tracking-[0.2em] text-muted-foreground sm:mb-14"
        >
          <span>Verio Studio® — IT</span>
          <span className="hidden sm:inline">Studio di web design — 2026</span>
          <span>Index / 01</span>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Brand card */}
          <motion.div style={{ y }} className="lg:col-span-3">
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
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="font-display font-semibold leading-[0.95] tracking-[-0.035em]"
              style={{ fontSize: "clamp(2.75rem, 9vw, 8.5rem)" }}
            >
              Creiamo siti web
              <br />
              <span className="text-cobalt">professionali.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.7 }}
              className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              Verio Studio realizza siti web moderni, chiari e responsive per attività locali e
              professionisti che vogliono presentarsi meglio online.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <a
                href="#lavori"
                className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background transition-transform hover:scale-[1.02]"
              >
                Guarda i lavori
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#contatti"
                className="inline-flex items-center gap-2 rounded-full border border-foreground px-6 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-foreground hover:text-background"
              >
                Contattaci
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-6 py-3.5 text-sm font-medium text-whatsapp-foreground transition-transform hover:scale-[1.02]"
              >
                <MessageCircle className="h-4 w-4" />
                Scrivici su WhatsApp
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-xs uppercase tracking-[0.18em] text-muted-foreground"
            >
              <span>— siti responsive</span>
              <span>— design moderno</span>
              <span>— identità digitale</span>
              <span>— supporto diretto</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
