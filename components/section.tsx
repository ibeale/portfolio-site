'use client';

import React, { RefObject } from "react";
import { motion, useInView } from "framer-motion";

export interface SectionProps {
    refProp?: RefObject<HTMLDivElement | null>;
    className?: string;
    children: React.ReactNode;
}

export default function Section(props: SectionProps) {
    const sectionRef = React.useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    return(
        <motion.div
            ref={props.refProp || sectionRef}
            className={"portfolio-section " + (props.className || "")}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            {props.children}
            <hr className="mt-16 border-border opacity-30"/>
        </motion.div>
    )
}
