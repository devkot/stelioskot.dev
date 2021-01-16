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
  appBar: {
    top: "auto",
    bottom: 0,
  },
}));

const Footer = () => {
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

export default Footer;
