import { createTheme } from '@mui/material/styles';
import { blue } from '@mui/material/colors';
const theme = createTheme({
  palette: {
    primary: {
      main: blue[500], // Set the primary color to a blueish shade
      light: blue[300], // Lighter shade of blue
      dark: blue[700], // Darker shade of blue
    },
    secondary: {
      main: blue[200], // Set the secondary color to a lighter blue shade
    },
    text: {
      primary: blue[900], // Dark blue color for text
      secondary: blue[600], // Light blue color for secondary text
    },
    background: {
      default: "#fff", // Set the default background color to white
      paper: "#f5f5f5", // Set the background color for paper elements
    },
  },
})
  export default theme;