import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import getData from "../axios";

export default function PatientDetails() {
  const { patientID } = useParams();
  const endpoint = `/patients/${patientID}`;
  const [pageState, setPageState] = useState({
    data: null,
    status: "idle",
    error: null,
  });
  useEffect(() => {
    getData(setPageState, endpoint);
  }, []);

  if (pageState.status === "success") {
    const patient = pageState.data;
    return (
      <Container>
        <h1>Patient Details</h1>
        <h5>id: {patient.id}</h5>
        <h5>date of Birth: {patient.dateOfBirth}</h5>
        <h5>Gender: {patient.gender}</h5>
        <h5>Contact Details:</h5>
        <ul>
          <li>email: {patient.email}</li>
          <li>Phone: {patient.phoneNumber}</li>
        </ul>
        <h5>Prescriptions</h5>
        <ul>
          {patient.prescriptions.map((prescription, i) => (
            <li key={i}>{prescription}</li>
          ))}
        </ul>
      </Container>
    );
  } else return <h4>Loading...</h4>;
}

/*    <h5>
          Dedicated Doctor:
          {doctors.find((doctor) => doctor.id === patient.doctorId).doctor}
        </h5> */
