import React from "react";

export interface TimelineItemProps {
  title: string;
  subtitle?: string;
  date: string;
  children?: React.ReactNode;
  align?: "left" | "right";
}

export function TimelineItem({ title, subtitle, date, children, align = "left" }: TimelineItemProps) {
  return (
    <div className={`relative flex gap-6 ${align === "right" ? "flex-row-reverse" : ""}`}>
      {/* Timeline dot and line */}
      <div className="flex flex-col items-center flex-shrink-0">
        <div className="relative">
          <div className="w-4 h-4 rounded-full bg-primary border-4 border-background shadow-lg z-10 animate-glow" />
          <div className="absolute inset-0 w-4 h-4 rounded-full bg-primary/30 blur-sm" />
        </div>
        <div className="w-px h-full bg-gradient-to-b from-primary via-secondary to-transparent mt-2" />
      </div>

      {/* Content */}
      <div className={`flex-1 pb-12 ${align === "right" ? "text-right" : ""}`}>
        <div className="card-terminal group">
          <div className="flex items-start justify-between gap-4 mb-3">
            <div className={align === "right" ? "text-right" : ""}>
              <h3 className="text-2xl font-serif mb-1">{title}</h3>
              {subtitle && <h4 className="text-muted-foreground font-medium mb-2">{subtitle}</h4>}
            </div>
          </div>
          <div className={`font-mono text-xs text-accent mb-4 flex items-center gap-2 ${align === "right" ? "justify-end" : ""}`}>
            <span className="text-primary">⏱</span>
            <span>{date}</span>
          </div>
          {children && <div className="mt-4 text-left">{children}</div>}
        </div>
      </div>
    </div>
  );
}

export function Timeline({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative py-8">
      {children}
    </div>
  );
}
