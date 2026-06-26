import { EMAIL, INSTAGRAM_URL, LINKEDIN_URL, NAV_LINKS, WHATSAPP_URL } from "./constants";

export function Footer() {
  return (
    <footer className="relative bg-footer text-footer-foreground">
      <div className="mx-auto max-w-[1400px] px-4 py-20 sm:px-8 sm:py-28">
        <div
          className="font-display font-semibold leading-[0.95] tracking-[-0.035em]"
          style={{ fontSize: "clamp(2.5rem, 8vw, 8rem)" }}
        >
          Verio
          <br />
          <span className="text-footer-foreground/40">Studio®</span>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-10 border-t border-footer-foreground/15 pt-10 md:grid-cols-3">
          <div>
            <div className="text-xs uppercase tracking-[0.22em] text-footer-foreground/50">
              Navigazione
            </div>
            <ul className="mt-5 space-y-2 text-base">
              {NAV_LINKS.map((l) => (
                <li key={l.id}>
                  <a href={`#${l.id}`} className="hover:text-cobalt">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.22em] text-footer-foreground/50">
              Contatti
            </div>
            <ul className="mt-5 space-y-2 text-base">
              <li>
                <a href={`mailto:${EMAIL}`} className="hover:text-cobalt">
                  {EMAIL}
                </a>
              </li>
              <li>
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="hover:text-cobalt">
                  WhatsApp
                </a>
              </li>
              <li className="text-footer-foreground/60">Italia</li>
            </ul>
          </div>

          <div className="md:text-right">
            <div className="text-xs uppercase tracking-[0.22em] text-footer-foreground/50">
              Social
            </div>
            <ul className="mt-5 space-y-2 text-base">
              <li>
                <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="hover:text-cobalt">
                  Instagram
                </a>
              </li>
              <li>
                <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="hover:text-cobalt">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-footer-foreground/15 pt-6 text-xs uppercase tracking-[0.2em] text-footer-foreground/60 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Verio Studio — Siti web per attività locali e professionisti</span>
          <span>Made with care in Italy</span>
        </div>
      </div>
    </footer>
  );
}
