import React from "react";
import GroomingCardsSection from "../../Components/GroomingCard/GroomingCard";
import { Grid } from "@mui/material";
import customImages from "../../Utils/Images/index";
import CustomTypography from "../../Components/Typography/Typography";
import CustomButton from "../../Components/Button/Button";
import "./Grooming.css";
import { useLocation } from "react-router-dom";

export const Grooming = () => {
  const GroomingData = [
    {
      image: customImages.Dog1,
      name: "Aadhi Pet Care",
      address: "Anna Nagar, Chennai",
      type: "Villa",
      distance: "0.2kms",
      ratings: "3.5",
      reviews: "(75 reviews)",
    },
    {
      image: customImages.Dog2,
      name: "Aadhi Pet Care",
      address: "Anna Nagar, Chennai",
      type: "Villa",
      distance: "0.2kms",
      ratings: "3.5",
      reviews: "(75 reviews)",
    },
    {
      image: customImages.Dog1,
      name: "Aadhi Pet Care",
      address: "Anna Nagar, Chennai",
      type: "Villa",
      distance: "0.2kms",
      ratings: "3.5",
      reviews: "(75 reviews)",
    },
    {
      image: customImages.Dog2,
      name: "Aadhi Pet Care",
      address: "Anna Nagar, Chennai",
      type: "Villa",
      distance: "0.2kms",
      ratings: "3.5",
      reviews: "(75 reviews)",
    },
    {
      image: customImages.Dog1,
      name: "Aadhi Pet Care",
      address: "Anna Nagar, Chennai",
      type: "Villa",
      distance: "0.2kms",
      ratings: "3.5",
      reviews: "(75 reviews)",
    },
    {
      image: customImages.Dog2,
      name: "Aadhi Pet Care",
      address: "Anna Nagar, Chennai",
      type: "Villa",
      distance: "0.2kms",
      ratings: 3.5,
      reviews: "(75 reviews)",
    },
    {
      image: customImages.Dog1,
      name: "Aadhi Pet Care",
      address: "Anna Nagar, Chennai",
      type: "Villa",
      distance: "0.2kms",
      ratings: "3.5",
      reviews: "(75 reviews)",
    },
    {
      image: customImages.Dog2,
      name: "Aadhi Pet Care",
      address: "Anna Nagar, Chennai",
      type: "Villa",
      distance: "0.2kms",
      ratings: "3.5",
      reviews: "(75 reviews)",
    },
    {
      image: customImages.Dog1,
      name: "Aadhi Pet Care",
      address: "Anna Nagar, Chennai",
      type: "Villa",
      distance: "0.2kms",
      ratings: "3.5",
      reviews: "(75 reviews)",
    },
    {
      image: customImages.Dog2,
      name: "Aadhi Pet Care",
      address: "Anna Nagar, Chennai",
      type: "Villa",
      distance: "0.2kms",
      ratings: "3.5",
      reviews: "(75 reviews)",
    },
  ];
  const { state } = useLocation();
  console.log(state, "state");

  return (
    <Grid className="container" item md={12} lg={12} sm={12} xs={12}>
      <Grid item md={12} lg={12} sm={12} xs={12}>
        <CustomTypography
          text="Grooming"
          type="header"
          customClass="groomText"
        />
      </Grid>
      <Grid item md={12} lg={12} sm={12} xs={12}>
        <GroomingCardsSection Data={state} />
      </Grid>
      <Grid item md={12} lg={12} sm={12} xs={12} className="groomButton">
        <CustomButton
          btnTitle="Load More Spaces"
          color="primary"
          customClass="groomCardStyles"
          fontSize="12px"
        />
      </Grid>
    </Grid>
  );
};
