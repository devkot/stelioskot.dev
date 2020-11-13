import React from "react";

import { Typography, Box, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  aboutContainer: {
    paddingTop: theme.spacing(3),
  },
  aboutTitle: {
    fontWeight: 800,
    paddingBottom: theme.spacing(3),
  },
  aboutContent: {
    fontWeight: 100,
    paddingBottom: theme.spacing(3),
  },
}));

const About: React.FunctionComponent = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={classes.aboutContainer}>
      <Typography variant="h4" className={classes.aboutTitle}>
        <Box>Welcome to my corner on the Web.</Box>
        <Typography variant="h6" className={classes.aboutContent}>
          <Box>Who am I</Box>
        </Typography>
      </Typography>
    </Container>
  );
};

export default About;
