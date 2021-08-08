import React from "react";
import Container from "react-bootstrap/Container";
import Image from "next/image"
import gradPhoto from "../public/images/me.png"
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faAddressCard} from '@fortawesome/free-solid-svg-icons'

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
          <FontAwesomeIcon className="mx-3 section-svg" color="#70D7FF" icon={faAddressCard} />
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