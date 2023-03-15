import { Grid } from "@mui/material";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import customImages from "../../Utils/Images";
import "./AddYourPet.css";
import CustomButton from "../../Components/Button/Button";
import CustomTypography from "../../Components/Typography/Typography";
import CustomTextField from "../../Components/TextField/TextField";
import CustomIcons from "../../Utils/Icons/Index";
import CustomForm from "../../Components/CustomForm/CustomForm";
import {
  AddYourPetentries,
  DefaultAddYourPetValues,
} from "./AddYourPetEntries";
const AddYourPetLogin = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });
  const onReceiveData = { eswar: "eswar" };
  console.log(onReceiveData, "jhbchjgc");
  return (
    <Grid container md={12} lg={12} sm={12} xs={12}>
      <Grid item md={6} lg={6} sm={12} xs={12} className="AddPetForm">
        <Grid item md={12} lg={12} sm={12} xs={12} className="loginText">
          <CustomTypography type="head" text="Add Your Pet," customClass="" />
        </Grid>
        <Grid className="yourButton" p={3}>
          <CustomForm
            AllEntries={AddYourPetentries}
            // textFieldChange=((e)=>{value.handleChange})
            // textFieldChange={(e) => handleChange(e)}
            onReceiveData={onReceiveData}
            defaultValues={DefaultAddYourPetValues}
            gridAlign="formAlign"
          />
        </Grid>
      </Grid>
      <Grid container md={6} lg={6} sm={12} xs={12} className="loginImg">
        <img src={customImages.Service} alt="" />
      </Grid>
    </Grid>
  );
};

export default AddYourPetLogin;
