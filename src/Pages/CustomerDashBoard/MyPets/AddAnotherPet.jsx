import { Box, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import actions from "../../../Redux/Actions";
import axios from "axios";

import CustomForm from "../../../Components/CustomForm/CustomForm";
import {
  AddAnotherPetEntries,
  DefaultAddAnotherPetEntriesValues,
} from "./AddAnotherPetEntries";
function AddAnotherPet() {
  // const onReceiveData = alert("hello");
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

  const { registertopethowz } = useSelector(
    (state) => state?.registertopethowz
  );
  console.log(registertopethowz, "registertopethowz");
  function onReceiveData(data1) {
    const data = {
      data: data1,
      method: "post",
      apiName: "createPetDetails",
    };
    dispatch(actions.CUSTOMER_ADD_ANOTHER_PET(data));
    console.log(data, "datadata");
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

  // function onReceiveData(data1) {
  //   console.log(data1, "checkDatasss");
  //   const data = {

  //     data: data1,
  //     method: "post",
  //     apiName: "createPetDetails",
  //   };
  //   // navigate("/Terms");
  //   dispatch(actions.CUSTOMER_ADD_ANOTHER_PET(data));
  //   console.log(data, "datadata");
  //   reset({
  //     Your_Name: "",
  //     Mobile_number: "",
  //     Email: "",
  //     Gender: "",
  //     Street: "",
  //     City: "",
  //     State: "",
  //     Pincode: "",
  //     Locality: "",
  //     Location: "",
  //   });
  // }
  return (
    // <Box>

    //   {open ? (
    //     <CustomForm
    //       AllEntries={AddAnotherPetEntries}
    //       defaultValues={DefaultAddAnotherPetEntriesValues}
    //       onReceiveData={(onclick = { onClose })}
    //     />
    //   ) : (
    //     ""
    //   )}
    // </Box>
    <Box>
      <CustomForm
        AllEntries={AddAnotherPetEntries}
        defaultValues={DefaultAddAnotherPetEntriesValues}
        onReceiveData={onReceiveData}
      />
    </Box>
  );
}
export default AddAnotherPet;
