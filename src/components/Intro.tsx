import React from "react";

import { Typography, Box, Paper, Grid } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import backgroundImg from "../components/background.jpg";

const useStyles = makeStyles((theme: Theme) => ({
  page: {
    backgroundImage: `url(${backgroundImg})`,
  },
  sectionContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    width: "50%",
  },
  sectionTitle: {
    fontWeight: 800,

    "text-align": "center",
    color: theme.palette.primary.main,
  },
  sectionContent: {
    fontWeight: 100,
    "text-align": "left",
    color: theme.palette.primary.main,
  },
}));

const Intro: React.FunctionComponent = () => {
  const classes = useStyles();

  return (
    <Box className={classes.sectionContainer} id="page-top">
      <Paper elevation={0}>
        <Typography variant="h6">
          This is a space present my professional and personal interests and
          also spill thoughts. I'm passionate about Software Engineering,
          traveling, photography and pushing my knowledge's limits.
        </Typography>
      </Paper>
    </Box>
  );
};

export default Intro;
