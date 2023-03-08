import React, { useContext } from "react";
import Stepper from "react-stepper-horizontal";
import BasicDetails from "../../../Components/Stepper/BasicDetails";
import PetHostAbout from "../../../Components/Stepper/PetHostAbout";
import PetHostAddOn from "../../../Components/Stepper/PetHostAddOn";
import PetBoardingSpace from "../../../Components/Stepper/PetBoardingSpace";
import RulesAmenities from "../../../Components/Stepper/RulesAmenities";
import Confirmation from "../../../Components/Stepper/Confirmation";
import { LabelContext } from "./labelDataContext";
// import { petSpaceEntries, DefaultPetSpaceValues } from "./petSpaceEntries";
// import CustomForm from "../../../Components/CustomForm/CustomForm";
import { Grid } from "@mui/material";
import "./petHost.css";
const PetSpace = () => {
  const value = useContext(LabelContext);
  console.log(value, "eswar");
  return (
    <Grid container md={12} sm={12} xs={12} lg={12} className="App">
      <Grid
        item
        md={12}
        sm={12}
        lg={12}
        xs={12}
        display="flex"
        justifyContent="center"
      >
        <Grid item md={5} sm={5} lg={5} xs={12} className="stepper-button">
          {value.page !== 5 && (
            <Stepper steps={value.steps} activeStep={value.page} />
          )}
        </Grid>

        <Grid item md={7} sm={7} lg={7} xs={12}>
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
export default PetSpace;
