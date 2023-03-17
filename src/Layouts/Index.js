import { Grid } from "@mui/material";
import { Outlet } from "react-router";
import AppBar from "../Components/AppBar/AppBar.jsx";
import Footer from "../Components/Footer/Footer.jsx";
export const Layout = () => {
  return (
    <Grid container md={12} lg={12} sm={12} xs={12}>
      <Grid item md={12} lg={12} sm={12} xs={12}>
        <AppBar />
      </Grid>
      <Grid item md={12} lg={12} sm={12} xs={12}>
        <Outlet />
      </Grid>
      <Grid style={{ paddingTop: "10px" }} item md={12} lg={12} sm={12} xs={12}>
        <Footer />
      </Grid>
    </Grid>
  );
};
