import React from "react";

import { Container, makeStyles, Theme } from "@material-ui/core";
import Projects from "../components/Projects";
import Intro from "../components/Intro";
import ContactMe from "../components/ContactMe";
import Interests from "../components/Interests";
import About from "../components/About";
import compute from "../images/compute.webp";
import computepng from "../images/compute.png";

const useStyles = makeStyles((theme: Theme) => ({
  background: {
    paddingTop: theme.spacing(10),
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
  },
  backgroundWebpImage: {
    backgroundImage: `url(${compute})`,
  },
  backgroundFallbackImage: {
    backgroundImage: `url(${computepng})`,
  },
}));

const Home: React.FunctionComponent = () => {
  const classes = useStyles();

  const supportsWebP = () => {
    var elem = document.createElement("canvas");

    return !!(elem.getContext && elem.getContext("2d"))
      ? elem.toDataURL("image/webp").indexOf("data:image/webp") === 0
      : false;
  };

  const backgroundImageStyle = supportsWebP()
    ? classes.backgroundWebpImage
    : classes.backgroundFallbackImage;

  return (
    <Container
      maxWidth={false}
      disableGutters={true}
      className={`${classes.background} ${backgroundImageStyle}`}
    >
      <Intro />
      <About />
      <Projects />
      <Interests />
      <ContactMe />
    </Container>
  );
};

export default Home;
