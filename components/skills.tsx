'use client';

import React from "react";
import { SkillBadge } from "@/components/ui/badge";
import { Terminal, Layers, Server, Cloud } from "lucide-react";

interface SkillLevel {
  name: string;
  value: number;
  category: string;
}

export default function Skills() {
  const skills: SkillLevel[] = [
    { name: "Python", value: 80, category: "Languages" },
    { name: "TypeScript", value: 80, category: "Languages" },
    { name: "Angular", value: 80, category: "Frontend" },
    { name: "React", value: 50, category: "Frontend" },
    { name: "Django", value: 80, category: "Backend" },
    { name: "AWS", value: 40, category: "Cloud" },
    { name: "Database Design", value: 80, category: "Backend" },
    { name: "Flask", value: 40, category: "Backend" },
    { name: "Java", value: 40, category: "Languages" },
    { name: "C#", value: 40, category: "Languages" },
  ];

  const categoryIcons: Record<string, React.ReactNode> = {
    "Languages": <Terminal className="w-5 h-5" />,
    "Frontend": <Layers className="w-5 h-5" />,
    "Backend": <Server className="w-5 h-5" />,
    "Cloud": <Cloud className="w-5 h-5" />,
  };

  const categories = Array.from(new Set(skills.map(s => s.category)));

  return (
    <div className="w-full space-y-8">
      <div className="flex items-center gap-4">
        <h2 className="text-foreground">Skills</h2>
        <div className="font-mono text-sm text-muted-foreground">
          <span className="text-primary">$</span> ls -la /skills
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {categories.map(category => (
          <div key={category} className="card-terminal group">
            <div className="flex items-center gap-3 mb-4 pb-3 border-b border-border">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                {categoryIcons[category]}
              </div>
              <div>
                <h3 className="text-xl font-serif">{category}</h3>
                <p className="font-mono text-xs text-muted-foreground">
                  {skills.filter(s => s.category === category).length} items
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills
                .filter(skill => skill.category === category)
                .sort((a, b) => b.value - a.value)
                .map(skill => (
                  <SkillBadge key={skill.name} skill={skill.name} proficiency={skill.value} />
                ))}
            </div>
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="card-terminal">
        <div className="flex items-center gap-2 mb-3">
          <Terminal className="w-4 h-4 text-muted-foreground" />
          <span className="font-mono text-sm text-muted-foreground">Proficiency Legend</span>
        </div>
        <div className="flex flex-wrap gap-6 font-mono text-sm">
          <div className="flex items-center gap-2">
            <span className="text-xs">●●●</span>
            <span className="text-muted-foreground">Advanced (75-100%)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs">●●○</span>
            <span className="text-muted-foreground">Intermediate (50-74%)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs">●○○</span>
            <span className="text-muted-foreground">Familiar (&lt;50%)</span>
          </div>
        </div>
      </div>
    </div>
  )
}
