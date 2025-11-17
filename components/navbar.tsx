"use client"

import React, { useState, useEffect } from "react";
import Image from "next/image";
import favIco from "@/public/android-chrome-192x192.png";
import { Menu, X, Terminal } from 'lucide-react';
import { ThemeToggle } from "./theme-toggle";

interface NavbarProps {
  aboutRef?: React.RefObject<HTMLDivElement | null>;
  experienceRef?: React.RefObject<HTMLDivElement | null>;
  skillsRef?: React.RefObject<HTMLDivElement | null>;
  projectsRef?: React.RefObject<HTMLDivElement | null>;
}

export default function Navbar({ aboutRef, experienceRef, skillsRef, projectsRef }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionRef?: React.RefObject<HTMLDivElement | null>) => {
    if (sectionRef?.current) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = sectionRef.current.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setMobileMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 no-print ${
      scrolled ? 'w-[95%] max-w-5xl' : 'w-[90%] max-w-4xl'
    }`}>
      {/* Floating pill container */}
      <div className="bg-card/80 backdrop-blur-md border border-border rounded-full shadow-lg px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo with terminal icon */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 focus:outline-none transition-all hover:opacity-70 group"
          >
            <Terminal className="w-5 h-5 text-primary group-hover:rotate-12 transition-transform" strokeWidth={2} />
            <span className="font-mono text-sm font-semibold hidden sm:inline text-foreground">
              isaac<span className="text-primary">.</span>dev
            </span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            <NavButton onClick={scrollToTop} label="home" />
            <NavButton onClick={() => scrollToSection(aboutRef)} label="about" />
            <NavButton onClick={() => scrollToSection(experienceRef)} label="experience" />
            <NavButton onClick={() => scrollToSection(skillsRef)} label="skills" />
            <NavButton onClick={() => scrollToSection(projectsRef)} label="projects" />
            <NavLink href="/IsaacBeale_Resume.pdf" label="resume" />

            {/* Theme toggle */}
            <div className="ml-2 pl-2 border-l border-border">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Menu Button + Theme Toggle */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-foreground hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 bg-card/95 backdrop-blur-md border border-border rounded-2xl shadow-xl overflow-hidden animate-fadeIn">
          <div className="flex flex-col p-2">
            <MobileNavButton onClick={scrollToTop} label="home" />
            <MobileNavButton onClick={() => scrollToSection(aboutRef)} label="about" />
            <MobileNavButton onClick={() => scrollToSection(experienceRef)} label="experience" />
            <MobileNavButton onClick={() => scrollToSection(skillsRef)} label="skills" />
            <MobileNavButton onClick={() => scrollToSection(projectsRef)} label="projects" />
            <MobileNavLink href="/IsaacBeale_Resume.pdf" label="resume" />
          </div>
        </div>
      )}
    </nav>
  );
}

// Desktop nav button component
function NavButton({ onClick, label }: { onClick: () => void; label: string }) {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 font-mono text-sm text-muted-foreground hover:text-foreground transition-all duration-200 rounded-full hover:bg-muted/50 relative group"
    >
      <span className="relative z-10">{label}</span>
      <span className="absolute inset-0 rounded-full bg-primary/10 scale-0 group-hover:scale-100 transition-transform duration-200"></span>
    </button>
  );
}

// Desktop nav link component
function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      className="px-4 py-2 font-mono text-sm text-muted-foreground hover:text-foreground transition-all duration-200 rounded-full hover:bg-muted/50 relative group"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="relative z-10">{label}</span>
      <span className="absolute inset-0 rounded-full bg-primary/10 scale-0 group-hover:scale-100 transition-transform duration-200"></span>
    </a>
  );
}

// Mobile nav button component
function MobileNavButton({ onClick, label }: { onClick: () => void; label: string }) {
  return (
    <button
      onClick={onClick}
      className="px-4 py-3 text-left font-mono text-sm text-foreground hover:bg-muted/50 rounded-lg transition-colors flex items-center gap-2"
    >
      <span className="text-primary font-semibold">$</span>
      <span>{label}</span>
    </button>
  );
}

// Mobile nav link component
function MobileNavLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      className="px-4 py-3 text-left font-mono text-sm text-foreground hover:bg-muted/50 rounded-lg transition-colors flex items-center gap-2"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="text-primary font-semibold">$</span>
      <span>{label}</span>
    </a>
  );
}
