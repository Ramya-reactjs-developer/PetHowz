import React, { useContext } from "react";
import Stepper from "react-stepper-horizontal";
import SenderAddress from "../../../Components/Stepper/SenderAddress";
import RecevierAddress from "../../../Components/Stepper/RecevierAddress";
import Confirmation from "../../../Components/Stepper/Confirmation";
import GetWeight from "../../../Components/Stepper/GetWeight";
import ShippingOption from "../../../Components/Stepper/ShippingOption";
import Printonly from "../../../Components/Stepper/PrintOnly";
import { LabelContext } from "../petHost/labelDataContext";
import { petSpaceEntries, DefaultPetSpaceValues } from "./petSpaceEntries";
import CustomForm from "../../../Components/CustomForm/CustomForm";
import { Grid } from "@mui/material";
import "./petHost.css";
const PetSpace = () => {
  const value = useContext(LabelContext);
  console.log(value, "eswar");
  return (
    <Grid container md={12} sm={12} xs={12} lg={12} className="App">
      <Grid item md={12} sm={12} lg={12} xs={12} display="flex" justifyContent="center">
        <Grid item md={5} sm={5} lg={5} xs={12} className="stepper-button">
          {value.page !== 5 && (
            <Stepper steps={value.steps} activeStep={value.page} />
          )}
        </Grid>

        <Grid item md={7} sm={7} lg={7} xs={12}>
          {value.page === 0 && <SenderAddress />}
          {value.page === 1 && <RecevierAddress />}
          {value.page === 2 && <GetWeight />}
          {value.page === 3 && <ShippingOption />}
          {value.page === 4 && <Confirmation />}
          {value.page === 5 && <Printonly />}
        </Grid>
      </Grid>
    </Grid>
  );
};
export default PetSpace;
