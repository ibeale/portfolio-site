"use client"

import React, { useState, useEffect } from "react";
import Image from "next/image";
import favIco from "@/public/android-chrome-192x192.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

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
      const offset = 120;
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
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-white shadow-md'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <button onClick={scrollToTop} className="focus:outline-none transition-transform hover:scale-105">
            <Image src={favIco} width={50} height={50} alt="Logo" />
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <button onClick={scrollToTop} className="px-3 py-2 font-medium text-gray-700 hover:text-primary transition-colors relative group">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </button>
            <button onClick={scrollToTop} className="px-3 py-2 font-medium text-gray-700 hover:text-primary transition-colors relative group">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </button>
            <button onClick={() => scrollToSection(experienceRef)} className="px-3 py-2 font-medium text-gray-700 hover:text-primary transition-colors relative group">
              Experience
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </button>
            <button onClick={() => scrollToSection(skillsRef)} className="px-3 py-2 font-medium text-gray-700 hover:text-primary transition-colors relative group">
              Skills
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </button>
            <a href="/IsaacBeale_Resume.pdf" className="px-3 py-2 font-medium text-gray-700 hover:text-primary transition-colors relative group">
              Resume
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </a>
            <button onClick={() => scrollToSection(projectsRef)} className="px-3 py-2 font-medium text-gray-700 hover:text-primary transition-colors relative group">
              Projects
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-primary transition-colors"
          >
            <FontAwesomeIcon icon={mobileMenuOpen ? faTimes : faBars} className="text-2xl" />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 animate-fadeIn">
            <div className="flex flex-col space-y-2">
              <button onClick={scrollToTop} className="px-3 py-2 text-left font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded transition-colors">
                Home
              </button>
              <button onClick={scrollToTop} className="px-3 py-2 text-left font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection(experienceRef)} className="px-3 py-2 text-left font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded transition-colors">
                Experience
              </button>
              <button onClick={() => scrollToSection(skillsRef)} className="px-3 py-2 text-left font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded transition-colors">
                Skills
              </button>
              <a href="/IsaacBeale_Resume.pdf" className="px-3 py-2 text-left font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded transition-colors">
                Resume
              </a>
              <button onClick={() => scrollToSection(projectsRef)} className="px-3 py-2 text-left font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded transition-colors">
                Projects
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
