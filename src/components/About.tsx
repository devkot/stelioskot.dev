import React from "react";

import { Typography, Box, Paper } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  homeContainer: {
    paddingTop: theme.spacing(10),
  },
  homeTitle: {
    fontWeight: 800,
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
    "text-align": "center",
    color: theme.palette.primary.main,
  },
  homeContent: {
    fontWeight: 100,
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
    "text-align": "center",
    color: theme.palette.primary.main,
  },
}));

const About: React.FunctionComponent = () => {
  const classes = useStyles();

  return (
    <Box id="about" className={classes.homeContainer}>
      <Paper elevation={0}>
        <Typography variant="h4" className={classes.homeTitle}>
          <Box>About Me</Box>
        </Typography>
        <Typography variant="h6" className={classes.homeContent}>
          <Box>
            I'm an experienced Fullstack Software Engineer that loves delivering
            technical solutions to customer problems. Currently based in
            Edinburgh, UK and working for Administrate, an Education Technology
            startup.
          </Box>
          <Box>
            I've participated in a variety of projects trying to help companies
            orchestrate and promote their learning. I work with teams to
            architect and deliver solutions across the stack, from the
            underlying infrastructure to the UI with a soft spot for building
            robust, clean APIs.
          </Box>
          <Box>
            I'm always looking for opportunities to expand my horizons,
            challenge myself and learn about new technologies.
          </Box>
        </Typography>
      </Paper>
    </Box>
  );
};

export default About;
