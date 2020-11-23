import react from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import {
  Home,
  DoctorSchedule,
  Patients,
  PatientDetails,
  PatientSignup,
} from "./views/viewIndex";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/doctors" component={DoctorSchedule} />
      <Route path="/patients" component={Patients} />
      <Route path="/patients/signup" component={PatientSignup} />
      <Route path="patients/:patientID" component={PatientDetails} />
      <Route path="/" />
    </Switch>
  );
}

export default App;
