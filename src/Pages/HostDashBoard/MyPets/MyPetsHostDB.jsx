import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import CustomTypography from "../../../Components/Typography/Typography";
import { MyPetsCards } from "../../../Components/MyPetsCards/MyPetsCards";
import CustomButton from "../../../Components/Button/Button";

export const MyPetsHostDB = () => {
  return (
    <Grid container item xs={12}>
      {" "}
      <Grid item textAlign={"left"} xs={12} pt={"40px"}>
        <CustomTypography text="My Pets" type="subHeading" colorType="text" />
      </Grid>
      <Grid item xs={12} display={"flex"} alignItems={"center"}>
        <Grid item md={8} sm={8} xs={12}>
          <MyPetsCards />{" "}
        </Grid>
      </Grid>
      <Grid
        item
        sm={4}
        xs={2}
        p={"10px"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"flex-start"}
        textAlign={"center"}
      >
        <Box>
          <CustomButton
            btnTitle="+"
            color="primary"
            btnStyles={{
              color: "white",
              width: "50px",
              height: "60px",
              borderRadius: "50%",
              fontSize: "35px",
            }}
          />
          <CustomTypography
            text="Add Another"
            type="subHeading"
            colorType="primary"
          />
        </Box>
      </Grid>
    </Grid>
  );
};
