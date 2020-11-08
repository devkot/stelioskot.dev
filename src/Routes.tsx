import React from "react";
import { Switch, Route } from "react-router-dom";

const Routes: React.FunctionComponent = () => {
  return (
    <Switch>
      <Route exact path="/" />
    </Switch>
  );
};

export default Routes;
