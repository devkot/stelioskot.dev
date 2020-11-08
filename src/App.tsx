import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";
import { Paper, CardMedia, List, Toolbar, Typography, AppBar, Box, Container, Grid, Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles"
import { Header } from "./components/Header";
import Routes from "./Routes";
import { Basic } from "./layouts/Basic";

// const App: React.FunctionComponent = () => (
//   <div className="App">
//     <Router>
//       <Basic>
//         <Routes />
//       </Basic>
//     </Router>
//     {/* 
//     <Header />
//     <CardMedia title="something">
//       <img
//         src="https://s3-eu-west-1.amazonaws.com/paddywagontours.images/cliffs_of_moher_from_dublin_copyright_paddywagontours_27012020022234.jpg"
//         alt="recipe thumbnail"
//       />
//     </CardMedia>

//     <Paper elevation={3} style={{ maxHeight: 200, overflow: "auto" }}>
//       <List style={{ maxHeight: "100%", overflow: "auto" }}>
//         Hey peeps welcome to my corner on the web
//       </List>
//     </Paper> */}
//   </div>
// );

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroudColor: "#fff"
  },
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
    paddingTop: theme.spacing(3)
  },
  blogTitle: {
    fontWeight: 800,
    paddingBottom: theme.spacing(3)
  }
}))

const App: React.FunctionComponent = () => {
  const classes = useStyles();

return (
<div className="App">
    <AppBar className={classes.appBar} position="static">
      <Toolbar>
        <Typography variant="h6" color="primary">
          Blog
        </Typography>
      </Toolbar>

    </AppBar>
    <Box className={classes.hero}>
      <Box>React Blog</Box>
    </Box>
    <Container maxWidth="lg" className={classes.blogsContainer}>
      <Typography variant="h4" className={classes.blogTitle}>
        Articles
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
        <Card>
            
            </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
        <Card>
            
            </Card>
        </Grid>
      </Grid>
    </Container>
  </div>
)
}

export default App;
