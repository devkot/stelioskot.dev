import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Fab, Zoom, useScrollTrigger } from "@material-ui/core";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { Sections } from "./NavigationMenu";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: "fixed",
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
  })
);

const ScrollTop: React.FunctionComponent<{
  handleSectionClick: (
    section: string
  ) => (event: React.MouseEvent<HTMLElement>) => void;
}> = ({ handleSectionClick }) => {
  const classes = useStyles();

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  return (
    <Zoom in={trigger}>
      <div
        onClick={handleSectionClick(Sections.Top)}
        role="presentation"
        className={classes.root}
      >
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </div>
    </Zoom>
  );
};

export default ScrollTop;
