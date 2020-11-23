import React from "react";
import { Container, Jumbotron } from "react-bootstrap";

export default function Home() {
  const isBusinessHours = () => {
    const HoursOfDay = new Date().getHours();
    console.log(HoursOfDay);
    return true;
  };
  return (
    <Jumbotron fluid>
      <Container>
        <h1>Amsterdam GPs</h1>
        <h5>We are: {isBusinessHours() ? "Open" : "Closed"}</h5>
        <p>To make an appointment call: (69)123 420 7890</p>
      </Container>
    </Jumbotron>
  );
}
