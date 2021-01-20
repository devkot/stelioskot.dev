import React from "react";

import { Typography, Box, Grid, Link, Paper } from "@material-ui/core";
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

const LinkTo: React.FunctionComponent<{
  to: string;
  title: string;
}> = ({ to, title }) => {
  const classes = useStyles();

  return (
    <Link
      href={to}
      target="_blank"
      rel="noreferrer noopener"
      className={classes.linkButton}
    >
      {title}
    </Link>
  );
};
const Projects: React.FunctionComponent = () => {
  const classes = useStyles();

  return (
    <Box id="projects" className={classes.homeContainer}>
      <Paper elevation={0}>
        <Typography variant="h4" className={classes.homeTitle}>
          <Box>Projects</Box>
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" className={classes.homeContent}>
              <Grid item>My personal interests include:</Grid>
              <Grid item>
                GraphQL. It's an exciting time for GraphQL as the ecosystem is
                constantly growing. I'm currently working my way into
                contributing to{" "}
                <LinkTo
                  to="https://github.com/apollographql"
                  title="@apollographql"
                />{" "}
                by responding to issues while looking into having my first code
                contribution too!
              </Grid>
              <Grid item>
                5G. I believe 5G is opening lots of doors for accomodating the
                ever growing number of IoT devices that can have a positive
                impact in our daily lives, such as health metrics sensors for
                example. Despite being a code geek, I'm still fascinated by
                Networks and its advancements like Software Defined Networks.
                The endless options of this next generation tech also inspired
                my thesis on "Network Caching for 5G Systems".
              </Grid>
              <Grid item>
                Discovering things in general. I've always found it fascinating
                finding out about something new. I love travelling and exploring
                new places, along with my camera which allows me to capture
                moments and experiences.
              </Grid>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" className={classes.homeContent}>
              <Grid item>
                Current Job (
                <LinkTo to="https://getadministrate.com" title="Administrate" />
                )
              </Grid>
              <Grid item>
                Improved performance of hierachical relationship queries in a
                MySQL Database by implementing the{" "}
                <LinkTo
                  to="https://engineering.getadministrate.com/databases/2020/07/15/nested-set-model.html"
                  title="Nested Set Model"
                />
                .
              </Grid>
              <Grid item>
                Led the R&D team in unifying 3 existing versions of an LMS and
                building a Data Pipeline to efficiently transfer learner data.
              </Grid>
              <Grid item>
                Spearheaded shift in Engineering Culture by promoting proactive
                leadership and conducting technical interviews.
              </Grid>
              <Grid item>
                <Grid item>Outside Work</Grid>
                <Grid item>
                  The website you're currently on! I'm experimenting with{" "}
                  <LinkTo to="https://material-ui.com/" title="Material UI" />{" "}
                  and <LinkTo to="https://reactjs.org/" title="React.js" /> in
                  order to work on my creative skills building a personal
                  website.
                </Grid>
                <Grid item>
                  One of the projects I've enjoyed the most was building a{" "}
                  <LinkTo
                    to="https://github.com/devkot/SearchEngine"
                    title="Distributed Search Engine"
                  />{" "}
                  from scratch using C for a university Systems Programming
                  course. It really helped me to avoid treating most popular Web
                  Server frameworks as a black box! It consists of a
                  multithreaded web server to serve the content and a Crawler to
                  index the pages using a{" "}
                  <LinkTo
                    to="https://en.wikipedia.org/wiki/Trie"
                    title="Trie"
                  />{" "}
                  for quick lookups. IPC communication is handled using Named
                  Pipes (FIFOs)
                </Grid>
              </Grid>
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default Projects;
