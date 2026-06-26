import { Reveal } from "./Reveal";

const PROBLEMS = [
  {
    n: "01",
    title: "Immagine poco curata",
    text: "Un sito vecchio o assente può far sembrare meno professionale anche un'attività valida.",
  },
  {
    n: "02",
    title: "Informazioni confuse",
    text: "Servizi, orari, posizione e contatti devono essere chiari in pochi secondi.",
  },
  {
    n: "03",
    title: "Esperienza poco moderna",
    text: "Oggi un sito deve funzionare bene da telefono, essere veloce e guidare l'utente senza confusione.",
  },
];

export function Problems() {
  return (
    <section className="border-b border-hairline bg-secondary/50 py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-8">
        <Reveal>
          <h2
            className="max-w-4xl font-display font-semibold leading-[1.02] tracking-[-0.03em]"
            style={{ fontSize: "clamp(2rem, 5vw, 4.5rem)" }}
          >
            Il problema non è avere un sito.
            <br />
            <span className="text-muted-foreground">È avere un sito che non comunica.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-3">
          {PROBLEMS.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.08}>
              <article className="flex h-full flex-col rounded-2xl border border-hairline bg-card p-8 sm:p-10">
                <div className="text-xs uppercase tracking-[0.22em] text-cobalt">{p.n}</div>
                <h3 className="mt-6 font-display text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">
                  {p.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {p.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
