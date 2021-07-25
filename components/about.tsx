import React from "react";
import Container from "react-bootstrap/Container";
import Image from "next/image"
import gradPhoto from "../pages/public/images/me.png"
import { Row, Col } from "react-bootstrap";

export default function About() {
    return (
        <Row id="about">
          <Col>
              <Image
              src={gradPhoto}
              alt="Picture of the author"
              className="img-fluid img-profile rounded-circle mx-auto mb-2"
              height="200"
              width="200"
              />
          </Col>
          <Col>
            <h1>About Me</h1>
            <p>Graduated from Oregon State with a Bachelors in Industrial Engineering</p>
          </Col>

        </Row>
    )
  }