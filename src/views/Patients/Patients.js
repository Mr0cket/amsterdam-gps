import React, { useEffect, useState } from "react";
import { CardColumns, Container, Row, Form } from "react-bootstrap";
import getData from "../../axios";
import { PatientCard } from "../../components/componentIndex";
import "./patients.scss";

export default function Patients() {
  const patientEndpoint = "/patients";
  const doctorEndpoint = "/doctors";
  const [pageState, setPageState] = useState({
    data: null, // an array of the results of the fetch commands.
    status: "idle",
    error: null,
  });
  const [filter, setFilter] = useState("all");
  useEffect(() => {
    console.log("use Effected");
    getData(setPageState, patientEndpoint, doctorEndpoint);
  }, []);

  let handleFilter = null;
  let patientsList, doctorsList;
  if (pageState.status === "success") {
    const patients = pageState.data[0];
    const doctors = pageState.data[1];
    handleFilter = (e) => {
      const matchedDoctor = doctors.find(
        (doctor) => doctor.doctor === e.target.value
      );
      setFilter(matchedDoctor ? matchedDoctor.id : "all");
    };
    patientsList = patients
      .filter((patient) => {
        if (filter === "all") return true;
        else if (patient.doctorId === filter) return true;
        else return false;
      })
      .sort((a, b) => {
        const nameA = a.lastName.toUpperCase();
        const nameB = b.lastName.toUpperCase();
        if (nameA > nameB) return -1;
        if (nameA < nameB) return 1;
        else return 0;
      })
      .map((patient) => <PatientCard key={patient.id} patient={patient} />);

    doctorsList = doctors.map((doctor) => (
      <option key={doctor.id}>{doctor.doctor}</option>
    ));
  }
  return (
    <Container>
      <h1>Patients Database</h1>
      <Row>
        <h4>Doctor: </h4>
        <Form.Control as="select" onChange={handleFilter} className="mb-3">
          <option>all</option>
          {doctorsList}
        </Form.Control>
      </Row>
      <CardColumns>{patientsList}</CardColumns>
    </Container>
  );
}
