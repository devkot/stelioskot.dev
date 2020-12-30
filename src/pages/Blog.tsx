import React from "react";
import { Link } from "react-router-dom";

import {
  CardMedia,
  Typography,
  Container,
  Grid,
  Card,
  CardActionArea,
  CardContent,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  hero: {
    backgroundImage: `linear-gradient(rgba(0,0,0, 0.5), rgba(0,0,0,0.5), url('https://s3-eu-west-1.amazonaws.com/paddywagontours.images/cliffs_of_moher_from_dublin_copyright_paddywagontours_27012020022234.jpg'))`,
    height: "500px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroudSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "4rem",
  },
  blogsContainer: {
    paddingTop: theme.spacing(3),
  },
  blogTitle: {
    fontWeight: 800,
    paddingBottom: theme.spacing(3),
  },
}));

const Blog: React.FunctionComponent = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={classes.blogsContainer}>
      <Typography variant="h4" className={classes.blogTitle}>
        Articles
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardActionArea component={Link} to="/blog/what-makes-you-tick">
              <CardMedia title="Think" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  What Makes you Tick?
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardActionArea component={Link} to="/blog/athens">
              <CardMedia title="Athens" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Athens
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardActionArea>
              <CardMedia title="Erasmus" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Erasmus
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardActionArea>
              <CardMedia title="Edi" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Edi
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Blog;
