import { motion } from "framer-motion";
import { EASE } from "./motion";

type Props = {
  url?: string;
  label?: string;
  accent?: "cobalt" | "neutral";
};

export function BrowserMockup({
  url = "verio.studio/progetto",
  label = "Anteprima desktop",
  accent = "neutral",
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease: EASE }}
      whileHover={{ y: -4 }}
      className="group overflow-hidden rounded-xl border border-hairline bg-card shadow-[0_30px_60px_-30px_rgba(0,0,0,0.18)] transition-shadow duration-500 hover:shadow-[0_40px_80px_-30px_rgba(0,0,0,0.28)]"
    >
      <div className="flex items-center gap-2 border-b border-hairline bg-background/60 px-4 py-3">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
        </div>
        <div className="ml-3 flex-1 truncate rounded-md bg-background px-3 py-1 text-[11px] text-muted-foreground">
          {url}
        </div>
        <span className="hidden text-[10px] uppercase tracking-[0.18em] text-muted-foreground sm:inline">
          {label}
        </span>
      </div>
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-secondary">
        <div className="absolute inset-0 grid grid-cols-12 grid-rows-6 gap-3 p-6">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0, ease: EASE, delay: 0.2 }}
            style={{ transformOrigin: "left" }}
            className={`col-span-7 row-span-2 rounded-md ${
              accent === "cobalt" ? "bg-cobalt/90" : "bg-foreground/85"
            }`}
          />
          <div className="col-span-5 row-span-2 rounded-md bg-card" />
          <div className="col-span-4 row-span-2 rounded-md bg-card" />
          <div className="col-span-4 row-span-2 rounded-md bg-card" />
          <div className="col-span-4 row-span-2 rounded-md bg-card" />
          <div className="col-span-12 row-span-2 rounded-md bg-foreground/10" />
        </div>
        <motion.div
          aria-hidden
          initial={{ x: "-100%" }}
          whileInView={{ x: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, ease: EASE, delay: 0.4 }}
          className="pointer-events-none absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-background/40 to-transparent"
        />
      </div>
    </motion.div>
  );
}

export function MobileMockup({ label = "Mobile" }: { label?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, ease: EASE, delay: 0.15 }}
      whileHover={{ y: -3 }}
      className="relative aspect-[9/19] w-[120px] overflow-hidden rounded-[26px] border-[6px] border-foreground bg-card shadow-[0_20px_40px_-20px_rgba(0,0,0,0.35)] sm:w-[140px]"
    >
      <div className="absolute left-1/2 top-1.5 z-10 h-1 w-10 -translate-x-1/2 rounded-full bg-foreground/40" />
      <div className="grid h-full grid-rows-6 gap-2 p-3">
        <div className="row-span-2 rounded-md bg-cobalt/90" />
        <div className="row-span-1 rounded-md bg-foreground/10" />
        <div className="row-span-1 rounded-md bg-foreground/10" />
        <div className="row-span-2 rounded-md bg-foreground/85" />
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-2 text-center text-[8px] uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </div>
    </motion.div>
  );
}
