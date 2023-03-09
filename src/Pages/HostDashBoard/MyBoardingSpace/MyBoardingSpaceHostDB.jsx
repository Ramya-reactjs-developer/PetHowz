import { Grid } from "@mui/material";
import React from "react";
import CustomTypography from "../../../Components/Typography/Typography";
import CustomButton from "../../../Components/Button/Button";
import ImageCards from "../../../Components/Cards/ImageCards";
import customImages from "../../../Utils/Images";
import { BoardingSpaceDetailList } from "../../../Components/BoardingSpaceDetailsList/BoardingSPaceDetailsList";
import CustomForm from "../../../Components/CustomForm/CustomForm";
import MealCard from "../../../Components/Cards/MealCard";
import { PetHostAmentiesEntries } from "./PetHostAmentiesEntries";
import { PetHostFoodEntries } from "./PetHostFoodEntries";

export const MyBoardingSpaceHostDB = () => {
  const [entry] = React.useState([]);
  const ListData = [
    {
      area: "1200 Sq.ft",
      size: "3 Bedrooms",
      type: "Villa",
      prefer: "Small Pets",

      capacity: "8-10 pets",
      petsAccepted: "Cats & Dogs",
      location: "Anna Nagar, Chennai",
      canProvide: "Oral Medication",
    },
  ];
  const CardData = [
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
    <Grid container item xs={12}>
      {" "}
      <Grid item textAlign={"left"} xs={12} pt={"40px"}>
        <CustomTypography
          text="My Boarding Space"
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
        <CustomTypography text="Adhi Pet Care" type="title" colorType="text" />
        <CustomButton
          btnTitle={"Edit Details"}
          color={"secondary"}
          btnStyles={{ background: "red" }}
        />
      </Grid>
      <Grid
        item
        pt={"10px"}
        // display={{
        //   xs: "block",
        //   sm: "flex",
        //   md: "flex",
        //   lg: "flex",
        //   xl: "flex",
        // }}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"flex-start"}
        // gap={{ xs: "0px", sm: "opx", md: "0px", lg: "8px", xl: "8px" }}
        gap={"18px"}
        flexWrap={"wrap"}
        // flexWrap={{
        //   xs: "wrap",
        //   sm: "wrap",
        //   md: "wrap",
        //   lg: "wrap",
        //   xl: "nowrap",
        // }}
        xs={12}
      >
        <Grid item xl={1} lg={2} md={2} sm={2} xs={12}>
          <ImageCards ImagePath={customImages.Dog1} CardWidth={"200px"} />
        </Grid>
        <Grid item xl={1} lg={2} md={2} sm={2} xs={12}>
          <ImageCards ImagePath={customImages.Dog1} CardWidth={"200px"} />
        </Grid>
        <Grid item xl={1} lg={2} md={2} sm={2} xs={12}>
          <ImageCards ImagePath={customImages.Dog1} CardWidth={"200px"} />
        </Grid>
        <Grid item xl={1} lg={2} md={2} sm={2} xs={12}>
          <ImageCards ImagePath={customImages.Dog1} CardWidth={"200px"} />
        </Grid>
        <Grid item xl={1} lg={2} md={2} sm={2} xs={12}>
          <ImageCards ImagePath={customImages.Dog1} CardWidth={"200px"} />
        </Grid>
        <Grid item xl={1} lg={2} md={2} sm={2} xs={12}>
          <ImageCards ImagePath={customImages.Dog1} CardWidth={"200px"} />
        </Grid>
        <Grid item xl={1} lg={2} md={2} sm={2} xs={12}>
          <ImageCards ImagePath={customImages.Dog1} CardWidth={"200px"} />
        </Grid>
        <Grid item xl={1} lg={2} md={2} sm={2} xs={12}>
          <ImageCards ImagePath={customImages.Dog1} CardWidth={"200px"} />
        </Grid>
        <Grid item xl={1} lg={2} md={2} sm={2} xs={12}>
          <ImageCards ImagePath={customImages.Dog1} CardWidth={"200px"} />
        </Grid>
      </Grid>
      <Grid item xs={12} pt={"40px"}>
        <BoardingSpaceDetailList Data={ListData} />
      </Grid>
      <Grid item textAlign={"left"} xs={12} pt={"60px"}>
        <CustomTypography text="Amenties" type="subHeading" colorType="text" />
      </Grid>
      <Grid item xs={12}>
        <CustomForm
          AllEntries={entry.length > 0 ? entry : PetHostAmentiesEntries}
        />
      </Grid>
      <Grid item textAlign={"left"} xs={12} pt={"60px"}>
        <CustomTypography text="Food" type="subHeading" colorType="text" />
      </Grid>
      <Grid item xs={12} pt={"20px"}>
        <CustomForm
          AllEntries={entry.length > 0 ? entry : PetHostFoodEntries}
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
        <CustomTypography text="Add Ons" type="subHeading" colorType="text" />
        <CustomButton
          btnTitle={"Add"}
          color={"secondary"}
          btnStyles={{ background: "red" }}
        />
      </Grid>
      <Grid item xs={12}>
        <MealCard Data={CardData} />
      </Grid>
    </Grid>
  );
};
