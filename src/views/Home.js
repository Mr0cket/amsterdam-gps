import React from "react";
import { Button, Container, Jumbotron } from "react-bootstrap";
import { OfficeDetails } from "../components/componentIndex";

export default function Home() {
  return (
    <Jumbotron fluid>
      <Container>
        <h1>Amsterdam GPs</h1>
        <OfficeDetails />
        <Button href="/doctors" className="mb-3">
          Doctors on Duty
        </Button>
        <br />
        <Button href="/patients/signup">I am a new patient</Button>
      </Container>
    </Jumbotron>
  );
}
