import React from "react";
import { Grid } from "@mui/material";
import CustomTypography from "../../Components/Typography/Typography";
import { PetDetailsEntries } from "./PetDetailsEntries";
import CustomForm from "../../Components/CustomForm/CustomForm";

const MyForm = () => {
  const [entry, setEntry] = React.useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} style={{ margin: "50px" }}>
      <Grid container item md={12} sm={12} xs={12}>
        <Grid item paddingLeft={2} >
         <CustomTypography
          type="header"
          text="My Pet Details"
          colorType="senary"
        />
        </Grid>
        <Grid item spacing={2}>
        <Grid className="NewsBorder">
          <CustomForm
            AllEntries={entry.length > 0 ? entry : PetDetailsEntries}
          />
        </Grid>
      </Grid>
      </Grid>
    
    </form>
  );
};
export default MyForm;
