import React from "react";
import { Folder } from "lucide-react";

interface ProjectProps{
    children?: React.ReactNode;
}

export default function Projects({children}: ProjectProps){
    return (
        <div className="w-full space-y-8">
            <div className="flex items-center gap-4">
                <h2 className="text-foreground">Projects</h2>
                <div className="font-mono text-sm text-muted-foreground flex items-center gap-2">
                    <span className="text-primary">$</span> ls -R projects/
                </div>
            </div>
            <div className="[&>*:nth-child(odd)]:xl:flex-row-reverse">
                {children}
            </div>
        </div>
    )
}
