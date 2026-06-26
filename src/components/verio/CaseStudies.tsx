import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { CASE_STUDIES, type CaseStudy } from "./constants";
import { MaskedLines } from "./TextReveal";
import { Hairline } from "./Hairline";
import { ConceptDesktop, ConceptMobile } from "./ConceptPreview";
import { EASE } from "./motion";
import { useIsMobile } from "@/hooks/use-mobile";

export function CaseStudies() {
  const isMobile = useIsMobile();
  const [activeId, setActiveId] = useState<string>(CASE_STUDIES[0].id);
  const active = CASE_STUDIES.find((c) => c.id === activeId) ?? CASE_STUDIES[0];

  return (
    <section id="casi-studio" className="border-b border-hairline py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-8">
        {/* Header */}
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
            className="text-xs uppercase tracking-[0.22em] text-muted-foreground"
          >
            ⟶ 04 / Casi studio
          </motion.span>
          <MaskedLines
            as="div"
            start
            className="font-display font-semibold leading-[1] tracking-[-0.03em]"
            lines={[
              <span key="1" style={{ fontSize: "clamp(2rem, 5vw, 4.5rem)" }}>
                Casi studio
              </span>,
            ]}
          />
        </div>

        <Hairline className="mb-12" />

        {isMobile ? <StackedCases /> : (
          <Switcher active={active} activeId={activeId} onSelect={setActiveId} />
        )}
      </div>
    </section>
  );
}

/* ---------- DESKTOP: interactive switcher ---------- */
function Switcher({
  active,
  activeId,
  onSelect,
}: {
  active: CaseStudy;
  activeId: string;
  onSelect: (id: string) => void;
}) {
  return (
    <div className="grid grid-cols-12 gap-10">
      {/* Left: case list */}
      <div className="col-span-12 lg:col-span-5">
        <ul className="space-y-2">
          {CASE_STUDIES.map((c, i) => {
            const isActive = c.id === activeId;
            return (
              <li key={c.id}>
                <button
                  type="button"
                  onMouseEnter={() => onSelect(c.id)}
                  onClick={() => onSelect(c.id)}
                  className="group relative block w-full border-t border-hairline py-6 text-left"
                >
                  {isActive && (
                    <motion.span
                      layoutId="case-indicator"
                      className="absolute -top-px left-0 h-px bg-cobalt"
                      style={{ width: "100%" }}
                      transition={{ duration: 0.5, ease: EASE }}
                    />
                  )}
                  <div className="flex items-baseline gap-5">
                    <span
                      className={`font-display text-sm tabular-nums transition-colors ${
                        isActive ? "text-cobalt" : "text-muted-foreground"
                      }`}
                    >
                      0{i + 1}
                    </span>
                    <div className="flex-1">
                      <span
                        className={`block font-display font-semibold leading-[1.05] tracking-tight transition-colors ${
                          isActive ? "text-cobalt" : "text-foreground"
                        }`}
                        style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}
                      >
                        {c.title}
                      </span>
                      <span className="mt-1 inline-block text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                        {c.label}
                      </span>
                    </div>
                  </div>
                </button>
              </li>
            );
          })}
          <li className="border-t border-hairline" />
        </ul>

        {/* Metadata for active */}
        <div className="mt-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id + "-meta"}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.5, ease: EASE }}
            >
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                {active.description}
              </p>

              <dl className="mt-8 space-y-4 border-t border-hairline pt-6 text-sm">
                {[
                  ["Problema", active.problema],
                  ["Obiettivo", active.obiettivo],
                  ["Soluzione", active.soluzione],
                  ["Output", active.output],
                ].map(([label, value], i) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, ease: EASE, delay: 0.05 + i * 0.07 }}
                  >
                    <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      {label}
                    </dt>
                    <dd className="mt-1">{value}</dd>
                  </motion.div>
                ))}
              </dl>

              <CtaButton label={active.cta} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Right: animated preview */}
      <div className="col-span-12 lg:col-span-7">
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id + "-preview"}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5, ease: EASE }}
              className="group relative"
              whileHover={{ y: -6 }}
            >
              <ConceptDesktop variant={active.id} url={active.url} />
            </motion.div>
          </AnimatePresence>

          {/* Mobile mockup overlap */}
          <motion.div
            key={active.id + "-mob"}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.15 }}
            whileHover={{ x: 8 }}
            className="absolute -bottom-8 -right-2 sm:bottom-8 sm:right-8"
          >
            <ConceptMobile variant={active.id} />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

/* ---------- MOBILE: stacked cards ---------- */
function StackedCases() {
  return (
    <div className="space-y-10">
      {CASE_STUDIES.map((c, i) => (
        <motion.article
          key={c.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: EASE, delay: i * 0.05 }}
          className="overflow-hidden rounded-2xl border border-hairline bg-card p-5"
        >
          <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.2em]">
            <span className="rounded-full bg-cobalt px-2.5 py-1 text-cobalt-foreground">
              {c.label}
            </span>
            <span className="text-muted-foreground">0{i + 1}</span>
          </div>
          <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight">{c.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.description}</p>

          <div className="relative mt-6">
            <ConceptDesktop variant={c.id} url={c.url} />
            <div className="mt-4 flex justify-end">
              <ConceptMobile variant={c.id} />
            </div>
          </div>

          <dl className="mt-6 space-y-3 border-t border-hairline pt-5 text-sm">
            {[
              ["Problema", c.problema],
              ["Obiettivo", c.obiettivo],
              ["Soluzione", c.soluzione],
              ["Output", c.output],
            ].map(([label, value]) => (
              <div key={label}>
                <dt className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  {label}
                </dt>
                <dd className="mt-1">{value}</dd>
              </div>
            ))}
          </dl>

          <CtaButton label={c.cta} className="mt-6 w-full justify-center" />
        </motion.article>
      ))}
    </div>
  );
}

function CtaButton({ label, className = "" }: { label: string; className?: string }) {
  return (
    <a
      href="#contatti"
      className={`group relative mt-10 inline-flex items-center gap-2 overflow-hidden rounded-full border border-foreground px-5 py-3 text-sm font-medium ${className}`}
    >
      <span
        aria-hidden
        className="absolute inset-0 -z-0 origin-left scale-x-0 bg-foreground transition-transform duration-500 ease-out group-hover:scale-x-100"
        style={{ transformOrigin: "left" }}
      />
      <span className="relative z-10 transition-colors group-hover:text-background">{label}</span>
      <ArrowUpRight className="relative z-10 h-4 w-4 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-background" />
    </a>
  );
}
