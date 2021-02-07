import React from "react";

import { Container } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Projects from "../components/Projects";
import Intro from "../components/Intro";
import ContactMe from "../components/ContactMe";
import Interests from "../components/Interests";

const useStyles = makeStyles((theme: Theme) => ({
  homeContainer: {
    paddingTop: theme.spacing(10),
  },
}));

const Home: React.FunctionComponent = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={classes.homeContainer}>
      <Intro />
      <Projects />
      <Interests />
      <ContactMe />
    </Container>
  );
};

export default Home;
