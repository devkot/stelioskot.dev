import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Theme,
  Box,
  Hidden,
  IconButton,
  Menu,
  MenuItem,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";

const drawerWidth = 240;
const ITEM_HEIGHT = 48;

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButtonBox: {
    marginLeft: "auto",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      flexShrink: 0,
    },
  },
  drawerPaper: {
    width: drawerWidth,
  },
  hide: {
    display: "none",
  },
}));

enum Sections {
  Top = "#page-top",
  About = "#about",
  Projects = "#projects",
  Interests = "#interests",
  Contact = "#contact-me",
}

const MenuItemLink: React.FunctionComponent<{
  section: string;
  handleClose: () => void;
  handleSectionClick: any;
}> = ({ section, handleClose, handleSectionClick }) => {
  return (
    <MenuItem
      onClick={handleSectionClick(Sections[section as keyof typeof Sections])}
    >
      {section}
    </MenuItem>
  );
};

const SectionButton: React.FunctionComponent<{
  section: string;
  handleSectionClick: any;
}> = ({ section, handleSectionClick }) => {
  return (
    <Button
      color="inherit"
      onClick={handleSectionClick(Sections[section as keyof typeof Sections])}
    >
      <Typography>{section}</Typography>
    </Button>
  );
};

const Header: React.FunctionComponent = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    // handleSectionClick(section);
    setAnchorEl(null);
  };

  const handleSectionClick = (section: string) => (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector(section);

    if (anchor) {
      setTimeout(
        () => anchor.scrollIntoView({ behavior: "smooth", block: "center" }),
        0
      );
    }
    if (anchorEl) {
      setAnchorEl(null);
    }
  };

  return (
    <AppBar position="sticky" color="secondary" className={classes.root}>
      <Toolbar>
        <Button color="inherit" onClick={handleSectionClick(Sections.Top)}>
          <Typography>Stelios Kotanidis</Typography>
        </Button>
        <Hidden smUp>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            color="inherit"
            open={Boolean(anchorEl)}
            onClose={handleClose}
            anchorEl={anchorEl}
            PaperProps={{
              style: {
                maxHeight: ITEM_HEIGHT * 4.5,
                width: "20ch",
              },
            }}
          >
            {Object.keys(Sections)
              .filter((section) => section !== "Top")
              .map((section) => (
                <MenuItemLink
                  key={section}
                  section={section}
                  handleClose={handleClose}
                  handleSectionClick={handleSectionClick}
                />
              ))}
          </Menu>
        </Hidden>
        <Hidden xsDown>
          <Box className={classes.menuButtonBox}>
            {Object.keys(Sections)
              .filter((section) => section !== "Top")
              .map((section) => (
                <SectionButton
                  key={section}
                  section={section}
                  handleSectionClick={handleSectionClick}
                />
              ))}
          </Box>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
