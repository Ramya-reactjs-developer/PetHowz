import { Grid } from "@mui/material";
import React from "react";
import CustomTypography from "../../Components/Typography/Typography";
import CustomTab from "../../Components/Tab/Tab";

export const MyBookingsCustomerDB = () => {
  const tabNames = [{ label: "Pet Home Boarding" }, { label: "Pet Services" }];
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
      <Grid item xs={12} pt={"20px"}>
        <CustomTab tabs={tabNames} />
      </Grid>
    </Grid>
  );
};
