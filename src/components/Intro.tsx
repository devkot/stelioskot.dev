import React from "react";

import { Typography, Box, Container } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  homeContainer: {
    paddingTop: theme.spacing(10),
    height: "50vh", // TODO - Change this
  },
  homeTitle: {
    fontWeight: 800,
    textAlign: "center",
    color: theme.palette.primary.main,
    paddingBottom: theme.spacing(2),
  },
  homeContent: {
    fontWeight: 100,
    textAlign: "center",
    color: theme.palette.primary.main,
  },
  boxText: {
    textAlign: "left",
    paddingBottom: theme.spacing(2),
  },
}));

const Intro: React.FunctionComponent = () => {
  const classes = useStyles();

  return (
    <Box>
      <Container className={classes.homeContainer} maxWidth="lg" id="page-top">
        <Typography variant="h4">
          <Box className={classes.homeTitle}>WhoAmI (animation here)</Box>
        </Typography>
        <Typography variant="h6" className={classes.homeContent}>
          <Box className={classes.boxText}>
            Hi, I'm Stelios! This is a space for me to present my professional
            and personal interests and also spill my thoughts. I'm passionate
            about Software Engineering, traveling, photography and pushing my
            curiosity's limits.
          </Box>
          <Box className={classes.boxText}>
            This project is a result of a goal I had in 2020, to create a
            portfolio website to display my coding projects, and to create a
            personal website where I could post about all kinds of things I find
            fascinating. As such, this website kind of blends the personal and
            the professional as I believe they're an interweaved aspect of our
            lives.
          </Box>
          <Box className={classes.boxText}>
            Generally, I have quite a diverse set of interests, so I hope you
            can get something out of this, be it getting to know me or simply
            hearing what I'm currently up to!
          </Box>
        </Typography>
      </Container>
      <Container className={classes.homeContainer} maxWidth="lg" id="page-top">
        <Typography variant="h4">
          <Box className={classes.homeTitle}>About me</Box>
        </Typography>
        <Typography variant="h6" className={classes.homeContent}>
          <Box className={classes.boxText}>
            I'm an experienced Fullstack Software Engineer that loves delivering
            technical solutions to customer problems. Currently based in
            Edinburgh, UK and working for Administrate, an Education Technology
            startup.
          </Box>
          <Box className={classes.boxText}>
            I've participated in a variety of projects helping companies
            orchestrate and promote their training. I work with teams to
            architect and deliver solutions across the stack, from the
            underlying infrastructure to the UI, with a soft spot for building
            robust, clean APIs.
          </Box>
          <Box className={classes.boxText}>
            I'm always looking for opportunities to expand my horizons,
            challenge myself and learn about new technologies.
          </Box>
        </Typography>
      </Container>
    </Box>
  );
};

export default Intro;
