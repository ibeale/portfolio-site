"use client"

import React, { useState } from "react";
import Image from "next/image"
import gradPhoto from "@/public/images/me.png"
import { Github, Linkedin, Mail, ChevronDown, ChevronUp, Terminal } from 'lucide-react';

export default function About() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="grid lg:grid-cols-[2fr_3fr] gap-12 my-12">
      {/* Left column: Photo and social */}
      <div className="flex flex-col items-center lg:items-start gap-8">
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
          <Image
            src={gradPhoto}
            alt="Isaac Beale"
            className="relative rounded-2xl shadow-2xl border-2 border-border"
            height="300"
            width="300"
          />
        </div>

        {/* Social links with terminal aesthetic */}
        <div className="flex gap-4">
          <SocialLink
            href="https://www.linkedin.com/in/isaac-beale-04bb80191/"
            icon={<Linkedin className="w-5 h-5" />}
            label="linkedin"
          />
          <SocialLink
            href="https://www.github.com/ibeale"
            icon={<Github className="w-5 h-5" />}
            label="github"
          />
          <SocialLink
            href="mailto:isaacdbeale@gmail.com"
            icon={<Mail className="w-5 h-5" />}
            label="email"
          />
        </div>

        {/* Terminal command prompt */}
        <div className="hidden lg:block w-full">
          <div className="card-terminal">
            <div className="flex items-center gap-2 mb-3 text-muted-foreground">
              <Terminal className="w-4 h-4" />
              <span className="font-mono text-xs">~/about</span>
            </div>
            <div className="font-mono text-sm space-y-1">
              <div className="flex items-start gap-2">
                <span className="text-primary">$</span>
                <span className="text-muted-foreground">whoami</span>
              </div>
              <div className="text-foreground pl-4">Full-stack engineer @ Apple</div>
              <div className="flex items-start gap-2 mt-3">
                <span className="text-primary">$</span>
                <span className="text-muted-foreground">cat education.txt</span>
              </div>
              <div className="text-foreground pl-4 text-xs leading-relaxed">
                M.S. Software Engineering (ASU)<br/>
                B.S. Industrial Engineering (OSU)
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right column: Content */}
      <div className="flex flex-col justify-center space-y-6">
        <div>
          <h1 className="text-foreground mb-2">
            Isaac Beale
          </h1>
          <p className="font-mono text-accent text-sm mb-6">
            backend_engineer <span className="text-primary">|</span> system_architect <span className="text-primary">|</span> problem_solver
          </p>
        </div>

        <div className="card-terminal space-y-4">
          <p className="leading-relaxed">
            My name is Isaac Beale and I hold an M.S. in software engineering with a focus in cybersecurity from
            Arizona State University along with a B.S. in industrial engineering with a minor in computer science from Oregon State University.
            My path to becoming a software engineer was unconventional, starting in a different discipline, and finding a passion for programming
            late into my undergraduate studies.
          </p>
          <p className="leading-relaxed">
            I&apos;m a full-stack software engineer at Apple with a backend focus, working primarily with Django and Angular.
            My expertise spans database design, system architecture, analyzing technical trade-offs, and root cause analysis.
            I&apos;m equally comfortable diving deep into backend systems as I am working across the full stack to deliver complete solutions.
            My work style is self-starting and independent, but I believe strongly in collaborative problem-solving and knowledge sharing with my team.
          </p>

          {showMore && (
            <div className="mt-6 pt-6 border-t border-border space-y-4">
              <p className="leading-relaxed text-muted-foreground italic text-sm">
                This next section is a bit more introspective about my career path. I&apos;ll probably move this to a blog section on
                this site once I build it, so employers feel free to skip this unless you&apos;re interested:
              </p>
              <p className="leading-relaxed">
                Something I find interesting about my career path is that I never anticipated focusing on web development.
                I&apos;ve enjoyed most programming challenges I&apos;ve faced in my courses, from building shells to creating GUIs in Java Swing to writing scripts for
                attack and defense CTFs. At the end of the day, I just enjoy creating well-designed systems that solve difficult problems—ones that can be extended
                as the scope inevitably grows. However, my classwork was more geared toward concepts applied in (typically) contrived examples.
                When I practiced programming outside of class, the most accessible type of system to build was websites. I found websites to be excellent practice
                for many different programming challenges, so most of my &ldquo;real world&rdquo; experience prior to entering the job world as an intern was web development-related.
                This contrasted with building things like automation tools or Python data processing libraries, which I found difficult to build correctly without
                real-world requirements. Creating my own requirements typically resulted in flat and uninteresting results.
                So as I applied to jobs with the knowledge I had, I suppose this level of specialization in software engineering found me,
                rather than me seeking it out myself.
              </p>
            </div>
          )}

          <button
            onClick={() => setShowMore(!showMore)}
            className="mt-6 font-mono text-sm text-primary hover:text-primary/80 transition-colors flex items-center gap-2 group"
          >
            <span className="text-muted-foreground">$</span>
            {showMore ? (
              <>
                <span>collapse</span>
                <ChevronUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
              </>
            ) : (
              <>
                <span>read_more</span>
                <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}

// Social link component
function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group relative flex items-center justify-center w-12 h-12 rounded-lg bg-card border border-border hover:border-primary transition-all hover:scale-110"
    >
      <div className="text-muted-foreground group-hover:text-primary transition-colors">
        {icon}
      </div>
      {/* Tooltip */}
      <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 font-mono text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        {label}
      </span>
    </a>
  );
}
