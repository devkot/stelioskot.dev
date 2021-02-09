import React from "react";

import { Container } from "@material-ui/core";
import Projects from "../components/Projects";
import Intro from "../components/Intro";
import ContactMe from "../components/ContactMe";
import Interests from "../components/Interests";
import About from "../components/About";

const Home: React.FunctionComponent = () => (
  <Container maxWidth="xl" disableGutters={true}>
    <Intro />
    <About />
    <Projects />
    <Interests />
    <ContactMe />
  </Container>
);

export default Home;
