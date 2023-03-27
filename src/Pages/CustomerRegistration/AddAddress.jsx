import React, { UseEffect } from "react";
import { Box, Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Controller, useForm } from "react-hook-form";

import actions from "../../Redux/Actions/index";
import CustomTypography from "../../Components/Typography/Typography";
import "./CustomerRegistration.css";
import CustomForm from "../../Components/CustomForm/CustomForm";
import CustomIcons from "../../Utils/Icons/Index";
import { AddressEntries, DefaultAddressEntriesValues } from "./AddressEntries";
import { useNavigate } from "react-router";

export const AddAddress = () => {
<<<<<<< HEAD

  
=======
  const dispatch = useDispatch();
  // const [editId, setEditId] = useState();
  const defaultValues = {};
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues,
  });

  const { registertopethowz } = useSelector((state) => state?.registertopethowz);
  console.log(registertopethowz, "registertopethowz");
  const navigate = useNavigate();
  function onReceiveData(data1) {
    console.log(data1, "checkDaggta");
    const data = {
      data: data1,
      method: "post",
      apiName: "createUserDetails",
    };
    navigate("/Terms");
    dispatch(actions.USER_ADDRESS_DETAILS(data));

    reset({
      Your_Name: "",
      Mobile_number: "",
      Email: "",
      Gender: "",
      Street: "",
      City: "",
      State: "",
      Pincode: "",
      Locality: "",
      Location: "",
    });
  }
>>>>>>> 4bb443e51543d3cb5c7db7a52fd50555f68aa702

  return (
    <Grid container item xs={12}>
      <Grid item textAlign={"center"} height={{ lg: "100vh" }} sm={6} xs={12}>
        <img src={CustomIcons.Logo} alt="logo" />
        <Box sx={{ pt: "20px" }}>
          <CustomTypography
            text="Add Your Residential Address"
            type="heading3"
            colorType={"text"}
            customStyle={{ fontWeight: "Bold" }}
          />
        </Box>
        <CustomForm
          AllEntries={AddressEntries}
          defaultValues={DefaultAddressEntriesValues}
          onReceiveData={onReceiveData}
        />
      </Grid>
      <Grid item textAlign={"center"} className="Box-Image1" sm={6} xs={12}>
        <Grid item className="Box-color"></Grid>
      </Grid>
    </Grid>
  );
};
