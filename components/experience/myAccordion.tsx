import React from "react";
import { Accordion, AccordionToggle, AccordionCollapse } from "react-bootstrap";

interface AccordionItemProps{
    title: string;
    body: JSX.Element;
}


interface MyAccordionProps {
    items: AccordionItemProps[] | JSX.Element;
}

export default function MyAccordion(props: MyAccordionProps) {
    let body: JSX.Element | JSX.Element[];
    if(Array.isArray(props.items)){
        body = props.items.map((item, idx) => {
            return (
                <div key={item.title}>
                <h2 className="accordion-header">
                    <AccordionToggle eventKey={`collapse${idx}`} className="accordion-button">{item.title}</AccordionToggle>
                </h2>
                <AccordionCollapse eventKey={`collapse${idx}`}>
                    <div className="accordion-body">
                        {item.body}
                    </div>
                </AccordionCollapse>
                </div>
            )
        })
    } else {
        body = props.items;
    }

    return (
        <Accordion>
            <div className="accordion-item">
                {body}
            </div>


        </Accordion>
    )
}