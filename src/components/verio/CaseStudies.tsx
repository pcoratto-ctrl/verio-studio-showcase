import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { CASE_STUDIES, type CaseStudy } from "./constants";
import { MaskedLines } from "./TextReveal";
import { Hairline } from "./Hairline";
import { ConceptDesktop, ConceptMobile } from "./ConceptPreview";
import { EASE } from "./motion";
import { useIsMobile } from "@/hooks/use-mobile";

const PIN_VH = 280; // total scroll length of pinned scene

export function CaseStudies() {
  const isMobile = useIsMobile();
  const reduceMotion = useReducedMotion();

  return (
    <section id="casi-studio" aria-label="Casi studio" className="bg-background">
      {isMobile || reduceMotion ? <StackedScene /> : <PinnedScene />}
    </section>
  );
}

/* ============================================================
   DESKTOP — pinned cinematic scene
   ============================================================ */
function PinnedScene() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"],
  });

  // Derived active index from scroll: 0..0.33 fisio, 0.34..0.66 dentista, rest estetica.
  const [scrollIndex, setScrollIndex] = useState(0);
  const [clickedId, setClickedId] = useState<string | null>(null);

  useEffect(() => {
    return scrollYProgress.on("change", (v) => {
      const idx = v < 0.34 ? 0 : v < 0.67 ? 1 : 2;
      setScrollIndex(idx);
      // Once the user scrolls again, release the click override
      // so scroll-driven progression resumes.
      setClickedId(null);
    });
  }, [scrollYProgress]);

  const activeId =
    clickedId ?? CASE_STUDIES[scrollIndex]?.id ?? CASE_STUDIES[0].id;
  const active =
    CASE_STUDIES.find((c) => c.id === activeId) ?? CASE_STUDIES[0];
  const activeIdx = CASE_STUDIES.findIndex((c) => c.id === active.id);

  // Cobalt progress line scales with scroll
  const progressScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const handleSelect = (id: string, idx: number) => {
    setClickedId(id);
    // Scroll the page to roughly the midpoint of that case's scroll band
    const el = wrapperRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const total = el.offsetHeight - window.innerHeight;
    const target =
      window.scrollY + rect.top + total * ((idx + 0.5) / CASE_STUDIES.length);
    window.scrollTo({ top: target, behavior: "smooth" });
  };

  return (
    <div
      ref={wrapperRef}
      className="relative border-b border-hairline"
      style={{ height: `${PIN_VH}vh` }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="mx-auto flex h-full max-w-[1400px] flex-col px-4 sm:px-8">
          {/* Header */}
          <div className="flex flex-wrap items-end justify-between gap-6 pt-24">
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

          <Hairline className="mt-10" />

          {/* Body */}
          <div className="grid flex-1 grid-cols-12 gap-10 pb-12 pt-10">
            {/* Left: list + meta */}
            <div className="col-span-12 flex flex-col lg:col-span-5">
              <ul role="tablist" aria-label="Seleziona caso studio" className="space-y-2">
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
                        onClick={() => handleSelect(c.id, i)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            handleSelect(c.id, i);
                          }
                        }}
                        className="group relative block w-full border-t border-hairline py-5 text-left outline-none focus-visible:bg-foreground/[0.03]"
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
                                isActive
                                  ? "text-cobalt"
                                  : "text-foreground group-hover:text-foreground/70"
                              }`}
                              style={{ fontSize: "clamp(1.25rem, 2.2vw, 2rem)" }}
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

              {/* Progress indicator */}
              <div className="mt-6 flex items-center gap-4">
                <span className="font-display text-xs tabular-nums text-muted-foreground">
                  0{activeIdx + 1} / 0{CASE_STUDIES.length}
                </span>
                <div className="relative h-px flex-1 bg-hairline">
                  <motion.span
                    className="absolute left-0 top-0 h-full origin-left bg-cobalt"
                    style={{ scaleX: progressScale, width: "100%" }}
                  />
                </div>
              </div>

              {/* Meta panel */}
              <div
                id={`case-panel-${active.id}`}
                role="tabpanel"
                aria-labelledby={`case-tab-${active.id}`}
                className="mt-8 flex-1"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active.id + "-meta"}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.45, ease: EASE }}
                  >
                    <p className="text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
                      {active.description}
                    </p>
                    <MetaList active={active} />
                    <CtaButton active={active} />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Right: animated preview */}
            <div className="relative col-span-12 lg:col-span-7">
              <div className="relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active.id + "-preview"}
                    initial={{ opacity: 0, scale: 0.98, y: 18 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 1.01, y: -10 }}
                    transition={{ duration: 0.55, ease: EASE }}
                  >
                    <ConceptDesktop variant={active.id} url={active.url} />
                  </motion.div>
                </AnimatePresence>

                <motion.div
                  key={active.id + "-mob"}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, ease: EASE, delay: 0.12 }}
                  className="absolute -bottom-6 -right-2 sm:bottom-6 sm:right-6"
                >
                  <ConceptMobile variant={active.id} />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   MOBILE / reduced-motion — stacked cards
   ============================================================ */
function StackedScene() {
  return (
    <div className="border-b border-hairline py-20 sm:py-28">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-8">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
            ⟶ 04 / Casi studio
          </span>
          <MaskedLines
            as="div"
            start
            className="font-display font-semibold leading-[1] tracking-[-0.03em]"
            lines={[
              <span key="1" style={{ fontSize: "clamp(2rem, 8vw, 3.5rem)" }}>
                Casi studio
              </span>,
            ]}
          />
        </div>
        <Hairline className="mb-10" />
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

              <div id={`concept-${c.id}`} className="relative mt-6">
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
      </div>
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
  return (
    <dl
      className={`${
        compact ? "mt-6 space-y-3" : "mt-8 space-y-4"
      } border-t border-hairline pt-6 text-sm`}
    >
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
          transition={{ duration: 0.4, ease: EASE, delay: 0.05 + i * 0.06 }}
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
  const hasRealUrl = active.isReal && active.projectUrl.trim().length > 0;

  const baseClasses = `group relative mt-8 inline-flex items-center gap-2 overflow-hidden rounded-full border border-foreground px-5 py-3 text-sm font-medium ${className}`;

  const inner = (
    <>
      <span
        aria-hidden
        className="absolute inset-0 -z-0 origin-left scale-x-0 bg-foreground transition-transform duration-500 ease-out group-hover:scale-x-100"
        style={{ transformOrigin: "left" }}
      />
      <span className="relative z-10 transition-colors group-hover:text-background">
        {active.cta}
      </span>
      <ArrowUpRight className="relative z-10 h-4 w-4 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-background" />
    </>
  );

  if (hasRealUrl) {
    return (
      <a
        href={active.projectUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClasses}
      >
        {inner}
      </a>
    );
  }

  if (active.isReal) {
    // Real case but URL not yet wired — keep it honest, link to contact.
    return (
      <a href="#contatti" className={baseClasses} aria-label="Contattaci per vedere il progetto">
        {inner}
      </a>
    );
  }

  // Demo concept — scroll to the concept preview inside the section
  return (
    <button
      type="button"
      onClick={() => {
        const el = document.getElementById(`concept-${active.id}`);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }}
      className={baseClasses}
    >
      {inner}
    </button>
  );
}
