import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "./constants";

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
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-4 right-4 z-[70] flex items-center gap-2 sm:bottom-6 sm:right-6"
        >
          <a
            href="#contatti"
            className="hidden rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background shadow-lg transition-transform hover:scale-105 sm:inline-flex"
          >
            Contattaci
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-5 py-3 text-sm font-medium text-whatsapp-foreground shadow-lg transition-transform hover:scale-105"
            aria-label="Scrivici su WhatsApp"
          >
            <MessageCircle className="h-4 w-4" />
            <span>WhatsApp</span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
