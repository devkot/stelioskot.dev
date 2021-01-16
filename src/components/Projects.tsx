import React from "react";

import { Typography, Box, Grid, List, ListItem } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
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

const Projects: React.FunctionComponent = () => {
  const classes = useStyles();

  return (
    <Box id="projects">
      <Typography variant="h4" className={classes.homeTitle}>
        <Box>Projects</Box>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" className={classes.homeContent}>
              <List dense>
                <ListItem>My personal interests include:</ListItem>
                <ListItem>
                  GraphQL. It's an exciting time for GraphQL as the ecosystem is
                  constantly growing. I'm currently working my way into
                  contributing to https://github.com/apollographql by responding
                  to issues while looking into having my first code contribution
                  too!
                </ListItem>
                <ListItem>
                  Discovering things in general. I've always found it
                  fascinating finding out about something new. I'm currently
                  expanding my photography skills and I'm learning how to play
                  the banjo.
                </ListItem>
              </List>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" className={classes.homeContent}>
              <List dense>
                <ListItem>Current Job (Administrate)</ListItem>
                <ListItem>
                  Improved performance of hierachical relationship queries in a
                  MySQL Database by implementing the Nested Set Model.
                  https://engineering.getadministrate.com/databases/2020/07/15/nested-set-model.html
                </ListItem>
                <ListItem>
                  Led the R&D team in unifying 3 existing versions of an LMS and
                  building a Data Pipeline to efficiently transfer learner data.
                </ListItem>
                <ListItem>
                  Spearheaded shift in Engineering Culture by promoting
                  proactive leadership and conducting technical interviews.
                </ListItem>
              </List>
              <List>
                <ListItem>Outside Work</ListItem>
                <ListItem>
                  The website you're currently on! I'm experimenting with
                  Material UI and React.js in order to work on my creative
                  skills building a personal website from scratch.
                </ListItem>
              </List>
            </Typography>
          </Grid>
        </Grid>
      </Typography>
    </Box>
  );
};

export default Projects;
