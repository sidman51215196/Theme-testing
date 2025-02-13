import { AppBar, Toolbar, Typography, Switch, Box } from "@mui/material";

export default function Navbar({ isDarkMode, toggleDarkMode }) {
  return (
    <AppBar position="fixed" color="primary" sx={{ zIndex: 1100 }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6">My Website</Typography>
        <Box sx={{ textAlign: "center" }}>
          <Switch checked={isDarkMode} onChange={toggleDarkMode} />
          <Typography variant="body2" sx={{ color: isDarkMode ? "#fff" : "#000" }}>
            {isDarkMode ? "Dark Mode Enabled" : "Light Mode Enabled"}
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}