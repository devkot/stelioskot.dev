import React from "react";

import { Typography, Box, Container } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Typewriter from "./Typewriter";

const useStyles = makeStyles((theme: Theme) => ({
  homeTitle: {
    fontWeight: 800,
    textAlign: "center",
    justifyContent: "center",
    color: theme.palette.primary.main,
    paddingBottom: theme.spacing(2),
  },
  homeContent: {
    fontWeight: 100,
    textAlign: "left",
    color: theme.palette.primary.main,
  },
}));

const Intro: React.FunctionComponent = () => {
  const classes = useStyles();

  return (
    <Box>
      <Container>
        <Typography variant="h4" className={classes.homeTitle}>
          <Typewriter
            targets={["whoami", "stelioskotanidis"]}
            typingDelay={250}
            deletingDelay={150}
            className={classes.homeTitle}
          />
        </Typography>
        <Typography variant="h6" className={classes.homeContent}>
          <Box component="p">
            Hi, I'm Stelios! This is a space for me to present my professional
            and personal interests and also spill my thoughts. I'm passionate
            about Software Engineering, traveling, photography and pushing my
            curiosity's limits.
          </Box>
          <Box component="p">
            This project is a result of a goal I had in 2020, to create a
            portfolio website to display my coding projects, and to create a
            personal website where I could post about all kinds of things I find
            fascinating. As such, this website kind of blends the personal and
            the professional as I believe they're an interweaved aspect of our
            lives.
          </Box>
          <Box component="p">
            Generally, I have quite a diverse set of interests, so I hope you
            can get something out of this, be it getting to know me or simply
            hearing what I'm currently up to! I'm still experimenting a lot with
            this website so it will evolve over time!
          </Box>
        </Typography>
      </Container>
    </Box>
  );
};

export default Intro;
