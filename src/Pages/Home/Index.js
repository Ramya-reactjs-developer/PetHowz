import React, { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import actions from "../../Redux/Actions/index";
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

import { Link } from "react-router-dom";

export const HomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { ourService } = useSelector((state) => state?.ourService);
  console.log(ourService, "ourService");

  React.useEffect(() => {
    const data = {
      data: {
        limit: 5,
      },
      method: "post",
      apiName: "getAllServiceMaster",
    };
    dispatch(actions.OURSERVICE(data));
  }, [dispatch]);

  const { petBoarding } = useSelector((state) => state?.petBoarding);
  console.log(petBoarding, "galleryImage");

  React.useEffect(() => {
    const data = {
      data: { ...id_pass },
      method: "post",
      apiName: "getAllPetSpace",
    };
    dispatch(actions.PETBOARDING(data));
  }, [dispatch]);

  const CardData = [
    {
      image: customImages.s6,
      name: petBoarding?.data?.map((item) => item.name),
      address: "Anna Nagar,Chennai",
      type: "Villa",
      distance: "0.2kms",
      ratings: "3.5",
      reviews: "(75 reviews)",
      nav: "/grooming",
    },
    //   {
    //     image: customImages.s6,
    //     name: "Aadhi Pet Care",
    //     address: "Anna Nagar,Chennai",
    //     type: "Villa",
    //     distance: "0.2kms",
    //     ratings: "3.5",
    //     reviews: "(75 reviews)",
    //   },
  ];

  // const AllSevices = [
  //   {
  //     image1: customImages.s1,
  //     image2: customImages.s2,
  //     image3: customImages.s3,
  //     image4: customImages.s4,
  //     image5: customImages.s5,
  //     image6: customImages.s6,
  //     image7: customImages.s7,
  //     image8: customImages.s8,
  //   },
  // ];
  const [searchData, setSearchData] = useState("");
  // const [tmpIdArr, setTmpIdsArr] = React.useState();
  // const [petId, setPetId] = useState();

  console.log(searchData, "ss");
  const OnSetSearch = (e) => {
    setSearchData(e.target.value);
  };

  useEffect(() => {}, [searchData]);

  const onClickHandle = (key, data) => {
    console.log(key, "key");
    navigate("/grooming");
    //   {
    //   state: tmpIdArr[key],
    //   // state: id_pass,
    //   id_pass,
    // };
  };
  // React.useEffect(() => {
  //   const tmpArr = [];
  //   const tmpIdsArr = [];
  //   console.log(tmpIdsArr, "tmpIdsArr");
  //   petBoarding?.data?.map((value, index) => {
  //     tmpIdsArr?.push(value.user_id);
  //     tmpArr?.push({
  //       sno: index,
  //     });
  //   });
  //   setTmpIdsArr(tmpIdsArr);
  // }, [petBoarding]);

  const serviceId = ourService?.data?.map((item) => item.service_master_id);
  // const serviceId = ourService?.data;
  console.log(serviceId, "serviceId");

  const onHandleClick = () => {
    // console.log(serviceId.length, "length");
    // serviceId.length[0] && navigate("/grooming");
    // serviceId.length[1] && <NavLink to="/petSpace" />;
     
     
    if (serviceId[0]) {
      navigate("/grooming");
    }else{
      navigate("/petSpace");
    }
  };

  const id_pass = petBoarding?.data?.map((item) => item.user_id);
  console.log(id_pass, "check");

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
                  customStyle={{ fontFamily: "Cooper" }}
                />
                <CustomTypography
                  text="& PET SERVICE PROVIDERS"
                  type="heading2"
                  colorType="primary"
                  customStyle={{ fontFamily: "Cooper" }}
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
      {/* {AllSevices.map((item, key) => {
        return ( */}
      <Grid
        item
        display={"flex"}
        alignItems={"center"}
        justifyContent={{ sm: "flex-start", xs: "center" }}
        flexWrap={"wrap"}
        pl={{ lg: "5px", md: "150px", sm: "30px", xs: "5px" }}
        pr={{ lg: "5px", md: "150px", sm: "10px", xs: "0px" }}
        md={12}
        xs={12}
        pt={"30px"}
      >
        {ourService?.data?.map((data) => {
          return (
            <Grid item lg={3} md={6} sm={6} xs={12}>
              <Box>
                <ImageCards
                  ImagePath={data?.image}
                  CardWidth={{
                    lg: "325px",
                    md: "300px",
                    sm: "280px",
                    xs: "325px",
                  }}
                  CardHeight={"300px"}
                  ImageWidth={{
                    lg: "325px",
                    md: "300px",
                    sm: "280px",
                    xs: "325px",
                  }}
                  ImageHeight={"300px"}
                  service={data?.service_name}
                  sub={"Starting From ₹ 700"}
                  onHandleClick={onHandleClick}
                />
              </Box>
            </Grid>
          );
        })}

        {/* <Box sx={{ pt: "20px" }}>
                <ImageCards
                  ImagePath={item.image2}
                  CardWidth={{
                    lg: "325px",
                    md: "300px",
                    sm: "280px",
                    xs: "325px",
                  }}
                  CardHeight={"300px"}
                  ImageWidth={{
                    lg: "325px",
                    md: "300px",
                    sm: "280px",
                    xs: "325px",
                  }}
                  ImageHeight={"300px"}
                  service={"Pet Relocation"}
                  sub={"Starting From ₹ 700"}
                />
              </Box> */}

        {/* <Grid item lg={3} md={6} sm={6} xs={12} pt={{ sm: 0, xs: "20px" }}>
              <Box>
                {" "}
                <ImageCards
                  ImagePath={item.image3}
                  CardWidth={{
                    lg: "325px",
                    md: "300px",
                    sm: "280px",
                    xs: "325px",
                  }}
                  CardHeight={"300px"}
                  ImageWidth={{
                    lg: "325px",
                    md: "300px",
                    sm: "280px",
                    xs: "325px",
                  }}
                  ImageHeight={"300px"}
                  service={"Pet Walking"}
                  sub={"Starting From ₹ 700"}
                />
              </Box>
              <Box sx={{ pt: "20px" }}>
                <ImageCards
                  ImagePath={item.image4}
                  CardWidth={{
                    lg: "325px",
                    md: "300px",
                    sm: "280px",
                    xs: "325px",
                  }}
                  CardHeight={"600px"}
                  ImageWidth={{
                    lg: "325px",
                    md: "300px",
                    sm: "280px",
                    xs: "325px",
                  }}
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
                  ImagePath={item.image5}
                  CardWidth={{
                    lg: "325px",
                    md: "300px",
                    sm: "280px",
                    xs: "325px",
                  }}
                  CardHeight={"600px"}
                  ImageWidth={{
                    lg: "325px",
                    md: "300px",
                    sm: "280px",
                    xs: "325px",
                  }}
                  ImageHeight={"600px"}
                  service={"Pet Taxi"}
                  sub={"Starting From ₹ 700"}
                />
              </Box>
              <Box sx={{ pt: "20px" }}>
                <ImageCards
                  ImagePath={item.image6}
                  CardWidth={{
                    lg: "325px",
                    md: "300px",
                    sm: "280px",
                    xs: "325px",
                  }}
                  CardHeight={"300px"}
                  ImageWidth={{
                    xl: "500px",
                    lg: "325px",
                    md: "300px",
                    sm: "280px",
                    xs: "325px",
                  }}
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
                  ImagePath={item.image7}
                  CardWidth={{
                    lg: "325px",
                    md: "300px",
                    sm: "280px",
                    xs: "325px",
                  }}
                  CardHeight={"300px"}
                  ImageWidth={{
                    lg: "325px",
                    md: "300px",
                    sm: "280px",
                    xs: "325px",
                  }}
                  ImageHeight={"300px"}
                  service={"Pet Training"}
                  sub={"Starting From ₹ 700"}
                />
              </Box>
              <Box sx={{ pt: "20px" }}>
                <ImageCards
                  ImagePath={item.image8}
                  CardWidth={{
                    lg: "325px",
                    md: "300px",
                    sm: "280px",
                    xs: "325px",
                  }}
                  CardHeight={"600px"}
                  ImageWidth={{
                    lg: "325px",
                    md: "300px",
                    sm: "280px",
                    xs: "325px",
                  }}
                  ImageHeight={"600px"}
                  service={"Pet Photography"}
                  sub={"700 Jobs"}
                />
              </Box>
            </Grid> */}
        {/* </Box> */}
      </Grid>
      {/* );
      })} */}

      <Grid item textAlign={"center"} xs={12} pt={"40px"} pb={"40px"}>
        <Link to="/AllServices" style={{ textDecoration: "none" }}>
          <CustomButton
            btnTitle="Discover More!"
            color="primary"
            btnStyles={DiscoverButtonStyle}
          />
        </Link>
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
            <CardsSection Data={CardData} onClickHandle={onClickHandle} />
          </Box>
        </Grid>
        <Grid item textAlign={"center"} xs={12} pt={"60px"} pb={"60px"}>
          <Link to="/grooming" style={{ textDecoration: "none" }}>
            <CustomButton
              btnTitle="Discover More!"
              color="primary"
              btnStyles={DiscoverButtonStyle}
            />
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
};
