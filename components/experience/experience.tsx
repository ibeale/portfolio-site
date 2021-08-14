import React from "react";
import { Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'

interface ExperienceProps {
    children: JSX.Element | JSX.Element[];
}

export default function Experience({ children }: ExperienceProps) {
    return (
        <>
            <Col>
                <Row>
                    <Col>
                    </Col>
                    <Col>
                        <h2>Experience
                            <svg className="mb-4" width="120" height="100" viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="experienceSVG">
                                    <a href="/IsaacBeale_Resume.pdf">
                                        <g id="experience-contents">

                                            <rect id="envelope" x="20" y="42" width="79" height="35" rx="1" fill="#FF976E" />

                                            <path id="seal" d="M21 52L60.5161 71.5386C61.101 71.8278 61.7902 71.8135 62.3626 71.5003L98 52" stroke="#495057" strokeLinecap="round" />

                                        </g>
                                    </a>


                                    <g id="experience-briefcase">
                                        <g id="experience-bottom">
                                            <path d="M99 76C99 78.2091 97.2091 80 95 80L24 80C21.7909 80 20 78.2091 20 76L20 51C30.8435 51 38.5 51 45 51C45 61.0385 45 59.9231 60 59.9231C75 59.9231 75 61.0385 75 51C83.5 51 86.9585 51 99 51L99 76Z" fill="#70D7FF" />
                                            <path d="M99 76C99 78.2091 97.2091 80 95 80L24 80C21.7909 80 20 78.2091 20 76L20 51C30.8435 51 38.5 51 45 51C45 61.0385 45 59.9231 60 59.9231C75 59.9231 75 61.0385 75 51C83.5 51 86.9585 51 99 51L99 76Z" fill="#70D7FF" />
                                        </g>
                                        <g id="experience-top">
                                            <path d="M49.003 21.915C49.0014 21.4501 49.3769 21.0718 49.8418 21.0701L68.5424 21.003C69.0073 21.0013 69.3855 21.3769 69.3872 21.8418L69.4024 26.0652C66.6044 26.0752 64.6289 26.0823 62.9517 26.0883C62.9454 24.335 62.9461 24.5298 59.0757 24.5437C55.2053 24.5576 55.2046 24.3628 55.2108 26.1161C53.0176 26.124 52.1252 26.1272 49.0182 26.1384L49.003 21.915Z" fill="#70D7FF" />
                                            <path d="M49.003 21.915C49.0014 21.4501 49.3769 21.0718 49.8418 21.0701L68.5424 21.003C69.0073 21.0013 69.3855 21.3769 69.3872 21.8418L69.4024 26.0652C66.6044 26.0752 64.6289 26.0823 62.9517 26.0883C62.9454 24.335 62.9461 24.5298 59.0757 24.5437C55.2053 24.5576 55.2046 24.3628 55.2108 26.1161C53.0176 26.124 52.1252 26.1272 49.0182 26.1384L49.003 21.915Z" fill="#70D7FF" />
                                            <path d="M20 32C20 29.7908 21.7909 28 24 28H95C97.2091 28 99 29.7908 99 32V46H20V32Z" fill="#70D7FF" />
                                        </g>
                                    </g>
                                    <path id="experience-arrow" d="M60.5 4C60.5 3.17157 59.8284 2.5 59 2.5C58.1716 2.5 57.5 3.17157 57.5 4H60.5ZM57.9393 35.0607C58.5251 35.6464 59.4749 35.6464 60.0607 35.0607L69.6066 25.5147C70.1924 24.9289 70.1924 23.9792 69.6066 23.3934C69.0208 22.8076 68.0711 22.8076 67.4853 23.3934L59 31.8787L50.5147 23.3934C49.9289 22.8076 48.9792 22.8076 48.3934 23.3934C47.8076 23.9792 47.8076 24.9289 48.3934 25.5147L57.9393 35.0607ZM57.5 4V34H60.5V4H57.5Z" fill="#495057" />
                                </g>
                            </svg>


                        </h2>
                    </Col>
                </Row>
                {children}
            </Col>
        </>
    )
}