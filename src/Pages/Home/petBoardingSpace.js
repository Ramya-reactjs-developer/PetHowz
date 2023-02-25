import React from "react";
import PetBoardImageCards from "../../Components/PetBoardCard/PetBoardImageCards";
import CustomImages from "../../Utils/Images/index";
import { Box, Grid } from "@mui/material";
import CustomTypography from "../../Components/Typography/Typography";
import "./petBoard.css";
export const PetBoardingSpace = () => {
  // const CardData = Data;
  const imagePath = [
    {
      imagePath: CustomImages.Dog1,
    },
    {
      imagePath: CustomImages.Dog2,
    },
    {
      imagePath: CustomImages.Dog1,
    },
    {
      imagePath: CustomImages.Dog2,
    },
  ];
  return (
    <Grid container md={12} sm={12} lg={12} xs={12}>
      <Grid container md={12} sm={12} lg={12} xs={12} className="petImage">
        <Grid item md={6} sm={6} lg={6} xs={12}>
          {/* {CardData?.map((item) => {
            return ( */}
          <PetBoardImageCards
            imagePath={CustomImages.Dog1}
            // imagePath={imagePath}
            customClass="PetBoardImage"
          />
          {/* );
          })} */}
        </Grid>
        <Grid item md={6} sm={6} xs={12} className="petHostHeader">
          <Grid>
            <Grid item md={12} sm={12} lg={12} xs={12} className="pet-heading">
              <CustomTypography
                text="Become a Pet Host"
                type="header"
                customClass="petHost"
              />
            </Grid>
            <Grid item md={12} sm={12} lg={12} xs={12} className="petChoose">
              <CustomTypography
                text="Choose a Service"
                type="header"
                customClass="petService"
              />
            </Grid>
            <Grid
              item
              md={12}
              sm={12}
              lg={12}
              xs={12}
              pt={2}
              className="petListImage"
              display="inline-flex"
            >
              <PetBoardImageCards
                imagePath={CustomImages.Dog2}
                text="Pet Home Boarding "
                CustomImage="pet-image"
                // imagePath={CardData.imagePath}
                petBoardText="PetBoardImage-image"
              />
              <PetBoardImageCards
                imagePath={CustomImages.Dog2}
                text="Pet Home Boarding & Services"
                CustomImage="pet-image"
                // imagePath={CardData.imagePath}
                petBoardText="PetBoardImage-image"
              />
              <PetBoardImageCards
                imagePath={CustomImages.Dog2}
                text="Pet Services"
                CustomImage="pet-image"
                // imagePath={CardData.imagePath}
                petBoardText="PetBoardImage-image"
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
