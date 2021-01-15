import React from "react";

import { Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  homeContainer: {
    paddingTop: theme.spacing(10),
  },
  homeTitle: {
    fontWeight: 800,
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
  },
  homeContent: {
    fontWeight: 100,
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
  },
}));

const Projects: React.FunctionComponent = () => {
  const classes = useStyles();

  return (
    <Typography variant="h4" className={classes.homeTitle}>
      <Box id="projects">Projects</Box>
      <Typography variant="h6" className={classes.homeContent}>
        <Box>Projects I've enjoyed</Box>
        {[...Array(10)].fill(<Box>Placeholder text</Box>)}
      </Typography>
    </Typography>
  );
};

export default Projects;
