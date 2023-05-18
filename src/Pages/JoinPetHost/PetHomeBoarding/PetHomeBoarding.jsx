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
import ScrollToTop from "../../../Components/ScrollToTop/ScrollToTop";

const PetHomeBoarding = () => {
  const value = useContext(PetHomeBoardingContext);
 const  pages= localStorage.getItem("pages")
  console.log(value, "valueeeee");
 
  React.useEffect(()=>{
    console.log(pages, "valueeeee");
  },[pages])
  return (
    <Grid container item sm={12} xs={12}>
      <ScrollToTop />
      <Grid item sm={4} xs={12} className="stepper-bg">
        <Grid item sm={12} xs={12} className="strPage">
          {value.page !== 5 && (
            <Stepper steps={value.steps} activeStep={pages} />
          )}
        </Grid>
      </Grid>
      <Grid item sm={8} xs={12} pl={5}>
        {pages ==="0" && <PHBBasicDetails />}
        {pages ==="1" && <PHBAboutYou />}
        {pages ==="2" && <PHBAYPetBoardingSpace />}
        {pages ==="3" && <PHBRulesAmenties />}
        {pages ==="4" && <PHBAddOns />}
      </Grid>
    </Grid>
  );
};
export default PetHomeBoarding;
