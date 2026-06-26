import { Reveal } from "./Reveal";

const VALUES = ["chiarezza", "cura visiva", "semplicità"];

export function Studio() {
  return (
    <section id="studio" className="border-b border-hairline py-24 sm:py-32">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-10 px-4 sm:px-8 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
              ⟶ 02 / Studio
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2
              className="mt-6 font-display font-semibold leading-[1.02] tracking-[-0.03em]"
              style={{ fontSize: "clamp(2rem, 4.5vw, 4rem)" }}
            >
              Uno studio piccolo,
              <br />
              <span className="text-cobalt">con un approccio chiaro.</span>
            </h2>
          </Reveal>
        </div>
        <div className="lg:col-span-7">
          <Reveal>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              Verio Studio nasce per aiutare attività locali e professionisti a costruire una
              presenza online più curata, ordinata e credibile. Lavoriamo su siti essenziali,
              moderni e facili da navigare, senza complicazioni inutili.
            </p>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-lg bg-hairline sm:grid-cols-3">
            {VALUES.map((v, i) => (
              <Reveal key={v} delay={0.1 + i * 0.08} className="bg-card p-6 sm:p-8">
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  0{i + 1}
                </div>
                <div className="mt-4 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                  {v}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
