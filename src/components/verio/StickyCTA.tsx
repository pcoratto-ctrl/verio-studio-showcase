import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { WhatsAppIcon } from "./WhatsAppIconButton";
import { EASE } from "./motion";

export function StickyCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const contact = document.getElementById("contatti");
      const nearContact = contact ? contact.getBoundingClientRect().top < window.innerHeight : false;
      setShow(y > 600 && !nearContact);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.4, ease: EASE }}
          className="fixed bottom-4 right-4 z-[70] flex items-center gap-2 sm:bottom-6 sm:right-6"
        >
          <a
            href="#contatti"
            className="hidden rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background shadow-lg transition-opacity hover:opacity-90 sm:inline-flex"
          >
            Contattaci
          </a>
          <WhatsAppIcon />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
