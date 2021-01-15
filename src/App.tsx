import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Routes from "./Routes";
import { Basic } from "./layouts/Basic";

const App: React.FunctionComponent = () => (
  <div className="App">
    <Router>
      <Basic>
        <Routes />
      </Basic>
    </Router>
  </div>
);

export default App;
