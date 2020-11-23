import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import getData from "../axios";
import { OfficeDetails } from "../components/componentIndex";

export default function Doctors() {
  const endpoint = "/doctors";
  const [pageState, setPageState] = useState({
    data: null,
    status: "idle",
    error: null,
  });

  useEffect(() => {
    getData(setPageState, endpoint);
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
          <td>
            {doctor.onduty ? (
              <span className="open">available</span>
            ) : (
              <span className="closed">off-duty</span>
            )}
          </td>
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
      <OfficeDetails />
    </Container>
  );
}
