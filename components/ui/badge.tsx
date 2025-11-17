import React from "react";

export interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
}

export function Badge({ children, variant = "default", size = "md" }: BadgeProps) {
  const variants = {
    default: "bg-muted text-muted-foreground hover:bg-muted/80 border border-border",
    primary: "bg-primary/10 text-primary hover:bg-primary/20 border border-primary/20",
    secondary: "bg-secondary/10 text-secondary hover:bg-secondary/20 border border-secondary/20",
    outline: "border border-border text-foreground hover:bg-muted/50",
  };

  const sizes = {
    sm: "px-2.5 py-0.5 text-xs",
    md: "px-3 py-1 text-sm",
    lg: "px-4 py-1.5 text-base",
  };

  return (
    <span
      className={`inline-flex items-center rounded-md font-mono font-medium transition-all hover:scale-105 ${variants[variant]} ${sizes[size]}`}
    >
      {children}
    </span>
  );
}

export interface SkillBadgeProps {
  skill: string;
  proficiency?: number; // 0-100
}

export function SkillBadge({ skill, proficiency }: SkillBadgeProps) {
  const getProficiencyColor = (level?: number) => {
    if (!level) return "bg-muted/50 text-muted-foreground border-border";
    if (level >= 75) return "bg-primary/10 text-primary border-primary/30";
    if (level >= 50) return "bg-secondary/10 text-secondary border-secondary/30";
    return "bg-muted/50 text-muted-foreground border-border";
  };

  const getProficiencyLabel = (level?: number) => {
    if (!level) return "";
    if (level >= 75) return " ●●●";
    if (level >= 50) return " ●●○";
    return " ●○○";
  };

  return (
    <span
      className={`inline-flex items-center gap-1 px-4 py-2 rounded-md text-sm font-mono transition-all hover:scale-105 border ${getProficiencyColor(proficiency)}`}
    >
      <span>{skill}</span>
      {proficiency && (
        <span className="text-xs opacity-60">{getProficiencyLabel(proficiency)}</span>
      )}
    </span>
  );
}
