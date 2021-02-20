import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Theme,
  Hidden,
  IconButton,
  MenuItem,
  ClickAwayListener,
  Grow,
  MenuList,
  Paper,
  Popper,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButtonBox: {
    marginLeft: "auto",
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
  handleClose: any;
  handleSectionClick: any;
}> = ({ section, handleClose, handleSectionClick }) => {
  return (
    <MenuItem
      onClick={handleSectionClick(Sections[section as keyof typeof Sections])}
    >
      {/* <SectionButton
        section={section}
        handleSectionClick={handleSectionClick}
      /> */}
      {section}
    </MenuItem>
  );
};

// const SectionButton: React.FunctionComponent<{
//   section: string;
//   handleSectionClick: any;
// }> = ({ section, handleSectionClick }) => {
//   return (
//     <Button
//       color="inherit"
//       onClick={handleSectionClick(Sections[section as keyof typeof Sections])}
//     >
//       <Typography>{section}</Typography>
//     </Button>
//   );
// };

const Header: React.FunctionComponent = () => {
  const classes = useStyles();

  const handleSectionClick = (section: string) => (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    // setOpen(false);
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector(section);
    console.log(anchor);

    if (anchor) {
      setTimeout(
        () => anchor.scrollIntoView({ behavior: "smooth", block: "center" }),
        0
      );
    }
    setOpen(false);
  };
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: React.MouseEvent<EventTarget>) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);

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
            onClick={handleToggle}
            ref={anchorRef}
          >
            <MenuIcon />
          </IconButton>
          <Popper
            open={open}
            anchorEl={anchorRef.current}
            role={undefined}
            transition
            disablePortal
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin:
                    placement === "bottom" ? "center top" : "center bottom",
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList
                      autoFocusItem={open}
                      id="menu-list-grow"
                      onKeyDown={handleListKeyDown}
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
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
          {/* <Menu
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
          </Menu> */}
        </Hidden>
        {/* <Hidden xsDown>
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
        </Hidden> */}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
