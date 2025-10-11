"use client"

import React from "react";
import Navbar from "../components/navbar";
import About from "../components/about";
import Section from "../components/section";
import Skills from "../components/skills";
import Experience from "../components/experience/experience";
import Education from "../components/experience/education";
import Employment from "../components/experience/employment";
import Projects from "../components/projects/projects";
import Project, { HoopFinderProps, SolverProps, KeypersProps, OSUCapstoneProps, ASUMapsProps, DigyProps, LifeMapsProps } from "../components/projects/project";

export default function HomePage() {
  const aboutRef = React.useRef<HTMLDivElement>(null);
  const experienceRef = React.useRef<HTMLDivElement>(null);
  const skillsRef = React.useRef<HTMLDivElement>(null);
  const projectsRef = React.useRef<HTMLDivElement>(null);
  const solverRef = React.useRef<HTMLDivElement>(null);
  const hoopFinderRef = React.useRef<HTMLDivElement>(null);
  const keypersRef = React.useRef<HTMLDivElement>(null);
  const osuCapstoneRef = React.useRef<HTMLDivElement>(null);
  const asuMapsRef = React.useRef<HTMLDivElement>(null);
  const digyRef = React.useRef<HTMLDivElement>(null);
  const lifeMapsRef = React.useRef<HTMLDivElement>(null);

  return (
    <>
      <Navbar
        aboutRef={aboutRef}
        experienceRef={experienceRef}
        skillsRef={skillsRef}
        projectsRef={projectsRef}
      />
      <div className="container mx-auto px-4 mt-16">
        <Section refProp={aboutRef} className="flex items-center">
          <About />
        </Section>
        <Section refProp={experienceRef}>
          <Experience>
            <Employment />
            <Education/>
          </Experience>
        </Section>
        <Section refProp={skillsRef}>
          <Skills />
        </Section>
        <Section refProp={projectsRef}>
          <Projects>
            <Project {...ASUMapsProps} refProp={asuMapsRef}/>
            <Project {...DigyProps} refProp={digyRef}/>
            <Project {...LifeMapsProps} refProp={lifeMapsRef}/>
            <Project {...HoopFinderProps} refProp={hoopFinderRef}/>
            <Project {...SolverProps} refProp={solverRef}/>
            <Project {...KeypersProps} refProp={keypersRef} />
            <Project {...OSUCapstoneProps} refProp={osuCapstoneRef}/>
          </Projects>
        </Section>
      </div>
    </>
  )
}
