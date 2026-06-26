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

  return (
    <section
      id="casi-studio"
      aria-label="Casi studio"
      className="border-b border-hairline bg-background py-24 sm:py-32"
    >
      <div className="mx-auto max-w-[1400px] px-4 sm:px-8">
        {/* Header */}
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
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

        <Hairline className="mb-10" />

        {isMobile ? <StackedCases /> : <DesktopExplorer />}
      </div>
    </section>
  );
}

/* ============================================================
   DESKTOP — 3-column click-driven explorer
   ============================================================ */
function DesktopExplorer() {
  const [activeId, setActiveId] = useState<string>(CASE_STUDIES[0].id);
  const active =
    CASE_STUDIES.find((c) => c.id === activeId) ?? CASE_STUDIES[0];

  return (
    <div className="grid grid-cols-12 gap-8 lg:gap-10">
      {/* LEFT: case list */}
      <div className="col-span-12 lg:col-span-3">
        <ul role="tablist" aria-label="Seleziona caso studio" className="space-y-0">
          {CASE_STUDIES.map((c, i) => {
            const isActive = c.id === active.id;
            return (
              <li key={c.id} role="presentation">
                <button
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`case-panel-${c.id}`}
                  id={`case-tab-${c.id}`}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => setActiveId(c.id)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setActiveId(c.id);
                    }
                  }}
                  className="group relative block w-full border-t border-hairline py-6 text-left outline-none transition-colors hover:bg-foreground/[0.02] focus-visible:bg-foreground/[0.04]"
                >
                  {isActive && (
                    <motion.span
                      layoutId="case-indicator"
                      className="absolute -top-px left-0 h-px bg-cobalt"
                      style={{ width: "100%" }}
                      transition={{ duration: 0.5, ease: EASE }}
                    />
                  )}
                  <div className="flex items-baseline gap-4">
                    <span
                      className={`font-display text-xs tabular-nums transition-colors ${
                        isActive ? "text-cobalt" : "text-muted-foreground"
                      }`}
                    >
                      0{i + 1}
                    </span>
                    <div className="flex-1">
                      <span
                        className={`block font-display font-semibold leading-[1.1] tracking-tight transition-colors ${
                          isActive
                            ? "text-cobalt"
                            : "text-foreground group-hover:text-foreground/70"
                        }`}
                        style={{ fontSize: "clamp(1.1rem, 1.6vw, 1.5rem)" }}
                      >
                        {c.title}
                      </span>
                    </div>
                  </div>
                </button>
              </li>
            );
          })}
          <li className="border-t border-hairline" />
        </ul>
      </div>

      {/* CENTER: preview */}
      <div className="col-span-12 lg:col-span-5">
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id + "-preview"}
              initial={{ opacity: 0, scale: 0.98, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.01, y: -10 }}
              transition={{ duration: 0.5, ease: EASE }}
            >
              <ConceptDesktop variant={active.id} url={active.url} />
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={active.id + "-mob"}
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -12 }}
              transition={{ duration: 0.55, ease: EASE, delay: 0.1 }}
              className="absolute -bottom-6 -right-2 sm:bottom-6 sm:right-6"
            >
              <ConceptMobile variant={active.id} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* RIGHT: detail panel */}
      <div className="col-span-12 lg:col-span-4">
        <div
          id={`case-panel-${active.id}`}
          role="tabpanel"
          aria-labelledby={`case-tab-${active.id}`}
          className="relative overflow-hidden"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id + "-detail"}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.55, ease: EASE }}
            >
              <span
                className={`inline-block rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.2em] ${
                  active.isReal
                    ? "bg-cobalt text-cobalt-foreground"
                    : "border border-hairline text-muted-foreground"
                }`}
              >
                {active.label}
              </span>

              <h3
                className="mt-5 font-display font-semibold leading-[1.05] tracking-tight"
                style={{ fontSize: "clamp(1.6rem, 2.4vw, 2.25rem)" }}
              >
                {active.title}
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
                {active.description}
              </p>

              <MetaList active={active} />
              <CtaButton active={active} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   MOBILE — stacked cards
   ============================================================ */
function StackedCases() {
  return (
    <div className="space-y-8">
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
            <span
              className={`rounded-full px-2.5 py-1 ${
                c.isReal
                  ? "bg-cobalt text-cobalt-foreground"
                  : "border border-hairline text-muted-foreground"
              }`}
            >
              {c.label}
            </span>
            <span className="text-muted-foreground">0{i + 1}</span>
          </div>
          <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight">
            {c.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {c.description}
          </p>

          <div className="relative mt-6">
            <ConceptDesktop variant={c.id} url={c.url} />
            <div className="mt-4 flex justify-end">
              <ConceptMobile variant={c.id} />
            </div>
          </div>

          <MetaList active={c} compact />
          <CtaButton active={c} className="mt-6 w-full justify-center" />
        </motion.article>
      ))}
    </div>
  );
}

/* ============================================================
   Shared sub-components
   ============================================================ */
function MetaList({
  active,
  compact = false,
}: {
  active: CaseStudy;
  compact?: boolean;
}) {
  const rows: Array<[string, string]> = [
    ["Problema", active.problema],
    ["Obiettivo", active.obiettivo],
    ["Soluzione", active.soluzione],
    ["Output", active.output],
  ];
  return (
    <dl
      className={`${
        compact ? "mt-6 space-y-3" : "mt-8 space-y-4"
      } border-t border-hairline pt-6 text-sm`}
    >
      {rows.map(([label, value], i) => (
        <motion.div
          key={label}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: EASE, delay: 0.1 + i * 0.08 }}
        >
          <dt className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            {label}
          </dt>
          <dd className="mt-1">{value}</dd>
        </motion.div>
      ))}
    </dl>
  );
}

function CtaButton({
  active,
  className = "",
}: {
  active: CaseStudy;
  className?: string;
}) {
  const hasRealUrl = active.projectUrl.trim().length > 0;
  const baseClasses = `group relative mt-8 inline-flex items-center gap-2 overflow-hidden rounded-full border border-foreground px-5 py-3 text-sm font-medium ${className}`;

  const inner = (
    <>
      <span
        aria-hidden
        className="absolute inset-0 -z-0 origin-left scale-x-0 bg-cobalt transition-transform duration-500 ease-out group-hover:scale-x-100"
        style={{ transformOrigin: "left" }}
      />
      <span className="relative z-10 transition-colors group-hover:text-cobalt-foreground">
        {active.cta}
      </span>
      <ArrowUpRight className="relative z-10 h-4 w-4 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cobalt-foreground" />
    </>
  );

  // Real case with a live URL → external link
  if (active.isReal && hasRealUrl) {
    return (
      <a
        href={active.projectUrl}
        target="_blank"
        rel="noreferrer"
        className={baseClasses}
      >
        {inner}
      </a>
    );
  }

  // Real case without URL yet — placeholder (do not show "#" in UI text)
  if (active.isReal) {
    return (
      <a href="#" className={baseClasses} aria-label="Vedi progetto">
        {inner}
      </a>
    );
  }

  // Demo concept
  return (
    <a href="#casi-studio" className={baseClasses} aria-label="Vedi concept">
      {inner}
    </a>
  );
}
