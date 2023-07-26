import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import logo from "../../logo-white.png";
import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";

export default function Layout() {
  return (
    <section
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <Box>
        <AppBar position="static">
          <Toolbar>
            <img
              alt="logo"
              src={logo}
              height={"40px"}
              style={{ color: "red" }}
            />
            <Typography variant="h6" component="div" sx={{ ml: 5 }}>
              No se que ver
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Container sx={{ flexGrow: 1 }}>
        <Outlet />
      </Container>
      <Footer />
    </section>
  );
}
