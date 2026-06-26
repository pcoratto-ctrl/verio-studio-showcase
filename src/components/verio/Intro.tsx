import { Reveal } from "./Reveal";

export function Intro() {
  return (
    <section className="border-b border-hairline py-24 sm:py-32">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-10 px-4 sm:px-8 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-2">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
              ⟶ 01 / Intro
            </span>
          </Reveal>
        </div>
        <div className="lg:col-span-10">
          <Reveal>
            <h2
              className="font-display font-semibold leading-[1.02] tracking-[-0.03em]"
              style={{ fontSize: "clamp(2rem, 5.5vw, 5rem)" }}
            >
              Un sito non deve solo essere bello.
              <br />
              <span className="text-muted-foreground">Deve trasmettere fiducia.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-10 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Per molte attività locali, il sito web è il primo punto di contatto con un potenziale
              cliente. Se è vecchio, confuso o assente, può comunicare poca cura. Verio Studio crea
              siti semplici, moderni e chiari, pensati per far capire subito chi sei, cosa offri e
              come contattarti.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
