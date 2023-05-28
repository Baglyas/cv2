import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: '#3898D4',
      light: '#3898f4',
      dark: '#4095f3'
    },
    secondary: {
      main: '#0000'
    },
    background: {
      default: '#ffffff',
      paper: '#3898f4'
    },
  }
});
export default theme;