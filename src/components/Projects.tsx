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
          <Grid container item xs={12} sm={6}>
            <Typography variant="h6" className={classes.homeContent}>
              <Grid item>
                Current Job (
                <LinkTo to="https://getadministrate.com" title="Administrate" />
                )
              </Grid>
              <ul>
                <li>
                  <Grid item>
                    I've enjoyed taking part in a variety of projects ranging
                    from the expansion of the Administrate platform to
                    orchestrate the training and its delivery for learners to
                    implementing standards like OpenID Connect for building an
                    Identity Provider. I'm currently part of the R&D team where
                    I've also had the pleasure of leading some projects.
                  </Grid>
                </li>
                <li>
                  <Grid item>
                    Led the R&D team in unifying 3 existing legacy versions of a
                    Learning Management System and in prototyping a Data
                    Pipeline to efficiently transfer learner data.
                  </Grid>
                </li>
                <li>
                  <Grid item>
                    Rebuilt an e-commerce GraphQL API enforcing clean
                    architecture in order to increase development velocity.
                  </Grid>
                </li>
                <li>
                  <Grid item>
                    Supported the enablement of Continuous Delivery of the core
                    GraphQL API by implementing a contract testing framework.
                  </Grid>
                </li>
                <li>
                  <Grid item>
                    Improved performance of hierachical relationship queries in
                    a MySQL Database by implementing the{" "}
                    <LinkTo
                      to="https://engineering.getadministrate.com/databases/2020/07/15/nested-set-model.html"
                      title="Nested Set Model"
                    />
                    .
                  </Grid>
                </li>
                <li>
                  <Grid item>
                    Assisted the hiring process by conducting technical
                    interviews.
                  </Grid>
                </li>
              </ul>
            </Typography>
          </Grid>
          <Grid container item xs={12} sm={6}>
            <Typography variant="h6" className={classes.homeContent}>
              <Grid item>Outside Work</Grid>
              <ul>
                <li>
                  <Grid item>
                    The website you're currently on! I'm experimenting with{" "}
                    <LinkTo to="https://material-ui.com/" title="Material UI" />{" "}
                    and <LinkTo to="https://reactjs.org/" title="React.js" /> in
                    order to work on my creative skills by building a personal
                    website.
                  </Grid>
                </li>
                <li>
                  <Grid item>
                    It's an exciting time for GraphQL as the ecosystem is
                    constantly growing. I'm currently working my way into
                    contributing to{" "}
                    <LinkTo
                      to="https://github.com/apollographql"
                      title="@apollographql"
                    />{" "}
                    by responding to issues while looking into having my first
                    code contribution too!
                  </Grid>
                </li>
                <li>
                  <Grid item>
                    5G. I believe 5G is opening lots of doors for accomodating
                    the ever growing number of IoT devices that can have a
                    positive impact in our daily lives, such as health metric
                    sensors for example. Despite being a code geek, I'm still
                    fascinated by Networks and its advancements, like Software
                    Defined Networks. The endless options of this next
                    generation tech also inspired my thesis on "Network Caching
                    for 5G Systems".
                  </Grid>
                </li>
                <li>
                  <Grid item>
                    One of the projects I've enjoyed the most was building a{" "}
                    <LinkTo
                      to="https://github.com/devkot/SearchEngine"
                      title="Distributed Search Engine"
                    />{" "}
                    from scratch using C for a university Systems Programming
                    course. It really helped me to avoid treating most popular
                    Web Server frameworks as a black box! It consists of a
                    multithreaded web server serving the content and a Crawler
                    to index the pages using a{" "}
                    <LinkTo
                      to="https://en.wikipedia.org/wiki/Trie"
                      title="Trie"
                    />{" "}
                    for quick lookups. IPC communication is handled using Named
                    Pipes (FIFOs).
                  </Grid>
                </li>
              </ul>
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default Projects;
