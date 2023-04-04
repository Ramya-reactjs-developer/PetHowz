import React, { useContext } from "react";
import Stepper from "react-stepper-horizontal";
import { LabelContext } from "../PetService/LableData";
import { Grid } from "@mui/material";
import PetBasicDetails from "../../Components/PetServiceProvider/BasicDetails";
import AboutPet from "../../Components/PetServiceProvider/AboutPet";
import ServiceDetails from "../../Components/PetServiceProvider/ServiceDetails";
import UploadImage from "../../Components/PetServiceProvider/UploadImage";
import PetHostAddOn from "../../Components/Stepper/PetHostAddOn";
import Faqs from "../../Components/Stepper/Faqs";
import "./PetService.css";
import SelectService from "./SelectService/SelectService";

const PetService = () => {
  const value = useContext(LabelContext);
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
          {value.page !== 6 && (
            <Stepper steps={value.steps} activeStep={value.page} />
          )}
        </Grid>

        <Grid item md={7} sm={7} lg={7} xs={12}>
          {value.page === 0 && <SelectService />}
          {value.page === 1 && <PetBasicDetails />}
          {value.page === 2 && <AboutPet />}
          {value.page === 3 && <ServiceDetails />}
          {value.page === 4 && <UploadImage />}
          {value.page === 5 && <PetHostAddOn />}
          {value.page === 6 && <Faqs />}
        </Grid>
      </Grid>
    </Grid>
  );
};
export default PetService;
