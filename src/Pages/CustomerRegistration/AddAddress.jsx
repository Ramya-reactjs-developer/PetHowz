import React from "react";
import { Box, Grid } from "@mui/material";
import CustomTypography from "../../Components/Typography/Typography";
import "./CustomerRegistration.css";
import CustomForm from "../../Components/CustomForm/CustomForm";
import CustomIcons from "../../Utils/Icons/Index";
import { AddressEntries, DefaultAddressEntriesValues } from "./AddressEntries";

export const AddAddress = () => {

  

  return (
    <Grid container item xs={12}>
      <Grid item textAlign={"center"} height={{ lg: "100vh" }} sm={6} xs={12}>
        <img src={CustomIcons.Logo} alt="logo" />
        <Box sx={{ pt: "20px" }}>
          <CustomTypography
            text="Add Your Residential Address"
            type="heading3"
            colorType={"text"}
            customStyle={{ fontWeight: "Bold" }}
          />
        </Box>
        <CustomForm
          AllEntries={AddressEntries}
          defaultValues={DefaultAddressEntriesValues}
        />
      </Grid>
      <Grid item textAlign={"center"} className="Box-Image1" sm={6} xs={12}>
        <Grid item className="Box-color"></Grid>
      </Grid>
    </Grid>
  );
};
