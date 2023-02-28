import React, { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import SearchBar from "../../Components/Search/SearchBar";

import "./Home.css";
import CustomButton from "../../Components/Button/Button";
import ImageCards from "../../Components/Cards/ImageCards";
import customImages from "../../Utils/Images";
import CardsSection from "../../Components/Cards/Cards";

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
          <Box
            sx={{
              pt: { xl: "0rem", lg: "0px", md: "0px", sm: "0px", xs: "0rem" },
              width: "100%",
              height: "100vh",
              display: "flex",
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box>
              <Box>
                <Typography variant="h3" fontWeight="bolder" color="primary">
                  FIND PET BOARDING SPACES
                </Typography>
                <Typography variant="h3" fontWeight="bolder" color="primary">
                  & PET SERVICE PROVIDERS
                </Typography>
              </Box>
              <Box
                sx={{
                  display: {
                    xl: "flex",
                    lg: "flex",
                    md: "flex",
                    sm: "flex",
                    xs: "block",
                  },

                  alignItems: "center",
                  justifyContent: "center",
                  gap: "20px",
                  pt: "40px",
                  textAlign: "center",
                }}
              >
                <Box>
                  <SearchBar
                    SearchValue={searchData}
                    handleSearch={(e) => {
                      OnSetSearch(e);
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    pt: {
                      xl: "0px",
                      lg: "0px",
                      md: "0px",
                      sm: "0px",
                      xs: "1rem",
                    },
                  }}
                >
                  <CustomButton
                    btnTitle="Search Now"
                    color="primary"
                    btnStyles={{
                      p: "20px",
                      borderRadius: "40px",
                      width: {
                        xl: "200px",
                        lg: "200px",
                        md: "200px",
                        sm: "200px",
                        xs: "200px",
                      },
                      color: "white",
                      fontSize: "19px",
                      fontWeight: "bold",
                    }}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </div>
      </Grid>
      <Grid item md={12} sm={12} xs={12}>
        <Typography variant="h3" textAlign="center">
          Our Services
        </Typography>
      </Grid>

      <Grid
        item
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        // justifyContent={"center"}
        flexWrap={"wrap"}
        pl={{ lg: "0px", md: "150px", sm: "30px" }}
        pr={{ lg: "0px", md: "150px", sm: "10px" }}
        rowSpacing={12}
        // rowGap={12}
        // alignItems={{ md: "none", sm: "center" }}
        // justifyContent={{ md: "none", sm: "center" }}
        // flexWrap={"wrap"}
        md={12}
        xs={12}
        pt={"30px"}
      >
        {/* <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            mx: "auto",
          }}
        > */}

        <Grid item lg={3} md={6} sm={6} xs={12}>
          <Box>
            <ImageCards
              ImagePath={customImages.s1}
              CardWidth={"325px"}
              CardHeight={"600px"}
              ImageWidth={"325px"}
              ImageHeight={"600px"}
              // CardWidth={{ lg: "320px", md: "230px", xs: "300px" }}
              // CardHeight="580px"
            />
          </Box>
          <Box sx={{ pt: "20px" }}>
            <ImageCards
              ImagePath={customImages.s2}
              CardWidth={"325px"}
              CardHeight={"300px"}
              ImageWidth={"325px"}
              ImageHeight={"300px"}
              // CardWidth={{ lg: "325px", md: "230px", xs: "300px" }}
              // CardHeight="300px"
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
              // CardWidth={{ lg: "325px", md: "230px", xs: "300px" }}
              // CardHeight={{ lg: "320px", md: "320px" }}
            />
          </Box>
          <Box sx={{ pt: "20px" }}>
            <ImageCards
              ImagePath={customImages.s4}
              CardWidth={"325px"}
              CardHeight={"600px"}
              ImageWidth={"325px"}
              ImageHeight={"600px"}
              // CardWidth={{ lg: "325px", md: "230px", xs: "300px" }}
              // CardHeight="600px"
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
              // CardWidth={{ lg: "325px", md: "230px", xs: "300px" }}
              // CardHeight={{ lg: "600px", md: "280px" }}
            />
          </Box>
          <Box sx={{ pt: "20px" }}>
            <ImageCards
              ImagePath={customImages.s6}
              CardWidth={"325px"}
              CardHeight={"300px"}
              ImageWidth={"325px"}
              ImageHeight={"300px"}
              // CardWidth={{ lg: "325px", md: "230px", xs: "300px" }}
              // ImageHeight="280px"
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
              // CardWidth={{ lg: "325px", md: "230px", xs: "300px" }}
              // CardHeight="300px"
            />
          </Box>
          <Box sx={{ pt: "20px" }}>
            <ImageCards
              ImagePath={customImages.s8}
              CardWidth={"325px"}
              CardHeight={"600px"}
              ImageWidth={"325px"}
              ImageHeight={"600px"}

              // CardWidth={{ lg: "325px", md: "230px", xs: "300px" }}
              // CardHeight={{ lg: "600px", md: "300px" }}
            />
          </Box>
        </Grid>
        {/* </Box> */}
      </Grid>
      <Grid item textAlign={"center"} xs={12} pt={"40px"} pb={"40px"}>
        <CustomButton
          btnTitle="Discover More!"
          color="primary"
          btnStyles={{
            p: "20px",
            borderRadius: "40px",
            width: {
              xs: "250px",
            },
            color: "white",
            fontSize: "19px",
            fontWeight: "bold",
          }}
        />
      </Grid>
      <Grid
        item
        xs={12}
        sx={{ background: "#ffeee8", mt: "30px", pt: "50px", pb: "30px" }}
      >
        <Grid item xs={12} pt={"30px"}>
          <Typography variant="h3" textAlign="center">
            Recommended Pet Boarding Spaces Near You
          </Typography>
        </Grid>
        {/* <Box sx={{ pt: "40px", pb: "40px" }}>
          <Box>
            <CardsSection Data={CardData} />
          </Box>
        </Box> */}
        <Grid item textAlign={"center"} xs={12} pt={"60px"} pb={"60px"}>
          <CustomButton
            btnTitle="Discover More!"
            color="primary"
            btnStyles={{
              p: "20px",
              borderRadius: "40px",
              width: {
                xs: "250px",
              },
              color: "white",
              fontSize: "19px",
              fontWeight: "bold",
            }}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};
