"use client"

import React, { RefObject, useCallback, useState } from "react";
import useEmblaCarousel from 'embla-carousel-react';
import ProjectImage from "./projectImage";
import { Github, ExternalLink, ChevronLeft, ChevronRight, Code2 } from 'lucide-react';
import { Badge } from "@/components/ui/badge";

interface ProjectProps {
    name: string;
    description: string;
    filePaths: string[];
    techStack: string;
    githubLink?: string;
    link?: string;
    refProp?: RefObject<HTMLDivElement | null>;
}

export default function Project({ name, description, filePaths, link, githubLink, techStack, refProp }: ProjectProps) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
    const [isExpanded, setIsExpanded] = useState(false);

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi]);

    const techArray = techStack.split(',').map(tech => tech.trim());

    const linksElement = (
        <div className="flex gap-2 mt-4">
            {link && (
                <a
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all font-mono text-sm group hover:scale-105"
                >
                    <ExternalLink className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                    <span>Live Demo</span>
                </a>
            )}
            {githubLink && (
                <a
                    href={githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-border text-foreground rounded-lg hover:border-primary transition-all font-mono text-sm group hover:scale-105"
                >
                    <Github className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                    <span>GitHub</span>
                </a>
            )}
        </div>
    );

    const infoElement = (
        <div className="card-terminal h-full flex flex-col group">
            <div ref={refProp} className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                    <Code2 className="w-5 h-5" />
                </div>
                <div>
                    <h3 className="text-2xl font-serif">{name}</h3>
                </div>
            </div>
            <div className="flex-1">
                <p className="leading-relaxed text-muted-foreground mb-4">
                    {isExpanded ? description : `${description.slice(0, 200)}${description.length > 200 ? '...' : ''}`}
                </p>
                {description.length > 200 && (
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="text-primary hover:text-primary/80 font-mono text-sm mb-4 flex items-center gap-1"
                    >
                        <span className="text-muted-foreground">$</span>
                        {isExpanded ? 'show_less' : 'read_more'}
                    </button>
                )}
            </div>
            <div className="mt-auto pt-4 border-t border-border">
                <h4 className="font-mono text-xs text-muted-foreground mb-3 flex items-center gap-2">
                    <span className="text-primary">›</span> Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2 mb-2">
                    {techArray.map((tech) => (
                        <Badge key={tech} variant="outline" size="sm">{tech}</Badge>
                    ))}
                </div>
                {linksElement}
            </div>
        </div>
    );

    const carousel = filePaths.length > 0 ? (
        <div className="relative rounded-lg overflow-hidden border border-border group">
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                    {filePaths.map((filePath) => (
                        <div key={filePath} className="flex-[0_0_100%] min-w-0">
                            <ProjectImage src={filePath} />
                        </div>
                    ))}
                </div>
            </div>
            {filePaths.length > 1 && (
                <>
                    <button
                        onClick={scrollPrev}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-card/90 backdrop-blur-sm border border-border text-foreground rounded-full w-10 h-10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all shadow-lg opacity-0 group-hover:opacity-100"
                        aria-label="Previous slide"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                        onClick={scrollNext}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-card/90 backdrop-blur-sm border border-border text-foreground rounded-full w-10 h-10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all shadow-lg opacity-0 group-hover:opacity-100"
                        aria-label="Next slide"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </>
            )}
        </div>
    ) : link && link.includes('youtube.com') ? (
        <div className="relative rounded-lg overflow-hidden border border-border aspect-video group">
            <iframe
                className="w-full h-full"
                src={link.replace('watch?v=', 'embed/')}
                title={name}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </div>
    ) : null;

    return (
        <div className="flex flex-col xl:flex-row gap-8 my-12">
            <div className="flex-1">
                {infoElement}
            </div>
            <div className="flex-1">
                {carousel}
            </div>
        </div>
    );
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

}

export const ASUMapsProps: ProjectProps = {
    name: "ASU Maps AR Navigation",
    description: "An augmented reality mobile application for Arizona State University that helps students navigate between classes using AR overlays. \
    The app features user authentication with persistent class schedules, course search and management, and campus tours. \
    Students can navigate to buildings or specific classes with real-time AR directional arrows overlaid on their camera view. \
    The application includes QR code scanning for building information, event management, and personalized recommendations based on the user's schedule.",
    filePaths: [],
    techStack: "Unity, C#, AR Foundation, Firebase",
    link: "https://www.youtube.com/watch?v=3Q_KH5BDUi8"
};

export const DigyProps: ProjectProps = {
    name: "Digy Programming Language",
    description: "A custom programming language based on Python syntax, built using ANTLR for grammar parsing and evaluation. \
    Digy supports multiple data types (integer, string, boolean), arithmetic and logical operators, control flow statements (if/else, while loops, for loops), \
    and a ternary operator. The language features static type inference, global variable scoping, and comprehensive error handling for undeclared or uninitialized variables. \
    Implemented using the visitor pattern for AST traversal and includes a custom interpreter/evaluator built in Python.",
    filePaths: [],
    techStack: "Python, ANTLR, Lexical Analysis, Parser, Interpreter Design",
    link: "https://www.youtube.com/watch?v=G6CDim1KdWk"
};

export const LifeMapsProps: ProjectProps = {
    name: "LifeMapz E-Commerce Platform",
    description: "A proof-of-concept e-commerce platform developed for an external stakeholder, demonstrating how vendors could sell products through individual stores with QR code integration. \
    The project showcased the complete development lifecycle from design to deployment, utilizing Figma for collaborative UI/UX design and AWS Amplify to convert designs into React components. \
    Core features include Stripe integration for payment processing and vendor onboarding, user authentication with email verification, product management with image uploads, \
    QR code generation using QRTiger API, shopping cart functionality with checkout flow, and a vendor analytics dashboard. \
    The backend leverages AWS serverless infrastructure with DynamoDB for scalable data storage, Lambda functions for business logic, API Gateway for REST endpoints, and CloudFront CDN for global content delivery. \
    State management was handled with Redux to ensure consistent data flow across the React component architecture.",
    filePaths: [],
    techStack: "React, Redux, AWS Amplify, AWS Lambda, DynamoDB, API Gateway, CloudFront, Stripe, QRTiger, Figma",
    link: "https://www.youtube.com/watch?v=Hj9O0VHf5fA"
};

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
