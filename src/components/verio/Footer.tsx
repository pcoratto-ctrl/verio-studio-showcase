import { motion } from "framer-motion";
import { EMAIL, INSTAGRAM_URL, LINKEDIN_URL, NAV_LINKS, WHATSAPP_URL } from "./constants";
import { EASE } from "./motion";

export function Footer() {
  return (
    <motion.footer
      initial={{ clipPath: "inset(100% 0 0 0)" }}
      whileInView={{ clipPath: "inset(0% 0 0 0)" }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.1, ease: EASE }}
      className="relative overflow-hidden bg-footer text-footer-foreground"
    >
      <div className="mx-auto max-w-[1400px] px-4 py-20 sm:px-8 sm:py-28">
        <div className="overflow-hidden">
          <motion.div
            initial={{ y: "100%" }}
            whileInView={{ y: "0%" }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease: EASE, delay: 0.2 }}
            className="font-display font-semibold leading-[0.95] tracking-[-0.035em]"
            style={{ fontSize: "clamp(2.5rem, 8vw, 8rem)" }}
          >
            Verio
            <br />
            <span className="text-footer-foreground/40">Studio®</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: EASE, delay: 0.3 }}
          style={{ transformOrigin: "left" }}
          className="mt-16 h-px bg-footer-foreground/15"
        />

        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-3">
          {[
            {
              label: "Navigazione",
              items: NAV_LINKS.map((l) => ({ href: `#${l.id}`, label: l.label })),
            },
            {
              label: "Contatti",
              items: [
                { href: `mailto:${EMAIL}`, label: EMAIL },
                { href: WHATSAPP_URL, label: "WhatsApp", external: true },
                { label: "Italia" },
              ],
            },
            {
              label: "Social",
              items: [
                { href: INSTAGRAM_URL, label: "Instagram", external: true },
                { href: LINKEDIN_URL, label: "LinkedIn", external: true },
              ],
              alignRight: true,
            },
          ].map((col, i) => (
            <motion.div
              key={col.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.35 + i * 0.08 }}
              className={col.alignRight ? "md:text-right" : ""}
            >
              <div className="text-xs uppercase tracking-[0.22em] text-footer-foreground/50">
                {col.label}
              </div>
              <ul className="mt-5 space-y-2 text-base">
                {col.items.map((item, j) =>
                  "href" in item && item.href ? (
                    <li key={j}>
                      <a
                        href={item.href}
                        {...(item.external
                          ? { target: "_blank", rel: "noreferrer" }
                          : {})}
                        className="group relative inline-block"
                      >
                        <span className="transition-colors group-hover:text-cobalt">
                          {item.label}
                        </span>
                        <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-cobalt transition-transform duration-500 ease-out group-hover:scale-x-100" />
                      </a>
                    </li>
                  ) : (
                    <li key={j} className="text-footer-foreground/60">
                      {item.label}
                    </li>
                  ),
                )}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-footer-foreground/15 pt-6 text-xs uppercase tracking-[0.2em] text-footer-foreground/60 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Verio Studio — Siti web per attività locali e professionisti</span>
          <span>Made with care in Italy</span>
        </div>
      </div>
    </motion.footer>
  );
}
