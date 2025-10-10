import React from "react";
import { Accordion } from "react-bootstrap";

interface AccordionItemProps{
    title: string;
    body: React.ReactNode;
}


interface MyAccordionProps {
    items: AccordionItemProps[] | React.ReactNode;
}

export default function MyAccordion(props: MyAccordionProps) {
    let body: React.ReactNode;
    if(Array.isArray(props.items)){
        body = props.items.map((item, idx) => {
            return (
                <Accordion.Item key={item.title} eventKey={`${idx}`}>
                    <Accordion.Header>{item.title}</Accordion.Header>
                    <Accordion.Body>
                        {item.body}
                    </Accordion.Body>
                </Accordion.Item>
            )
        })
    } else {
        body = props.items;
    }

    return (
        <Accordion>
            {body}
        </Accordion>
    )
}