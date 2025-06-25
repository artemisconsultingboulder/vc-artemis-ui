/** @module App */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import { designTheme } from "./common/theme/designTheme";
import LandingPage from "./pages/LandingPage/LandingPage";
import PortfolioPage from "./pages/PortfolioPage/PortfolioPage";
import ApplicationsPage from "./pages/ApplicationsPage/ApplicationsPage";
import HireArtemisPage from "./pages/HireArtemisPage/HireArtemisPage";
import CalendarPage from "./pages/CalendarPage/CalendarPage";
import NavBar from "./common/NavBar/NavBar";
import { NAV_ITEMS } from "./common/NavBar/constants/navItems";

const App = (): React.JSX.Element => {
  return (
    <ThemeProvider theme={designTheme}>
      <CssBaseline />
      <Router>
        <NavBar items={NAV_ITEMS} />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/applications" element={<ApplicationsPage />} />
          <Route path="/hire-artemis" element={<HireArtemisPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
