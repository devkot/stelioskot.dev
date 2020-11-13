import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Theme } from "@material-ui/core";
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
}));

export const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Link to="/">Devkot</Link>
        <Button color="inherit" className={classes.menuButton}>
          <Link to="/about">About</Link>
        </Button>
        <Button color="inherit" className={classes.menuButton}>
          <Link to="/blog">Blog</Link>
        </Button>
        <Typography className={classes.pushRight} />
      </Toolbar>
    </AppBar>
  );
};
