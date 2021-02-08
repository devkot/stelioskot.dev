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
}));

const Interests: React.FunctionComponent = () => {
  const classes = useStyles();

  return (
    <Box id="projects" className={classes.homeContainer}>
      <Paper elevation={0}>
        <Typography variant="h4" className={classes.homeTitle}>
          <Box>What makes me tick</Box>
        </Typography>
        <Grid container spacing={3}>
          <Grid container item xs={12} sm={6}>
            <Typography variant="h6" className={classes.homeContent}>
              <ul>
                <li>
                  <Grid item>
                    Traveling. I grew up constantly moving between cities and
                    countries and that's a good explanation of why I got the bug
                    for traveling. I love exploring the unknown and making
                    experiences while discovering different cultures and
                    observing their lifestyle.
                  </Grid>
                </li>
                <li>
                  <Grid item>
                    Photography. Traveling and photography go hand in hand -
                    it's a way of immortalising those memories and sharing them
                    with the world. I've been experimenting with photography for
                    a little over a year, after I got a DSLR camera. I love how
                    subjective photography is and I think it's the closest we
                    can get to seeing the world through someone else's eyes.
                  </Grid>
                </li>
              </ul>
            </Typography>
          </Grid>
          <Grid container item xs={12} sm={6}>
            <Typography variant="h6" className={classes.homeContent}>
              <Grid item>
                <ul>
                  <li>
                    <Grid item>
                      Reading. Ever since I was a child I loved reading fantasy
                      books - I probably know more than I should about the Lord
                      of the Rings saga. However, I've recently started
                      exploring different topics, ranging from classic
                      literature to deeper ones like society or psychology that
                      I love to have long conversations about.
                    </Grid>
                  </li>
                  <li>
                    <Grid item>
                      Physical Activities. As the Ancient Greeks said, a healthy
                      mind exists in a healthy body. Exercising is a good way to
                      unwind while also having fun playing a sport you enjoy and
                      pushing yourself. I believe in taking care of both the
                      mind and the body. Currently, I've been swimming but I
                      always like mixing it up! Thankfully, living in Scotland
                      there's always an idyllic walking route a stone's throw
                      away!
                    </Grid>
                  </li>
                </ul>
              </Grid>
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default Interests;
