import React from "react";
import customImages from "../../Utils/Images";
import {
  Box,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
} from "@mui/material";
import {
  AddressPosition,
  AddressSubPosition1,
  AddressSubPosition2,
  CardBtnStyles,
  CardMediaSize,
  CardSize,
  OverAllCArdPostions,
  ReviewsPosition,
} from "../../Components/Cards/Style";
import CustomTypography from "../../Components/Typography/Typography";
import CustomIcons from "../../Utils/Icons/Index";
import { CustomizedRatings } from "../../Components/StarRatings/CustomizedRatings";
import CustomButton from "../../Components/Button/Button";
import ImageCards from "../../Components/Cards/ImageCards";

export const AllServices = () => {
  const AllSevices = [
    {
      image: customImages.s1,
      service: "Pet Grooming",
      sub: "Starting From ₹ 700",
      CardWidth: "325px",
      CardHeight: "600px",
      ImageWidth: "325px",
      ImageHeight: "600px",
    },
    {
      image: customImages.s2,
      service: "Pet Relocation",
      sub: "Starting From ₹ 700",
      CardWidth: "325px",
      CardHeight: "300px",
      ImageWidth: "325px",
      ImageHeight: "300px",
    },
    {
      image: customImages.s3,
      service: "Pet Walking",
      sub: "Starting From ₹ 700",
      CardWidth: "325px",
      CardHeight: "300px",
      ImageWidth: "325px",
      ImageHeight: "300px",
    },
    {
      image: customImages.s4,
      service: "Pet Sitting",
      sub: "Starting From ₹ 700",
      CardWidth: "325px",
      CardHeight: "600px",
      ImageWidth: "325px",
      ImageHeight: "600px",
    },
    {
      image: customImages.s5,
      service: "Pet Taxi",
      sub: "Starting From ₹ 700",
      CardWidth: "325px",
      CardHeight: "600px",
      ImageWidth: "325px",
      ImageHeight: "600px",
    },
    {
      image: customImages.s6,
      service: "Pet Breeding",
      sub: "Starting From ₹ 700",
      CardWidth: "325px",
      CardHeight: "300px",
      ImageWidth: "325px",
      ImageHeight: "300px",
    },
    {
      image: customImages.s7,
      service: "Pet Training",
      sub: "Starting From ₹ 700",
      CardWidth: "325px",
      CardHeight: "300px",
      ImageWidth: "325px",
      ImageHeight: "300px",
    },
    {
      image: customImages.s8,
      service: "Pet Photography",
      sub: "Starting From ₹ 700",
      CardWidth: "325px",
      CardHeight: "600px",
      ImageWidth: "325px",
      ImageHeight: "600px",
    },
  ];

  return (
    <Grid
      container
      // sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      item
      xs={12}
      pt={"20px"}
    >
      <Grid item textAlign={"left"} xs={12} pt={"40px"}>
        <CustomTypography
          text="Pet Services Near You"
          type="heading3"
          colorType="text"
        />
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",

          justifyContent: { sm: "flex-start", xs: "center" },
          flexWrap: "wrap",
          gap: "30px",
          p: "20px",
        }}
      >
        {AllSevices.map((item, key) => {
          return (
            <Box key={key}>
              <ImageCards
                ImagePath={item.image}
                CardWidth={{
                  xl: "375",
                  lg: "325px",
                  md: "300px",
                  sm: "280px",
                  xs: "325px",
                }}
                CardHeight={"470px"}
                ImageWidth={{
                  xl: "375",
                  lg: "325px",
                  md: "300px",
                  sm: "280px",
                  xs: "325px",
                }}
                ImageHeight={"470px"}
                service={item.service}
                sub={item.sub}
              />
            </Box>
          );
        })}
      </Grid>
    </Grid>
  );
};
