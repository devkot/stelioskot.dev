import React from "react";
import { AppBar, Toolbar, Typography, Button, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import NavigationMenu, { Sections } from "./NavigationMenu";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const Header: React.FunctionComponent = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleSectionClick = (section: string) => (
    event: React.MouseEvent<HTMLElement>
  ) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector(section);

    if (anchor) {
      setTimeout(
        () => anchor.scrollIntoView({ behavior: "smooth", block: "start" }),
        0
      );
    }
    setOpen(false);
  };

  return (
    <AppBar position="sticky" color="secondary" className={classes.root}>
      <Toolbar>
        <Button color="inherit" onClick={handleSectionClick(Sections.Top)}>
          <Typography>Stelios Kotanidis</Typography>
        </Button>
        <NavigationMenu
          open={open}
          setOpen={setOpen}
          handleSectionClick={handleSectionClick}
        />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
