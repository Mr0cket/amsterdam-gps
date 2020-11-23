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

export default function Patients() {
  const patientEndpoint = "/patients";
  const doctorEndpoint = "/doctors";
  const [pageState, setPageState] = useState({
    data: null, // an array of the results of the fetch commands.
    status: "idle",
    error: null,
  });
  const [value, setValue] = useState([1, 3]);

  useEffect(() => {
    console.log("use Effected");
    getData(setPageState, patientEndpoint, doctorEndpoint);
  }, []);

  let patientsList, doctorsList;
  if (pageState.status === "success") {
    const patients = pageState.data[0];
    const doctors = pageState.data[1];
    patientsList = patients
      .filter((patient) =>
        value.find((element) => element === patient.doctorId)
      )
      .map((patient) => <PatientItem key={patient.id} patient={patient} />);

    doctorsList = doctors.map((doctor) => (
      <ToggleButton key={doctor.id} value={doctor.id}>
        {doctor.doctor}
      </ToggleButton>
    ));
  }
  return (
    <Container>
      <h1>Patients Database</h1>
      <Row>
        <h4>Doctor: </h4>
        <ToggleButtonGroup
          type="checkbox"
          value={value}
          onChange={(val) => setValue(val)}
        >
          {doctorsList}
        </ToggleButtonGroup>
      </Row>
      {patientsList}
    </Container>
  );
}
