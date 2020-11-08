import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Theme,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  pushRight: {
    flex: 1,
  },
  appBar: {
    top: "auto",
    bottom: 0,
  },
}));

export const Footer = () => {
  const classes = useStyles();

  return (
    <AppBar position="fixed" color="primary" className={classes.appBar}>
      <Container maxWidth="md">
        <Toolbar>
          <Typography>&copy; 2020 Devkot</Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
