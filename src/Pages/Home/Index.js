import React from "react";
import CardsSection from "../../Components/Cards/Cards";
import { Box, Grid } from "@mui/material";

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
  return (
    // <div>
    //   HomePage
    <Grid item container>
      <Grid item>
        <Box>
          <CardsSection Data={CardData} />
        </Box>
      </Grid>
    </Grid>
  );
};
