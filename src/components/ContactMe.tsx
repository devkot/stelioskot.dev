import React from "react";

import { Typography, Box, Grid, Container } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles((theme: Theme) => ({
  homeContainer: {
    paddingTop: theme.spacing(10),
  },
  homeTitle: {
    fontWeight: 800,
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
    textAlign: "center",
    color: theme.palette.primary.main,
  },
  homeContent: {
    fontWeight: 100,
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
    textAlign: "center",
    color: theme.palette.primary.main,
  },
  socialButton: {
    padding: theme.spacing(2),
    color: "inherit",
    textDecoration: "none",
  },
  root: {
    flexGrow: 1,
  },
}));

const ContactMe: React.FunctionComponent = () => {
  const classes = useStyles();

  return (
    <Box id="contact-me" className={classes.homeContainer}>
      <Container>
        <Typography variant="h4" className={classes.homeTitle}>
          <Box id="projects">Contact Me</Box>
        </Typography>
        <Typography variant="h6" className={classes.homeContent}>
          <Box>
            Do you want something built or simply want to connect? Reach out to
            me using any of the ways below!
          </Box>
          <Grid container justify="center" className={classes.root}>
            <Grid
              item
              key="Email"
              component="a"
              href="mailto:stelioskotanidis@hotmail.com"
              className={classes.socialButton}
            >
              <MailOutlineIcon fontSize="large" />
            </Grid>
            <Grid
              item
              key="LinkedIn"
              component="a"
              href="https://www.linkedin.com/in/stylianos-kotanidis/"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.socialButton}
            >
              <LinkedInIcon fontSize="large" />
            </Grid>
            <Grid
              item
              key="GitHub"
              component="a"
              href="https://github.com/devkot"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.socialButton}
            >
              <GitHubIcon fontSize="large" />
            </Grid>
          </Grid>
        </Typography>
      </Container>
    </Box>
  );
};

export default ContactMe;
