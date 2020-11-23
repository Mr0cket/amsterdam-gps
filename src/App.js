import react from "react";
import "./App.css";
import { useHistory } from "react";
import { Route, Switch } from "react-router-dom";
import {
  Home,
  DoctorSchedule,
  Patients,
  PatientDetails,
  PatientSignup,
  NoMatch,
} from "./views/viewIndex";
import { Nav, Navbar, NavbarBrand } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function App() {
  const history = useHistory();
  return (
    <div>
      <Navbar>
        <LinkContainer>
          <NavbarBrand>Amsterdam GPs</NavbarBrand>
        </LinkContainer>
        <Nav activeKey={Window.location.pathName}>
          <Nav.Link>Doctor Schedule</Nav.Link>
          <Nav.Link>Patient Signup</Nav.Link>
          <Nav.Link>Patient Database</Nav.Link>
        </Nav>
      </Navbar>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/doctors" component={DoctorSchedule} />
        <Route path="/patients" component={Patients} />
        <Route path="/patients/signup" component={PatientSignup} />
        <Route path="patients/:patientID" component={PatientDetails} />
        <Route path="/" component={NoMatch} />
      </Switch>
    </div>
  );
}

export default App;
