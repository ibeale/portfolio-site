import React from "react";
import Container from "react-bootstrap/Container";
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
        <p>My name is Isaac Beale and I graduated from Oregon State University in 2020 with a degree in
          industrial engineering with a focus on information systems and a minor in computer science. Before
          selecting my focus in my 3rd year of my undergraduate program, I had not written a single line of
          code. However, since the information systems focus required some CS classes, I decided to opt for
          a minor and learned to love to program. During my last year of my undergraduate I decided to pursue
          this passion, and decided to apply for graduate programs in computer science and software engineering.
          I ended up at Arizona State University where I am currently pursuing an MS in software
          engineering. I am currently in my 2nd year of the program and working as a software engineer intern
          at Intel.
        </p>
      </Col>

    </>
  )
}