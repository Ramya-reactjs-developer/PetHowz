import React, { useContext } from "react";
import { LabelContext } from "../../Pages/JoinPetHost/petHost/labelDataContext";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import {
  petSpaceEntries,
  DefaultPetSpaceValues,
} from "../../Pages/JoinPetHost/petHost/petSpaceEntries";
import CustomForm from "../CustomForm/CustomForm";
import { Grid } from "@mui/material";
import InputAdornment from "@material-ui/core/InputAdornment";
import "./style.css";

const GetWeight = (props) => {
  const value = useContext(LabelContext);
  const weight = value.labelInfo.weight;
  const btnDisbaled = weight.length > 0;
  return (
    <form>
      <h4> Enter Weight Details</h4>
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
export default GetWeight;
