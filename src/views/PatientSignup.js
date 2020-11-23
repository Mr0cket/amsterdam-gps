import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";

export default function PatientSignup() {
  const [patient, setPatient] = useState({
    fName: " ",
    lName: " ",
    email: " ",
    phone: " ",
    gender: " ",
    dob: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(patient);
  };

  return (
    <Container>
      <h1>Patient Signup</h1>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Form.Group controlId="patientSignupDetails">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="john"
            value={patient.fName}
            onChange={(e) => setPatient({ ...patient, fName: e.target.value })}
          />
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="handcock"
            value={patient.lName}
            onChange={(e) => setPatient({ ...patient, lName: e.target.value })}
          />
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="john@john.com"
            value={patient.email}
            onChange={(e) => setPatient({ ...patient, email: e.target.value })}
          />
          <Form.Label>phone</Form.Label>
          <Form.Control
            type="text"
            placeholder="john"
            value={patient.phone}
            onChange={(e) => setPatient({ ...patient, phone: e.target.value })}
          />
          <Form.Label>Gender</Form.Label>
          <Form.Control
            as="select"
            value={patient.gender}
            onChange={(e) => setPatient({ ...patient, gender: e.target.value })}
          >
            <option>Male</option>
            <option>Female</option>
            <option>Apache Attack-Helicopter</option>
          </Form.Control>
          <Form.Label>Date Of Birth</Form.Label>
          <Form.Control
            type="date"
            name="dob"
            placeholder="date of birth"
            value={patient.dob}
            onChange={(e) => setPatient({ ...patient, dob: e.target.value })}
          />
          <Button type="submit">Submit</Button>
          <Form.Text className="text-muted">
            We'll never share your personal details with anyone else.
            <br />
            ...except if the entity in question:
            <ul>
              <li>offers us a lot of money,</li>
              <li>has obtained a legal right to the information,</li>
              <li>has threatened us with an expensive lawsuit,</li>
              <li>is literally the NSA</li>
              Has asked us 'pretty please'.
            </ul>
          </Form.Text>
        </Form.Group>
      </Form>
    </Container>
  );
}
