"use client"

import React, { useState } from "react";
import { Timeline, TimelineItem } from "./timeline";
import { Badge } from "@/components/ui/badge";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'

interface ProjectCardProps {
    title: string;
    description: string;
    defaultExpanded?: boolean;
}

function ProjectCard({ title, description, defaultExpanded = false }: ProjectCardProps) {
    const [isExpanded, setIsExpanded] = useState(defaultExpanded);

    return (
        <div className="bg-gray-50 rounded-lg p-4 mb-4 border border-gray-200 hover:border-primary/30 transition-colors">
            <div className="flex justify-between items-start cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
                <h5 className="font-bold text-gray-800 flex-1">{title}</h5>
                <FontAwesomeIcon
                    icon={isExpanded ? faChevronUp : faChevronDown}
                    className="text-primary mt-1 ml-2"
                />
            </div>
            {isExpanded && (
                <div className="mt-3 text-gray-700 leading-relaxed">
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
                    <h6 className="text-sm font-semibold text-gray-600 mb-3">Technologies Used:</h6>
                    <div className="flex flex-wrap gap-2">
                        {appleTechnologies.map((tech) => (
                            <Badge key={tech} variant="primary" size="sm">{tech}</Badge>
                        ))}
                    </div>
                </div>

                <h6 className="text-lg font-bold text-gray-800 mb-4">Human Engineering Software</h6>

                <p className="text-gray-700 leading-relaxed">
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
                    <h6 className="text-sm font-semibold text-gray-600 mb-3">Technologies Used:</h6>
                    <div className="flex flex-wrap gap-2">
                        {intelTechnologies.map((tech) => (
                            <Badge key={tech} variant="primary" size="sm">{tech}</Badge>
                        ))}
                    </div>
                </div>

                <h6 className="text-lg font-bold text-gray-800 mb-4">Key Project: Integration Technician Request System</h6>

                <p className="text-gray-700 leading-relaxed mb-4">
                    Designed and implemented a web application for employees at Intel to make requests to the integration team.
                    This system was built to replace the email standard that was currently in place. Started as a prototype for Intel
                    in Aloha, OR and now supports 8 different intel locations including 4 outside of the US.
                </p>

                <div className="space-y-3">
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
