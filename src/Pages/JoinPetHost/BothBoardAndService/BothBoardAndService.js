import React, { useContext } from "react";
import Stepper from "react-stepper-horizontal";
import BasicDetails from "../../../Components/Stepper/BothBoardAndSpaceStepper/BasicDetails";
import PetHostAbout from "../../../Components/Stepper/BothBoardAndSpaceStepper/PetHostAbout";
import PetHostAddOn from "../../../Components/Stepper/BothBoardAndSpaceStepper/PetHostAddOn";
import PetBoardingSpace from "../../../Components/Stepper/BothBoardAndSpaceStepper/PetBoardingSpace";
import RulesAmenities from "../../../Components/Stepper/BothBoardAndSpaceStepper/RulesAmenities";
import Confirmation from "../../../Components/Stepper/BothBoardAndSpaceStepper/Confirmation";
import { BothLabelContext } from "./BothlabelDataContext";
import customImages from "../../../Utils/Images/index";

// import { petSpaceEntries, DefaultPetSpaceValues } from "./petSpaceEntries";
// import CustomForm from "../../../Components/CustomForm/CustomForm";
import { Grid } from "@mui/material";
import "./BothPetHost.css";
const BothBoardAndService = () => {
  const value = useContext(BothLabelContext);
  console.log(value, "valueeeee");

  return (
    <Grid container md={12} sm={12} xs={12} lg={12}>
      <Grid container md={12} sm={12} lg={12} xs={12}>
        <Grid item md={5} sm={5} lg={5} xs={12} className="stepper-button">
          <Grid item md={12} sm={12} xs={12} lg={12} className="stepperImage">
            <img src={customImages.petsStepper} alt="" className="imgBasic" />
            <Grid className="image_front_color"></Grid>
          </Grid>
          <Grid item md={12} sm={12} xs={12} lg={12} className="stepperPage">
            {value.page !== 5 && (
              <Stepper steps={value.steps} activeStep={value.page} />
            )}
          </Grid>
        </Grid>
        <Grid item md={7} sm={7} lg={7} xs={12} p={2}>
          {value.page === 0 && <BasicDetails />}
          {value.page === 1 && <PetHostAbout />}
          {value.page === 2 && <PetBoardingSpace />}
          {value.page === 3 && <RulesAmenities />}
          {value.page === 4 && <PetHostAddOn />}
          {value.page === 5 && <Confirmation />}
        </Grid>
      </Grid>
    </Grid>
  );
};
export default BothBoardAndService;
