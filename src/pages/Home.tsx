import React from "react";

import { Container } from "@material-ui/core";
import Projects from "../components/Projects";
import Intro from "../components/Intro";
import ContactMe from "../components/ContactMe";
import Interests from "../components/Interests";

const Home: React.FunctionComponent = () => (
  <Container maxWidth="lg" disableGutters={false}>
    <Intro />
    <Projects />
    <Interests />
    <ContactMe />
  </Container>
);

export default Home;
