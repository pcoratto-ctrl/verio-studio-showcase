import { AnimatePresence, motion } from "framer-motion";
import { Menu as MenuIcon, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { INSTAGRAM_URL, LINKEDIN_URL, NAV_LINKS } from "./constants";
import { EASE, EASE_INOUT } from "./motion";

type Origin = { x: number; y: number };

export function MenuButton({
  open,
  onToggle,
}: {
  open: boolean;
  onToggle: (origin: Origin) => void;
}) {
  const btnRef = useRef<HTMLButtonElement>(null);

  function handleClick() {
    const rect = btnRef.current?.getBoundingClientRect();
    const x = rect ? rect.left + rect.width / 2 : 48;
    const y = rect ? rect.top + rect.height / 2 : 48;
    onToggle({ x, y });
  }

  return (
    <button
      ref={btnRef}
      onClick={handleClick}
      className="fixed left-4 top-4 z-[90] flex items-center gap-3 rounded-full bg-foreground py-3 pl-5 pr-3 text-sm font-medium text-background shadow-lg transition-transform hover:scale-[1.02] sm:left-6 sm:top-6"
      aria-label={open ? "Chiudi menu" : "Apri menu"}
    >
      <span>{open ? "chiudi" : "menu"}</span>
      <span className="grid h-7 w-7 place-items-center rounded-full bg-background/10">
        {open ? <X className="h-3.5 w-3.5" /> : <MenuIcon className="h-3.5 w-3.5" />}
      </span>
    </button>
  );
}

export function MenuOverlay({
  open,
  origin,
  onClose,
}: {
  open: boolean;
  origin: Origin;
  onClose: () => void;
}) {
  // Lock body scroll + ESC to close
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  const originStr = `${origin.x}px ${origin.y}px`;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="overlay"
          initial={{ clipPath: `circle(0% at ${originStr})` }}
          animate={{ clipPath: `circle(150% at ${originStr})` }}
          exit={{ clipPath: `circle(0% at ${originStr})` }}
          transition={{ duration: 0.7, ease: EASE_INOUT }}
          className="fixed inset-0 z-[80] bg-cobalt text-cobalt-foreground"
        >
          <div className="flex h-full flex-col px-6 pb-10 pt-28 sm:px-12 sm:pt-32">
            <nav className="flex-1">
              <ul className="space-y-1 sm:space-y-2">
                {NAV_LINKS.map((l, i) => (
                  <li key={l.id} className="overflow-hidden">
                    <motion.a
                      href={`#${l.id}`}
                      onClick={onClose}
                      initial={{ y: "100%" }}
                      animate={{ y: "0%" }}
                      transition={{ delay: 0.25 + i * 0.06, duration: 0.7, ease: EASE }}
                      className="block py-2 font-display text-5xl font-semibold leading-[1.05] tracking-tight transition-opacity hover:opacity-70 sm:text-7xl"
                      style={{ fontSize: "clamp(2.5rem, 9vw, 6rem)" }}
                    >
                      {l.label}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </nav>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.4 }}
              className="mt-10 flex flex-col gap-6 border-t border-cobalt-foreground/20 pt-6 text-sm sm:flex-row sm:items-end sm:justify-between"
            >
              <div className="flex gap-6 text-base font-medium">
                <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="hover:opacity-70">
                  instagram
                </a>
                <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="hover:opacity-70">
                  linkedin
                </a>
              </div>
              <div className="font-display text-sm uppercase tracking-[0.2em] opacity-70">
                Verio Studio®
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/** Helper hook for index route to manage origin + open state together. */
export function useMenuState() {
  const [open, setOpen] = useState(false);
  const [origin, setOrigin] = useState<Origin>({ x: 48, y: 48 });
  const toggle = (o: Origin) => {
    setOrigin(o);
    setOpen((v) => !v);
  };
  return { open, origin, toggle, close: () => setOpen(false) };
}
