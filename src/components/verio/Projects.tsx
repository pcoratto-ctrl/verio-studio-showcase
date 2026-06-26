import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { BrowserMockup, MobileMockup } from "./BrowserMockup";

const PROJECTS = [
  {
    title: "Sito web per studio fisioterapico",
    label: "Progetto reale",
    desc: "Sito responsive creato per presentare trattamenti, servizi, informazioni dello studio e contatti in modo chiaro e professionale.",
    obiettivo: "Rendere più professionale la presenza online dello studio.",
    soluzione: "Design moderno, struttura semplice, sezioni servizi e contatto rapido.",
    risultato: "Esperienza più chiara per i potenziali pazienti.",
    url: "studio-fisio.it",
    accent: "cobalt" as const,
  },
  {
    title: "Sito professionale per fisioterapista",
    label: "Progetto reale",
    desc: "Sito vetrina moderno pensato per trasmettere fiducia, spiegare i servizi e facilitare il contatto diretto.",
    obiettivo: "Comunicare professionalità e rendere più accessibili le informazioni.",
    soluzione: "Layout pulito, contenuti ordinati e CTA verso il contatto.",
    risultato: "Immagine online più curata e credibile.",
    url: "fisioterapista.it",
    accent: "neutral" as const,
  },
];

export function Projects() {
  return (
    <section id="lavori" className="border-b border-hairline py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-8">
        <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
              ⟶ 04 / Lavori
            </span>
          </Reveal>
          <Reveal>
            <h2
              className="font-display font-semibold leading-[1] tracking-[-0.03em]"
              style={{ fontSize: "clamp(2rem, 5vw, 4.5rem)" }}
            >
              Lavori realizzati
            </h2>
          </Reveal>
        </div>

        <div className="space-y-10 sm:space-y-16">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.05}>
              <article className="overflow-hidden rounded-2xl border border-hairline bg-card">
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  {/* Visual */}
                  <div className="relative bg-secondary/60 p-6 sm:p-10 lg:col-span-7">
                    <BrowserMockup url={p.url} accent={p.accent} />
                    <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6">
                      <MobileMockup label="Mobile" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col justify-between gap-8 border-t border-hairline p-8 sm:p-12 lg:col-span-5 lg:border-l lg:border-t-0">
                    <div>
                      <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em]">
                        <span className="rounded-full bg-cobalt px-2.5 py-1 text-cobalt-foreground">
                          {p.label}
                        </span>
                        <span className="text-muted-foreground">0{i + 1}</span>
                      </div>
                      <h3 className="mt-6 font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                        {p.title}
                      </h3>
                      <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                        {p.desc}
                      </p>

                      <dl className="mt-8 space-y-4 border-t border-hairline pt-6 text-sm">
                        <div>
                          <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                            Obiettivo
                          </dt>
                          <dd className="mt-1">{p.obiettivo}</dd>
                        </div>
                        <div>
                          <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                            Soluzione
                          </dt>
                          <dd className="mt-1">{p.soluzione}</dd>
                        </div>
                        <div>
                          <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                            Risultato
                          </dt>
                          <dd className="mt-1">{p.risultato}</dd>
                        </div>
                      </dl>
                    </div>

                    <a
                      href="#contatti"
                      className="group inline-flex w-fit items-center gap-2 rounded-full border border-foreground px-5 py-3 text-sm font-medium transition-colors hover:bg-foreground hover:text-background"
                    >
                      Vedi progetto
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
