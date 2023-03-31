import { Grid } from "@mui/material";
import React from "react";
import StepperNew from "../../../Components/StepperNew/StepperNew";
import { PBRBasicDetails } from "./PBRBasicDetails/PBRBasicDetails";

export const PetBoardingRegistration = () => {
  const steps = [
    "Basic Details",
    "About You",
    "About Your Pet Boarding Space",
    "Rules & Amenities",
    "Add Ons",
  ];
  const StepperData = [
    { activeStep: 0, Content: <PBRBasicDetails /> },
    { activeStep: 1, Content: <p>hi2</p> },
    { activeStep: 2, Content: <p>hi3</p> },
    { activeStep: 3, Content: <p>hi4</p> },
    { activeStep: 4, Content: <p>hi5</p> },
  ];
  return (
    <Grid Container item xs={12}>
      <StepperNew StepperData={StepperData} steps={steps} />
    </Grid>
  );
};
