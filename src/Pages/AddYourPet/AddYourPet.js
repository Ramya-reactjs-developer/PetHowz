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
import { useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import { AddYourPetAction } from "../../Redux/Slices/AddYourPet/AddYourPetSlice";

const AddYourPetLogin = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: "onBlur" });
  const { state } = useLocation();
  const navigate = useNavigate();
  const Dispatch = useDispatch();
  const defaultValues = DefaultAddYourPetValues;
  console.log(state, "stateAddpet");
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
  console.log(getYourPetType?.getYourPetType?.data?.data, "getYourPetType");
  const tmpArr = [];
  // console.log(tmpArr, "tmpArr");
  getYourPetType?.getYourPetType?.data?.data?.map((item) => {
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
    getYourPetType?.getYourPetType?.data?.data?.map((item) => {
      tmpArr.push({
        id: item.pet_type_id,
        value: item.pet_type,
      });
    });

    getYourPetType?.getPetBreed?.data?.data?.map((item) => {
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
      getYourPetType?.getYourPetType?.data?.data?.find(
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

  const pet_details_id = useSelector(
    (state) => state?.AddYourPet?.AddYourPets?.data?.pet_details_id
  );
  function onReceiveData(data1) {
    const breed_id =
      getYourPetType?.getPetBreed?.data?.find(
        (item) => item.pet_breed === data1.pet_breed
      )?.pet_breed_id || 0;
    const id =
      getYourPetType?.getYourPetType?.data?.find(
        (item) => item.pet_type === data1.pet_type
      )?.pet_type_id || 0;
    // const user_id = userGet?.registertopethowz?.data?.user_id;
    const user_id = localStorage.getItem("LoginChecker");
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

    dispatch(actions.ADD_YOUR_PET(data));
    reset(defaultValues);
    // setTimeout(() => {
    //   if (pet_details_id !== "" && pet_details_id !== undefined) {
    //     Swal.fire("Pets Added Successfully", "Thank You", "success").then(
    //       (result) => {
    //         /* Read more about isConfirmed, isDenied below */
    //         reset(defaultValues);
    //         if (result.isConfirmed) {
    //           if (state !== null) {
    //             navigate(state);
    //           } else {
    //             navigate("/petHowz/RequestBooking");
    //             // console.log(pet_details_id, "pet_details_id");
    //           }
    //         }
    //       }
    //     );
    //   }
    // }, 1000);
    // reset({
    //   user_id: "",
    //   pet_name: "",
    //   pet_type: "",
    //   pet_breed: "",
    //   dob: "",
    //   gender: "",
    //   weight: "",
    //   vaccination_card: "",
    //   license: "",
    //   description: "",
    //   interests: "",
    //   food_preference: "",
    //   walking_routine: "",
    //   photos: "",
    // });

    // Swal.fire("Pets Added Successfully", "Thank You", "success").then(
    //   (result) => {
    //     /* Read more about isConfirmed, isDenied below */
    //     if (result.isConfirmed) {
    //       if (state !== null) {
    //         navigate(state);
    //       } else {
    //         // navigate("/RequestBooking");
    //         console.log(pet_details_id, "pet_details_id");
    //       }
    //     }
    //   }
    // );
  }
  React.useEffect(() => {
    // if (pet_details_id !== "" && pet_details_id !== undefined) {
    //   Swal.fire("Pets Added Successfully", "Thank You", "success").then(
    //     (result) => {
    //       /* Read more about isConfirmed, isDenied below */
    //       reset(defaultValues);
    //       if (result.isConfirmed) {
    //         if (state !== null) {
    //           navigate(state);
    //         } else {
    //           navigate("/petHowz/RequestBooking");
    //           // console.log(pet_details_id, "pet_details_id");
    //         }
    //       }
    //     }
    //   );
    // }
    if (pet_details_id !== "" && pet_details_id !== undefined) {
      const data = {
        data: {},
        method: "get",
        apiName: "",
      };

      dispatch(actions.ADD_YOUR_PET(data));
      Swal.fire({
        title: "Pets Added Successfully",
        text: "Thank You",
        icon: "success",
        allowOutsideClick: false,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */

        if (result.isConfirmed) {
          if (state !== null) {
            dispatch(AddYourPetAction.reset());
            navigate(state);
          } else {
            navigate("/petHowz/RequestBooking");
            dispatch(AddYourPetAction.reset());
            // console.log(pet_details_id, "pet_details_id");
          }
        }
      });
    }
  }, [pet_details_id]);
  console.log(pet_details_id, "pet_details_id");
  return (
    <Grid container md={12} lg={12} sm={12} xs={12}>
      <Grid item md={6} lg={6} sm={12} xs={12} className="AddPetForm">
        <Grid item md={12} lg={12} sm={12} xs={12} className="loginText">
          <CustomTypography type="head" text="Add Your Pet" customClass="" />
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
