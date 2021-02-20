import React from "react";
import {
  Hidden,
  IconButton,
  Popper,
  Grow,
  Paper,
  ClickAwayListener,
  MenuList,
  MenuItem,
  Typography,
  Box,
  makeStyles,
  Theme,
  Button,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme: Theme) => ({
  menuButtonBox: {
    marginLeft: "auto",
  },
}));

export enum Sections {
  Top = "#page-top",
  About = "#about",
  Projects = "#projects",
  Interests = "#interests",
  Contact = "#contact-me",
}

const SectionButton: React.FunctionComponent<{
  section: string;
  handleSectionClick: (
    section: string
  ) => (event: React.MouseEvent<HTMLElement>) => void;
}> = ({ section, handleSectionClick }) => (
  <Button
    color="inherit"
    onClick={handleSectionClick(Sections[section as keyof typeof Sections])}
  >
    <Typography>{section}</Typography>
  </Button>
);

const NavigationMenu: React.FunctionComponent<{
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleSectionClick: (
    section: string
  ) => (event: React.MouseEvent<HTMLElement>) => void;
}> = ({ open, setOpen, handleSectionClick }) => {
  const classes = useStyles();
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

  const handleListKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  };

  const anchorRef = React.useRef<HTMLButtonElement>(null);

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <>
      <Hidden smUp>
        <IconButton
          className={classes.menuButtonBox}
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
          color="secondary"
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
                        <MenuItem
                          onClick={handleSectionClick(
                            Sections[section as keyof typeof Sections]
                          )}
                        >
                          <Typography>{section}</Typography>
                        </MenuItem>
                      ))}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
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
    </>
  );
};

export default NavigationMenu;
