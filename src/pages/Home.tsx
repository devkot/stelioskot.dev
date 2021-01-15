import React from "react";

import { Typography, Box, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import About from "../components/About";
import Projects from "../components/Projects";
import Intro from "../components/Intro";

const useStyles = makeStyles((theme) => ({
  homeContainer: {
    paddingTop: theme.spacing(10),
  },
  homeTitle: {
    fontWeight: 800,
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
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
    <Container maxWidth="lg" className={classes.homeContainer}>
      <Intro />
      <About />
      <Projects />

      <Typography variant="h4" className={classes.homeTitle}>
        <Box id="projects">Contact Me</Box>
        <Typography variant="h6" className={classes.homeContent}>
          <Box>Email form here</Box>
          {[...Array(10)].fill(<Box>Placeholder text</Box>)}
        </Typography>
      </Typography>
    </Container>
  );
};

export default Home;
