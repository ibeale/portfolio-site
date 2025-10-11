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
      <div className="flex flex-col items-center">
        <div className="w-4 h-4 rounded-full bg-primary border-4 border-white shadow-lg z-10" />
        <div className="w-0.5 h-full bg-gradient-to-b from-primary to-secondary/30 mt-1" />
      </div>

      {/* Content */}
      <div className={`flex-1 pb-12 ${align === "right" ? "text-right" : ""}`}>
        <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100">
          <h3 className="text-2xl mb-1">{title}</h3>
          {subtitle && <h6 className="text-gray-600 mb-2">{subtitle}</h6>}
          <p className="text-sm text-primary font-semibold mb-4">{date}</p>
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
