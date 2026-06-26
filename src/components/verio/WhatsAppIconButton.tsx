import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "./constants";

type Variant = "solid" | "outline" | "cobalt";

/**
 * WhatsApp call-to-action. No green — uses identity colors only (black / cobalt / outline).
 */
export function WhatsAppButton({
  variant = "outline",
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
      aria-label={label}
      className={`inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium transition-all ${styles} ${className}`}
    >
      <MessageCircle className="h-4 w-4" />
      {label}
    </a>
  );
}

/** Icon-only circular WhatsApp button. Default: black; cobalt and outline variants available. */
export function WhatsAppIcon({
  variant = "solid",
  className = "",
}: {
  variant?: Variant;
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
      aria-label="Scrivici su WhatsApp"
      className={`grid h-12 w-12 place-items-center rounded-full transition-all hover:scale-[1.05] ${styles} ${className}`}
    >
      <MessageCircle className="h-5 w-5" />
    </a>
  );
}
