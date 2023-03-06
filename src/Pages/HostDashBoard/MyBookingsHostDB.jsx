import { Grid } from "@mui/material";
import React from "react";
import CustomTypography from "../../Components/Typography/Typography";

export const MyBookingsHostDB = () => {
  return (
    <Grid container item xs={12}>
      {" "}
      <Grid item textAlign={"left"} xs={12} pt={"40px"}>
        <CustomTypography
          text="MyBookings"
          type="subHeading"
          colorType="text"
        />
      </Grid>
    </Grid>
  );
};
