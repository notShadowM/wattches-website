import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#DA5E42",
      dark: "#D84727",
      light: "#F1DDC9",
    },
    text: {
      main: "#333",
      sub: "#777",
      buttons: "#fff",
      skeletonButtons: "#D84727",
    },
  },
});
