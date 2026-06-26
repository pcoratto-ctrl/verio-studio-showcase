import { Reveal } from "./Reveal";

const SERVICES = [
  {
    title: "Sito web completo",
    desc: "Siti vetrina moderni per presentare attività, servizi, contatti e posizione.",
  },
  {
    title: "Interfaccia chiara",
    desc: "Strutture semplici, sezioni ordinate e navigazione pensata per il cliente finale.",
  },
  {
    title: "Restyling digitale",
    desc: "Rendiamo più moderno, leggibile e credibile un sito già online.",
  },
  {
    title: "Contatti e strumenti",
    desc: "WhatsApp, Google Maps, moduli contatto, testi, aggiornamenti e piccoli strumenti digitali.",
  },
];

export function Services() {
  return (
    <section id="servizi" className="border-b border-hairline py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-8">
        <div className="mb-16 flex items-end justify-between">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
              ⟶ 03 / Servizi
            </span>
          </Reveal>
          <Reveal>
            <h2
              className="font-display font-semibold leading-[1] tracking-[-0.03em]"
              style={{ fontSize: "clamp(2rem, 5vw, 4.5rem)" }}
            >
              Cosa facciamo
            </h2>
          </Reveal>
        </div>

        <div className="relative">
          {/* center circle */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 hidden h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cobalt sm:block" />
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {SERVICES.map((s, i) => {
              const borderRight = i % 2 === 0 ? "sm:border-r" : "";
              const borderBottom = i < 2 ? "sm:border-b" : "";
              const borderTop = i > 0 ? "border-t sm:border-t-0" : "";
              return (
                <Reveal
                  key={s.title}
                  delay={i * 0.08}
                  className={`relative border-hairline p-8 sm:p-14 ${borderRight} ${borderBottom} ${borderTop}`}
                >
                  <h3
                    className="font-display font-semibold leading-tight tracking-tight"
                    style={{ fontSize: "clamp(1.4rem, 2.4vw, 2rem)" }}
                  >
                    {s.title}
                  </h3>
                  <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {s.desc}
                  </p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
