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
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import actions from "../../Redux/Actions";
const AddYourPetLogin = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const dispatch = useDispatch();
  const userGet = useSelector((state) => state?.registertopethowz);
  const userAddressDetails = useSelector((state) => state?.userAddressDetails);
  console.log(userAddressDetails, "userAddressDetails");
  const navigate = useNavigate();
  function onReceiveData(data1) {
    const user_id = userGet?.registertopethowz?.data?.user_id;
    const data = {
      data: { ...data1, user_id: user_id },
      method: "post",
      apiName: "createPetDetails",
    };
    navigate("/RequestBooking");
    console.log(data, "dataadd");
    console.log(data1, "AddYourPet");
    dispatch(actions.ADD_YOUR_PET(data));

    reset({
      pet_name: "",
      pet_type: "",
      pet_breed: "",
      gender: "",
      weight: "",
      dob: "",
      license: "",
      vaccination_card: "",
      description: "",
      interests: "",
      food_preference: "",
      walking_routine: "",
      photos: "",
    });
  }
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
