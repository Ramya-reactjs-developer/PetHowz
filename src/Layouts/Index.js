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
      </Grid>
      <Grid item md={12} lg={12} sm={12} xs={12} pt={"126px"}>
        <Outlet />
      </Grid>
      <Grid sx={{ position: "sticky" }} item md={12} lg={12} sm={12} xs={12}>
        <Footer />
      </Grid>
    </Grid>
  );
};
