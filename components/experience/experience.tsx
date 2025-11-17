import React from "react";
import { Briefcase, GraduationCap } from "lucide-react";

interface ExperienceProps {
    children: React.ReactNode;
}

export default function Experience({ children }: ExperienceProps) {
    return (
        <div className="w-full space-y-8">
            <div className="flex items-center gap-4">
                <h2 className="text-foreground">Experience</h2>
                <div className="font-mono text-sm text-muted-foreground flex items-center gap-2">
                    <span className="text-primary">$</span> cat timeline.log
                </div>
            </div>
            {children}
        </div>
    )
}
