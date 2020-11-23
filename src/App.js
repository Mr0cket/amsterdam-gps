import React, { useEffect, useState } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import {
  Home,
  DoctorSchedule,
  Patients,
  PatientDetails,
  PatientSignup,
  NoMatch,
} from "./views/viewIndex";
import getData from "./axios";
import { NavHeader } from "./components/componentIndex";

function App() {
  const [doctorsData, setDoctorsData] = useState();

  useEffect(() => {
    getData("/doctors", setDoctorsData);
  }, []);
  return (
    <React.Fragment>
      <NavHeader />
      {/* new syntax to avoid creating unnecessary wrapping element */}
      <Switch>
        <Route path="/doctors" component={DoctorSchedule} />
        <Route
          exact
          path="/patients"
          component={() => <Patients doctors={doctorsData} />}
        />
        <Route path="/patients/signup" component={PatientSignup} />
        <Route
          path="/patients/:patientID"
          component={() => <PatientDetails doctors={doctorsData} />}
        />
        <Route exact path="/" component={Home} />
        <Route path="/" component={NoMatch} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
