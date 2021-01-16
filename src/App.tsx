import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Routes from "./Routes";
import { Basic } from "./layouts/Basic";

const App: React.FunctionComponent = () => (
  <React.Fragment>
    <Router>
      <Basic>
        <Routes />
      </Basic>
    </Router>
  </React.Fragment>
);

export default App;
