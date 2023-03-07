import React, { useContext } from "react";
import { LabelContext } from "../../Pages/JoinPetHost/petHost/labelDataContext";
// import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

import CustomForm from "../CustomForm/CustomForm";
import { Grid, Typography } from "@mui/material";
// import InputAdornment from "@material-ui/core/InputAdornment";
import "./style.css";
import {
  DefaultPetHostAboutYouValues,
  PetHostAboutYouEntries,
} from "../../Pages/JoinPetHost/petHost/PetHostAboutYouEntries";

const PetHostAbout = (props) => {
  const value = useContext(LabelContext);
  const AY = value.labelInfo.AboutYou;
  const btnDisbaled =
    // AY.professional_status?.length > 0 &&
    AY.tell_us_something_about_you_and_your_passion_towards_pet?.length > 0;
  // AY.tell_us_about_the_type_of_pet_you_have_and_your_experience?.length > 0 &&
  // AY.tell_us_about_the_type_of_pet_you_have_and_your_experience_two?.length >
  //   0 &&
  // AY.can_provide_oral_medication?.length > 0 &&
  // AY.can_you_provide_first_aid?.length > 0;
  //   ProfessionalStatus: "",
  // LiveAloneOrWithFamily: "",
  // Aboutyou: "",
  // aboutthepet: "",
  // aboutthepettype: "",
  // OralMedication: "",
  // FirstAid: "",
  return (
    <form>
      <Typography variant="h4">Fill Up Details About You</Typography>
      <Grid>
        {/* <CustomForm
          AllEntries={petSpaceEntries}
          textFieldChange={value.handleChange}
          // onReceiveData={onReceiveData}
          defaultValues={DefaultPetSpaceValues}
        /> */}
        <CustomForm
          AllEntries={PetHostAboutYouEntries}
          textFieldChange={value.handleChange}
          // onReceiveData={onReceiveData}
          defaultValues={DefaultPetHostAboutYouValues}
        />
      </Grid>

      <ButtonGroup
        variant="contained"
        color="primary"
        aria-label="text primary button group"
        style={{ marginTop: 15 }}
      >
        <Button onClick={() => value.prevPage()} style={{ margin: 25 }}>
          Previous
        </Button>
        <Button
          disabled={!btnDisbaled}
          onClick={() => value.nextPage()}
          style={{ margin: 25 }}
        >
          Next
        </Button>
      </ButtonGroup>
    </form>
  );
};
export default PetHostAbout;
