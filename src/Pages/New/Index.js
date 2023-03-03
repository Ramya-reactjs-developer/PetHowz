import { Box, Grid, Typography } from "@mui/material";
import React from "react";

// import SingleImageUploader from "../../Components/ImageUploader/SingleImageUploader";
// import MultiImageUploader from "../../Components/ImageUploader/MultiImageUploader";
// import ServicePackagesCards from "../../Components/Cards/ServicePackagesCard";
import CustomForm from "../../Components/CustomForm/CustomForm";
import { PetHostBasicDetailsEntries } from "./PetHostBasicDetailsEntries";
import { PetHostAboutYouEntries } from "./PetHostAboutYouEntries";
import { PetHostAddOnEntries } from "./PetHostAddOnEntries";

export const BasicDetails = () => {
  const [entry, setEntry] = React.useState([]);
  // const CardData = [
  //   {
  //     price: "₹ 1999",
  //     offeredPrice: "₹ 999",
  //     service1: "Bath with Shampoo and conditioner",
  //     service2: "Blow Dry",
  //     service3: "Nail Clipping",
  //     service4: "Ear Cleaning",
  //     service5: "Paw Massage",
  //     service6: "Combing/Brushing",
  //   },
  // ];
  return (
    <Grid container item>
      <Box>
        {/* <MultiImageUploader />
        <SingleImageUploader />
        <ServicePackagesCards Data={CardData} /> */}
        <Box>
          <Typography variant="h4">Fill Up Your Basic Details</Typography>
          <CustomForm
            AllEntries={entry.length > 0 ? entry : PetHostBasicDetailsEntries}
          />
        </Box>
        <Box>
          <Typography variant="h4">Fill Up Details About You</Typography>
          <CustomForm
            AllEntries={entry.length > 0 ? entry : PetHostAboutYouEntries}
          />
        </Box>
        <Box>
          <Typography variant="h4">
            Fill Up Details About Your Add on Package
          </Typography>
          <CustomForm
            AllEntries={entry.length > 0 ? entry : PetHostAddOnEntries}
          />
        </Box>
      </Box>
    </Grid>
  );
};
