import Container from "LayoutComponents/Container/Container";
import Row, { Justify } from "LayoutComponents/Row/Row";
import React from "react";
import Step from "./Step";

const steps = [
  {
    title: "Dados gerais",
    active: true,
    completed: false,
  },
  {
    title: "Escolher imagens",
    active: false,
    completed: false,
  },
  {
    title: "Dados negócio",
    active: false,
    completed: false,
  },
];

interface MultistepProps {
  activeIndex: number;
}

export default function Multistep({ activeIndex }: MultistepProps) {
  return (
    <Container>
      <Row gap={30} justify={Justify.Center}>
        {steps.map((step, index) => {
          return (
            <Step
              key={index}
              active={index + 1 === activeIndex}
              title={step.title}
              completed={step.completed}
              stepNumber={index + 1}
            />
          );
        })}
      </Row>
    </Container>
  );
}
