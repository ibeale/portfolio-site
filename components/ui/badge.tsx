import React from "react";

export interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
}

export function Badge({ children, variant = "default", size = "md" }: BadgeProps) {
  const variants = {
    default: "bg-gray-100 text-gray-800 hover:bg-gray-200",
    primary: "bg-[#FF976E]/20 text-[#FF976E] hover:bg-[#FF976E]/30",
    secondary: "bg-[#70D7FF]/20 text-[#70D7FF] hover:bg-[#70D7FF]/30",
    outline: "border-2 border-gray-300 text-gray-700 hover:border-gray-400",
  };

  const sizes = {
    sm: "px-2 py-1 text-xs",
    md: "px-3 py-1.5 text-sm",
    lg: "px-4 py-2 text-base",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full font-medium transition-colors ${variants[variant]} ${sizes[size]}`}
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
    if (!level) return "bg-gray-100 text-gray-800";
    if (level >= 75) return "bg-[#FF976E]/20 text-[#FF976E] border border-[#FF976E]/30";
    if (level >= 50) return "bg-[#70D7FF]/20 text-[#70D7FF] border border-[#70D7FF]/30";
    return "bg-gray-100 text-gray-700 border border-gray-200";
  };

  return (
    <span
      className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all hover:scale-105 ${getProficiencyColor(proficiency)}`}
    >
      {skill}
    </span>
  );
}
