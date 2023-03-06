import React, { useContext } from "react";
import { LabelContext } from "../../Pages/PetService/LableData";
// import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import {
  BasicDetailsEntries,
  DefaultBasicDetailsValues,
} from "../../Pages/PetService/BasicDetailsEntries";
import CustomForm from "../CustomForm/CustomForm";
import { Grid } from "@mui/material";
// import "./style.css";

const PetBasicDetails = (props) => {
  const value = useContext(LabelContext);
  const sender = value.labelInfo.sender;
  const btnDisbaled =
    sender.name.length > 0 &&
    sender.city.length > 0 &&
    sender.zipCode.length > 0 &&
    sender.state.length > 0;
  return (
    <form>
      <h4> Become a Pet Service Provider</h4>
      <h5> Fill up Your Basic Details</h5>
      <Grid container item md={12} lg={12} xs={12} sm={12}>
        <CustomForm
          AllEntries={BasicDetailsEntries}
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
export default PetBasicDetails;
