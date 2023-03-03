import { Box, Grid } from "@mui/material";
import React from "react";
import DashBoardCard from "../../Components/DashBoardCard/DashBoardCard";

export const MyDashBoard = () => {
  return (
    <Grid container item display={"flex"} xs={12}>
      <Grid item md={3} sm={6} xs={12}>
        <DashBoardCard />
      </Grid>
      <Grid item md={3} sm={6} xs={12}>
        <DashBoardCard />
      </Grid>
      <Grid item md={3} sm={6} xs={12}>
        <DashBoardCard />
      </Grid>
    </Grid>
  );
};
