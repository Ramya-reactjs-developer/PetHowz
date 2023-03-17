import { Grid } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import AppBar from "../Components/AppBar/AppBar.jsx";
import Footer from "../Components/Footer/Footer.jsx";
export const Layout = () => {
  return (
    <Grid container md={12} lg={12} sm={12} xs={12}>
      <Grid item md={12} lg={12} sm={12} xs={12}>
        <AppBar />
      </header>
      <main style={{ paddingTop: "80px" }}>
        <Outlet />
      </main>
      <footer style={{ position: "sticky" }}>
        <Footer />
      </Grid>
    </Grid>
  );
};
