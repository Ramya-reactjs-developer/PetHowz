import { Box, Grid } from "@mui/material";
import React from "react";
import CustomTypography from "../../../Components/Typography/Typography";
import ProfileImageUploader2 from "../../../Components/ProfileImageUploader2/ProfileImageUploader2";
import CustomButton from "../../../Components/Button/Button";
import {
  ChangeAddressBtn,
  ChangeEmailBtn,
  ChangeNumberBtn,
  CustomerDetailsPosition,
  CustomerProfilePostion,
} from "./CustomerProfileStyle";

export const MyProfileCustomerDB = () => {
  return (
    <Grid container item xs={12}>
      {" "}
      <Grid item textAlign={"left"} xs={12} pt={"40px"}>
        <CustomTypography
          text="My Profile"
          type="subHeading"
          colorType="text"
        />
      </Grid>
      <Grid
        item
        // display={{ sm: "flex", xs: "block" }}
        // justifyContent={"flex-start"}
        pt={"20px"}
        xs={12}
      >
        <Grid item lg={2} md={3} sm={4} xs={12} textAlign={"center"}>
          <ProfileImageUploader2 />
          <Box sx={CustomerProfilePostion}>
            <CustomTypography text="john" type="title" colorType="text" />
            {/* 
            <CustomButton
              btnTitle={<img src={CustomIcons.Edit} alt="edit" />}
              color="primary"
              btnStyles={{ border: "none" }}
            /> */}
          </Box>
        </Grid>
        <Grid item sm={5} xs={12}>
          <Box>
            <Box sx={CustomerDetailsPosition}>
              <CustomTypography
                text="john@gmail.com"
                type="title"
                colorType="text"
              />
              <CustomButton
                btnTitle={"Change email"}
                color="primary"
                btnStyles={ChangeEmailBtn}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <CustomTypography
                text="+ 91 99876 55432"
                type="title"
                colorType="text"
              />
              <CustomButton
                btnTitle={"Change Phone Number"}
                color="primary"
                btnStyles={ChangeNumberBtn}
              />
            </Box>
            <Box>
              <CustomTypography
                text="B4/1, Sowbhagya Apts, 2nd Avenue,Anna Nagar East, Anna Nagar Roundtana, Chennai, Tamil Nadu - 600102."
                type="title"
                colorType="text"
              />
              <CustomButton
                btnTitle={"Change Address"}
                color="primary"
                btnStyles={ChangeAddressBtn}
              />
            </Box>

            {/* <Box>
              <CustomTypography
                text=" Anna Nagar East, Anna Nagar Roundtana, Chennai, Tamil Nadu - 600102."
                type="title"
                colorType="text"
              />
              <CustomButton btnTitle={"Change Address"} color="primary" />
            </Box> */}
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};
