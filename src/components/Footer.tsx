import React from "react";
import { AppBar, Toolbar, Typography, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  appBar: {
    top: "auto",
    bottom: 0,
  },
  toolbar: {
    justifyContent: "center",
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" color="secondary" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Typography>&copy; 2021 Stelios Kotanidis</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
