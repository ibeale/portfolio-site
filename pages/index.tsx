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
import Head from 'next/head'

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
    <Head>
      <title>Isaac Beale</title>
      <meta name="description" content="Portfolio website for Isaac Beale. "></meta>
      <link rel="canonical" href="https://www.isaacbeale.com/" />
      <meta property="og:title" content="Isaac Beale" />
      <meta property="og:description" content="Portfolio website for Isaac Beale." />
      <meta property="og:image" content="https://isaacbeale.com/images/me.png" />
      <meta property="og:url" content="https://isaacbeale.com/" />
      <meta property="og:site_name" content="Isaac Beale" />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_US" />
      <meta name="twitter:title" content="Isaac Beale" />
      <meta name="twitter:description" content="Portfolio website for Isaac Beale." />
      <meta name="twitter:image" content="LINK TO IMAGE" />
      <meta name="twitter:site" content="@ibeale" />
      <meta name="twitter:creator" content="@ibeale" />
    </Head>
      <Navbar bg="light" expand="lg" className="fixed-top">
        <Container>
          <Navbar.Brand onClick={scrollToTop}>Isaac Beale</Navbar.Brand>
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
      <Container fluid style={{backgroundColor: "#FAFAFA"}}>
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
