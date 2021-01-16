import React from "react";

import { Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
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
    "text-align": "center",
  },
}));

const About: React.FunctionComponent = () => {
  const classes = useStyles();

  return (
    <Box id="about">
      <Typography variant="h4" className={classes.homeTitle}>
        <Box>About Me</Box>
        <Typography variant="h6" className={classes.homeContent}>
          <Box>
            I'm an experienced Fullstack Software Engineer that loves delivering
            technical solutions to customer problems. Currently based in
            Edinburgh, UK and working for Administrate, an Education Technology
            startup.
          </Box>
          <Box>
            I've participated in a variety of projects trying to help companies
            manage and improve their learning capabilities. I help teams design
            and deliver solutions across the stack, from infrastructure to UI
            with a soft spot for building robust, clean APIs.
          </Box>
        </Typography>
      </Typography>
    </Box>
  );
};

export default About;
