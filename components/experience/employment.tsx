import React from "react";
import { Row, Col, Accordion, AccordionCollapse, AccordionToggle, AccordionContext, useAccordionToggle } from "react-bootstrap";
import MyAccordion from "./myAccordion";

export default function Employment() {
    return (
        <Row className="my-5">
            <Col>
                <h3>Intel Corporation</h3>
                <h6>Full Stack Software Engineer Intern</h6>
                <p>Duration: August 2020 to Present</p>
                <h6>Responsibilites</h6>
                <MyAccordion items={
                    [
                        {
                            title: "Integration Technician Request",
                            body: <>
                            <div className="my-3">
                            {"Designed and implemented a web application for employees at Intel \
                        to make requests to the integration team. This system was built to replace \
                        the email standard that was currently in place."}
                            </div>
                        
                        <MyAccordion items={
                            [
                                {
                                    title: "Integration Technician Request Pages",
                                    body: <MyAccordion items={
                                        [
                                            {
                                                title: "New Request",
                                                body:   <>
                                                            {"This page was compromised of dropdowns \
                                                            text input components, along with a rich text editor. Dropdowns would be populated \
                                                            by what was input in the previous dropdowns to support different types of requests\
                                                            with different requirements."}
                                                        </>
                                            },
                                            {
                                                title: "View Requests",
                                                body:  <>
                                                            {"Implemented with "}
                                                            <a href="https://react-table.tanstack.com"
                                                                target="_blank"
                                                                rel="noreferrer">React Table</a>
                                                            {" which provided a dynamic, sortable, paginated table. Depending on the user who was logged in \
                                                            the table would display different things. If the user was not part of the integration team, the table \
                                                            would display the status of all requests in the system so that requestors could watch their request through \
                                                            the pipeline. If the user was part of the integration team, they could assign other members of the team \
                                                            to a request, approve or deny the requests, and change the request's status. All users had the option to view \
                                                            the request in detail inside of a modal window as well."}
                                                        </>
                                            },
                                        ]
                                    }/>
                                },
                                {
                                    title: "Technologies",
                                    body: <MyAccordion items={
                                        [
                                            {
                                                title: "React",
                                                body:   <>
                                                    {"To create a dynamic frontend. Primarily chosen over other frontend\
                                                    frameworks for learning purposes, as this was the one I was interested in.\
                                                     Used axios to connect with the backend, "}
                                                     <a href="https://github.com/zenoamaro/react-quill"
                                                                target="_blank"
                                                                rel="noreferrer">React Quill</a>
                                                    {" for the rich text editor, "}
                                                    <a href="https://react-bootstrap.github.io/"
                                                                target="_blank"
                                                                rel="noreferrer">React Bootstrap</a>
                                                    {" for styling, and "}
                                                    <a href="https://react-table.tanstack.com/"
                                                                target="_blank"
                                                                rel="noreferrer">React Table</a>
                                                    {" to create a reactive table"}
                                                    
                                                </>
                                            },
                                            {
                                                title: "Django",
                                                body:   <>
                                                {"Made use of the built in User model, along "}
                                                                <a href="https://django-auth-adfs.readthedocs.io/en/latest/" target="_blank" rel="noreferrer">Microsoft ADFS middleware</a>
                                                                {" along with Django's built in authentication flow to handle users on the site. \
                                                        I also made use of "}
                                                                <a href="https://www.django-rest-framework.org" target="_blank" rel="noreferrer">Django Rest Framework</a>
                                                                {" to quickly build a REST api"}
                                                </>
                                            },
                                            {
                                                title: "CloudFoundry",
                                                body:   <>
                                                {"Intel's implementation of CloudFoundry supports many buildpacks for different languages. \
                                                In this case, I would build the react frontend, and move it into the Django app to be served. "}
                                                </>
                                            },
                                            {
                                                title: "PostgreSQL, Intel DBaaS",
                                                body:   <>
                                                {"Intel also provided a Database as a Service product. There was not any reason to chose \
                                                Postgres over the other open source databases in this application, only that I wanted to move \
                                                away from MS SQL Server, and I did not think a NoSQL database fit this application."}
                                                </>
                                            },

                                        ]
                                    }/>
                                },

                            ]
                        } />
                            </>
                        },
                    ]
                }/>
            </Col>
            <Col></Col>
        </Row>
    )
}