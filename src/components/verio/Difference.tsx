import { Reveal } from "./Reveal";

const BLOCKS = [
  "estetica moderna",
  "struttura semplice",
  "attenzione al mobile",
  "comunicazione chiara",
];

export function Difference() {
  return (
    <section className="border-b border-hairline py-24 sm:py-32">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-10 px-4 sm:px-8 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
              ⟶ 07 / Differenza
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2
              className="mt-6 font-display font-semibold leading-[1.02] tracking-[-0.03em]"
              style={{ fontSize: "clamp(2rem, 5vw, 4.5rem)" }}
            >
              Perché Verio Studio
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Lavoriamo su siti chiari, ordinati e professionali. L'obiettivo non è riempire una
              pagina di effetti inutili, ma creare una presenza online che faccia capire subito chi
              sei, cosa offri e perché un cliente dovrebbe contattarti.
            </p>
          </Reveal>
        </div>
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-lg bg-hairline sm:grid-cols-2 lg:col-span-6">
          {BLOCKS.map((b, i) => (
            <Reveal key={b} delay={0.1 + i * 0.06} className="bg-card p-6 sm:p-8">
              <div className="text-xs uppercase tracking-[0.2em] text-cobalt">0{i + 1}</div>
              <div className="mt-6 font-display text-xl font-semibold leading-tight tracking-tight sm:text-2xl">
                {b}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
