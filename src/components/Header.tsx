import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Theme,
  Box,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButtonBox: {
    marginLeft: "auto",
  },
  menuButton: {
    marginRight: theme.spacing(3),
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
        <Button color="inherit" onClick={handleSectionClick(Sections.Top)}>
          <Typography>Stelios Kotanidis</Typography>
        </Button>
        <Box className={classes.menuButtonBox}>
          <Button
            className={classes.menuButton}
            color="inherit"
            onClick={handleSectionClick(Sections.About)}
          >
            <Typography>About</Typography>
          </Button>
          <Button
            className={classes.menuButton}
            color="inherit"
            onClick={handleSectionClick(Sections.Projects)}
          >
            <Typography>Projects</Typography>
          </Button>
          <Button
            className={classes.menuButton}
            color="inherit"
            onClick={handleSectionClick(Sections.ContactMe)}
          >
            <Typography>Contact</Typography>
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
