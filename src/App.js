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
import { NavHeader, OfficeDetails } from "./components/componentIndex";

function App() {
  return (
    <React.Fragment>
      <NavHeader />
      {/* new syntax to avoid creating unnecessary wrapping element */}
      <Switch>
        <Route path="/doctors" component={DoctorSchedule} />
        <Route exact path="/patients" component={Patients} />
        <Route path="/patients/signup" component={PatientSignup} />
        <Route path="/patients/:patientID" component={PatientDetails} />
        <Route exact path="/" component={Home} />
        <Route path="/" component={NoMatch} />
      </Switch>
      <OfficeDetails />
    </React.Fragment>
  );
}

export default App;
