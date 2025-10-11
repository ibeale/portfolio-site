import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
                <AccordionItem key={item.title} value={`item-${idx}`}>
                    <AccordionTrigger className="bg-primary hover:bg-secondary text-tertiary">
                        {item.title}
                    </AccordionTrigger>
                    <AccordionContent>
                        {item.body}
                    </AccordionContent>
                </AccordionItem>
            )
        })
    } else {
        body = props.items;
    }

    return (
        <Accordion type="single" collapsible>
            {body}
        </Accordion>
    )
}