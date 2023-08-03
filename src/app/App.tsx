import { ThemeProvider, createTheme } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../features/home/Home";
import Layout from "../features/layout/Layout";
import Movies from "../features/movies/Movies";
import Series from "../features/series/Series";

function App() {
  const theme = createTheme({});

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/*" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="series" element={<Series />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
