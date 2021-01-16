import React from "react";

import { Container } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import About from "../components/About";
import Projects from "../components/Projects";
import Intro from "../components/Intro";
import ContactMe from "../components/ContactMe";

const useStyles = makeStyles((theme: Theme) => ({
  homeContainer: {
    paddingTop: theme.spacing(10),
  },
  homeTitle: {
    fontWeight: 800,
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
    "text-align": "center",
  },
  homeContent: {
    fontWeight: 100,
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
  },
}));

const Home: React.FunctionComponent = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={classes.homeContainer} id="page-top">
      <Intro />
      <About />
      <Projects />
      <ContactMe />
    </Container>
  );
};

export default Home;
