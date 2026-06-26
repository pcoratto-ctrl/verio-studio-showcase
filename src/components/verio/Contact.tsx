import { useState, type FormEvent } from "react";
import { Instagram, Linkedin, Mail, MessageCircle } from "lucide-react";
import { toast } from "sonner";
import { Reveal } from "./Reveal";
import { EMAIL, INSTAGRAM_URL, LINKEDIN_URL, WHATSAPP_URL } from "./constants";

export function Contact() {
  const [loading, setLoading] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Messaggio ricevuto", {
        description: "Ti rispondiamo entro 24h. Per una risposta più rapida, scrivici su WhatsApp.",
      });
    }, 600);
  }

  return (
    <section id="contatti" className="border-b border-hairline py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-8">
        <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
              ⟶ 08 / Contatti
            </span>
          </Reveal>
          <Reveal>
            <h2
              className="font-display font-semibold leading-[1] tracking-[-0.03em]"
              style={{ fontSize: "clamp(2rem, 5vw, 4.5rem)" }}
            >
              Parliamo del tuo sito
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          {/* WhatsApp featured card — cobalt accent, no green */}
          <Reveal className="lg:col-span-5">
            <div className="flex h-full flex-col justify-between rounded-2xl border-2 border-cobalt bg-card p-8 sm:p-10">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-cobalt/30 px-3 py-1 text-xs font-medium text-cobalt">
                  <MessageCircle className="h-3.5 w-3.5" />
                  Il modo più rapido
                </div>
                <h3
                  className="mt-8 font-display font-semibold leading-tight tracking-tight"
                  style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
                >
                  Scrivici su WhatsApp.
                  <br />
                  <span className="text-muted-foreground">Rispondiamo in giornata.</span>
                </h3>
              </div>

              <div className="mt-10 space-y-6">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-cobalt px-6 py-4 text-sm font-medium text-cobalt-foreground transition-opacity hover:opacity-90 sm:w-auto"
                >
                  <MessageCircle className="h-4 w-4" />
                  Apri WhatsApp
                </a>

                <div className="space-y-3 border-t border-hairline pt-6 text-sm">
                  <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 hover:text-cobalt">
                    <Mail className="h-4 w-4" />
                    {EMAIL}
                  </a>
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 hover:text-cobalt"
                  >
                    <Instagram className="h-4 w-4" />
                    Instagram
                  </a>
                  <a
                    href={LINKEDIN_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 hover:text-cobalt"
                  >
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.1} className="lg:col-span-7">
            <form
              onSubmit={onSubmit}
              className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline sm:grid-cols-2"
            >
              <Field label="Nome" name="nome" required />
              <Field label="Attività" name="attivita" />
              <Field label="Email" name="email" type="email" required className="sm:col-span-2" />
              <Field
                label="Messaggio"
                name="messaggio"
                textarea
                required
                className="sm:col-span-2"
              />
              <div className="bg-card p-6 sm:col-span-2 sm:p-8">
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-6 py-4 text-sm font-medium text-background transition-transform hover:scale-[1.01] disabled:opacity-60 sm:w-auto"
                >
                  {loading ? "Invio…" : "Invia messaggio"}
                </button>
                <p className="mt-4 text-xs text-muted-foreground">
                  Nessuna newsletter, nessuna mailing list. Solo una risposta diretta.
                </p>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  textarea,
  className = "",
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  textarea?: boolean;
  className?: string;
}) {
  return (
    <label className={`group flex flex-col gap-2 bg-card p-6 sm:p-7 ${className}`}>
      <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
        {label}
        {required ? " *" : ""}
      </span>
      {textarea ? (
        <textarea
          name={name}
          required={required}
          rows={5}
          className="w-full resize-none border-0 bg-transparent p-0 font-display text-lg outline-none placeholder:text-muted-foreground/60 focus:ring-0"
          placeholder="Raccontaci brevemente il progetto"
        />
      ) : (
        <input
          type={type}
          name={name}
          required={required}
          className="w-full border-0 bg-transparent p-0 font-display text-lg outline-none placeholder:text-muted-foreground/60 focus:ring-0"
          placeholder={label}
        />
      )}
    </label>
  );
}
