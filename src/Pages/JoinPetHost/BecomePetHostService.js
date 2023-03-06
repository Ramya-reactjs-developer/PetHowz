import React from "react";
import PetBoardImageCards from "../../Components/PetBoardCard/PetBoardImageCards";
import CustomImages from "../../Utils/Images/index";
import { NavLink, useNavigate } from "react-router-dom";
import { Box, Grid } from "@mui/material";
import CustomTypography from "../../Components/Typography/Typography";
import "./petBoard.css";
export const BecomePetHostService = () => {
  // const CardData = Data;
  const imagePath = [
    {
      image: CustomImages.Dog1,
      text: "Pet Home Boarding",
    },
    {
      image: CustomImages.Dog2,
      text: "loooo",
    },
    {
      image: CustomImages.Dog1,
      text: "llll",
    },
    // {
    //   image: CustomImages.Dog2,
    //   text:"kkk"
    // },
  ];
  const imagePaths = [
    {
      image: CustomImages.Dog1,
    },
  ];
  const navigate = useNavigate();
  const clickImage = () => { navigate("/PetHomeBoarding") };
  return (
    <Grid container md={12} sm={12} lg={12} xs={12}>
      <Grid container md={12} sm={12} lg={12} xs={12}>
        <Grid item md={6} sm={6} lg={6} xs={12}>
          {/* {CardData?.map((item) => {
            return ( */}
          <Grid item md={12} sm={12} lg={12} xs={12} className="PetBoardImage">
            <PetBoardImageCards
              // imagePath={CustomImages.Dog2}
              imagePath={imagePaths}
              CustomImage="petImage"
            />
          </Grid>

          {/* );
          })} */}
        </Grid>
        <Grid item md={6} sm={6} lg={6} xs={12} className="petHostHeader">
          <Grid item md={12} sm={12} lg={12} xs={12}>
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
            <Grid container md={12} sm={12} lg={12} xs={12} pt={2} className="">
              <Grid item md={3} sm={12} lg={3} xs={12} className="">
                <PetBoardImageCards
                  // imagePath={CustomImages.Dog1}
                  text="Pet Home Boarding "
                  CustomImage="pet-image"
                  customClass="petListImage"
                  imagePath={imagePath}
                  onClick={clickImage}
                  petBoardText="PetBoardImage-image"
                />
              </Grid>
              <Grid item md={3} sm={12} lg={3} xs={12}>
                {/* <PetBoardImageCards
                  imagePath={CustomImages.Dog1}
                  text="Pet Home Boarding "
                  CustomImage="pet-image"
                  // imagePath={CardData.imagePath}
                  petBoardText="PetBoardImage-image"
                /> */}
              </Grid>
              <Grid item md={3} sm={12} lg={3} xs={12}>
                {/* <PetBoardImageCards
                  imagePath={CustomImages.Dog1}
                  text="Pet Home Boarding "
                  CustomImage="pet-image"
                  // imagePath={CardData.imagePath}
                  petBoardText="PetBoardImage-image"
                /> */}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
