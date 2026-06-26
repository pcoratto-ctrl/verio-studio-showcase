import { Reveal } from "./Reveal";

const STEPS = [
  { n: "01", title: "Analisi", text: "Capire attività, obiettivi, servizi e immagine da trasmettere." },
  { n: "02", title: "Struttura", text: "Definire sezioni, contenuti e percorso dell'utente." },
  { n: "03", title: "Design", text: "Creare una prima versione visiva chiara, moderna e coerente." },
  { n: "04", title: "Pubblicazione", text: "Rifinire il sito, renderlo responsive e prepararlo alla pubblicazione." },
];

export function Method() {
  return (
    <section id="metodo" className="border-b border-hairline py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-8">
        <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
              ⟶ 06 / Metodo
            </span>
          </Reveal>
          <Reveal>
            <h2
              className="font-display font-semibold leading-[1] tracking-[-0.03em]"
              style={{ fontSize: "clamp(2rem, 5vw, 4.5rem)" }}
            >
              Metodo
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4">
          {STEPS.map((s, i) => (
            <Reveal
              key={s.n}
              delay={i * 0.08}
              className={`border-hairline px-2 py-8 sm:py-12 md:px-6 ${
                i > 0 ? "border-t md:border-l md:border-t-0" : ""
              }`}
            >
              <div
                className="font-display font-semibold leading-none tracking-[-0.04em] text-cobalt"
                style={{ fontSize: "clamp(3rem, 6vw, 5.5rem)" }}
              >
                {s.n}
              </div>
              <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {s.text}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
