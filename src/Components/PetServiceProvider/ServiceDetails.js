import React, { useContext } from "react";
// import { LabelContext } from "../../Pages/JoinPetHost/petHost/labelDataContext";
import { LabelContext } from "../../Pages/PetService/LableData";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import {
  ServiceDetailsEntries,
  DefaultServiceDetailsValues,
} from "../../Pages/PetService/ServiceDetailsEntries";
import CustomForm from "../CustomForm/CustomForm";
import { Grid } from "@mui/material";
import "./style.css";

const ServiceDetails = (props) => {
  const value = useContext(LabelContext);
  const weight = value.labelInfo?.weight;
  console.log(value, "sender");

  const btnDisabled =
    weight.list_the_pet_services_you_are_providing?.length > 0 &&
    weight.category_of_pets_boarded?.length > 0 &&
    weight.no_of_pets?.length > 0 &&
    weight.providing_these_services_at?.length > 0 &&
    weight.do_you_provide_doorstep_service?.length > 0 &&
    weight.service_overview?.length > 0 &&
    weight.do_you_have_dedicated_boarding_area_for_pets?.length > 0 &&
    weight.do_you_have_kids_at_home?.length > 0 &&
    weight.can_provide_oral_medication?.length > 0 &&
    weight.do_you_have_a_playing_area_for_pets?.length > 0 &&
    weight.pets_allowed_on_beds?.length > 0&&
    weight.do_you_have_air_conditioner_in_pet_sleeping_area?.length > 0&&
    weight.pets_allowed_on_furniture?.length > 0&&
    weight.do_you_have_other_pets_at_home?.length > 0&&
    weight.do_you_have_other_pets_at_home_two?.length > 0&&
    weight.do_you_pet_sleeping_area?.length > 0;
    console.log(btnDisabled, "btnDisbaled");

  return (
    <form>
      <h4>Become a pet Service Provider</h4>
      <h5> What are the pet Services you are providing?</h5>

      <Grid>
        <CustomForm
          AllEntries={ServiceDetailsEntries}
          textFieldChange={value.handleChange}
          // onReceiveData={onReceiveData}
          defaultValues={DefaultServiceDetailsValues}
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
export default ServiceDetails;
