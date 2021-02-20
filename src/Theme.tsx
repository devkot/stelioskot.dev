import { createMuiTheme } from "@material-ui/core";
import blueGrey from "@material-ui/core/colors/blueGrey";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: blueGrey[50],
    },
    secondary: {
      main: blueGrey[900],
    },
  },
});

export default theme;
