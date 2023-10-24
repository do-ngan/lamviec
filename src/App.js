import { Routes, Route } from "react-router-dom";
import Topbar from "./pages/global/Topbar";
import Sidebar from "./pages/global/Sidebar";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import Bar from "./pages/Bar";
import Bump from "./pages/Bump";
import Pie from "./pages/Pie";
import Calendar from "./pages/Calendar";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";


function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/bump" element={<Bump />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
