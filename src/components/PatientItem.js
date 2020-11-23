import React from "react";
import { Button, Row } from "react-bootstrap";

export default function PatientItem({ patient }) {
  return (
    <div className="patient-item">
      <p>{patient.firstName + patient.lastName}</p>
      <p>id: {patient.id}</p>
      <p>Birthdate: {patient.dateOfBirth}</p>
      <Button href={`/patients/${patient.id}`}>Patient Details</Button>
    </div>
  );
}
