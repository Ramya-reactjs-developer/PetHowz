import React, { useContext } from "react";
import Stepper from "react-stepper-horizontal";
import Confirmation from "../../Components/Stepper/Confirmation";
// import { LabelContext } from "../JoinPetHost/petHost/labelDataContext";
import { LabelContext } from "../PetService/LableData";
import { Grid } from "@mui/material";
import "./PetService.css";
import PetBasicDetails from "../../Components/PetServiceProvider/BasicDetails";
import AboutPet from "../../Components/PetServiceProvider/AboutPet";
import ServiceDetails from "../../Components/PetServiceProvider/ServiceDetails";

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
          {value.page !== 5 && (
            <Stepper steps={value.steps} activeStep={value.page} />
          )}
        </Grid>

        <Grid item md={7} sm={7} lg={7} xs={12}>
          {/* {value.page === 0 && <SenderAddress />} */}
          {value.page === 0 && <PetBasicDetails />}
          {value.page === 1 && <AboutPet />}
          {value.page === 2 && <ServiceDetails />}
          {/* {value.page === 3 && <ShippingOption />} */}
          {value.page === 4 && <Confirmation />}
          {/* {value.page === 5 && <Printonly />} */}
        </Grid>
      </Grid>
    </Grid>
  );
};
export default PetService;
