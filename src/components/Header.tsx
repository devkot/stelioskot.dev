import React from "react";
import { AppBar, Toolbar, Typography, Button, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  pushRight: {
    flex: 1,
  },
}));

enum Sections {
  Top = "#page-top",
  About = "#about",
  Projects = "#projects",
  ContactMe = "#contact-me",
}

const Header = () => {
  const classes = useStyles();

  const handleSectionClick = (section: string) => (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector(section);

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <AppBar position="sticky" className={classes.root}>
      <Toolbar>
        <Button
          color="inherit"
          className={classes.menuButton}
          onClick={handleSectionClick(Sections.Top)}
        >
          <Typography className={classes.pushRight}>Devkot</Typography>
        </Button>
        <Button
          color="inherit"
          className={classes.menuButton}
          onClick={handleSectionClick(Sections.About)}
        >
          <Typography className={classes.pushRight}>About</Typography>
        </Button>
        <Button
          color="inherit"
          className={classes.menuButton}
          onClick={handleSectionClick(Sections.Projects)}
        >
          <Typography className={classes.pushRight}>Projects</Typography>
        </Button>
        <Button
          color="inherit"
          className={classes.menuButton}
          onClick={handleSectionClick(Sections.ContactMe)}
        >
          <Typography className={classes.pushRight}>Contact</Typography>
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
