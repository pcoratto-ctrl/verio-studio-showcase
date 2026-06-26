import { motion } from "framer-motion";
import { EASE } from "./motion";
const michelaPreview = { url: "/__l5e/assets-v1/b16ef02a-d917-4e1d-af2b-89f9e5578859/michela-aielli-preview.png" };

type Variant = "fisio" | "dentista" | "estetica";

/**
 * Designed CSS preview placeholders for case studies.
 * - fisio: real project screenshot (Michela Aielli)
 * - dentista: clinic-style designed concept
 * - estetica: beauty/visual designed concept
 */
export function ConceptDesktop({ variant, url }: { variant: Variant; url: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: EASE }}
      className="overflow-hidden rounded-xl border border-hairline bg-card shadow-[0_30px_60px_-30px_rgba(0,0,0,0.22)]"
    >
      {/* Browser chrome */}
      <div className="flex items-center gap-2 border-b border-hairline bg-background/60 px-4 py-3">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
        </div>
        <div className="ml-3 flex-1 truncate rounded-md bg-background px-3 py-1 text-[11px] text-muted-foreground">
          {url}
        </div>
      </div>

      <div className="aspect-[16/10] w-full">
        {variant === "fisio" && <FisioBoard />}
        {variant === "dentista" && <DentistaBoard />}
        {variant === "estetica" && <EsteticaBoard />}
      </div>
    </motion.div>
  );
}

export function ConceptMobile({ variant }: { variant: Variant }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
      className="relative aspect-[9/19] w-[120px] overflow-hidden rounded-[26px] border-[6px] border-foreground bg-card shadow-[0_20px_40px_-20px_rgba(0,0,0,0.35)] sm:w-[140px]"
    >
      <div className="absolute left-1/2 top-1.5 z-10 h-1 w-10 -translate-x-1/2 rounded-full bg-foreground/40" />
      <div className="h-full">
        {variant === "fisio" && <FisioMobile />}
        {variant === "dentista" && <DentistaMobile />}
        {variant === "estetica" && <EsteticaMobile />}
      </div>
    </motion.div>
  );
}

/* ---------- FISIO (real project screenshot) ---------- */
function FisioBoard() {
  return (
    <div className="relative h-full w-full bg-secondary/40">
      <img
        src={michelaPreview.url}
        alt="Anteprima sito Michela Aielli — fisioterapista a Parma"
        className="h-full w-full object-cover object-top"
        loading="lazy"
      />
      <div className="pointer-events-none absolute left-4 top-4 rounded-full border border-hairline bg-background/90 px-2.5 py-1 text-[9px] uppercase tracking-[0.18em] text-muted-foreground backdrop-blur-sm">
        Progetto live
      </div>
    </div>
  );
}
function FisioMobile() {
  return (
    <div className="relative h-full w-full bg-secondary/40">
      <img
        src={michelaPreview.url}
        alt="Anteprima mobile Michela Aielli"
        className="h-full w-full object-cover object-top"
        loading="lazy"
      />
    </div>
  );
}


/* ---------- DENTISTA (medical, trust) ---------- */
function DentistaBoard() {
  return (
    <div className="h-full bg-background p-6">
      {/* nav */}
      <div className="flex items-center justify-between border-b border-hairline pb-3">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-cobalt" />
          <span className="h-2 w-20 rounded-sm bg-foreground/80" />
        </div>
        <div className="flex gap-4">
          <span className="h-1.5 w-10 rounded-sm bg-foreground/40" />
          <span className="h-1.5 w-10 rounded-sm bg-foreground/40" />
          <span className="h-1.5 w-10 rounded-sm bg-foreground/40" />
        </div>
        <span className="h-5 w-20 rounded-full bg-cobalt" />
      </div>
      {/* hero */}
      <div className="mt-5 grid grid-cols-12 gap-4">
        <div className="col-span-7">
          <div className="h-2 w-14 rounded-sm bg-cobalt" />
          <div className="mt-3 h-5 w-5/6 rounded-sm bg-foreground/85" />
          <div className="mt-2 h-5 w-2/3 rounded-sm bg-foreground/85" />
          <div className="mt-4 h-2 w-3/4 rounded-sm bg-foreground/25" />
          <div className="mt-1.5 h-2 w-2/3 rounded-sm bg-foreground/25" />
          <div className="mt-5 flex gap-2">
            <div className="h-7 w-28 rounded-full bg-foreground" />
            <div className="h-7 w-24 rounded-full border border-foreground" />
          </div>
        </div>
        <div className="col-span-5 rounded-md bg-cobalt/15 p-3">
          <div className="h-2 w-12 rounded-sm bg-cobalt" />
          <div className="mt-2 space-y-1.5">
            <div className="h-3 w-full rounded-sm bg-card" />
            <div className="h-3 w-full rounded-sm bg-card" />
            <div className="h-3 w-full rounded-sm bg-card" />
          </div>
        </div>
      </div>
      {/* services */}
      <div className="mt-4 grid grid-cols-3 gap-2">
        {["Igiene", "Ortodonzia", "Implantologia"].map((s) => (
          <div key={s} className="rounded-md border border-hairline bg-card p-2.5">
            <div className="h-1.5 w-10 rounded-sm bg-cobalt" />
            <div className="mt-1.5 h-2 w-3/4 rounded-sm bg-foreground/70" />
            <div className="mt-1 h-1.5 w-1/2 rounded-sm bg-foreground/25" />
          </div>
        ))}
      </div>
    </div>
  );
}
function DentistaMobile() {
  return (
    <div className="h-full bg-background p-2.5 pt-5">
      <div className="flex items-center justify-between">
        <span className="h-2 w-10 rounded-sm bg-foreground/80" />
        <span className="h-1.5 w-1.5 rounded-full bg-cobalt" />
      </div>
      <div className="mt-2 h-1.5 w-8 rounded-sm bg-cobalt" />
      <div className="mt-1.5 h-2 w-5/6 rounded-sm bg-foreground/85" />
      <div className="mt-1 h-2 w-2/3 rounded-sm bg-foreground/85" />
      <div className="mt-3 h-6 rounded-full bg-foreground" />
      <div className="mt-2 space-y-1.5">
        <div className="h-5 rounded-md bg-card border border-hairline" />
        <div className="h-5 rounded-md bg-card border border-hairline" />
        <div className="h-5 rounded-md bg-cobalt/15" />
      </div>
    </div>
  );
}

/* ---------- ESTETICA (visual, beauty) ---------- */
function EsteticaBoard() {
  return (
    <div className="h-full bg-background p-6">
      <div className="flex items-center justify-between">
        <span className="h-2 w-24 rounded-sm bg-foreground/80" />
        <div className="flex gap-3">
          <span className="h-1.5 w-8 rounded-sm bg-foreground/40" />
          <span className="h-1.5 w-8 rounded-sm bg-foreground/40" />
        </div>
      </div>
      {/* large image hero */}
      <div className="mt-4 grid grid-cols-12 gap-3">
        <div className="col-span-8 aspect-[16/9] rounded-md bg-gradient-to-br from-cobalt/90 via-cobalt to-foreground" />
        <div className="col-span-4 flex flex-col gap-3">
          <div className="rounded-md bg-card p-3">
            <div className="h-1.5 w-8 rounded-sm bg-cobalt" />
            <div className="mt-1.5 h-2 w-3/4 rounded-sm bg-foreground/70" />
            <div className="mt-1 h-1.5 w-1/2 rounded-sm bg-foreground/30" />
          </div>
          <div className="flex-1 rounded-md bg-foreground p-3">
            <div className="h-1.5 w-8 rounded-sm bg-cobalt-foreground/60" />
            <div className="mt-1.5 h-2 w-3/4 rounded-sm bg-cobalt-foreground/80" />
          </div>
        </div>
      </div>
      {/* services grid */}
      <div className="mt-4 grid grid-cols-4 gap-2">
        {["Viso", "Corpo", "Mani", "Make-up"].map((s) => (
          <div key={s} className="rounded-md border border-hairline bg-card p-2.5">
            <div className="h-1.5 w-8 rounded-sm bg-cobalt" />
            <div className="mt-1.5 h-2 w-3/4 rounded-sm bg-foreground/70" />
          </div>
        ))}
      </div>
      {/* gallery strip */}
      <div className="mt-3 grid grid-cols-6 gap-1.5">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="aspect-square rounded-sm bg-gradient-to-br from-foreground/30 to-foreground/10"
          />
        ))}
      </div>
    </div>
  );
}
function EsteticaMobile() {
  return (
    <div className="h-full bg-background p-2.5 pt-5">
      <div className="h-12 rounded-md bg-gradient-to-br from-cobalt via-cobalt/80 to-foreground" />
      <div className="mt-2 h-1.5 w-8 rounded-sm bg-cobalt" />
      <div className="mt-1.5 h-2 w-3/4 rounded-sm bg-foreground/80" />
      <div className="mt-3 grid grid-cols-2 gap-1.5">
        <div className="h-6 rounded-md border border-hairline bg-card" />
        <div className="h-6 rounded-md border border-hairline bg-card" />
        <div className="h-6 rounded-md border border-hairline bg-card" />
        <div className="h-6 rounded-md border border-hairline bg-card" />
      </div>
      <div className="mt-2 grid grid-cols-3 gap-1">
        <div className="aspect-square rounded-sm bg-foreground/30" />
        <div className="aspect-square rounded-sm bg-foreground/20" />
        <div className="aspect-square rounded-sm bg-foreground/30" />
      </div>
      <div className="mt-2 h-5 rounded-full bg-foreground" />
    </div>
  );
}
