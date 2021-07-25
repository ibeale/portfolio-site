import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";

interface LayoutProps {
    children: JSX.Element;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <>
            <nav className="navbar navbar-expand-lg " id="sideNav">
            <a className="navbar-brand js-scroll-trigger" href="#page-top">
                <span className="d-block d-lg-none">Isaac Beale</span>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav">
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#about">About</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#skills">Skills</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#projects">Projects</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#skills">Skills</a></li>
                    {/* <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#interests">Interests</a></li> */}
                    {/* <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#awards">Awards</a></li> */}
                </ul>
            </div>
        </nav>

            <Container>
            <main>{children}</main>
            </Container>
        </>
    );
}