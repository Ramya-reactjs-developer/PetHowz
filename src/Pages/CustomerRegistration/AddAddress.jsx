/* eslint-disable no-lone-blocks */
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
import { useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import { userAddressDetailsAction } from "../../Redux/Slices/userAddress/userAddressDetailsSlice";

export const AddAddress = () => {
  const dispatch = useDispatch();
  const { state } = useLocation();
  console.log(state, "stateAddress");
  // const [editId, setEditId] = useState();
  const defaultValues = DefaultAddressEntriesValues;
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues,
  });

  const userGet = useSelector((state) => state?.userAddressDetails);

  console.log(userGet?.userAddressDetails?.data, "userGetbbbb");

  React.useEffect(() => {}, [localStorage, userGet]);
  const navigate = useNavigate();
  const user_id = localStorage.getItem("LoginChecker");
  console.log(user_id, "user_idAddress");
  function onReceiveData(data1) {
    // const user_id = userGet?.registertopethowz?.data?.user_id;

    const data = {
      data: { ...data1, user_id: user_id },
      method: "post",
      apiName: "createUserDetails",
    };

    dispatch(actions.USER_ADDRESS_DETAILS(data));
    reset(defaultValues);

    // Swal.fire({
    //   title: "Address Added Successfully",
    //   text: "Thank You",
    //   icon: "success",
    //   allowOutsideClick: false,
    // }).then((result) => {
    //   /* Read more about isConfirmed, isDenied below */
    //   if (result.isConfirmed) {
    //     navigate("/petHowz/Terms", { state: state });
    //   }
    // });
  }
  React.useEffect(() => {
    console.log(userGet?.userAddressDetails?.data?.data?.Message, "mmmm1");
    if (userGet?.userAddressDetails?.data?.data?.Message === "SUCCESS") {
      // localStorage.setItem(
      //   "LoginChecker",
      //   userGet?.registertopethowz?.data?.data?.data?.user_id
      // );
      // localStorage.setItem(
      //   "user_type",
      //   userGet?.registertopethowz?.data?.data?.data?.user_type
      // );

      // Swal.fire({
      //   title: "Address Added Successfully",
      //   text: "Thank You",
      //   icon: "success",
      //   allowOutsideClick: false,
      // }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      // if (result.isConfirmed) {
      dispatch(userAddressDetailsAction.reset());
      navigate("/petHowz/Terms", { state: state });
      //   }
      // });
    }
  }, [userGet]);

  return (
    <Grid container item xs={12}>
      <Grid item height={{ lg: "100vh" }} sm={6} xs={12}>
        <img src={CustomIcons.Logo} alt="logo" />
        <Box sx={{ pt: "20px" }}>
          <CustomTypography
            text="Add Your Residential Address"
            type="heading3"
            colorType={"text"}
            customStyle={{ fontWeight: "Bold", textAlign: "center" }}
          />
        </Box>
        <CustomForm
          AllEntries={AddressEntries}
          defaultValues={DefaultAddressEntriesValues}
          onReceiveData={onReceiveData}
        />
      </Grid>
      <Grid item className="Box-Image1" sm={6} xs={12}>
        <Grid item className="Box-color"></Grid>
      </Grid>
    </Grid>
  );
};
