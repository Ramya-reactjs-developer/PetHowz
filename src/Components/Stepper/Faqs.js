import React, { useContext } from "react";
import { LabelContext } from "../../Pages/JoinPetHost/petHost/labelDataContext";
// import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import FBEditor from "../../Components/TextEditor/TextEditor";
import CustomForm from "../CustomForm/CustomForm";
import CustomTypography from "../../Components/Typography/Typography";
import { Grid, Typography } from "@mui/material";
// import InputAdornment from "@material-ui/core/InputAdornment";
import "./style.css";

const Faqs = () => {
  const value = useContext(LabelContext);
  const BD = value.labelInfo?.BasicDetails;
  console.log(BD, "manoj");

  const pg = value.page;
  const btnDisbaled =
    BD.firstText?.length > 0 &&
    BD.SecondText?.length > 0 &&
    BD.ThirdText?.length > 0 &&
    BD.fourthText?.length > 0 &&
    BD.fifthText?.length > 0 &&
    BD.sixthText?.length > 0 &&
    BD.seventhText?.length > 0 &&
    BD.pin_code?.length > 0 &&
    BD.fileUploader?.length > 0 &&
    BD.location?.length > 0;
  console.log(BD.NameofPet, "name");
  console.log(BD.Status1, "gen");
  // BD.Address?.length > 0 &&
  // BD.City?.length > 0 &&
  // BD.State?.length > 0 &&
  // BD.Locality?.length > 0 &&
  // BD.Pincode?.length > 0;
  // BD.mobile_number?.length > 0 &&
  // BD.Gender?.length > 0 &&
  // BD.dob?.length > 0 &&
  // BD.NNameOfYourPetBoardingSpace?.length > 0 &&
  // BD.Address?.length > 0 &&
  // BD.City?.length > 0 &&
  // BD.State?.length > 0 &&
  // BD.Locality?.length > 0 &&
  // BD.Pincode?.length > 0;
  //  mobile_number: "",
  // Gender: "",
  // dob: "",
  // NameOfYourPetBoardingSpace: "",
  // Address: "",
  // City: "",
  // State: "",
  // Locality: "",
  // Pincode: "",
  console.log(pg, "pg");
  console.log(BD, "BD");
  console.log(value, "valueBD");
  console.log(btnDisbaled, "btnDisbaled");
  return (
    <form>
      <Grid>
        <Typography variant="h4">FAQ's about your service</Typography>

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
      </Grid>
      <ButtonGroup
        variant="contained"
        color="primary"
        aria-label="text primary button group"
        style={{ marginTop: 15 }}
      >
        {/* <Button onClick={() => value.prevPage()} style={{ margin: 25 }}>
          Previous
        </Button> */}
        <Button
          disabled={!btnDisbaled}
          onClick={() => value.nextPage()}
          style={{ margin: 25 }}
        >
          {console.log(value, "vvvvvv")}Next
        </Button>
      </ButtonGroup>
    </form>
  );
};
export default Faqs;
