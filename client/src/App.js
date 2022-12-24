import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./components/global/Topbar";
import Sidebar from "./components/global/Sidebar";
import Login from "./components/Login";
import Home from "./Home";
import Twenties from "./components/albums/1920";
import Thirties from "./components/albums/1930";
import Forties from "./components/albums/1940";
import Fifties from "./components/albums/1950";
import Sixties from "./components/albums/1960";
import Seventies from "./components/albums/1970";
import Eighties from "./components/albums/1980";
import Nineties from "./components/albums/1990";
import Y2k from "./components/albums/2000";
import TwentyTens from "./components/albums/2010";
import TwentyTwenties from "./components/albums/2020";
import Tree from "./components/family tree/index";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./styling/theme";

function App() {
    const [theme, colorMode] = useMode();
    const [isSidebar, setIsSidebar] = useState(true);

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <div className="app">
                    <Sidebar isSidebar={isSidebar} />
                    <main className="content">
                        <Topbar setIsSidebar={setIsSidebar} />
                        <Routes>
                            <Route exact path="/" element={<Login />} />
                            <Route path="/Home" element={<Home />} />
                            <Route path="/1920s" element={<Twenties />} />
                            <Route path="/1930s" element={<Thirties />} />
                            <Route path="/1940s" element={<Forties />} />
                            <Route path="/1950s" element={<Fifties />} />
                            <Route path="/1960s" element={<Sixties />} />
                            <Route path="/1970s" element={<Seventies />} />
                            <Route path="/1980s" element={<Eighties />} />
                            <Route path="/1990s" element={<Nineties />} />
                            <Route path="/2000s" element={<Y2k />} />
                            <Route path="/2010s" element={<TwentyTens />} />
                            <Route path="/2020s" element={<TwentyTwenties />} />
                            <Route path="/FamilyTree" element={<Tree />} />
                        </Routes>
                    </main>
                </div>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default App;
