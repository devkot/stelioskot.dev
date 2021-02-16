import React, { useState } from "react";

import {
  Typography,
  Box,
  Container,
  Card,
  CardHeader,
  CardContent,
  CardMedia,
  CardActionArea,
  GridList,
  GridListTile,
  Zoom,
  useMediaQuery,
} from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import roads from "../images/roads.jpg";

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
    color: theme.palette.primary.main,
  },
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
  },
  gridList: {
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
  },
}));

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

  const content = [
    {
      id: 1,
      title: "Traveling",
      img: roads,
      description: `I grew up constantly moving between cities and
        countries and that's a good explanation of why I got the
        bug for traveling. I love exploring the unknown and making
        experiences while discovering different cultures and
        observing their lifestyle.
      `,
      state: {
        val: showTravelImg,
        setter: setShowTravelImg,
      },
    },
    {
      id: 2,
      title: "Photography",
      img: roads,
      description: `Traveling and photography go hand in hand -
        it's a way of immortalising those memories and sharing
        them with the world. I've been experimenting with
        photography for a little over a year, after I got a DSLR
        camera. I love how subjective photography is and I think
        it's the closest we can get to seeing the world through
        someone else's eyes.
      `,
      state: {
        val: showPhotographyImg,
        setter: setShowPhotographyImg,
      },
    },
    {
      id: 3,
      title: "Reading",
      img: roads,
      description: `Ever since I was a child I loved reading
        fantasy books - I probably know more than I should about
        the Lord of the Rings saga. However, I've recently
        started exploring different topics, ranging from classic
        literature to deeper ones like society or psychology
        that I love to have long conversations about.
      `,
      state: {
        val: showReadingImg,
        setter: setShowReadingImg,
      },
    },
    {
      id: 4,
      title: "Physical Activities",
      img: roads,
      description: `As the Ancient Greeks said, a healthy
        mind exists in a healthy body. Exercising is a good way to
        unwind while also having fun playing a sport you enjoy and
        pushing yourself. I believe in taking care of both the
        mind and the body. Currently, I've been swimming but I
        always like mixing it up! Thankfully, living in Scotland
        there's always an idyllic walking route a stone's throw
        away!
      `,
      state: {
        val: showActivitiesImg,
        setter: setShowActivitiesImg,
      },
    },
  ];

  return (
    <Box id="interests" className={classes.homeContainer}>
      <Container>
        <Typography variant="h4" className={classes.homeTitle}>
          <Box>What makes me tick</Box>
        </Typography>
        <div className={classes.root}>
          <GridList
            cellHeight="auto"
            cols={isLessThanXs ? 1 : 2}
            className={classes.gridList}
          >
            {content.map((tile) => (
              <GridListTile key={tile.id}>
                <Card elevation={0}>
                  <CardActionArea
                    onClick={() => tile.state.setter(!tile.state.val)}
                  >
                    <>
                      {tile.state.val ? (
                        <CardMedia src={tile.img} component="img" />
                      ) : (
                        <Zoom
                          in={!tile.state.val}
                          style={{
                            transitionDelay: !tile.state.val ? "300ms" : "0ms",
                          }}
                        >
                          <Typography
                            variant="h6"
                            className={classes.homeContent}
                          >
                            <CardHeader title={tile.title} />
                            <CardContent>{tile.description}</CardContent>
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
