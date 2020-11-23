import { useHistory } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";

export default function NavHeader() {
  const history = useHistory();
  return (
    <Navbar bg="light" variant="light">
      <Nav activeKey={history.location.pathname}>
        <Nav.Link href="/">Amsterdam GPs</Nav.Link>
        <Nav.Link href="/doctors">Doctor Schedule</Nav.Link>
        <Nav.Link href="/patients">Patient Database</Nav.Link>
        <Nav.Link href="/patients/signup">Patient Signup</Nav.Link>
      </Nav>
    </Navbar>
  );
}
