import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "./constants";

type Variant = "solid" | "outline" | "cobalt";

export function WhatsAppButton({
  variant = "solid",
  label = "Scrivici su WhatsApp",
  className = "",
}: {
  variant?: Variant;
  label?: string;
  className?: string;
}) {
  const styles =
    variant === "outline"
      ? "border border-foreground text-foreground hover:bg-foreground hover:text-background"
      : variant === "cobalt"
      ? "bg-cobalt text-cobalt-foreground hover:opacity-90"
      : "bg-foreground text-background hover:opacity-90";
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium transition-all ${styles} ${className}`}
    >
      <MessageCircle className="h-4 w-4" />
      {label}
    </a>
  );
}

export function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Scrivici su WhatsApp"
      className={`grid h-12 w-12 place-items-center rounded-full bg-foreground text-background shadow-lg transition-transform hover:scale-[1.05] ${className}`}
    >
      <MessageCircle className="h-5 w-5" />
    </a>
  );
}
