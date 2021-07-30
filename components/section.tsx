import React, { RefObject } from "react";
import { Row } from "react-bootstrap";

export interface SectionProps {
    refProp?: RefObject<HTMLDivElement>;
    className?: string;
    children: JSX.Element;
}

export default function Section(props: SectionProps) {
    const className = props.className ? props.className : "";
    return(
        <div className={"row portfolio-section " + className} ref={props.refProp}>
            {props.children}
        </div>

    
    )
}