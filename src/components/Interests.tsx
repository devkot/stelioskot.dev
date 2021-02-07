import React from "react";

import { Typography, Box, Grid, Paper } from "@material-ui/core";
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
    "text-align": "left",
    color: theme.palette.primary.main,
  },
  linkButton: {
    color: theme.palette.secondary.main,
  },
}));

const Interests: React.FunctionComponent = () => {
  const classes = useStyles();

  return (
    <Box id="projects" className={classes.homeContainer}>
      <Paper elevation={0}>
        <Typography variant="h4" className={classes.homeTitle}>
          <Box>Interests</Box>
        </Typography>
        <Grid container spacing={3}>
          <Grid container item xs={12} sm={6}>
            <Typography variant="h6" className={classes.homeContent}>
              <Grid item>My personal interests include:</Grid>
              <ul>
                <li>
                  <Grid item>Photography</Grid>
                </li>
                <li>
                  <Grid item>Traveling</Grid>
                </li>
                <li>
                  <Grid item>Reading</Grid>
                </li>
              </ul>
            </Typography>
          </Grid>
          <Grid container item xs={12} sm={6}></Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default Interests;
