import { Grid } from "@mui/material";
import React, { useState } from "react";
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
import { useEffect } from "react";
const AddYourPetLogin = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const Dispatch = useDispatch();
  useEffect(() => {
    const dropdownData = {
      data: {},
      method: "get",
      apiName: "getPetType",
    };
    Dispatch(actions.GET_YOUR_PET_TYPE(dropdownData));
    // console.log(dropdownData, "dropdownData");
  }, []);
  const getYourPetType = useSelector((state) => state?.AddYourPets);
  console.log(getYourPetType?.getYourPetType?.data, "getYourPetType");
  const tmpArr = [];
  // console.log(tmpArr, "tmpArr");
  getYourPetType?.getYourPetType?.data?.map((item) => {
    tmpArr.push({
      id: item.pet_type_id,
      value: item.pet_type,
    });
  });
  console.log();

  const addDrpdownData = (json) => {
    const tmpArr = [];
    const tmpBreedArr = [];
    // console.log(tmpArr, "tmpArr");
    getYourPetType?.getYourPetType?.data?.map((item) => {
      tmpArr.push({
        id: item.pet_type_id,
        value: item.pet_type,
      });
    });

    getYourPetType?.getPetBreed?.data?.map((item) => {
      tmpBreedArr.push({
        id: item.pet_breed_id,
        value: item.pet_breed,
        petTypeId: item.pet_type_id,
        petType: item.pet_type,
      });
    });
    return json.map((i) => {
      if (i.name === "pet_type") {
        return {
          ...i,
          DropdownData: tmpArr,
        };
      }
      if (i.name === "pet_breed") {
        return {
          ...i,
          DropdownData: tmpBreedArr,
        };
      }
      return i;
    });
  };
  const customHnadleSelect = (event, name) => {
    // console.log(event, name, "eventName");
    const id =
      getYourPetType?.getYourPetType?.data?.find(
        (item) => item.pet_type === event.target.value
      )?.pet_type_id || 0;
    if (id) {
      const dropdownData1 = {
        data: {},
        method: "get",
        apiName: `getPetBreed/${id}`,
      };
      Dispatch(actions.GET_PET_BREED(dropdownData1));
    }
  };
  const dispatch = useDispatch();
  const userGet = useSelector((state) => state?.registertopethowz);
  // console.log(userGet, "userGetbbbb");
  const { registertopethowz } = useSelector(
    (state) => state?.registertopethowz
  );
  // console.log(registertopethowz, "registertopethowz");
  const navigate = useNavigate();
  function onReceiveData(data1) {
    const breed_id =
    getYourPetType?.getPetBreed?.data?.find(
      (item) => item.pet_breed === data1.pet_breed
    )?.pet_breed_id || 0;
    const id =
    getYourPetType?.getYourPetType?.data?.find(
      (item) => item.pet_type === data1.pet_type
    )?.pet_type_id || 0;
    const user_id = userGet?.registertopethowz?.data?.user_id;
    const formData = new FormData();
    formData.append("pet_name", data1.pet_name);
    formData.append("pet_type", id);
    formData.append("pet_breed", breed_id);
    formData.append("dob", data1.dob);
    formData.append("gender", data1.gender);
    formData.append("weight", data1.weight);
    formData.append("vaccination_card", data1.vaccination_card[0]);
    formData.append("license", data1.license[0]);
    formData.append("description", data1.description);
    formData.append("interests", data1.interests);
    formData.append("food_preference", data1.food_preference);
    formData.append("walking_routine", data1.walking_routine);
    formData.append("photos", data1.photos[0]);
    formData.append("user_id", user_id);
    const req = { ...formData, formData, user_id: user_id };
    console.log(formData, "req");
    const data = {
      data: formData,
      method: "post",
      apiName: "createPetDetails",
    };
    // console.log(data1, "checkdata");
    navigate("/RequestBooking");
    dispatch(actions.ADD_YOUR_PET(data));
    reset({
      user_id: "",
      pet_name: "",
      pet_type: "",
      pet_breed: "",
      dob: "",
      gender: "",
      weight: "",
      vaccination_card: "",
      license: "",
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
            AllEntries={addDrpdownData(AddYourPetentries)}
            // textFieldChange=((e)=>{value.handleChange})
            // textFieldChange={(e) => handleChange(e)}
            handleSelect={customHnadleSelect}
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
