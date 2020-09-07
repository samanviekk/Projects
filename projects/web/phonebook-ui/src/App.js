import React from "react";
import "fontsource-roboto";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import ContactSearch from "./contactSearch";
import ContactShow from "./contactShow";

import "./App.css";
import NewContact from "./newContact";

export default function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <ContactSearch />
        <ContactShow />
      </Container>
    </React.Fragment>
  );
}
