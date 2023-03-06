import { Grid } from "@mui/material";
import React from "react";
import CustomTypography from "../../Components/Typography/Typography";
import CustomButton from "../../Components/Button/Button";
import CustomTab from "../../Components/Tab/Tab";

export const MyServicesHostDB = () => {
  const tabNames = [
    { label: "Grooming" },
    { label: "Pet Sitting" },
    { label: "Pet Walking" },
    { label: "Pet Taxi" },
  ];
  return (
    <Grid container item xs={12}>
      {" "}
      <Grid item textAlign={"left"} xs={12} pt={"40px"}>
        <CustomTypography
          text="MyServices"
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
        <CustomTypography
          text="Services Provided"
          type="subHeading"
          colorType="text"
        />
        <CustomButton
          btnTitle={"Add"}
          color={"secondary"}
          btnStyles={{ background: "red" }}
        />
      </Grid>
      <Grid item xs={12} pt={"20px"}>
        <CustomTab tabs={tabNames} />
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
        <CustomTypography
          text="Service Packages"
          type="subHeading"
          colorType="text"
        />
        <CustomButton
          btnTitle={"Add"}
          color={"secondary"}
          btnStyles={{ background: "red" }}
        />
      </Grid>
    </Grid>
  );
};
