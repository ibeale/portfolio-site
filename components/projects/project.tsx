import React from "react";
import { Row, Col, Carousel } from "react-bootstrap";
import ProjectImage from "./projectImage";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

library.add(faExternalLinkAlt)

interface ProjectProps {
    name: string;
    description: string;
    filePaths: string[];
    link: string;
}

export default function Project({ name, description, filePaths, link }: ProjectProps) {
    return (
        <Row>
            <Col>
                <h2><a href={link} target="_blank">{name} <FontAwesomeIcon icon={faExternalLinkAlt} /></a></h2>
                <p>{description}</p>
            </Col>
            <Col>
                <Carousel>
                    {filePaths.map((filePath) => (
                        <Carousel.Item key={filePath}>
                            <ProjectImage src={filePath} />
                        </Carousel.Item>
                    ))}
                </Carousel>
            </Col>
        </Row >
    )
}

export const HoopFinderProps: ProjectProps = {
    name: "Hoop Finder",
    description: "HoopFinder is an interactive crowd sourced database of basketball hoops around the world. \
    The project was built for basketball players to share and discover lesser known basketball \
    hoops, with the hope to encourage more players to get out and play. To use this app, a user\
    logs into the application using Google's OAuth service. From there the user can browse the world\
    for basketball hoops near them with the search bar or the \"center on your location\"\
    feature at the bottom. The user may also add hoops by enabling \"add hoop mode.\" Once this mode\
    is enabled, clicking anywhere on the map promps the user to describe the hoop they created and save it.\
    Thanks to Google Firebase Realtime Database, new hoops and deleted hoops are immediately broadcasted \
    to all users online allowing for real-time information. In the future, I would like to add features that\
    would allow users to schedule games of pickup with real time park information.",
    filePaths: [
        "/images/hoopfinder/hoopfinder1.png",
        "/images/hoopfinder/hoopfinder2.png",
        "/images/hoopfinder/hoopfinder3.png",
        "/images/hoopfinder/hoopfinder4.png",
        "/images/hoopfinder/hoopfinder5.png",
        "/images/hoopfinder/hoopfinder6.png",
    ],
    link: "https://hoop-finder.web.app"
};

export const SolverProps: ProjectProps = {
    name: "Pathfinding Algorithm Visualizer",
    description: "HoopFinder is an interactive crowd sourced database of basketball hoops around the world. \
    The project was built for basketball players to share and discover lesser known basketball \
    hoops, with the hope to encourage more players to get out and play. To use this app, a user\
    logs into the application using Google's OAuth service. From there the user can browse the world\
    for basketball hoops near them with the search bar or the \"center on your location\"\
    feature at the bottom. The user may also add hoops by enabling \"add hoop mode.\" Once this mode\
    is enabled, clicking anywhere on the map promps the user to describe the hoop they created and save it.\
    Thanks to Google Firebase Realtime Database, new hoops and deleted hoops are immediately broadcasted \
    to all users online allowing for real-time information. In the future, I would like to add features that\
    would allow users to schedule games of pickup with real time park information.",
    filePaths: [
        "/images/solver/solver1.png",
        "/images/solver/solver2.png",
        "/images/solver/solver3.png",
        "/images/solver/solver4.png",
        "/images/solver/solver5.png",
    ],
    link: "https://github.com/ibeale/graph-algo-visualizer"
};