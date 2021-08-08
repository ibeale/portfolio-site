import React from "react";
import { Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'

interface ExperienceProps {
    children: JSX.Element|JSX.Element[];
}

export default function Experience({children}: ExperienceProps){
    return(
        <>
        <Col>
            <Row>
                <Col md={6}>
                </Col>
                <Col md={6}>
                    <h2>Experience 
                        <FontAwesomeIcon className="mx-3" color="#70D7FF" icon={faBriefcase} />
                    </h2>
                </Col>
            </Row>
            {children}
        </Col>
    </>
    )
}