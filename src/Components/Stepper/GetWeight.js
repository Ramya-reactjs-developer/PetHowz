import React, { useContext } from "react";
import { LabelContext } from "../../Pages/JoinPetHost/petHost/labelDataContext";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import {
  PetHostAboutYouEntries
} from "../../Pages/JoinPetHost/petHost/PetHostAboutYouEntries";
import CustomForm from "../CustomForm/CustomForm";
import { Grid,Typography } from "@mui/material";
import InputAdornment from "@material-ui/core/InputAdornment";
import "./style.css";

const GetWeight = (props) => {
  const value = useContext(LabelContext);
  const weight = value.labelInfo.weight;
  const btnDisbaled = weight.length > 0;



  const [entry, setEntry] = React.useState([]);

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
            AllEntries={entry.length > 0 ? entry : PetHostAboutYouEntries}
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
