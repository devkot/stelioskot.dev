import React from "react";
import { Switch, Route } from "react-router-dom";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";

const Routes: React.FunctionComponent = () => {
  return (
    <Switch>
      <Route exact path="/" />
      <Route exact path="/blog" component={Blog} />
      <Route exact path="/blog/athens" component={BlogPost} />
    </Switch>
  );
};

export default Routes;
