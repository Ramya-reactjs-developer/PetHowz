import React, { useContext } from "react";
import Stepper from "react-stepper-horizontal";
import BasicDetails from "../../../Components/Stepper/BasicDetails";
import PetHostAbout from "../../../Components/Stepper/PetHostAbout";
import PetHostAddOn from "../../../Components/Stepper/PetHostAddOn";
import PetBoardingSpace from "../../../Components/Stepper/PetBoardingSpace";
import RulesAmenities from "../../../Components/Stepper/RulesAmenities";
import Faqs from "../../../Components/Stepper/Faqs";
import Confirmation from "../../../Components/Stepper/Confirmation";
import { LabelContext } from "./labelDataContext";
import customImages from "../../../Utils/Images/index";
import UploadImage from "../../../Components/Stepper/UploadImage";
// import ServicePackage from "../../../Components/Stepper/ServicePackage"
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
        container
        md={12}
        sm={12}
        lg={12}
        xs={12}
        display="flex"
        justifyContent="center"
      >
        <Grid item md={5} sm={5} lg={5} xs={12} className="stepper-button">
          <Grid item md={12} sm={12} xs={12} lg={12} className="siepperImage">
            {/* <img src={customImages.petsStepper} alt="" /> */}
            <Grid className="image_front_color"></Grid>
          </Grid>
          <Grid item md={12} sm={12} xs={12} lg={12} className="stepperPage">
            {value.page !== 7 && (
              <Stepper steps={value.steps} activeStep={value.page} />
            )}
          </Grid>
        </Grid>
        <Grid item md={7} sm={7} lg={7} xs={12}>
          {value.page === 0 && <BasicDetails />}
          {value.page === 1 && <PetHostAbout />}
          {value.page === 2 && <PetBoardingSpace />}
          {value.page === 3 && <RulesAmenities />}
          {value.page === 4 && <UploadImage />}
          {value.page === 5 && <PetHostAddOn />}
          {/* {value.page === 1 && <ServicePackage />} */}
          {value.page === 6 && <Faqs />}
          {value.page === 7 && <Confirmation />}
        </Grid>
      </Grid>
    </Grid>
  );
};
export default PetSpace;
