import React from "react";
import Image from "next/image"
import gradPhoto from "../public/images/me.png"
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faAddressCard } from '@fortawesome/free-solid-svg-icons'

export default function About() {
  return (
    <>
      <Col md={6} className="my-5">
        <div className="d-flex justify-content-center my-3">
          <Image
            src={gradPhoto}
            alt="Picture of Isaac Beale"
            className="rounded-circle"
            height="300"
            width="300"
          />
        </div>
        <div className="social-icons d-flex justify-content-center">
          <a className="social-icon" href="https://www.linkedin.com/in/isaac-beale-04bb80191/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
          <a className="social-icon" href="https://www.github.com/ibeale" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
          <a className="social-icon" href="mailto:isaacdbeale@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a>
        </div>


      </Col>
      <Col md={6} className="my-5">
        <h2 >Isaac Beale
          <svg className="mb-3 mx-3" width="120" height="100" viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        <p>My name is Isaac Beale and I hold an an M.S. in software engineering with a focus in cybersecurity from 
          Arizona State University along with a B.S. in industrial engineering with a minor in computer science from Oregon State University. 
          My path to becoming a software engineer was unconventional, starting in a different discipline, and finding a passion for programming 
          late into my undergraduate studies. Now, I am a full time fullstack software engineer working at Intel primarily working with React and Django
          primarily. For now, what "fullstack" means to me, is that I am still early in my career and I am currently trying to maintain a working knowledge of
          many different topics under the web-development umbrella while looking for my niche so that I can become more specialized. The goal is to eventually move
          away from the broad label of "fullstack" as my skills progress. With my current work experience, I would describe my work style to be self-starting and
          independent, but not afraid to lean on my team or have my team lean on me when there is knowledge to be shared.
          <hr/>
          This next section is a bit more introspective about my current career path. I'll probably move these next sections to a blog section on 
          this site once I build it, so employers feel free to skip this unless you're interested:
          Something about I find intersting about my career path is that I never anticipated a career in web development.
          I find that I've enjoyed most programming challenges that I've been faced with in my courses, like building a shell, GUIs in Java swing, or writing scripts to
          automate an attack in an attack and defense CTF. At the end of the day I find that I just enjoy trying to create a good 
          system to solve difficult problems. Ones that can be extended as the scope of the problem inevitably grows. However, 
          my classwork was more geared towards concepts and applying them in (typically) contrived examples. So when I would try to practice
          programming extracurricularly, the best and most accessible type of system to build were websites. I thought websites were great at-home practice
          for many different programming challenges, and so most of my "real world" experience prior to my entry into the job-world as an intern, were web development
          related. This is in contrast to building things like build automation tools, or trying to create a python data processing library. These I found were difficult
          to build correctly without having real world requirements. Creating my own requirements typically resulted in pretty flat and uninteresting results.
          So as I applied to jobs with the knowledge that I had, I suppose this first level of specialization in software engineering found me,
          rather than seeking it out myself.
          <br></br>



        </p>
      </Col>

    </>
  )
}
