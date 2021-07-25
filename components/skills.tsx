import React from "react";
import { Row, Col, Form, ProgressBar } from "react-bootstrap";

interface SkillLevel{
    name: string;
    value: number;
}


function Skill({name, value}: { name: string, value: number }) {
  return (
    <Row>
      <Col>
        {name}
      </Col>
      <Col>
          <ProgressBar now={value} />
      </Col>
    </Row>
  );
}
    
export default function Skills() {
  const skills: SkillLevel[] = React.useMemo(() => {
    return [
      {name: "Python", value: 80},
      {name: "JavaScript", value: 60},
      {name: "C++", value: 40},
      {name: "C#", value: 30},
      {name: "Go", value: 20},
      {name: "Ruby", value: 10},
      {name: "Scala", value: 5},
      {name: "Haskell", value: 1},
    ];
  }, []);

  return (
    <>
      <Row>
        <Col>
          <Row>
            <h1>Skills</h1>
          </Row>
          
        </Col>
        {/* <Col><svg height='200px' width='200px' fill="#000000" xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="0 0 20 20" enable-background="new 0 0 20 20"><g><path fill="#000000" d="M19.5,0.5h-19C0.2,0.5,0,0.7,0,1v4c0,0.3,0.2,0.5,0.5,0.5h19C19.8,5.5,20,5.3,20,5V1   C20,0.7,19.8,0.5,19.5,0.5z M19,4.5h-3v-3h3V4.5z"></path><path fill="#000000" d="M19.5,7.5h-19C0.2,7.5,0,7.7,0,8v4c0,0.3,0.2,0.5,0.5,0.5h19c0.3,0,0.5-0.2,0.5-0.5V8   C20,7.7,19.8,7.5,19.5,7.5z M19,11.5h-7v-3h7V11.5z"></path><path fill="#000000" d="M19.5,14.5h-19C0.2,14.5,0,14.7,0,15v4c0,0.3,0.2,0.5,0.5,0.5h19c0.3,0,0.5-0.2,0.5-0.5v-4   C20,14.7,19.8,14.5,19.5,14.5z M19,18.5H8v-3h11V18.5z"></path></g></svg></Col> */}
      <Col>{skills.map(s => <Skill key={s.name} name={s.name} value={s.value} />)}  </Col>
      </Row>
    </>
  )
}