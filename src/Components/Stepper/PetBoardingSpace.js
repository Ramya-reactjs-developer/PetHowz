import React, { useContext } from "react";
import { LabelContext } from "../../Pages/JoinPetHost/petHost/labelDataContext";
// import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import {
  petSpaceEntries,
  DefaultPetSpaceValues,
} from "../../Pages/JoinPetHost/petHost/petBoardingSpaceEntries";
import CustomForm from "../CustomForm/CustomForm";
import { Grid } from "@mui/material";
import "./style.css";

const PetBoardingSpace = (props) => {
  const value = useContext(LabelContext);
  const sender = value.labelInfo?.sender;
  console.log(sender, "valugggge");
  console.log(value, "kjdhjkhfjhjbf");

  const btnDisbaled =
    sender.firstText?.length > 0 &&
    sender.secondText?.length > 0 &&
    sender.thirdText?.length > 0 &&
    sender.fourthText?.length > 0 &&
    sender.fivethText?.length > 0 &&
    sender.sixthText?.length > 0 &&
    sender.seventhText?.length > 0 &&
    sender.eighthText?.length > 0 &&
    sender.fileUploader?.length > 0;
  console.log(btnDisbaled, "btnDisbaled");
  // sender.name.length > 0 &&
  // sender.city.length > 0 &&
  // sender.zipCode.length > 0 &&
  // sender.state.length > 0;
  return (
    <form>
      <h4> Become a Pet pet Host</h4>
      <h5> Fill up details the pet boarding</h5>

      <Grid>
        <CustomForm
          AllEntries={petSpaceEntries}
          textFieldChange={value.handleChange}
          // onReceiveData={onReceiveData}
          defaultValues={DefaultPetSpaceValues}
        />
      </Grid>

      <ButtonGroup
        variant="contained"
        color="primary"
        aria-label="text primary button group"
        style={{ marginTop: 15 }}
      >
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
export default PetBoardingSpace;
