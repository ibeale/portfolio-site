"use client"

import React, { useState } from "react";
import { Timeline, TimelineItem } from "./timeline";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, ChevronUp } from 'lucide-react';

interface ProjectCardProps {
    title: string;
    description: string;
    defaultExpanded?: boolean;
}

function ProjectCard({ title, description, defaultExpanded = false }: ProjectCardProps) {
    const [isExpanded, setIsExpanded] = useState(defaultExpanded);

    return (
        <div className="bg-muted/30 rounded-lg p-4 mb-3 border border-border hover:border-primary/50 transition-all group">
            <button
                className="flex justify-between items-start w-full text-left"
                onClick={() => setIsExpanded(!isExpanded)}
            >
                <h5 className="font-mono text-sm font-semibold text-foreground flex-1 group-hover:text-primary transition-colors">
                    <span className="text-primary mr-2">›</span>
                    {title}
                </h5>
                {isExpanded ? (
                    <ChevronUp className="w-4 h-4 text-primary mt-0.5 ml-2 flex-shrink-0" />
                ) : (
                    <ChevronDown className="w-4 h-4 text-muted-foreground group-hover:text-primary mt-0.5 ml-2 flex-shrink-0 transition-colors" />
                )}
            </button>
            {isExpanded && (
                <div className="mt-3 text-muted-foreground leading-relaxed text-sm pl-5 animate-fadeIn">
                    {description}
                </div>
            )}
        </div>
    );
}

export default function Employment() {
    const appleTechnologies = [
        "Django",
        "Angular",
        "RxJS",
        "PostgreSQL",
        "Elasticsearch"
    ];

    const intelTechnologies = [
        "React",
        "Django",
        "PostgreSQL",
        "CloudFoundry",
        "React Table",
        "React Query",
        "Redux",
        "Django Rest Framework",
        "Intel DBaaS",
        "Microsoft ADFS"
    ];

    return (
        <Timeline>
            {/* Apple */}
            <TimelineItem
                title="Apple"
                subtitle="Full Stack Software Engineer"
                date="September 2022 to Present"
                align="left"
            >
                <div className="mb-6">
                    <h4 className="font-mono text-xs text-muted-foreground mb-3 flex items-center gap-2">
                        <span className="text-primary">›</span> Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                        {appleTechnologies.map((tech) => (
                            <Badge key={tech} variant="outline" size="sm">{tech}</Badge>
                        ))}
                    </div>
                </div>

                <h4 className="text-lg font-serif mb-4 text-foreground">Human Engineering Software</h4>

                <p className="text-muted-foreground leading-relaxed">
                    Working on a small, agile internal tools team focused on innovation and developer experience. Responsibilities include collaborating with stakeholders to gather requirements, designing and pitching technical solutions, and building and maintaining a diverse portfolio of tools and libraries that support internal workflows.
                </p>
            </TimelineItem>

            {/* Intel */}
            <TimelineItem
                title="Intel Corporation"
                subtitle="Full Stack Software Engineer"
                date="Intern: August 2020 to May 2022 | Full Time: May 2022 to September 2022"
                align="right"
            >
                <div className="mb-6">
                    <h4 className="font-mono text-xs text-muted-foreground mb-3 flex items-center gap-2">
                        <span className="text-primary">›</span> Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                        {intelTechnologies.map((tech) => (
                            <Badge key={tech} variant="outline" size="sm">{tech}</Badge>
                        ))}
                    </div>
                </div>

                <h4 className="text-lg font-serif mb-4 text-foreground">Key Project: Integration Technician Request System</h4>

                <p className="text-muted-foreground leading-relaxed mb-6">
                    Designed and implemented a web application for employees at Intel to make requests to the integration team.
                    This system was built to replace the email standard that was currently in place. Started as a prototype for Intel
                    in Aloha, OR and now supports 8 different intel locations including 4 outside of the US.
                </p>

                <div className="space-y-2">
                    <ProjectCard
                        title="New Request Form"
                        description="Built a dynamic form with dropdowns, text inputs, and a rich text editor. Dropdowns populate based on previous selections to support different request types with varying requirements. Input fields are customizable by integration team management to adapt to changing needs."
                        defaultExpanded={true}
                    />

                    <ProjectCard
                        title="View Requests Dashboard"
                        description="Implemented with React Table to provide a dynamic, sortable, paginated table. The dashboard shows different views based on user roles: requestors can track their submissions through the pipeline, while integration team members can assign tasks, approve/deny requests, and update statuses. All users can view detailed request information in modal windows."
                    />

                    <ProjectCard
                        title="React Frontend Architecture"
                        description="Built with React to create a dynamic user experience. Utilized axios for backend communication, React Quill for rich text editing, React Bootstrap for UI components, Redux for global state management, React Query for API data fetching, and React Table for interactive data display."
                    />

                    <ProjectCard
                        title="Django Backend & Authentication"
                        description="Leveraged Django's built-in User model with Microsoft ADFS middleware for seamless authentication. Implemented Django Rest Framework to build a robust REST API that powers the application."
                    />

                    <ProjectCard
                        title="Deployment & Database"
                        description="Deployed on Intel's CloudFoundry platform using Python buildpack. The React frontend is built and served through Django. Uses PostgreSQL via Intel's Database as a Service (DBaaS) for reliable data storage and management."
                    />
                </div>
            </TimelineItem>
        </Timeline>
    )
}
