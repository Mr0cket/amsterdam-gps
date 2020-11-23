import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import axios from "../axios";

export default function Doctors() {
  const endpoint = "/doctors";
  const [pageState, setPageState] = useState({
    data: null,
    status: "idle",
    error: null,
  });

  const fetchData = async (ep) => {
    const doctorData = await axios
      .get(ep)
      .then((res) => res.data)
      .catch((e) => console.error("request error:", e));

    if ("0" in doctorData) {
      console.log(doctorData);
      setPageState({
        data: doctorData,
        status: "success",
        error: false,
      });
    } else if (doctorData.length === 0) {
      console.log("error retrieving data");
      setPageState({
        data: false,
        status: "fail",
        error: "error retrieving data",
      });
    } else console.log("I shouldnt get here... but I did :/");
  };

  useEffect(() => {
    fetchData(endpoint);
  }, []);

  let doctors;
  if (pageState.status === "success") {
    console.log("got here");
    doctors = pageState.data.map((doctor) => {
      return (
        <tr key={doctor.id}>
          <td>
            <a href={`mailto: ${doctor.email}`}>{doctor.doctor}</a>
          </td>
          <td>{doctor.onduty ? "available" : "offduty"}</td>
        </tr>
      );
    });
  }

  return (
    <Container>
      <h1>Who is on duty</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Doctor</th>
            <th>availability</th>
          </tr>
        </thead>
        <tbody>{doctors}</tbody>
      </Table>
    </Container>
  );
}
