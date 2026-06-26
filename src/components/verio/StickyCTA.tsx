import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "./constants";
import { EASE } from "./motion";

export function StickyCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const contact = document.getElementById("contatti");
      const nearContact = contact
        ? contact.getBoundingClientRect().top < window.innerHeight
        : false;
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
            className="hidden items-center gap-2 rounded-full bg-foreground py-2.5 pl-4 pr-2 text-sm font-medium text-background shadow-lg transition-opacity hover:opacity-90 sm:inline-flex"
          >
            Contattaci
            <span className="grid h-7 w-7 place-items-center rounded-full bg-cobalt text-cobalt-foreground">
              <MessageCircle className="h-3.5 w-3.5" />
            </span>
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="Scrivici su WhatsApp"
            className="grid h-12 w-12 place-items-center rounded-full bg-foreground text-background shadow-lg transition-transform hover:scale-[1.05] sm:hidden"
          >
            <MessageCircle className="h-5 w-5" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
