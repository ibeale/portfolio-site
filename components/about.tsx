"use client"

import React, { useState } from "react";
import Image from "next/image"
import gradPhoto from "@/public/images/me.png"
import ogImage from "@/public/images/ogImage.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'

export default function About() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="grid md:grid-cols-2 gap-8 my-12">
      <div className="flex flex-col items-center justify-center">
        <div className="flex justify-center mb-6">
          <div className="relative">
            <Image
              src={gradPhoto}
              alt="Picture of Isaac Beale"
              className="rounded-full shadow-xl ring-4 ring-primary/20"
              height="300"
              width="300"
            />
          </div>
        </div>
        <div className="social-icons flex justify-center">
          <a className="social-icon" href="https://www.linkedin.com/in/isaac-beale-04bb80191/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
          <a className="social-icon" href="https://www.github.com/ibeale" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
          <a className="social-icon" href="mailto:isaacdbeale@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a>
        </div>
      </div>

      <div className="flex flex-col justify-center">
        <h2 className="mb-6">Isaac Beale
          <svg className="inline-block mb-3 mx-3" width="120" height="100" viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="aboutCards">
              <g id="altCardBot">
                <rect id="Rectangle 1" x="1" y="25" width="85" height="51" rx="5" fill="#FF976E" />
                <circle id="Ellipse 1" cx="26.5" cy="38.5" r="7.5" fill="white" />
                <rect id="Rectangle 2" x="17" y="48" width="19" height="24" rx="3" fill="white" />
                <rect id="Rectangle 3" x="45" y="35" width="32" height="6" rx="3" fill="white" />
                <rect id="Rectangle 4" x="45" y="44" width="32" height="6" rx="3" fill="white" />
                <rect id="Rectangle 5" x="45" y="53" width="32" height="6" rx="3" fill="white" />
                <rect id="Rectangle 6" x="45" y="62" width="32" height="6" rx="3" fill="white" />
              </g>
              <g id="mainCard">
                <rect id="Rectangle 1_2" x="18" y="25" width="85" height="51" rx="5" fill="#70D7FF" />
                <circle id="Ellipse 1_2" cx="43.5" cy="38.5" r="7.5" fill="white" />
                <rect id="Rectangle 2_2" x="34" y="48" width="19" height="24" rx="3" fill="white" />
                <rect id="Rectangle 3_2" x="62" y="35" width="32" height="6" rx="3" fill="white" />
                <rect id="Rectangle 4_2" x="62" y="44" width="32" height="6" rx="3" fill="white" />
                <rect id="Rectangle 5_2" x="62" y="53" width="32" height="6" rx="3" fill="white" />
                <rect id="Rectangle 6_2" x="62" y="62" width="32" height="6" rx="3" fill="white" />
              </g>
              <g id="altCardTop">
                <rect id="Rectangle 1_3" x="34" y="25" width="85" height="51" rx="5" fill="#FF976E" />
                <circle id="Ellipse 1_3" cx="59.5" cy="38.5" r="7.5" fill="white" />
                <rect id="Rectangle 2_3" x="50" y="48" width="19" height="24" rx="3" fill="white" />
                <rect id="Rectangle 3_3" x="78" y="35" width="32" height="6" rx="3" fill="white" />
                <rect id="Rectangle 4_3" x="78" y="44" width="32" height="6" rx="3" fill="white" />
                <rect id="Rectangle 5_3" x="78" y="53" width="32" height="6" rx="3" fill="white" />
                <rect id="Rectangle 6_3" x="78" y="62" width="32" height="6" rx="3" fill="white" />
              </g>
            </g>
          </svg>
        </h2>

        <div className="bg-white rounded-lg p-6 shadow-md">
          <p className="leading-relaxed text-gray-700">
            My name is Isaac Beale and I hold an M.S. in software engineering with a focus in cybersecurity from
            Arizona State University along with a B.S. in industrial engineering with a minor in computer science from Oregon State University.
            My path to becoming a software engineer was unconventional, starting in a different discipline, and finding a passion for programming
            late into my undergraduate studies.
          </p>
          <p className="leading-relaxed text-gray-700 mt-4">
            I&apos;m a full-stack software engineer at Apple with a backend focus, working primarily with Django and Angular.
            My expertise spans database design, system architecture, analyzing technical trade-offs, and root cause analysis.
            I&apos;m equally comfortable diving deep into backend systems as I am working across the full stack to deliver complete solutions.
            My work style is self-starting and independent, but I believe strongly in collaborative problem-solving and knowledge sharing with my team.
          </p>

          {showMore && (
            <div className="mt-4 pt-4 border-t border-gray-200">
              <p className="leading-relaxed text-gray-600 italic">
                This next section is a bit more introspective about my career path. I&apos;ll probably move this to a blog section on
                this site once I build it, so employers feel free to skip this unless you&apos;re interested:
              </p>
              <p className="leading-relaxed text-gray-700 mt-4">
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
            className="mt-4 text-primary hover:text-secondary transition-colors font-semibold flex items-center gap-2"
          >
            {showMore ? (
              <>
                Show less <FontAwesomeIcon icon={faChevronUp} className="text-sm" />
              </>
            ) : (
              <>
                Read more about my journey <FontAwesomeIcon icon={faChevronDown} className="text-sm" />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}
