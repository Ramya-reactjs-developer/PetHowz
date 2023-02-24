import React, { useEffect, useState } from "react";
import CardsSection from "../../Components/Cards/Cards";
import { Box, Grid, Typography } from "@mui/material";
import SearchBar from "../../Components/Search/SearchBar";
import { CustomImage } from "../../Utils/Images/Index";

export const HomePage = () => {
  const CardData = [
    {
      image:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--Zib71Fgv--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/n082uxea33j6zq3mca7u.png",
      name: "Aadhi Pet Care",
      address: "Anna Nagar, Chennai",
      type: "Villa",
      distance: "0.2kms",
      ratings: "3.5",
      reviews: "(75 reviews)",
    },
    {
      image:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--Zib71Fgv--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/n082uxea33j6zq3mca7u.png",
      name: "Aadhi Pet Care",
      address: "Anna Nagar, Chennai",
      type: "Villa",
      distance: "0.2kms",
      ratings: "3.5",
      reviews: "(75 reviews)",
    },
    {
      image:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--Zib71Fgv--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/n082uxea33j6zq3mca7u.png",
      name: "Aadhi Pet Care",
      address: "Anna Nagar, Chennai",
      type: "Villa",
      distance: "0.2kms",
      ratings: "3.5",
      reviews: "(75 reviews)",
    },
    {
      image:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--Zib71Fgv--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/n082uxea33j6zq3mca7u.png",
      name: "Aadhi Pet Care",
      address: "Anna Nagar, Chennai",
      type: "Villa",
      distance: "0.2kms",
      ratings: "3.5",
      reviews: "(75 reviews)",
    },
    {
      image:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--Zib71Fgv--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/n082uxea33j6zq3mca7u.png",
      name: "Aadhi Pet Care",
      address: "Anna Nagar, Chennai",
      type: "Villa",
      distance: "0.2kms",
      ratings: "3.5",
      reviews: "(75 reviews)",
    },
    {
      image:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--Zib71Fgv--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/n082uxea33j6zq3mca7u.png",
      name: "Aadhi Pet Care",
      address: "Anna Nagar, Chennai",
      type: "Villa",
      distance: "0.2kms",
      ratings: 3.5,
      reviews: "(75 reviews)",
    },
    {
      image:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--Zib71Fgv--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/n082uxea33j6zq3mca7u.png",
      name: "Aadhi Pet Care",
      address: "Anna Nagar, Chennai",
      type: "Villa",
      distance: "0.2kms",
      ratings: "3.5",
      reviews: "(75 reviews)",
    },
    {
      image:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--Zib71Fgv--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/n082uxea33j6zq3mca7u.png",
      name: "Aadhi Pet Care",
      address: "Anna Nagar, Chennai",
      type: "Villa",
      distance: "0.2kms",
      ratings: "3.5",
      reviews: "(75 reviews)",
    },
    {
      image:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--Zib71Fgv--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/n082uxea33j6zq3mca7u.png",
      name: "Aadhi Pet Care",
      address: "Anna Nagar, Chennai",
      type: "Villa",
      distance: "0.2kms",
      ratings: "3.5",
      reviews: "(75 reviews)",
    },
    {
      image:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--Zib71Fgv--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/n082uxea33j6zq3mca7u.png",
      name: "Aadhi Pet Care",
      address: "Anna Nagar, Chennai",
      type: "Villa",
      distance: "0.2kms",
      ratings: "3.5",
      reviews: "(75 reviews)",
    },
  ];

  const CardData2 = [
    {
      mealImage:
        "https://static.onecms.io/wp-content/uploads/sites/19/2019/02/19/apple-quinoa-bowl-with-cinnamon-ricotta-1809-p102-2000.jpg",
      meal1: "Scrambled Egg 1 Nos",
      meal2: "Boiled Rice - 1 Bowl",
      meal3: "Steamed Carrot - 60 gms",
      meal4: "Chicken Breast - 60 gms",
      price: "₹ 450",
    },
  ];
  const [searchData, setSearchData] = useState("");
  const [iconValue, seticonValue] = useState(false);
  console.log(searchData, "ss");
  const OnSetSearch = (e) => {
    setSearchData(e.target.value);
  };
  const onSetIcon = () => {
    if (searchData !== "") {
      seticonValue(true);
    } else {
      seticonValue(false);
    }
  };
  console.log(iconValue, "v");
  useEffect(() => {
    onSetIcon();
  }, [searchData, iconValue]);
  return (
    // <div>
    //   HomePage
    <Grid item container>
      <Grid item xl={12} lg={12} md={12}>
        <Box
          sx={{
            width: "100%",
            height: "50vh",
            textAlign: "center",
          }}
        >
          <Box
          // sx={{
          //   backgroundImage: `url("../../Assets/Images/Screenshot (1) - Copy.png")`,
          //   backgroundRepeat: "no-repeat",
          //   backgroundSize: "100px",
          // }}
          >
            <img src={CustomImage.Bg} alt="bg" width={100} />
            <img src={CustomImage.Screenshot} alt="bg" width={100} />
            <Typography variant="h3" fontWeight="bolder" color="primary">
              FIND PET BOARDING SPACES
            </Typography>
            <Typography variant="h3" fontWeight="bolder" color="primary">
              & PET SERVICE PROVIDERS
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            <Box>
              <SearchBar
                SearchValue={searchData}
                handleSearch={(e) => {
                  OnSetSearch(e);
                  onSetIcon();
                }}
                iconValue={iconValue}
              />
            </Box>
            <Box>
              {/* <CustomButton
                btnTitle="Search Now"
                color="primary"
                fontSize="12px"
              /> */}
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid item>
        <Box>
          <CardsSection Data={CardData} />
        </Box>
      </Grid>
    </Grid>
  );
};
