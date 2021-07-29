import React from "react";
import { Col, Container, Nav, Navbar, NavDropdown, Row } from "react-bootstrap";
import About from "../components/about";
import Project from "../components/projects/project";
import Projects from "../components/projects/projects";
import Section from "../components/section";
import Skills from "../components/skills"
import {HoopFinderProps} from "../components/projects/project"

export default function HomePage() {

  const aboutRef = React.useRef<HTMLDivElement>(null);
  const skillsRef = React.useRef(null);
  const projectsRef = React.useRef<HTMLDivElement>(null);

  const scrollToSection = (sectionRef: React.RefObject<HTMLDivElement>) => {
    if(sectionRef.current){   
      sectionRef.current.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };  

  const scrollToTop = () => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
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
            <Nav.Link href="#experience">Experience</Nav.Link>
            <Nav.Link onClick={() => scrollToSection(skillsRef)}>Skills</Nav.Link>
            <NavDropdown title="Projects" id="basic-nav-dropdown" onClick={() => scrollToSection(projectsRef)}>
              <NavDropdown.Item>Hoop Finder</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Djikstra's Algorithm Visualizer</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Keypers</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://www.github.com/ibeale">Github</NavDropdown.Item>
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
          <Section refProp={skillsRef}>
            <Skills />
          </Section>
          <hr></hr>
          <Section refProp={projectsRef}>
            <Projects>
              <Project {...HoopFinderProps} />
            </Projects>
          </Section>
        </Col>
      </Row>

    </Container>

  </>
  )
}
