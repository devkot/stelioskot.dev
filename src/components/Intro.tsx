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

const Intro: React.FunctionComponent = () => {
  const classes = useStyles();

  return (
    <Box className={classes.homeContainer} m={-10}>
      <Paper className={classes.homeContainer} elevation={0}>
        <Typography variant="h4" className={classes.homeTitle}>
          <Box>Stelios Kotanidis</Box>
        </Typography>
        <Typography variant="h6" className={classes.homeContent}>
          <Box>Fullstack Software Engineer</Box>

          <Box>
            Endlessly Curious, Adventurous, Technologist. Always seeking the
            next experience and questioning the norm.
          </Box>
        </Typography>
      </Paper>
    </Box>
  );
};

export default Intro;
