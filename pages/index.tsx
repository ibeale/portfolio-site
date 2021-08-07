import React from "react";
import { Col, Container, Nav, Navbar, NavDropdown, Row } from "react-bootstrap";
import About from "../components/about";
import Project, { KeypersProps, SolverProps } from "../components/projects/project";
import Projects from "../components/projects/projects";
import Section from "../components/section";
import Skills from "../components/skills"
import { HoopFinderProps } from "../components/projects/project"
import Experience from "../components/experience/experience";
import Education from "../components/experience/education";
import Employment from "../components/experience/employment";

export default function HomePage() {

  const aboutRef = React.useRef<HTMLDivElement>(null);
  const experienceRef = React.useRef<HTMLDivElement>(null);
  const skillsRef = React.useRef(null);
  const projectsRef = React.useRef<HTMLDivElement>(null);
  const solverRef = React.useRef<HTMLDivElement>(null);
  const hoopFinderRef = React.useRef<HTMLDivElement>(null);
  const keypersRef = React.useRef<HTMLDivElement>(null);

  const scrollToSection = (sectionRef: React.RefObject<HTMLDivElement>) => {
    //src: https://newbedev.com/javascript-scrollintoview-smooth-scroll-and-offset
    if (sectionRef.current) {
      const offset = 60;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = sectionRef.current.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }

  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Navbar bg="light" expand="lg" className="fixed-top">
        <Container>
          <Navbar.Brand href="#home">Isaac Beale</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={scrollToTop}>Home</Nav.Link>
              <Nav.Link onClick={scrollToTop}>About</Nav.Link>
              <Nav.Link onClick={() => scrollToSection(experienceRef)}>Experience</Nav.Link>
              <Nav.Link onClick={() => scrollToSection(skillsRef)}>Skills</Nav.Link>
              <NavDropdown title="Projects" id="basic-nav-dropdown">
                <NavDropdown.Item onClick={() => scrollToSection(hoopFinderRef)}>Hoop Finder</NavDropdown.Item>
                <NavDropdown.Item onClick={() => scrollToSection(solverRef)}>Djikstra Algorithm Visualizer</NavDropdown.Item>
                <NavDropdown.Item onClick={() => scrollToSection(keypersRef)}>Keypers</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={() => scrollToSection(projectsRef)}>Projects Section</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container fluid>
        <Row>
          <Col>
            <Section refProp={aboutRef} className="align-self-center">
              <About />
            </Section>
            <hr></hr>
            <Section refProp={experienceRef}>
              <Experience>
                <Education/>
                <Employment />
              </Experience>
            </Section>
            <hr></hr>
            <Section refProp={skillsRef}>
              <Skills />
            </Section>
            <hr></hr>
            <Section refProp={projectsRef}>
              <Projects>
                <Project {...HoopFinderProps} refProp={hoopFinderRef}/>
                <Project {...SolverProps} refProp={solverRef} flip/>
                <Project {...KeypersProps} refProp={keypersRef}/>
              </Projects>
            </Section>
          </Col>
        </Row>

      </Container>

    </>
  )
}
