import { Box, Typography } from "@mui/material";
import React from "react";
import CustomForm from "../../../Components/CustomForm/CustomForm";
import {
  AddAnotherPetEntries,
  DefaultAddAnotherPetEntriesValues,
} from "./AddAnotherPetEntries";

export const AddAnotherPet = ({ open, onClose }) => {
  return (
    <Box>
      {open ? (
        <CustomForm
          AllEntries={AddAnotherPetEntries}
          defaultValues={DefaultAddAnotherPetEntriesValues}
          onReceiveData={(onclick = { onClose })}
        />
      ) : (
        ""
      )}
    </Box>
  );
};
