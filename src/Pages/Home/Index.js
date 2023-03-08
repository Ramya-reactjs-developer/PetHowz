import React, { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import SearchBar from "../../Components/Search/SearchBar";

import "./Home.css";
import CustomButton from "../../Components/Button/Button";
import ImageCards from "../../Components/Cards/ImageCards";
import customImages from "../../Utils/Images";
import CardsSection from "../../Components/Cards/Cards";
import CustomTypography from "../../Components/Typography/Typography";
import {
  DiscoverButtonStyle,
  HomeBanner,
  SearchBarStyle,
  SearchButtonPadding,
  SearchButtonStyle,
} from "./HomeStyle";

export const HomePage = () => {
  const CardData = [
    {
      image: customImages.s6,
      name: "Aadhi Pet Care",
      address: "Anna Nagar,Chennai",
      type: "Villa",
      distance: "0.2kms",
      ratings: "3.5",
      reviews: "(75 reviews)",
    },
    {
      image: customImages.s6,
      name: "Aadhi Pet Care",
      address: "Anna Nagar,Chennai",
      type: "Villa",
      distance: "0.2kms",
      ratings: "3.5",
      reviews: "(75 reviews)",
    },
    {
      image: customImages.s6,
      name: "Aadhi Pet Care",
      address: "Anna Nagar,Chennai",
      type: "Villa",
      distance: "0.2kms",
      ratings: "3.5",
      reviews: "(75 reviews)",
    },
    {
      image: customImages.s6,
      name: "Aadhi Pet Care",
      address: "Anna Nagar,Chennai",
      type: "Villa",
      distance: "0.2kms",
      ratings: "3.5",
      reviews: "(75 reviews)",
    },
    {
      image: customImages.s6,
      name: "Aadhi Pet Care",
      address: "Anna Nagar,Chennai",
      type: "Villa",
      distance: "0.2kms",
      ratings: "3.5",
      reviews: "(75 reviews)",
    },
    {
      image: customImages.s6,
      name: "Aadhi Pet Care",
      address: "Anna Nagar,Chennai",
      type: "Villa",
      distance: "0.2kms",
      ratings: 3.5,
      reviews: "(75 reviews)",
    },
    {
      image: customImages.s6,
      name: "Aadhi Pet Care",
      address: "Anna Nagar,Chennai",
      type: "Villa",
      distance: "0.2kms",
      ratings: "3.5",
      reviews: "(75 reviews)",
    },
    {
      image: customImages.s6,
      name: "Aadhi Pet Care",
      address: "Anna Nagar,Chennai",
      type: "Villa",
      distance: "0.2kms",
      ratings: "3.5",
      reviews: "(75 reviews)",
    },
    {
      image: customImages.s6,
      name: "Aadhi Pet Care",
      address: "Anna Nagar,Chennai",
      type: "Villa",
      distance: "0.2kms",
      ratings: "3.5",
      reviews: "(75 reviews)",
    },
    {
      image: customImages.s6,
      name: "Aadhi Pet Care",
      address: "Anna Nagar,Chennai",
      type: "Villa",
      distance: "0.2kms",
      ratings: "3.5",
      reviews: "(75 reviews)",
    },
  ];

  const [searchData, setSearchData] = useState("");

  console.log(searchData, "ss");
  const OnSetSearch = (e) => {
    setSearchData(e.target.value);
  };

  useEffect(() => {}, [searchData]);

  return (
    // <div>
    //   HomePage
    <Grid item container xl={12} lg={12} md={12} sm={12} xs={12}>
      <Grid
        // alignItems={"center"}
        // justifyContent={"center"}
        item
        xl={12}
        lg={12}
        md={12}
        sm={12}
        xs={12}
      >
        <div className="Home-Banner">
          <Box sx={HomeBanner}>
            <Box>
              <Box>
                {/* <Typography variant="h3" fontWeight="bolder" color="primary">
                  FIND PET BOARDING SPACES
                </Typography>
                <Typography variant="h3" fontWeight="bolder" color="primary">
                  & PET SERVICE PROVIDERS
                </Typography> */}
                <CustomTypography
                  text="FIND PET BOARDING SPACES"
                  type="heading2"
                  colorType="primary"
                />
                <CustomTypography
                  text="& PET SERVICE PROVIDERS"
                  type="heading2"
                  colorType="primary"
                />
              </Box>
              <Box sx={SearchBarStyle}>
                <Box>
                  <SearchBar
                    SearchValue={searchData}
                    handleSearch={(e) => {
                      OnSetSearch(e);
                    }}
                  />
                </Box>
                <Box sx={SearchButtonPadding}>
                  <CustomButton
                    btnTitle="Search Now"
                    color="primary"
                    btnStyles={SearchButtonStyle}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </div>
      </Grid>
      <Grid item md={12} sm={12} xs={12} textAlign={"center"}>
        {/* <Typography variant="h3" textAlign="center">
          Our Services
        </Typography> */}
        <CustomTypography
          text="Our Services"
          type="heading2"
          colorType="text"
        />
      </Grid>

      <Grid
        item
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        flexWrap={"wrap"}
        pl={{ lg: "0px", md: "150px", sm: "30px" }}
        pr={{ lg: "0px", md: "150px", sm: "10px" }}
        md={12}
        xs={12}
        pt={"30px"}
      >
        <Grid item justifyContent={"center"} lg={3} md={6} sm={6} xs={12}>
          <Box>
            <ImageCards
              ImagePath={customImages.s1}
              CardWidth={"325px"}
              CardHeight={"600px"}
              ImageWidth={"325px"}
              ImageHeight={"600px"}
              service={"Pet Grooming"}
              sub={"Starting From ₹ 700"}
            />
          </Box>
          <Box sx={{ pt: "20px" }}>
            <ImageCards
              ImagePath={customImages.s2}
              CardWidth={"325px"}
              CardHeight={"300px"}
              ImageWidth={"325px"}
              ImageHeight={"300px"}
              service={"Pet Relocation"}
              sub={"Starting From ₹ 700"}
            />
          </Box>
        </Grid>
        <Grid item lg={3} md={6} sm={6} xs={12} pt={{ sm: 0, xs: "20px" }}>
          <Box>
            {" "}
            <ImageCards
              ImagePath={customImages.s3}
              CardWidth={"325px"}
              CardHeight={"300px"}
              ImageWidth={"325px"}
              ImageHeight={"300px"}
              service={"Pet Walking"}
              sub={"Starting From ₹ 700"}
            />
          </Box>
          <Box sx={{ pt: "20px" }}>
            <ImageCards
              ImagePath={customImages.s4}
              CardWidth={"325px"}
              CardHeight={"600px"}
              ImageWidth={"325px"}
              ImageHeight={"600px"}
              service={"Pet Sitting"}
              sub={"Starting From ₹ 700"}
            />
          </Box>
        </Grid>
        <Grid
          item
          lg={3}
          md={6}
          sm={6}
          xs={12}
          pt={{ lg: "0px", md: "40px", xs: "20px" }}
        >
          <Box>
            {" "}
            <ImageCards
              ImagePath={customImages.s5}
              CardWidth={"325px"}
              CardHeight={"600px"}
              ImageWidth={"325px"}
              ImageHeight={"600px"}
              service={"Pet Taxi"}
              sub={"Starting From ₹ 700"}
            />
          </Box>
          <Box sx={{ pt: "20px" }}>
            <ImageCards
              ImagePath={customImages.s6}
              CardWidth={"325px"}
              CardHeight={"300px"}
              ImageWidth={"325px"}
              ImageHeight={"300px"}
              service={"Pet Breeding"}
              sub={"Starting From ₹ 700"}
            />
          </Box>
        </Grid>
        <Grid
          item
          lg={3}
          md={6}
          sm={6}
          xs={12}
          pt={{ lg: "0px", md: "40px", xs: "20px" }}
        >
          <Box>
            {" "}
            <ImageCards
              ImagePath={customImages.s7}
              CardWidth={"325px"}
              CardHeight={"300px"}
              ImageWidth={"325px"}
              ImageHeight={"300px"}
              service={"Pet Training"}
              sub={"Starting From ₹ 700"}
            />
          </Box>
          <Box sx={{ pt: "20px" }}>
            <ImageCards
              ImagePath={customImages.s8}
              CardWidth={"325px"}
              CardHeight={"600px"}
              ImageWidth={"325px"}
              ImageHeight={"600px"}
              service={"Pet Photography"}
              sub={"700 Jobs"}
            />
          </Box>
        </Grid>
        {/* </Box> */}
      </Grid>
      <Grid item textAlign={"center"} xs={12} pt={"40px"} pb={"40px"}>
        <CustomButton
          btnTitle="Discover More!"
          color="primary"
          btnStyles={DiscoverButtonStyle}
        />
      </Grid>
      <Grid
        item
        xs={12}
        sx={{ background: "#ffeee8", mt: "30px", pt: "50px", pb: "30px" }}
      >
        <Grid item xs={12} pt={"30px"}>
          <Typography fontSize={"40px"} textAlign="center">
            Recommended{" "}
            <span style={{ fontWeight: "bold" }}>Pet Boarding Spaces </span>{" "}
            Near You
          </Typography>
        </Grid>
        <Grid item xs={12} sx={{ pt: "10px", pb: "10px" }}>
          <Box>
            <CardsSection Data={CardData} />
          </Box>
        </Grid>
        <Grid item textAlign={"center"} xs={12} pt={"60px"} pb={"60px"}>
          <CustomButton
            btnTitle="Discover More!"
            color="primary"
            btnStyles={DiscoverButtonStyle}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};
