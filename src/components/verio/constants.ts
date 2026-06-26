export const WHATSAPP_NUMBER = "393000000000";
export const WHATSAPP_MESSAGE = encodeURIComponent(
  "Ciao Verio Studio, vorrei informazioni sul sito per la mia attività.",
);
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;
export const EMAIL = "hello@verio.studio";
export const INSTAGRAM_URL = "https://instagram.com/verio.studio";
export const LINKEDIN_URL = "https://linkedin.com/company/verio-studio";

export const NAV_LINKS = [
  { id: "home", label: "home" },
  { id: "studio", label: "studio" },
  { id: "servizi", label: "servizi" },
  { id: "casi-studio", label: "casi studio" },
  { id: "metodo", label: "metodo" },
  { id: "contatti", label: "contatti" },
];

// Replace with the live URL when available.
export const FISIO_PROJECT_URL = "https://www.michelaaielli.it";

export type CaseStudy = {
  id: "fisio" | "dentista" | "estetica";
  title: string;
  label: string;
  description: string;
  problema: string;
  obiettivo: string;
  soluzione: string;
  output: string;
  cta: string;
  url: string;
  isReal: boolean;
  projectUrl: string;
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "fisio",
    title: "Michela Aielli",
    label: "Caso reale",
    description:
      "Sito web per una fisioterapista a Parma specializzata in dolore persistente, perimenopausa e fibromialgia. Metodo integrato con Taopatch®, Pilates reformer e fotobiomodulazione.",
    problema:
      "Presenza online ridotta e poco distintiva in un settore medico locale competitivo.",
    obiettivo:
      "Rendere chiare le specializzazioni, il metodo e le vie di contatto, invitando alla prenotazione.",
    soluzione:
      "One-page strutturato con hero empatica, sezioni servizi, approccio, recensioni, FAQ e CTA contatto.",
    output:
      "Identità web professionale, maggiore fiducia e aumento delle richieste di valutazione.",
    cta: "Vedi progetto",
    url: "michelaaielli.it",
    isReal: true,
    projectUrl: FISIO_PROJECT_URL,
  },

  {
    id: "dentista",
    title: "Studio dentistico",
    label: "Concept demo — progetto dimostrativo",
    description:
      "Concept pensato per uno studio dentistico che vuole comunicare professionalità, servizi e fiducia già dal primo accesso al sito.",
    problema: "Fiducia e chiarezza sono fondamentali nel settore medico.",
    obiettivo: "Presentare servizi, team, posizione e contatto in modo immediato.",
    soluzione: "Homepage ordinata, sezioni trattamenti, recensioni, CTA prenotazione.",
    output: "Concept moderno per aumentare credibilità e richieste.",
    cta: "Vedi concept",
    url: "demo-dentista.verio.studio",
    isReal: false,
    projectUrl: "",
  },
  {
    id: "estetica",
    title: "Centro estetico",
    label: "Concept demo — progetto dimostrativo",
    description:
      "Concept per un centro estetico o beauty studio, con focus su immagine visiva, servizi, prenotazioni e contatto rapido.",
    problema:
      "Molte attività comunicano solo tramite Instagram senza una presenza web chiara.",
    obiettivo: "Creare una pagina elegante, ordinata e orientata alla prenotazione.",
    soluzione: "Design visivo, lista servizi, gallery, CTA WhatsApp/prenota.",
    output: "Concept premium per valorizzare l'attività online.",
    cta: "Vedi concept",
    url: "demo-estetica.verio.studio",
    isReal: false,
    projectUrl: "",
  },
];
