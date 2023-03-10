import { Box, Typography } from "@mui/material";
import React from "react";
import { AddAnotherEntries } from "./AddAnotherEntries";
import CustomForm from "../../../Components/CustomForm/CustomForm";

export const AddAnother = ({ open }) => {
  return <Box>{open ? <CustomForm AllEntries={AddAnotherEntries} /> : ""}</Box>;
};
