import React, { RefObject } from "react";
import { Row } from "react-bootstrap";

export interface SectionProps {
    refProp?: RefObject<HTMLDivElement>;
    className?: string;
    children: JSX.Element;
}

export default function Section(props: SectionProps) {
    
    let className = props.className ? props.className : "";
    return(
        <>
        <div className={"row portfolio-section animate" + className} ref={props.refProp}>
                {props.children}
            <hr className="mt-5"/>

        </div>
        </>

    
    )
}