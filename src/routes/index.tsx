import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Toaster } from "sonner";
import { Loader } from "@/components/verio/Loader";
import { MenuButton, MenuOverlay } from "@/components/verio/Menu";
import { StickyCTA } from "@/components/verio/StickyCTA";
import { Hero } from "@/components/verio/Hero";
import { Intro } from "@/components/verio/Intro";
import { Studio } from "@/components/verio/Studio";
import { Services } from "@/components/verio/Services";
import { Problems } from "@/components/verio/Problems";
import { Projects } from "@/components/verio/Projects";
import { DemoConcepts } from "@/components/verio/DemoConcepts";
import { Method } from "@/components/verio/Method";
import { Difference } from "@/components/verio/Difference";
import { FinalCTA } from "@/components/verio/FinalCTA";
import { Contact } from "@/components/verio/Contact";
import { Footer } from "@/components/verio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Verio Studio — Siti web per attività locali e professionisti" },
      {
        name: "description",
        content:
          "Verio Studio realizza siti web moderni, chiari e responsive per attività locali e professionisti che vogliono presentarsi meglio online.",
      },
      { property: "og:title", content: "Verio Studio — Siti web per attività locali" },
      {
        property: "og:description",
        content: "Siti web moderni, chiari e responsive per attività locali e professionisti.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-background text-foreground antialiased">
      <Loader />
      <MenuButton open={menuOpen} onToggle={() => setMenuOpen((v) => !v)} />
      <MenuOverlay open={menuOpen} onClose={() => setMenuOpen(false)} />
      <StickyCTA />
      <Toaster position="top-center" />

      <Hero />
      <Intro />
      <Studio />
      <Services />
      <Problems />
      <Projects />
      <DemoConcepts />
      <Method />
      <Difference />
      <FinalCTA />
      <Contact />
      <Footer />
    </main>
  );
}
