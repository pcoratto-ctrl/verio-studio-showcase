import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { Loader } from "@/components/verio/Loader";
import { MenuButton, MenuOverlay, useMenuState } from "@/components/verio/Menu";
import { StickyCTA } from "@/components/verio/StickyCTA";
import { ScrollProgress } from "@/components/verio/ScrollProgress";
import { Hero } from "@/components/verio/Hero";
import { Intro } from "@/components/verio/Intro";
import { Studio } from "@/components/verio/Studio";
import { Services } from "@/components/verio/Services";
import { Problems } from "@/components/verio/Problems";
import { Bridge } from "@/components/verio/Bridge";
import { CaseStudies } from "@/components/verio/CaseStudies";
import { Method } from "@/components/verio/Method";
import { Difference } from "@/components/verio/Difference";
import { FinalCTA } from "@/components/verio/FinalCTA";
import { Contact } from "@/components/verio/Contact";
import { Footer } from "@/components/verio/Footer";
import { useState } from "react";

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
  const menu = useMenuState();
  const [ready, setReady] = useState(false);

  return (
    <main className="min-h-screen bg-background text-foreground antialiased">
      <Loader onDone={() => setReady(true)} />
      <ScrollProgress />
      <MenuButton open={menu.open} onToggle={menu.toggle} />
      <MenuOverlay open={menu.open} origin={menu.origin} onClose={menu.close} />
      <StickyCTA />
      <Toaster position="top-center" />

      <Hero start={ready} />
      <Intro />
      <Studio />
      <Services />
      <Problems />
      <Bridge />
      <CaseStudies />
      <Method />
      <Difference />
      <FinalCTA />
      <Contact />
      <Footer />
    </main>
  );
}
