import { useState } from "react";
import Navbar from "./Navbar";
import CardSection from "./CardSection";
import Card2Section from "./Card2Section";
import { ThemeProvider, createTheme, CssBaseline, Box } from "@mui/material";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const theme = createTheme({
    palette: {
      mode: isDarkMode ? "dark" : "light",
      primary: { main: "#90caf9" },
      secondary: { main: "#131052" },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <Box sx={{ paddingTop: "64px" }}>
        <CardSection isDarkMode={isDarkMode} />
        <Card2Section isDarkMode={isDarkMode} />
      </Box>
    </ThemeProvider>
  );
}

