import React from "react";
import { TimelineItem } from "./timeline";
import { Badge } from "@/components/ui/badge";

export default function Education(){
    const osuCourses = [
        "Data Structures (C)",
        "Assembly Language (MASM, Intel x86)",
        "Intro to Computer Science I and II (C++)",
        "Backend Software Engineering (C)",
        "Information Systems Engineering (MS Access, Database Design)",
        "Industrial Systems Optimization (LINGO Solver, Linear Optimization)",
        "Analysis of Algorithms, Operating Systems (C)",
        "Programming Language Fundamentals (Prolog, Haskell)"
    ];

    const asuCourses = [
        "Software Design (Java, Design Patterns)",
        "Advanced Data Structures and Algorithms (Python)",
        "Foundations of Software Engineering (C#, Unity, Agile)",
        "Information Assurance and Security",
        "Languages and Programming Paradigms (Prolog)",
        "Software Agility (Java, Agile)",
        "Web-Based Applications (Javascript)",
        "Software Security",
        "Applied Cryptography",
        "Extracurricular attack and defense CTFs"
    ];

    return(
        <>
            <TimelineItem
                title="Arizona State University"
                subtitle="M.S Software Engineering"
                date="Graduation: May 2022"
                align="left"
            >
                <div className="mb-3">
                    <h6 className="text-sm font-semibold text-gray-600 mb-2">Relevant Courses:</h6>
                    <div className="flex flex-wrap gap-2">
                        {asuCourses.map((course) => (
                            <Badge key={course} variant="secondary" size="sm">{course}</Badge>
                        ))}
                    </div>
                </div>
            </TimelineItem>

            <TimelineItem
                title="Oregon State University"
                subtitle="B.S Industrial Engineering, minor in Computer Science"
                date="Graduation: June 2020"
                align="right"
            >
                <div className="mb-3">
                    <h6 className="text-sm font-semibold text-gray-600 mb-2">Relevant Courses:</h6>
                    <div className="flex flex-wrap gap-2">
                        {osuCourses.map((course) => (
                            <Badge key={course} variant="secondary" size="sm">{course}</Badge>
                        ))}
                    </div>
                </div>
            </TimelineItem>
        </>
    )
}
