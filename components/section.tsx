import React, { RefObject } from "react";
import { Row } from "react-bootstrap";

export interface SectionProps {
    refProp: RefObject<HTMLDivElement>;
    className?: string;
    children: JSX.Element;
}

export default function Section(props: SectionProps) {
    return(
        <div className={"row portfolio-section " + props.className || ""} ref={props.refProp}>
            {props.children}
        </div>

    
    )
}