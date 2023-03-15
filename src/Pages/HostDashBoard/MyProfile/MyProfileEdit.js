import React from "react";
import { Grid } from "@mui/material";
import CustomTypography from "../../../Components/Typography/Typography";
import ProfileImageUploader2 from "../../../Components/ProfileImageUploader2/ProfileImageUploader2";
import CustomButton from "../../../Components/Button/Button";

function MyProfileEdit() {
  return (
    <Grid container md={12} sm={12} lg={12} xs={12}>
      <Grid item md={12} sm={12} lg={12} xs={12} pt={2}>
        <CustomTypography text="Edit Profile" type="subHeading" />
          </Grid>
          <Grid item  md={12} sm={12} lg={12} xs={12} pt={3}>
          <ProfileImageUploader2 />
          </Grid>
    </Grid>
  );
}

export default MyProfileEdit;
