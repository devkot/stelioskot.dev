import React from "react";

import { Typography, Box, Container } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  homeContainer: {
    paddingTop: theme.spacing(10),
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
  },
}));

const About: React.FunctionComponent = () => {
  const classes = useStyles();

  return (
    <Box className={classes.homeContainer} maxWidth="xl" id="about">
      <Container>
        <Typography variant="h4">
          <Box className={classes.homeTitle}>About me</Box>
        </Typography>
        <Typography variant="h6" className={classes.homeContent}>
          <Box className={classes.boxText} component="p">
            I'm an experienced Software Engineer that loves delivering technical
            solutions to customer problems. Currently based in Edinburgh, UK and
            working for Administrate, a cloud based SaaS Education Technology
            startup.
          </Box>
          <Box className={classes.boxText} component="p">
            I've participated in a variety of projects helping companies
            orchestrate and promote their training. I work with teams to
            architect and deliver solutions across the stack, from the
            underlying infrastructure to the UI, with a soft spot for building
            robust, clean APIs.
          </Box>
          <Box className={classes.boxText} component="p">
            I'm always looking for opportunities to expand my horizons,
            challenge myself and learn about new technologies.
          </Box>
        </Typography>
      </Container>
    </Box>
  );
};

export default About;
