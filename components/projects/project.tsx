import React, { RefObject } from "react";
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
    techStack: string;
    githubLink?: string;
    link?: string;
    refProp?: RefObject<HTMLDivElement>;
    flip?: boolean;
}

export default function Project({ name, description, filePaths, link, githubLink, techStack, refProp, flip }: ProjectProps) {

    let githubLinkElement: JSX.Element|null = null;
    if(githubLink){
        githubLinkElement = <a href={githubLink} target="_blank" rel="noreferrer" className="social-icon"><FontAwesomeIcon icon={["fab", "github"]} /></a>
    }

    let websiteLinkElement: JSX.Element|null = null
    if(link){
        websiteLinkElement = <a href={link} target="_blank" rel="noreferrer" className="social-icon"><FontAwesomeIcon icon={faExternalLinkAlt} /></a>
    }

    let linksElement: JSX.Element =         
        <div className="social-icons">
            {websiteLinkElement}
            {githubLinkElement}
        </div>

    let infoElement = <>
                        <div className="my-3" ref={refProp}>
                            <h3>{name}{linksElement}</h3>
                        </div>
                        <div className="my-3">
                            <p>{description}</p>
                        </div>
                        <div className="my-3">
                            <b>{techStack}</b>
                        </div>
                    </>

    let carousel = filePaths.length > 0 ?  <Carousel>
                        {filePaths.map((filePath) => (
                            <Carousel.Item key={filePath}>
                                <ProjectImage src={filePath} />
                            </Carousel.Item>
                        ))}
                    </Carousel> : null


    if(flip){
        return (
            <Row className="my-5">
                <Col>
                    {carousel}
                </Col>
                <Col>
                    {infoElement}
                </Col>
            </Row >
        )
    }
    return(
        <Row className="my-5">
                <Col>
                    {infoElement}
                </Col>
                <Col>
                    {carousel} 
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
    techStack: "React, Typescript, Firebase, React-Bootstrap, Google OAuth, Google Maps API, Google Maps Geolocation",
    githubLink: "https://github.com/ibeale/graph-algo-visualizer",
    link: "https://hoop-finder.web.app"
};

export const SolverProps: ProjectProps = {
    name: "Graph Algorithm Visualizer",
    description: "This application adds a visual element to graph algorithms. Currently\
    it only supports Dijkstra's Algorithm. A user may add and remove blockades represented by black squares.\
    When the user presses the solve button, the app begins to animate. \
    Purple squares will begin to spread across the grid representing squares visited by the algorithm. \
    Once the algorithm has visited the destination square, the shortest path is displayed using gray squares."
    ,
    filePaths: [
        "/images/solver/solver1.png",
        "/images/solver/solver2.png",
        "/images/solver/solver3.png",
        "/images/solver/solver4.png",
        "/images/solver/solver5.png",
    ],
    techStack: "React, Typescript",
    githubLink: "https://github.com/ibeale/graph-algo-visualizer"
};

export const KeypersProps: ProjectProps = {
    name: "Keypers Sneaker Bot Rental Site",
    description: "Keypers was a website for users to rent sneaker bots in order to secure limited pairs \
    of shoes. The bots that we provided primarily used key based authentication to to pair users with bots. \
    In order to transfer a bot to another computer, a user would go to a bot's website, sign in, and reset their\
     key, then reactivate it on another computer. Giving a rental customer the credentials to log into the site \
     would also allow them to steal the key. So Keypers enabled rental customers to reset the key to a bot, \
     without providing them with the credentials associated with the bot. This was accomplished through an API \
     which would generate temporary API Keys, to allow allow the user to make a request to the server which would \
     create a selenium headless instance, log into the bot's site with cookies stored in the database, and\
     click the reset button on their behalf. "
    ,
    filePaths: [
        "/images/keypers/kp0.png",
        "/images/keypers/kp1.png",
        "/images/keypers/kp2.png",
        "/images/keypers/kp3.png",
        "/images/keypers/kp4.png",
        "/images/keypers/kp5.png",
        "/images/keypers/kp6.png",
    ],
    techStack: "Flask, SQLite, Sass, Bulma, Amazon EC2, Amazon Route 53",
    githubLink: "https://github.com/ibeale/KeypersDashboard"
};