import React, { RefObject } from "react";
import { Row, Col, Carousel } from "react-bootstrap";
import ProjectImage from "./projectImage";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub} from '@fortawesome/free-brands-svg-icons'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

interface ProjectProps {
    name: string;
    description: string;
    filePaths: string[];
    techStack: string;
    githubLink?: string;
    link?: string;
    refProp?: RefObject<HTMLDivElement | null>;
    flip?: boolean;
}

export default function Project({ name, description, filePaths, link, githubLink, techStack, refProp, flip }: ProjectProps) {

    let githubLinkElement: React.ReactNode = null;
    if(githubLink){
        githubLinkElement = <a href={githubLink} target="_blank" rel="noreferrer" className="social-icon"><FontAwesomeIcon icon={faGithub} /></a>
    }

    let websiteLinkElement: React.ReactNode = null;
    if(link){
        websiteLinkElement = <a href={link} target="_blank" rel="noreferrer" className="social-icon"><FontAwesomeIcon icon={faExternalLinkAlt} /></a>
    }

    let linksElement: React.ReactNode =         
        <div className="social-icons">
            {websiteLinkElement}
            {githubLinkElement}
        </div>

    let infoElement = <>
                        <div className="" ref={refProp}>
                            <h3>{name}{linksElement}</h3>
                        </div>
                        <div className="">
                            <p>{description}</p>
                        </div>
                        <div className="">
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
                <Col xl={6} className="order-xl-2">
                    {infoElement}
                </Col>
                <Col xl={6} className="order-xl-1">
                    {carousel}
                </Col>
                
            </Row >
        )
    }
    return(
        <Row className="my-5">
                <Col xl={6}>
                    {infoElement}
                </Col>
                <Col xl={6}>
                    {carousel} 
                </Col>
            </Row >
    )
}

export const OSUCapstoneProps: ProjectProps = {
    name: "OSU Capstone",
    description: "This project set out to empirically test the effect of hose diameter, hose length, valve, fitting,\
    and cylinder size on the dwell time of a hydraulic cylinder for the company TEKFAB in Albany, OR. \
    This project was the result of all that I had learned in my undergraduate degree. Luckily \
    I was assigned a capstone where I was able to combine my education from my industrial engineering major \
    with my computer science minor. In order to complete this, my partner and I created a randomized factorial experiment \
    to test the effects of each of the variables along with any second and third order interaction effects. We tested \
    six different variables using a 2^(6-1) factorial design. After creating the experiment, my partner Caylan created a \
    steel mount for an optical laser sensor to attach to a hydraulic cylinder, where the beam would be blocked\
     when the cylinder was fully extended. The sensor was connected to an oscilloscope,\
    which allowed for very accurate and granular readings. After we collected data, the factorial analysis\
    was completed in python and plots were output using matplotlib.",
    filePaths: [
        "/images/osuCapstone/Slide1.png",
        "/images/osuCapstone/Slide2.png",
        "/images/osuCapstone/Slide3.png",
        "/images/osuCapstone/Slide4.png",
        "/images/osuCapstone/Slide5.png",
        "/images/osuCapstone/Slide6.png",
        "/images/osuCapstone/Slide7.png",
        "/images/osuCapstone/Slide8.png",
        "/images/osuCapstone/Slide9.png",
        "/images/osuCapstone/Slide10.png",
    ],
    techStack: "Python, matplotlib",
    githubLink: "https://github.com/ibeale/capstone",
    link: "https://tekfab.com/"

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
