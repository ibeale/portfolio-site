import React, { RefObject } from "react";

export interface SectionProps {
    refProp?: RefObject<HTMLDivElement | null>;
    className?: string;
    children: React.ReactNode;
}

export default function Section(props: SectionProps) {
    return(
        <div className={"portfolio-section animate " + (props.className || "")} ref={props.refProp}>
            {props.children}
            <hr className="mt-12"/>
        </div>
    )
}