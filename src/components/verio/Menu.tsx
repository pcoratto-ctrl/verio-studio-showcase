import { AnimatePresence, motion } from "framer-motion";
import { Menu as MenuIcon, X } from "lucide-react";
import { INSTAGRAM_URL, LINKEDIN_URL, NAV_LINKS } from "./constants";

export function MenuButton({
  open,
  onToggle,
}: {
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      onClick={onToggle}
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
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="overlay"
          initial={{ clipPath: "circle(0% at 3rem 3rem)" }}
          animate={{ clipPath: "circle(150% at 3rem 3rem)" }}
          exit={{ clipPath: "circle(0% at 3rem 3rem)" }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[80] bg-cobalt text-cobalt-foreground"
        >
          <div className="flex h-full flex-col px-6 pb-10 pt-28 sm:px-12 sm:pt-32">
            <nav className="flex-1">
              <ul className="space-y-1 sm:space-y-2">
                {NAV_LINKS.map((l, i) => (
                  <motion.li
                    key={l.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 + i * 0.05, duration: 0.4 }}
                  >
                    <a
                      href={`#${l.id}`}
                      onClick={onClose}
                      className="block py-2 font-display text-5xl font-semibold leading-[1.05] tracking-tight transition-opacity hover:opacity-70 sm:text-7xl"
                    >
                      {l.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55, duration: 0.4 }}
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
