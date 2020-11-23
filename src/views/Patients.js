import React, { useEffect, useState } from "react";
import { Container, Form } from "react-bootstrap";
import getData from "../axios";
const endpoint = "/patients";

export default function Patients() {
  const [pageState, setPageState] = useState({
    data: null,
    status: "idle",
    error: null,
  });
  useEffect(() => {
    getData(endpoint, setPageState);
  }, []);
  let patientsList;
  if (pageState.status === "success") {
    patientsList = pageState.data.map();
  }
  return (
    <Container>
      <h1>Patients Database</h1>
      {patientsList}
    </Container>
  );
}
