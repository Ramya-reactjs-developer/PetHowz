import { Grid } from "@mui/material";
import React from "react";
import CustomTypography from "../../Components/Typography/Typography";
import CustomButton from "../../Components/Button/Button";

export const MyBoardingSpaceDashBoard = () => {
  return (
    <Grid container item xs={12}>
      {" "}
      <Grid item textAlign={"left"} xs={12} pt={"40px"}>
        <CustomTypography
          text="My Boarding Space"
          type="subHeading"
          colorType="text"
        />
      </Grid>
      <Grid
        item
        display={"flex"}
        alignItems={"center"}
        gap={"10px"}
        textAlign={"left"}
        xs={12}
        pt={"40px"}
      >
        <CustomTypography text="Adhi Pet Care" type="title" colorType="text" />
        <CustomButton
          btnTitle={"Edit Details"}
          color={"secondary"}
          btnStyles={{ background: "red" }}
        />
      </Grid>
    </Grid>
  );
};
