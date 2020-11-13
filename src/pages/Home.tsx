import React from "react";
import { Link } from "react-router-dom";

import {
  Paper,
  CardMedia,
  List,
  Toolbar,
  Typography,
  AppBar,
  Box,
  Container,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardActions,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  homeContainer: {
    paddingTop: theme.spacing(3),
  },
  homeTitle: {
    fontWeight: 800,
    paddingBottom: theme.spacing(3),
  },
  homeContent: {
    fontWeight: 100,
    paddingBottom: theme.spacing(3),
  },
}));

const Home: React.FunctionComponent = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={classes.homeContainer}>
      <Typography variant="h4" className={classes.homeTitle}>
        <Box>Welcome to my corner on the Web.</Box>
        <Typography variant="h6" className={classes.homeContent}>
          <Box>
            This is going to be a space for me to express myself both personally
            and professionally.
          </Box>
          <Box></Box>
        </Typography>
      </Typography>
    </Container>
  );
};

export default Home;
