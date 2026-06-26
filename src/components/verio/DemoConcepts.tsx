import { Reveal } from "./Reveal";
import { BrowserMockup } from "./BrowserMockup";

const DEMOS = [
  { title: "Sito per dentista", url: "demo-dentista.verio.studio" },
  { title: "Sito per ristorante", url: "demo-ristorante.verio.studio" },
  { title: "Sito per palestra", url: "demo-palestra.verio.studio" },
];

export function DemoConcepts() {
  return (
    <section className="border-b border-hairline bg-secondary/50 py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-8">
        <div className="mb-12 max-w-3xl">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
              ⟶ 05 / Concept
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2
              className="mt-6 font-display font-semibold leading-[1.02] tracking-[-0.03em]"
              style={{ fontSize: "clamp(2rem, 5vw, 4.5rem)" }}
            >
              Concept demo
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-base text-muted-foreground sm:text-lg">
              Esempi dimostrativi per mostrare come lo stesso approccio può essere adattato a
              settori diversi.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {DEMOS.map((d, i) => (
            <Reveal key={d.title} delay={i * 0.08}>
              <article className="flex h-full flex-col gap-6 rounded-2xl border border-dashed border-hairline bg-card p-6 sm:p-8">
                <div className="flex items-center justify-between">
                  <span className="rounded-full border border-hairline px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    Concept demo
                  </span>
                  <span className="text-xs text-muted-foreground">0{i + 1}</span>
                </div>
                <BrowserMockup url={d.url} label="Concept demo" />
                <div>
                  <h3 className="font-display text-xl font-semibold tracking-tight sm:text-2xl">
                    {d.title}
                  </h3>
                  <p className="mt-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    Concept demo — progetto dimostrativo
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
