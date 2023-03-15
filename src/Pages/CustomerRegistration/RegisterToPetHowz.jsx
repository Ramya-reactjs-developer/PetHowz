import React from "react";
import { Box, Grid } from "@mui/material";
import CustomTypography from "../../Components/Typography/Typography";
import "./CustomerRegistration.css";
import CustomForm from "../../Components/CustomForm/CustomForm";
import {
  DefaultRegisterEntriesValues,
  RegisterEntries,
} from "./RegisterEntries";
import CustomIcons from "../../Utils/Icons/Index";

export const RegisterToPethowz = () => {
  return (
    <Grid container item xs={12}>
      <Grid item textAlign={"center"} sm={6} xs={12}>
        <img src={CustomIcons.Logo} alt="logo" />
        <Box sx={{ pt: "20px" }}>
          <CustomTypography
            text="Register to Pethowz"
            type="heading3"
            colorType={"text"}
            customStyle={{ fontWeight: "Bold" }}
          />
        </Box>
        <CustomForm
          AllEntries={RegisterEntries}
          defaultValues={DefaultRegisterEntriesValues}
        />
      </Grid>
      <Grid item textAlign={"center"} className="Box-Image" sm={6} xs={12}>
        <div className="Box-color"></div>
      </Grid>
    </Grid>
  );
};
