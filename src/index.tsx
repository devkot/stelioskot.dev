import React from "react";
import ReactDOM from "react-dom";
import * as Panelbear from "@panelbear/panelbear-js";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./Theme";

if (process.env.NODE_ENV === "production") {
  Panelbear.load(process.env.REACT_APP_PANELBEAR_ID!);
  Panelbear.trackPageview();
}

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
