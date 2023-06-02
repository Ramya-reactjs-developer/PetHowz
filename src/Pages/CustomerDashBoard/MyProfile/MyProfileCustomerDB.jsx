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
import {
  ChangeAddressHost,
  ChangeEmailHost,
  ChangeNumberHost,
  HostProfileDetails,
} from "../../HostDashBoard/MyProfile/ProfileHostStyle";
import "../cusStyle.css";
import Bg from "../../../Assets/Images/coming-soon3.png";

export const MyProfileCustomerDB = () => {
  return (
    <Grid container item xs={12}>
      {" "}
      <Grid
        container
        className="bodyContent"
        item
        xl={12}
        lg={12}
        md={12}
        sm={12}
        xs={12}
      >
        <Grid item textAlign={"left"} xs={12}>
          <CustomTypography
            text="My Profile"
            type="subHeading"
            colorType="text"
          />
        </Grid>
        <Grid
          item
          display={{ sm: "flex", xs: "block" }}
          justifyContent={"flex-start"}
          gap={"40px"}
          flexWrap={"wrap"}
          xs={12}
        >
          <Grid item lg={2} md={3} sm={4} xs={12} textAlign={"center"}>
            <ProfileImageUploader2 />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CustomTypography text="john" type="title" colorType="text" />
              {/* 
            <CustomButton
              btnTitle={<img src={CustomIcons.Edit} alt="edit" />}
              color="primary"
              btnStyles={{ border: "none" }}
            /> */}
            </Box>
          </Grid>
          <Grid item lg={4} md={6} sm={8} xs={12}>
            <Box>
              <Box sx={HostProfileDetails}>
                <CustomTypography
                  text="john@gmail.com"
                  type="title"
                  colorType="text"
                />
                <CustomButton
                  btnTitle={"Change email"}
                  color="primary"
                  btnStyles={ChangeEmailHost}
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
                  btnStyles={ChangeNumberHost}
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
                  btnStyles={ChangeAddressHost}
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
        <Grid item textAlign={"left"} xs={12} pt={"40px"}>
          <CustomTypography
            text="About Me"
            type="subHeading"
            colorType="text"
          />
        </Grid>
        <Grid
          container
          textAlign={"left"}
          md={12}
          lg={12}
          sm={12}
          xs={12}
          pt={"20px"}
        >
          {/* <Grid container item md={10} lg={10} sm={12} xs={12} pl={2}> */}

          <Grid item md={4} sm={6} xs={6}>
            <CustomTypography
              type="head"
              text={"Professional Pet Boarder"}
              customClass="serviceProfessional"
            />
          </Grid>
          <Grid item md={2} sm={6} xs={6}>
            <CustomTypography
              type="head"
              text={"2 Years"}
              customClass="serviceYear"
            />
          </Grid>
          <Grid item md={12} lg={12} sm={12} xs={12} pt={2}>
            <CustomTypography
              type="head1"
              text={
                "I am a pet lover and would love to take care of furry friends. I have a 5 year old dog at my parents house, but I don't have any pets right here in Bangalore at my place. I absolutely adore animals, and as I work from home I think I would be able to properly take care of them. I have taken care of my own dog in my hometown for 5 years, a labrador named Alex. I have d1 pet sitting for a lot of my friends. I do realise if the pet is not doing well by observing their eating habits and how active they are. I have also given oral medications to my own dog. Also, I will not leave the pet unattended at anytime. I will accept any bookings according to my schedule only. I'll have all the treats in the world to pamper these furry friends. Although I don't have much experience in grooming, I used to get my dog groomed from the veterinarian clinic. I will provide a loving and comfortable stay for the pets and I will absolutely be very careful everytime I am pet sitting :)"
              }
              customClass="serviceContent"
            />
          </Grid>
          {/* </Grid> */}
        </Grid>
      </Grid>
      <Grid
        container
        className="imageBg"
        item
        xl={12}
        lg={12}
        md={12}
        sm={12}
        xs={12}
      >
        <img src={Bg} alt="vf" />
      </Grid>
    </Grid>
  );
};
