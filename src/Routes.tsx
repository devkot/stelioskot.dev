import React from "react";
import { Switch, Route } from "react-router-dom";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import Athens from "./pages/Athens";
import WhatMakesYouTick from "./pages/WhatMakesYouTick";

const Routes: React.FunctionComponent = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/blog" component={Blog} />
      <Route exact path="/about" component={About} />
      <Route exact path="/blog/athens" component={Athens} />
      <Route
        exact
        path="/blog/what-makes-you-tick"
        component={WhatMakesYouTick}
      />
    </Switch>
  );
};

export default Routes;
