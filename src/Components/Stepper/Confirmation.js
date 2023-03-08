import React, { useState, useEffect, useContext } from "react";
import { LabelContext } from "../../Pages/JoinPetHost/petHost/labelDataContext";
// import TextField from "@material-ui/core/TextField";
import CustomTextField from "../TextField/TextField";
import CustomButton from "../Button/Button";
// import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import InputAdornment from "@material-ui/core/InputAdornment";
import "./style.css";
import { upper } from "../../Pages/JoinPetHost/petHost/common/normalijation";
import CustomForm from "../CustomForm/CustomForm";
import { Grid, Typography } from "@mui/material";
import {
  DefaultPetHostAboutYouValues,
  PetHostAboutYouEntries,
} from "../../Pages/JoinPetHost/petHost/PetHostAboutYouEntries";
import {
  BasicDetailsEntries,
  DefaultBasicDetailsValues,
  PetHostBasicDetailsEntries,
} from "../../Pages/JoinPetHost/petHost/PetHostBasicDetailsEntries";
import {
  DefaultPetSpaceValues,
  petSpaceEntries,
} from "../../Pages/JoinPetHost/petHost/petBoardingSpaceEntries";
import {
  DefaultPetHostAddOnValues,
  PetHostAddOnEntries,
} from "../../Pages/JoinPetHost/petHost/PetHostAddOnEntries";
import {
  petHostEntries,
  DefaultPetHostValues,
} from "../../Pages/JoinPetHost/petHost/RuleAmenitiesEntries";
const Confirmation = () => {
  const value = useContext(LabelContext);
  const [shippingCoast, setshippingCoast] = useState(0);

  useEffect(() => {
    const weight = value.labelInfo.weight;
    const shippingOption = value.labelInfo.shippingOption;

    const shippingRate = 0.4,
      shippingCost = weight * shippingRate * (shippingOption === "1" ? 1 : 1.5);

    const shippingTotal = shippingCost.toFixed(2);
    setshippingCoast(shippingTotal);
  }, []);
  console.log(shippingCoast, "shippingCoast");
  console.log(value, "value");
  return (
    <>
      <h6> Basic Details</h6>
      <Grid className="child">
        <CustomForm
          AllEntries={BasicDetailsEntries}
          textFieldChange={value.handleChange}
          // onReceiveData={onReceiveData}
          defaultValues={DefaultBasicDetailsValues}
        />
      </Grid>
      <h6> Pet Host About</h6>
      <Grid className="child">
      <CustomForm
        AllEntries={PetHostAboutYouEntries}
        onChangeRadioAction={value.handleOnChange}
        textFieldChange={value.handleChange}
        // onReceiveData={onReceiveData}
        defaultValues={DefaultPetHostAboutYouValues}
      />
      </Grid>
      <h6> Pet Boarding Sapce</h6>
      <Grid className="child">
      <CustomForm
          AllEntries={petSpaceEntries}
          textFieldChange={value.handleChange}
          // onReceiveData={onReceiveData}
          defaultValues={DefaultPetSpaceValues}
        />

      </Grid>
      <h6> Pet Host Add On</h6>
      <Grid className="child">
      <CustomForm
          // AllEntries={entry.length > 0 ? entry : PetHostAddOnEntries}
          AllEntries={PetHostAddOnEntries}
          textFieldChange={value.handleChange}
          // onReceiveData={onReceiveData}
          defaultValues={DefaultPetHostAddOnValues}
        />
      </Grid>
      <h6>Rules Amenities</h6>
      <Grid className="child">
      <CustomForm
          AllEntries={petHostEntries}
          onChangeRadioAction={value.handleOnChange}
          textFieldChange={value.handleChange}
          // onReceiveData={onReceiveData}
          defaultValues={DefaultPetHostValues}
        />
      </Grid>
      <ButtonGroup
        variant="contained"
        color="primary"
        aria-label="text primary button group"
        style={{ marginTop: 15 }}
      >
        <CustomButton onClick={() => value.prevPage()} style={{ margin: 25 }}>
          Previous
        </CustomButton>
        <CustomButton onClick={() => value.nextPage()} style={{ margin: 25 }}>
          Confirm
        </CustomButton>
      </ButtonGroup>
    </>
  );
};
export default Confirmation;
