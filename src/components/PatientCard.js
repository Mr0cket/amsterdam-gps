import React from "react";
import { Button, Card } from "react-bootstrap";

export default function PatientCard({ patient }) {
  return (
    <Card lg="3" className="patient-item">
      <p>{patient.firstName + " " + patient.lastName}</p>
      <p>id: {patient.id}</p>
      <p>Birthdate: {patient.dateOfBirth}</p>
      <Button href={`/patients/${patient.id}`}>Patient Details</Button>
    </Card>
  );
}
