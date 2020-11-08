import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#B3E5FC",
      main: "#03A9F4",
      dark: "#0288D1",
      contrastText: "#FFFFFF",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#212121",
    },
  },
});

export default theme;
