import React from "react";
import {
  Typography,
  Box,
  Container,
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

const BlogPost: React.FunctionComponent = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={classes.blogsContainer}>
      <Typography variant="h4" className={classes.blogTitle}>
        Athens
      </Typography>
      <Box>Uni is the best Maybe write some shit here and there</Box>
    </Container>
  );
};

export default BlogPost;
