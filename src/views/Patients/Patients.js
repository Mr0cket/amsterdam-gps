import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  ToggleButton,
  ToggleButtonGroup,
} from "react-bootstrap";
import getData from "../../axios";
import { PatientItem } from "../../components/componentIndex";
import "./patients.scss";

export default function Patients(/* { doctors } */) {
  const endpoint = "/patients";
  const [pageState, setPageState] = useState({
    data: null,
    status: "idle",
    error: null,
  });
  useEffect(() => {
    console.log("use Effected");
    getData(endpoint, setPageState);
  }, []);
  const [value, setValue] = useState([1, 3]);
  let patientsList, doctorsList;
  if (pageState.status === "success") {
    patientsList = pageState.data.map((patient) => (
      <PatientItem key={patient.id} patient={patient} />
    ));
  }
  /* if (doctors) {
    doctorsList = doctors.data.map((doctor) => (
      <ToggleButton key={doctor.id} value={doctor.id}>
        {doctor.doctor}
      </ToggleButton>
    ));
  } */
  return (
    <Container>
      <h1>Patients Database</h1>
      <Row>
        <h4>Doctor </h4>
        <ToggleButtonGroup
          type="checkbox"
          value={value}
          onChange={(val) => setValue(val)}
        >
          {/* doctorsList */}
        </ToggleButtonGroup>
      </Row>
      {patientsList}
    </Container>
  );
}
