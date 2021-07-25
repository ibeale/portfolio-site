import React from "react";
import { Container } from "react-bootstrap";
import About from "../components/about";
import Projects from "../components/projects/projects";
import Skills from "../components/skills"

export default function HomePage() {
  return (
    <>
      <About />
      <hr></hr>
      <Skills/>
      <hr></hr>
      <Projects></Projects>
    </>
  )
}
