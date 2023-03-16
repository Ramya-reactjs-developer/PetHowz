import React from "react";
import { Grid } from "@mui/material";
import CustomTypography from "../../../Components/Typography/Typography";
import ProfileImageUploader2 from "../../../Components/ProfileImageUploader2/ProfileImageUploader2";
import CustomButton from "../../../Components/Button/Button";
import CustomForm from "../../../Components/CustomForm/CustomForm";
import {
  DefaultMyProfileEditEntries,
  MyProfileEditEntries,
} from "./MyProfileEditEntries";
function MyProfileEdit() {
  const onReceiveData = { eswar: "eswar" };

  return (
    <Grid container md={12} sm={12} lg={12} xs={12}>
      <Grid item md={12} sm={12} lg={12} xs={12} pt={2}>
        <CustomTypography text="Edit Profile" type="subHeading" />
      </Grid>
      <Grid>
        <Grid item md={12} sm={12} lg={12} xs={12} pt={3}>
          <ProfileImageUploader2 />
        </Grid>
        <Grid>
          <CustomForm
            AllEntries={MyProfileEditEntries}
            // textFieldChange=((e)=>{value.handleChange})
            // textFieldChange={(e) => handleChange(e)}
            onReceiveData={onReceiveData}
            defaultValues={DefaultMyProfileEditEntries}
            // gridAlign="ProfileFormAlign"
          />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default MyProfileEdit;
