import React from "react";

import { Typography, Box, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

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
      <Typography variant="h4" className={classes.homeTitle}>
        <Box id="page-top">Stelios Kotanidis</Box>
        <Typography variant="h6" className={classes.homeContent}>
          <Box>Fullstack Software Engineer</Box>

          <Box>Passionate about tech</Box>
        </Typography>
      </Typography>

      <Typography variant="h4" className={classes.homeTitle}>
        <Box id="about">About Me</Box>
        <Typography variant="h6" className={classes.homeContent}>
          <Box>
            I'm an experienced Fullstack Software Engineer that loves delivering
            technical solutions to customer problems. Currently based in
            Edinburgh, UK and working for an Education Technology startup.
          </Box>
          {[...Array(10)].fill(<Box>Placeholder text</Box>)}
        </Typography>
      </Typography>

      <Typography variant="h4" className={classes.homeTitle}>
        <Box id="projects">Projects</Box>
        <Typography variant="h6" className={classes.homeContent}>
          <Box>Projects I've enjoyed</Box>
          {[...Array(10)].fill(<Box>Placeholder text</Box>)}
        </Typography>
      </Typography>

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
