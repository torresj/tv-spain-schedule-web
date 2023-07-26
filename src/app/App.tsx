import { ThemeProvider, createTheme } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../features/home/Home";
import Layout from "../features/layout/Layout";

function App() {
  const theme = createTheme({});

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/*" element={<Layout />}>
          <Route path="" element={<Home />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
