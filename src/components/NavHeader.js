import { useHistory } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";

export default function NavHeader() {
  const history = useHistory();
  return (
    <Navbar bg="light" variant="light" expand="lg">
      <NavbarToggle />
      <NavbarCollapse>
        <Nav activeKey={history.location.pathname}>
          <Nav.Link href="/">Amsterdam GPs</Nav.Link>
          <Nav.Link href="/doctors">Doctor Schedule</Nav.Link>
          <Nav.Link href="/patients">Patient Database</Nav.Link>
          <Nav.Link href="/patients/signup">Patient Signup</Nav.Link>
        </Nav>
      </NavbarCollapse>
    </Navbar>
  );
}
