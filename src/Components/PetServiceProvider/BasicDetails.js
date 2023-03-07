import React, { useContext } from "react";
// import { LabelContext } from "../../Pages/JoinPetHost/petHost/labelDataContext";
import { LabelContext } from "../../Pages/PetService/LableData";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import {
  BasicDetailsEntries,
  DefaultBasicDetailsValues,
} from "../../Pages/PetService/BasicDetailsEntries";
import CustomForm from "../CustomForm/CustomForm";
import { Grid } from "@mui/material";
import "./style.css";

const PetBasicDetails = (props) => {
  const value = useContext(LabelContext);
  const sender = value.labelInfo?.sender;
  console.log(value, "sender");
  


  const btnDisabled =
    sender.firstText?.length > 0 &&
    sender.SecondText?.length > 0 &&
    sender.ThirdText?.length > 0 &&
    sender.fourthText?.length > 0 &&
    sender.fifthText?.length > 0 &&
    sender.sixthText?.length > 0 &&
    sender.seventhText?.length > 0 &&
    sender.pin_code?.length > 0 &&
    sender.fileUploader?.length > 0 &&
    sender.location?.length > 0;
  console.log(btnDisabled, "btnDisbaled");

  return (
    <form>
      <h4> Become a Pet Service Provider</h4>
      <h5> Fill up details the pet boarding</h5>

      <Grid>
        <CustomForm
          AllEntries={BasicDetailsEntries}
          textFieldChange={value.handleChange}
          // onReceiveData={onReceiveData}
          defaultValues={DefaultBasicDetailsValues}
        />
      </Grid>

      <ButtonGroup
        variant="contained"
        color="primary"
        aria-label="text primary button group"
        style={{ marginTop: 15 }}
      >
        <Button
          disabled={!btnDisabled}
          onClick={() => value.nextPage()}
          style={{ margin: 25 }}
        >
          Next
        </Button>
      </ButtonGroup>
    </form>
  );
};
export default PetBasicDetails;
