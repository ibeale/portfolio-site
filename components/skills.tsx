import React from "react";
import { SkillBadge } from "@/components/ui/badge";

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

  const categories = Array.from(new Set(skills.map(s => s.category)));

  return (
    <div className="w-full">
      <div className="mb-8">
        <h2 className="inline-flex items-center">
          Skills
          <svg className="inline-block mx-3" xmlns="http://www.w3.org/2000/svg" width="75" height="75" version="1.1" x="0px" y="0px" viewBox="0 0 20 25" enableBackground="new 0 0 20 20">
            <g>
              <path fill="#70D7FF" d="M19.5,0.5h-19C0.2,0.5,0,0.7,0,1v4c0,0.3,0.2,0.5,0.5,0.5h19C19.8,5.5,20,5.3,20,5V1   C20,0.7,19.8,0.5,19.5,0.5z M19,4.5h-3v-3h3V4.5z" />
              <path fill="#70D7FF" d="M19.5,7.5h-19C0.2,7.5,0,7.7,0,8v4c0,0.3,0.2,0.5,0.5,0.5h19c0.3,0,0.5-0.2,0.5-0.5V8   C20,7.7,19.8,7.5,19.5,7.5z M19,11.5h-7v-3h7V11.5z" />
              <path fill="#70D7FF" d="M19.5,14.5h-19C0.2,14.5,0,14.7,0,15v4c0,0.3,0.2,0.5,0.5,0.5h19c0.3,0,0.5-0.2,0.5-0.5v-4   C20,14.7,19.8,14.5,19.5,14.5z M19,18.5H8v-3h11V18.5z" />
            </g>
          </svg>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {categories.map(category => (
          <div key={category} className="bg-white rounded-lg p-6 shadow-md border border-gray-100">
            <h4 className="text-lg font-bold text-gray-800 mb-4">{category}</h4>
            <div className="flex flex-wrap gap-3">
              {skills
                .filter(skill => skill.category === category)
                .map(skill => (
                  <SkillBadge key={skill.name} skill={skill.name} proficiency={skill.value} />
                ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 text-center">
        <div className="inline-flex gap-6 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-[#FF976E]/20 border border-[#FF976E]/30"></div>
            <span>Advanced</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-[#70D7FF]/20 border border-[#70D7FF]/30"></div>
            <span>Intermediate</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-gray-100 border border-gray-200"></div>
          <span>Familiar</span>
          </div>
        </div>
      </div>
    </div>
  )
}
