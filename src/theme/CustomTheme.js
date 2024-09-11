import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2bd2c1",
    },
    secondary: {
      main: "#2bd2c1",
    },
    underline: {
      main: "#2bd2c1",
    },
  },
  typography: {
    button: {
      fontWeight: 600,
      letterSpacing: "0.3em",
    },
    h1: {
      fontFamily: `"Outfit", sans-serif`,
      fontWeight: "bold",
      fontSize: "3rem",
      color: "#323232",
      textTransform: "uppercase",
      marginTop: "10px",
      // lineHeight: "3.5rem",
    },
    h2: {
      fontFamily: `"Outfit", sans-serif`,
      fontWeight: 700,
      fontSize: "2rem",
      color: "#323232",
      marginTop: "10px",
    },
    h3: {
      fontFamily: `"Outfit", sans-serif`,
      fontWeight: 400,
      fontSize: "25px",
      color: "#323232",
      lineHeight: "1.5",
      // marginBottom: "10px",
    },
    h4: {
      fontFamily: `"Outfit", sans-serif`,
      fontWeight: 700,
      fontSize: "2rem",
      color: "#323232",
      textTransform: "uppercase",
    },
    h6: {
      fontFamily: `"Outfit", sans-serif`,
      fontWeight: 400,
      // fontSize: "2rem",
      color: "#323232",
      // textTransform: "uppercase",
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent",
          color: "black",
          boxShadow: "none",
          padding: "5px",
        },
      },
    },
  },
});

export default theme;
