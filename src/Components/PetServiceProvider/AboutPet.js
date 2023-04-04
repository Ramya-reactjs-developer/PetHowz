import React, { useContext } from "react";
import { LabelContext } from "../../Pages/PetService/LableData";
// import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import CustomForm from "../CustomForm/CustomForm";
import { Grid } from "@mui/material";
import FBEditor from "../../Components/TextEditor/TextEditor";
import {
  AboutPetEntries,
  DefaultAboutPetValues,
} from "../../Pages/PetService/AboutPetEntries";
import "./style.css";
import CustomTypography from "../Typography/Typography";

const AboutPet = (props) => {
  const value = useContext(LabelContext);
  const receiver = value.labelInfo?.receiver;
  console.log(receiver, "valkjndjhfdjiue");

  const btnDisabled =
    // receiver.professional_status?.length > 0 &&
    receiver.tell_us_something_about_you_and_your_passion_towards_pet?.length >
      0 &&
    receiver.tell_us_about_the_type_of_pet_you_have_and_your_experience
      ?.length > 0 &&
    receiver.tell_us_about_the_type_of_pet_you_have_and_your_experience_two
      ?.length > 0 &&
    receiver.can_provide_oral_medication?.length > 0 &&
    receiver.can_you_provide_first_aid?.length > 0;

  return (
    <form>
      <h4> Become a Pet Service Provider</h4>
      <h5> Share these details which describe you as a pet grooming.</h5>

      <Grid>
        <CustomForm
          AllEntries={AboutPetEntries}
          onChangeRadioAction={value.handleOnChange}
          textFieldChange={value.handleChange}
          // onReceiveData={onReceiveData}
          defaultValues={DefaultAboutPetValues}
        />
      </Grid>
      <CustomTypography variant="h4" text="FAQ's about your service"/>

      <Grid item md={12} sm={12} lg={12} xs={12} pl={2}>
        <Grid pt={1}>
          <CustomTypography
            text="Question"
            type="header"
            customClass="FaqQuestion"
          />
        </Grid>
        <FBEditor />
      </Grid>
      <Grid item md={12} sm={12} lg={12} xs={12} pl={2}>
        <Grid pt={1}>
          <CustomTypography
            text="Answer"
            type="header"
            customClass="FaqQuestion"
          />
        </Grid>
        <FBEditor />
      </Grid>
      <Grid className="btn_align_edit">
        <ButtonGroup
          variant="contained"
          color="primary"
          aria-label="text primary button group"
          style={{ marginTop: 15 }}
        >
          <Button
            disabled={!btnDisabled}
            onClick={() => value.nextPage()}
            // style={{ margin: 25 }}
          >
            Next
          </Button>
        </ButtonGroup>
      </Grid>
    </form>
  );
};
export default AboutPet;
