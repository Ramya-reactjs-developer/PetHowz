import React, { useContext } from "react";
import Stepper from "react-stepper-horizontal";
import customImages from "../../../Utils/Images/index";
import { Box, Grid } from "@mui/material";
import "./PetHomeBoarding.css";
import { PetHomeBoardingContext } from "./PetHomeBoardingContext";
import PHBBasicDetails from "./PetHomeBoardingStepper/PHBBasicDetailsStepper";
import PHBAboutYou from "./PetHomeBoardingStepper/PHBAboutYouStepper";
import PHBAYPetBoardingSpace from "./PetHomeBoardingStepper/PHBAYPetBoardingSpaceStepper";
import PHBRulesAmenties from "./PetHomeBoardingStepper/PHBRulesAmentiesStepper";
import PHBAddOns from "./PetHomeBoardingStepper/PHBAddOnsStepper";

const PetHomeBoarding = () => {
  const value = useContext(PetHomeBoardingContext);
  console.log(value, "valueeeee");

  return (
    <Grid container item sm={12} xs={12}>
      <Grid item sm={4} xs={12} className="stepper-bg">
        <Grid item sm={12} xs={12} className="strPage">
          {value.page !== 4 && (
            <Stepper steps={value.steps} activeStep={value.page} />
          )}
        </Grid>
      </Grid>
      <Grid item sm={8} xs={12} p={2}>
        {value.page === 0 && <PHBBasicDetails />}
        {value.page === 1 && <PHBAboutYou />}
        {value.page === 2 && <PHBAYPetBoardingSpace />}
        {value.page === 3 && <PHBRulesAmenties />}
        {value.page === 4 && <PHBAddOns />}
      </Grid>
    </Grid>
  );
};
export default PetHomeBoarding;
