import React, { useState } from "react";

import {
  Typography,
  Box,
  Container,
  Card,
  CardHeader,
  CardContent,
  CardActionArea,
  GridList,
  GridListTile,
  Zoom,
  useMediaQuery,
} from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import naturewebp from "../images/nature.webp";
import naturejpg from "../images/nature.jpg";
import camerawebp from "../images/camera.webp";
import camerajpg from "../images/camera.jpg";
import globewebp from "../images/globe.webp";
import globejpg from "../images/globe.jpg";
import bookswebp from "../images/books.webp";
import booksjpg from "../images/books.jpg";
import InterestsButton from "./InterestsButton";

const useStyles = makeStyles((theme: Theme) => ({
  sectionContainer: {
    paddingTop: theme.spacing(10),
  },
  sectionTitle: {
    fontWeight: 800,
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
    textAlign: "center",
    color: theme.palette.primary.main,
  },
  sectionContent: {
    fontWeight: 100,
    color: theme.palette.primary.main,
  },
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
  },
  card: {
    backgroundColor: "transparent",
  },
  gridList: {
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
  },
}));

export interface Interest {
  id: number;
  title: string;
  webpImg: string;
  img: string;
  description: string;
  state: {
    val: boolean;
    setter: React.Dispatch<React.SetStateAction<boolean>>;
  };
}

const Interests: React.FunctionComponent = () => {
  const classes = useStyles();
  const [showTravelImg, setShowTravelImg] = useState(true);
  const [showPhotographyImg, setShowPhotographyImg] = useState(true);
  const [showReadingImg, setShowReadingImg] = useState(true);
  const [showActivitiesImg, setShowActivitiesImg] = useState(true);
  const isLessThanXs = useMediaQuery(
    (theme: Theme) => theme.breakpoints.down("xs"),
    { noSsr: true }
  );

  const content: Array<Interest> = [
    {
      id: 1,
      title: "Traveling",
      webpImg: globewebp,
      img: globejpg,
      description: `I grew up constantly moving between cities and
        countries and that's a good explanation of why I got the
        bug for traveling. I love exploring the unknown and making
        experiences while discovering different cultures and
        observing their lifestyle.`,
      state: {
        val: showTravelImg,
        setter: setShowTravelImg,
      },
    },
    {
      id: 2,
      title: "Photography",
      webpImg: camerawebp,
      img: camerajpg,
      description: `Traveling and photography go hand in hand -
        it's a way of immortalising those memories and sharing
        them with the world. I've been experimenting with
        photography for a little over a year, after I got a DSLR
        camera. I love how subjective photography is and I think
        it's the closest we can get to seeing the world through
        someone else's eyes.`,
      state: {
        val: showPhotographyImg,
        setter: setShowPhotographyImg,
      },
    },
    {
      id: 3,
      title: "Reading",
      webpImg: bookswebp,
      img: booksjpg,
      description: `Ever since I was a child I loved reading
        fantasy books - I probably know more than I should about
        the Lord of the Rings saga. However, I've recently
        started exploring different topics, ranging from classic
        literature to deeper ones like society or psychology
        that I love to have long conversations about.`,
      state: {
        val: showReadingImg,
        setter: setShowReadingImg,
      },
    },
    {
      id: 4,
      title: "Physical Activities",
      webpImg: naturewebp,
      img: naturejpg,
      description: `As the Ancient Greeks said, a healthy
        mind exists in a healthy body. Exercising is a good way to
        unwind while also having fun playing a sport you enjoy and
        pushing yourself. I believe in taking care of both the
        mind and the body. Currently, I've been swimming but I
        always like mixing it up! Thankfully, living in Scotland
        there's always an idyllic walking route a stone's throw
        away!`,
      state: {
        val: showActivitiesImg,
        setter: setShowActivitiesImg,
      },
    },
  ];

  return (
    <Box id="interests" className={classes.sectionContainer}>
      <Container>
        <Typography variant="h4" className={classes.sectionTitle}>
          <Box>What makes me tick</Box>
        </Typography>
        <div className={classes.root}>
          <GridList
            cellHeight="auto"
            cols={isLessThanXs ? 1 : 2}
            className={classes.gridList}
          >
            {content.map((interest) => (
              <GridListTile key={interest.id}>
                <Card elevation={0} className={classes.card}>
                  <CardActionArea
                    onClick={() => interest.state.setter(!interest.state.val)}
                  >
                    <>
                      {interest.state.val ? (
                        <InterestsButton interest={interest} />
                      ) : (
                        <Zoom
                          in={!interest.state.val}
                          style={{
                            transitionDelay: !interest.state.val
                              ? "300ms"
                              : "0ms",
                          }}
                        >
                          <Typography
                            variant="h6"
                            className={classes.sectionContent}
                          >
                            <CardHeader title={interest.title} />
                            <CardContent>{interest.description}</CardContent>
                          </Typography>
                        </Zoom>
                      )}
                    </>
                  </CardActionArea>
                </Card>
              </GridListTile>
            ))}
          </GridList>
        </div>
      </Container>
    </Box>
  );
};

export default Interests;
