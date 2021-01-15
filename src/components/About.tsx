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
  },
  homeContent: {
    fontWeight: 100,
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
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
            Edinburgh, UK and working for an Education Technology startup.
          </Box>
          {[...Array(10)].fill(<Box>Placeholder text</Box>)}
        </Typography>
      </Typography>
    </Box>
  );
};

export default About;
