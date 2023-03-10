import { Box, Card, CardContent, Grid } from "@mui/material";
import React from "react";
import CustomTypography from "../../../Components/Typography/Typography";
import CustomButton from "../../../Components/Button/Button";
import CustomIcons from "../../../Utils/Icons/Index";
import ServicePackagesHost from "../../../Components/Cards/ServicePackagesHost";

export const MyServicesHostDB = () => {
  const tabNames = [
    { label: "Grooming" },
    { label: "Pet Sitting" },
    { label: "Pet Walking" },
    { label: "Pet Taxi" },
  ];
  const CardData = [
    {
      type: "Spa Bath",
      price: "₹ 1999",
      offeredPrice: "₹ 999",
      service1: "Bath with Shampoo and conditioner",
      service2: "Blow Dry",
      service3: "Nail Clipping",
      service4: "Ear Cleaning",
      service5: "Paw Massage",
      service6: "Combing/Brushing",
    },
    {
      type: "Full Service",
      price: "₹ 1999",
      offeredPrice: "₹ 999",
      service1: "Bath with Shampoo and conditioner",
      service2: "Blow Dry",
      service3: "Nail Clipping",
      service4: "Ear Cleaning",
      service5: "Paw Massage",
      service6: "Combing/Brushing",
    },
    {
      type: "Paw Luxe",
      price: "₹ 1999",
      offeredPrice: "₹ 999",
      service1: "Bath with Shampoo and conditioner",
      service2: "Blow Dry",
      service3: "Nail Clipping",
      service4: "Ear Cleaning",
      service5: "Paw Massage",
      service6: "Combing/Brushing",
    },
  ];
  return (
    <Grid container item xs={12}>
      {" "}
      <Grid item textAlign={"left"} xs={12} pt={"40px"}>
        <CustomTypography
          text="MyServices"
          type="subHeading"
          colorType="text"
        />
      </Grid>
      <Grid
        item
        display={"flex"}
        alignItems={"center"}
        gap={"10px"}
        textAlign={"left"}
        xs={12}
        pt={"40px"}
      >
        <CustomTypography
          text="Services Provided"
          type="subHeading"
          colorType="text"
        />
        <CustomButton
          btnTitle={"Add"}
          color={"secondary"}
          btnStyles={{
            background: "#F85A47",
            color: "white",
            width: "130px",
            borderRadius: "15px",
          }}
        />
      </Grid>
      <Grid
        item
        display={"flex"}
        alignItems={"center"}
        justifyContent={"flex-start"}
        gap={"20px"}
        flexWrap={"wrap"}
        xs={12}
        pt={"20px"}
        textAlign={"center"}
      >
        <Grid item md={2} sm={5} xs={12}>
          <Card>
            <Box sx={{ float: "right" }}>
              <img src={CustomIcons.Edit} alt="delete" />
            </Box>
            <CardContent sx={{ pt: "30px" }}>
              <CustomTypography
                text="Sitting"
                type="subHeading"
                colorType="text"
              />
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={2} sm={5} xs={12}>
          <Card>
            <Box sx={{ float: "right" }}>
              <img src={CustomIcons.Edit} alt="delete" />
            </Box>
            <CardContent sx={{ pt: "30px" }}>
              <CustomTypography
                text="Grooming"
                type="subHeading"
                colorType="text"
              />
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={2} sm={5} xs={12}>
          <Card>
            <Box sx={{ float: "right" }}>
              <img src={CustomIcons.Edit} alt="delete" />
            </Box>
            <CardContent sx={{ pt: "30px" }}>
              <CustomTypography
                text="Walking"
                type="subHeading"
                colorType="text"
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid
        item
        display={"flex"}
        alignItems={"center"}
        gap={"10px"}
        textAlign={"left"}
        xs={12}
        pt={"40px"}
      >
        <CustomTypography
          text="Service Packages"
          type="subHeading"
          colorType="text"
        />
        <CustomButton
          btnTitle={"Add"}
          color={"secondary"}
          btnStyles={{
            background: "#F85A47",
            color: "white",
            width: "130px",
            borderRadius: "15px",
          }}
        />
      </Grid>
      <Grid item xs={12}>
        {/* <Grid md={3} sm={5} xs={12}> */}
        <ServicePackagesHost Data={CardData} />
        {/* </Grid> */}
      </Grid>
    </Grid>
  );
};
