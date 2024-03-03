import { createTheme } from "@mui/material";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 400,
      md: 600,
      lg: 1000,
      xl: 1200,
    },
  },
});

export default theme;
