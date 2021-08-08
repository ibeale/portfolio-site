import React from "react";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode} from '@fortawesome/free-solid-svg-icons'

interface ProjectProps{
    children?: JSX.Element | JSX.Element[]
}

export default function Projects({children}: ProjectProps){
    return (
        <>
            <Col>
                <Row>
                    <Col>
                    </Col>
                    <Col>
                        <h2>Projects 
                            <FontAwesomeIcon className="mx-3" icon={faCode} />
                        </h2>
                    </Col>
                </Row>
                {children}
                
            </Col>
        </>
    )
}

