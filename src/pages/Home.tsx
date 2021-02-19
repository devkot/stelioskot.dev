import React from "react";

import { Container, makeStyles, Theme } from "@material-ui/core";
import Projects from "../components/Projects";
import Intro from "../components/Intro";
import ContactMe from "../components/ContactMe";
import Interests from "../components/Interests";
import About from "../components/About";
import compute from "../images/compute.png";

const useStyles = makeStyles((theme: Theme) => ({
  background: {
    paddingTop: theme.spacing(10),
    backgroundImage: `url(${compute})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
  },
}));

const Home: React.FunctionComponent = () => {
  const classes = useStyles();

  return (
    <Container
      maxWidth="xl"
      disableGutters={true}
      className={classes.background}
    >
      <Intro />
      <About />
      <Projects />
      <Interests />
      <ContactMe />
    </Container>
  );
};

export default Home;
