import React from "react";

import { Typography, Box, Paper, Grid } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  homeContainer: {
    paddingTop: theme.spacing(10),
  },
  homeTitle: {
    fontWeight: 800,
    "text-align": "left",
    color: theme.palette.primary.main,
  },
  homeContent: {
    fontWeight: 100,
    "text-align": "left",
    color: theme.palette.primary.main,
  },
}));

const Intro: React.FunctionComponent = () => {
  const classes = useStyles();

  return (
    <Box className={classes.homeContainer} id="page-top">
      <Paper elevation={0}>
        <Typography variant="h4" className={classes.homeTitle}>
          <Grid container spacing={3}>
            <Grid container item xs={12} sm={6}>
              <Grid item>Stelios Kotanidis</Grid>
              <Typography variant="h6" className={classes.homeContent}>
                <Grid item>
                  Adventurer, Creator, Endlessly Curious. Always seeking the
                  next experience and questioning the norm.
                </Grid>
                <Grid item>
                  I'm an experienced Fullstack Software Engineer that loves
                  delivering technical solutions to customer problems. Currently
                  based in Edinburgh, UK and working for Administrate, an
                  Education Technology startup.
                </Grid>
              </Typography>
            </Grid>
            <Grid container item xs={12} sm={6}>
              <Grid item>About me</Grid>
              <Typography variant="h6" className={classes.homeContent}>
                <Grid item>
                  I've participated in a variety of projects helping companies
                  orchestrate and promote their training. I work with teams to
                  architect and deliver solutions across the stack, from the
                  underlying infrastructure to the UI, with a soft spot for
                  building robust, clean APIs.
                </Grid>
                <Grid item>
                  I'm always looking for opportunities to expand my horizons,
                  challenge myself and learn about new technologies.
                </Grid>
              </Typography>
            </Grid>
          </Grid>
        </Typography>
      </Paper>
    </Box>
  );
};

export default Intro;
