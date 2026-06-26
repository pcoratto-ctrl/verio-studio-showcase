type Props = {
  url?: string;
  label?: string;
  accent?: "cobalt" | "neutral";
};

export function BrowserMockup({ url = "verio.studio/progetto", label = "Sostituisci con screenshot desktop", accent = "neutral" }: Props) {
  return (
    <div className="overflow-hidden rounded-xl border border-hairline bg-card shadow-[0_30px_60px_-30px_rgba(0,0,0,0.18)]">
      <div className="flex items-center gap-2 border-b border-hairline bg-background/60 px-4 py-3">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
        </div>
        <div className="ml-3 flex-1 truncate rounded-md bg-background px-3 py-1 text-[11px] text-muted-foreground">
          {url}
        </div>
      </div>
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-secondary">
        {/* placeholder content skeleton */}
        <div className="absolute inset-0 grid grid-cols-12 grid-rows-6 gap-3 p-6">
          <div className={`col-span-7 row-span-2 rounded-md ${accent === "cobalt" ? "bg-cobalt/90" : "bg-foreground/85"}`} />
          <div className="col-span-5 row-span-2 rounded-md bg-card" />
          <div className="col-span-4 row-span-2 rounded-md bg-card" />
          <div className="col-span-4 row-span-2 rounded-md bg-card" />
          <div className="col-span-4 row-span-2 rounded-md bg-card" />
          <div className="col-span-12 row-span-2 rounded-md bg-foreground/10" />
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-center pb-3">
          <span className="rounded-full bg-background/85 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            {label}
          </span>
        </div>
      </div>
    </div>
  );
}

export function MobileMockup({ label = "Mobile" }: { label?: string }) {
  return (
    <div className="relative aspect-[9/19] w-[120px] overflow-hidden rounded-[26px] border-[6px] border-foreground bg-card shadow-[0_20px_40px_-20px_rgba(0,0,0,0.35)] sm:w-[140px]">
      <div className="absolute left-1/2 top-1.5 z-10 h-1 w-10 -translate-x-1/2 rounded-full bg-foreground/40" />
      <div className="grid h-full grid-rows-6 gap-2 p-3">
        <div className="row-span-2 rounded-md bg-cobalt/90" />
        <div className="row-span-1 rounded-md bg-foreground/10" />
        <div className="row-span-1 rounded-md bg-foreground/10" />
        <div className="row-span-2 rounded-md bg-foreground/85" />
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-2 text-center text-[8px] uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </div>
    </div>
  );
}
