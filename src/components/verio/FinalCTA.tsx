import { MessageCircle } from "lucide-react";
import { Reveal } from "./Reveal";
import { WHATSAPP_URL } from "./constants";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden border-b border-hairline bg-cobalt py-28 text-cobalt-foreground sm:py-40">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-8">
        <Reveal>
          <h2
            className="max-w-5xl font-display font-semibold leading-[0.98] tracking-[-0.035em]"
            style={{ fontSize: "clamp(2.5rem, 7vw, 7rem)" }}
          >
            Vuoi dare alla tua attività
            <br />
            <span className="opacity-70">una presenza online più curata?</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-10 max-w-2xl text-base leading-relaxed text-cobalt-foreground/85 sm:text-lg">
            Scrivici per raccontarci il tuo progetto o per vedere una possibile direzione per il
            tuo sito.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-12 flex flex-wrap items-center gap-3">
            <a
              href="#contatti"
              className="inline-flex items-center gap-2 rounded-full bg-cobalt-foreground px-6 py-3.5 text-sm font-medium text-cobalt transition-transform hover:scale-[1.02]"
            >
              Contattaci
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="Scrivici su WhatsApp"
              className="grid h-12 w-12 place-items-center rounded-full border border-cobalt-foreground/40 text-cobalt-foreground transition-colors hover:bg-cobalt-foreground hover:text-cobalt"
            >
              <MessageCircle className="h-5 w-5" />
            </a>
            <span className="ml-1 text-xs uppercase tracking-[0.22em] text-cobalt-foreground/60">
              — o scrivici su WhatsApp
            </span>
          </div>
        </Reveal>
      </div>
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-[480px] w-[480px] rounded-full border border-cobalt-foreground/15" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 h-[280px] w-[280px] rounded-full border border-cobalt-foreground/20" />
    </section>
  );
}
