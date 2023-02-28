import { Box, Grid } from "@mui/material";
import React from "react";

import SingleImageUploader from "../../Components/ImageUploader/SingleImageUploader";
import MultiImageUploader from "../../Components/ImageUploader/MultiImageUploader";

export const BasicDetails = () => {
  return (
    <Grid container item>
      <Box>
        BasicDetails
        <MultiImageUploader />
        <SingleImageUploader />
      </Box>
    </Grid>
  );
};
