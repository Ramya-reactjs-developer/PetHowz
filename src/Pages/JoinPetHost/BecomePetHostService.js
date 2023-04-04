import React from "react";
import PetBoardImageCards from "../../Components/PetBoardCard/PetBoardImageCards";
import CustomImages from "../../Utils/Images/index";
// import { Route, Redirect } from "react-router-dom";
// import { NavLink, useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";
import CustomTypography from "../../Components/Typography/Typography";
// import PetService from "../PetService/PetService";
import "./petBoard.css";
import { useSelector } from "react-redux";
// import BothBoardAndService from "./BothBoardAndService/BothBoardAndService";

export const BecomePetHostService = () => {
  // const navigate = useNavigate();
  // const CardData = Data;
  const login = useSelector((state) => state?.login?.login);
  console.log(login, "login");
  const imagePath = [
    {
      id: 1,
      image: CustomImages.Dog1,
      text: "Pet Home Boarding",
      condtion: login.message,
      nav1: "/PetHomeBoarding",
      nav2: "/login",
    },
    // {
    //   id: 2,
    //   image: CustomImages.Dog2,
    //   text: "Pet Home Boarding & Pet Services",
    //   nav: "/AddAddress",
    // },
    {
      id: 2,
      image: CustomImages.Dog2,
      text: "Pet Services",
      nav1: "/PetHomeBoarding",
      nav2: "/login",
    },
  ];
  const imagePaths = [
    {
      image: CustomImages.petsStepper,
    },
  ];

  // const clickImage = (id) => {
  //   if (id === 1){
  //     // navigate("/BothBoardAndService");
  //     <Route path="BothBoardAndService" element={<BothBoardAndService />} />;
  //     alert("jhvjhvvjh")
  //   } else if (id === 3) {
  //     alert("gvggjhjh")
  //     navigate("/petService");
  //     <Route path="PetService" element={<PetService />} />;
  //   }
  // };
  // const service = () => {
  //   navigate("/petService");
  // }
  return (
    <Grid container md={12} sm={12} lg={12} xs={12}>
      <Grid container md={12} sm={12} lg={12} xs={12}>
        {/* <Grid item md={6} sm={6} lg={6} xs={12}>
          {/* {CardData?.map((item) => {
            return ( */}
        <Grid item md={12} sm={12} lg={12} xs={12} className="PetBoardImage ">
          {/* <div className="image_front_color"></div> */}
          {/* <PetBoardImageCards
              // imagePath={CustomImages.Dog2}
              imagePath={imagePaths}
              CustomImage="petImage"
            /> */}
        </Grid>
        {/* );
          })} */}
        {/* </Grid> */}
        <Grid item textAlign={"center"} className="Box-Image3" sm={4} xs={12}>
          {/* <div className="Box-color3"></div> */}
        </Grid>
        <Grid item sm={2} xs={12}>
          <div></div>
        </Grid>
        <Grid item md={6} sm={6} lg={6} xs={12}>
          <Grid item md={12} sm={12} lg={12} xs={12} className="pet-heading">
            <CustomTypography
              text="Become a Pet Host/Pet Service Provider"
              type="header"
              customClass="petHost"
            />
            <Grid item md={12} sm={12} lg={12} xs={12} className="petChoose">
              <CustomTypography
                text="Choose the service(s) you want to offer"
                type="heading2"
                customClass="petService"
              />
            </Grid>
          </Grid>
          <Grid item md={12} sm={12} lg={12} xs={12} className="petHostHeader">
            <Grid item md={12} sm={12} lg={12} xs={12}>
              <Grid
                container
                md={12}
                sm={12}
                lg={12}
                xs={12}
                pt={2}
                className=""
              >
                <Grid
                  item
                  md={3}
                  sm={12}
                  lg={3}
                  xs={12}
                  className="imageCard_edit"
                >
                  <PetBoardImageCards
                    // imagePath={CustomImages.Dog1}
                    text="Pet Home Boarding "
                    CustomImage="pet-image"
                    customClass="petListImage"
                    imagePath={imagePath}
                    loginData={login}
                    // onClick={clickImage}
                    petBoardText="PetBoardImage-image"
                  />
                </Grid>
                {/* <Grid item md={3} sm={12} lg={3} xs={12}>
                <PetBoardImageCards
                  imagePath={CustomImages.Dog1}
                  text="Pet Home Boarding "
                  CustomImage="pet-image"
                  // imagePath={CardData.imagePath}
                  petBoardText="PetBoardImage-image"
                />
              </Grid>
              <Grid item md={3} sm={12} lg={3} xs={12}>
                <PetBoardImageCards
                  imagePath={CustomImages.Dog1}
                  text="Pet Home Boarding "
                  CustomImage="pet-image"
                  // imagePath={CardData.imagePath}
                  petBoardText="PetBoardImage-image"
                />
              </Grid> */}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
