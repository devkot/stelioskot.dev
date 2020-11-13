import React from "react";
import { Switch, Route } from "react-router-dom";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Home from "./pages/Home";

const Routes: React.FunctionComponent = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/blog" component={Blog} />
      <Route exact path="/about" component={About} />
      <Route exact path="/blog/athens" component={BlogPost} />
    </Switch>
  );
};

export default Routes;
