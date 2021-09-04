import React from "react";
import { Row, Col } from "react-bootstrap";
import MyAccordion from "./myAccordion";

export default function Education(){
    return(
        <>
            <Row className="my-3">
                <Col md={6}>
                    <h3>Oregon State University</h3>
                    <h6>
                        B.S Industrial Engineering, minor in Computer Science
                    </h6>
                    <p>Graduation: June 2020</p>
                    <MyAccordion items={
                        [
                            {
                                title: "Relevant Courses",
                                body:   <ul>
                                            <li>Data Structures (C)</li>
                                            <li>Assembly Language (MASM, Intel x86)</li>
                                            <li>Intro to Computer Science I and II(C++)</li>
                                            <li>Backend Software Engineering (C)</li>
                                            <li>Information Systems Engineering (MS Access, Database Design)</li>
                                            <li>Industrial Systems Optimization (LINGO Solver, Linear Optimization)</li>
                                            <li>Analysis of Algorithms, Operating Systems (C)</li>
                                            <li>Programming Language Fundamentals (Prolog, Haskell)</li>
                                        </ul>
                            }
                        ]
                    }/>
                </Col>
                <Col md={6}></Col>
            </Row>
            <Row className="my-3">
                <Col md={6}>
                </Col>
                <Col>
                    <h3>Arizona State University</h3>
                    <h6>
                        M.S Software Engineering
                    </h6>
                    <p>
                        Expected graduation: May 2022
                    </p>
                    <MyAccordion items={
                        [
                            {
                                title: "Relevant Courses",
                                body:   <ul>
                                            <li>Software Design (Java, Design Patterns)</li>
                                            <li>Advanced Data Structures and Algorithms (Python)</li>
                                            <li>Foundations of Software Engineering(C#, Unity, Agile)</li>
                                            <li>Information Assurance and Security</li>
                                            <li>Languages and Programming Paradigms (Prolog)</li>
                                            <li>Software Agility (Java, Agile)</li>
                                            <li>Web-Based Applications (Javascript)</li>
                                            <li>Software Security</li>
                                            <li>Applied Cryptography</li>
                                        </ul>
                            }
                        ]
                    }/>
                </Col>
            </Row>

        </>
    )
}