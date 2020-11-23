import React from "react";
import { Container, Form } from "react-bootstrap";

export default function PatientSignup() {
  return (
    <Container>
      <h1>Patient Signup</h1>
      <Form>
        <Form.Group controlId="patientSignupDetails">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="john" />
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="handcock" />
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="john@john.com" />
          <Form.Label>phone</Form.Label>
          <Form.Control type="text" placeholder="john" />
          <Form.Label>Gender</Form.Label>
          <Form.Control as="select">
            <option>Male</option>
            <option>Female</option>
            <option>Apache Attack-Helicopter</option>
          </Form.Control>
          <Form.Label>Date Of Birth</Form.Label>
          <Form.Control type="date" name="dob" placeholder="date of birth" />

          <Form.Text className="text-muted">
            We'll never share your personal details with anyone else.
            <br />
            ...except if the entity in question:
            <ul>
              <li>offers us a lot of money,</li>
              <li>has obtained a legal right to the information,</li>
              <li>has threatened us with an expensive lawsuit,</li>
              <li>is literally the NSA</li>
              or has asked us politely.
            </ul>
          </Form.Text>
        </Form.Group>
      </Form>
    </Container>
  );
}
