import React from "react";
import { Grid } from "@mui/material";
import CustomTab from "../../Components/Tab/Tab";
import ClinicMaster from "./ClinicMaster";
import SpecialityMaster from "./SpecialityMaster";
import CustomAppBar from "../../Components/AppBar/AppBar";
function Reviews() {
  const tabs = [
    { label: "Tab 1", content: <ClinicMaster /> },
    { label: "Tab 2", content: <SpecialityMaster /> },
  ];

  return (
    <>
      <CustomAppBar />
      <Grid item container>
        <Grid item md={12} lg={12} xs={12} sm={12}>
          <CustomTab tabs={tabs} />
        </Grid>
      </Grid>
    </>
  );
}

export default Reviews;
