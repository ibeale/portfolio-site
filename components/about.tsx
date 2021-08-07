import React from "react";
import Container from "react-bootstrap/Container";
import Image from "next/image"
import gradPhoto from "../public/images/me.png"
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

library.add(fab)

export default function About() {
  return (
    <>
      <Col >
        <div className="d-flex justify-content-center">
        <Image
            src={gradPhoto}
            alt="Picture of Isaac Beale"
            className="rounded-circle"
            height="300"
            width="300"
          />
        </div>
        <div className="social-icons d-flex justify-content-center mt-5">
            <a className="social-icon" href="https://www.linkedin.com/in/isaac-beale-04bb80191/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={["fab","linkedin"]} /></a>
            <a className="social-icon" href="https://www.github.com/ibeale" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={["fab","github"]} /></a>
            <a className="social-icon" href="mailto:isaacdbeale@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a>
        </div>
        
          
      </Col>
      <Col>
        <h1 >Isaac
          <svg className="section-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 30" x="0px" y="0px">
            <g data-name="bio user">
              <path fill="#343a40" d="M8,12a4,4,0,1,1,4-4A4,4,0,0,1,8,12ZM8,6a2,2,0,1,0,2,2A2,2,0,0,0,8,6Z"/>
              <path fill="#343a40" d="M13,20a1,1,0,0,1-1-1V17a1,1,0,0,0-1-1H5a1,1,0,0,0-1,1v2a1,1,0,0,1-2,0V17a3,3,0,0,1,3-3h6a3,3,0,0,1,3,3v2A1,1,0,0,1,13,20Z"/>
              <path fill="#343a40" d="M21,10H17a1,1,0,0,1,0-2h4a1,1,0,0,1,0,2Z"/>
              <path fill="#343a40" d="M21,16H17a1,1,0,0,1,0-2h4a1,1,0,0,1,0,2Z"/>
              <path fill="#343a40" d="M20,13H18a1,1,0,0,1,0-2h2a1,1,0,0,1,0,2Z"/>
            </g>
          </svg>
        </h1>
        <p>My name is Isaac Beale and I graduated from Oregon State University in 2020 with a degree in
          industrial engineering with a focus on information systems and a minor in computer science. Before
          selecting my focus in my 3rd year of my undergraduate program, I hadn't written a single line of
          code. However, since the information systems focus required some CS classes, I decided to opt for
          a minor and learned to love to program. During my last year of my undergraduate I decided to pursue
          this passion, and decided to apply for graduate programs in computer science and software engineering.
          I ended up at Arizona State University where I am currently pursuing a Master's degree in software
          engineering. I am currently in my 2nd year of the program and working as a software engineer intern
          at Intel.
        </p>
      </Col>

    </>
  )
}