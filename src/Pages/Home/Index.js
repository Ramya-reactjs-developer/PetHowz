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

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../Redux/Actions";
import { useNavigate } from "react-router-dom";

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

  const AllSevices = [
    {
      image1: customImages.s1,
      image2: customImages.s2,
      image3: customImages.s3,
      image4: customImages.s4,
      image5: customImages.s5,
      image6: customImages.s6,
      image7: customImages.s7,
      image8: customImages.s8,
    },
  ];

  //dispatch
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //selector
  const AllCity = useSelector((state) => state?.searchcity);
  const AllLocality = useSelector((state) => state?.searchcitygetlocality);
  // const OverAllSearchResult = useSelector((state) => state?.overallsearch);
  let value = { ...AllCity };
  let localityValue = { ...AllLocality };
  // let overAllSearchResultValue = { ...OverAllSearchResult };

  console.log(localityValue?.searchcitygetlocality?.data, "localityValue");
  console.log(AllLocality, "AllLocality");
  // console.log(
  //   overAllSearchResultValue.overallsearch?.data,
  //   "overAllSearchResultValue"
  // );
  // console.log(
  //   overAllSearchResultValue.overallsearch?.data,
  //   "overAllSearchResultValue"
  // );

  const [searchData, setSearchData] = useState({
    city: "",
    locality: "",
    // pet_type: 0,
    limit: -1,
  });
  const [overAllSearchData, setOverAllSearchData] = useState({
    city: "",
    locality: "",
    // pet_type: 0,
    limit: -1,
  });
  // const [searchDropdownData, setSearchDropdownData] = useState({ city: "" });
  const [dropList, setDropList] = useState(false);
  const [dropListResult, setDropListResult] = useState(false);
  const [localityList, setLocalityList] = useState(false);

  //tab
  const [tabValue, setTabValue] = React.useState(0);

  const tabList = [
    {
      id: 0,
      tabText: "Pet Services",
      tabColor: "red",
    },
    {
      id: 1,
      tabText: "Pet Boarding Spaces",
      tabColor: "red",
    },
  ];

  //tab
  const tabHandleChange = (event, newValue) => {
    setTabValue(newValue);
    // setSearchData({ ...searchData, pet_type: newValue });
  };
  console.log(tabValue, "tabvalue");
  //search city
  const OnSetDropdownSearch = (e) => {
    setSearchData({ ...searchData, city: e.target.value });
    var updatedValue = { city: e.target.value };
    const data1 = {
      data: updatedValue,
      method: "post",
      apiName: "getAllCity",
    };
    console.log({ city: e.target.value }, "datadrop");
    console.log(updatedValue.city.length, "length");
    if (updatedValue.city.length >= 3) {
      dispatch(actions.SEARCHCITY(data1));
      setDropList(true);
      // setDropListResult(true);
    } else if (updatedValue.city.length === 0) {
      setDropList(false);
    }
    // else if (value.city.length === 0) {
    //   setDropListResult(false);
    // }
  };

  //search loaclity
  const OnSetSearch = (e) => {
    setSearchData({ ...searchData, locality: e.target.value });
    var updatedValue = { locality: e.target.value };
    // let combinedValue = Object.assign(
    //   searchDropdownData.city,
    //   updatedValue.locality
    // );
    const data1 = {
      data: { ...updatedValue, city: searchData.city },
      method: "post",
      apiName: "getLocality",
    };
    console.log({ locality: e.target.value }, "datalocality");
    console.log(updatedValue.locality, "localitylength");
    console.log(data1, "combinedValue");
    if (updatedValue.locality.length >= 3) {
      dispatch(actions.SEARCHCITYGETLOCALITY(data1));
      setLocalityList(true);
      // setDropListResult(true);
    } else if (updatedValue.locality.length === 0) {
      setLocalityList(false);
    }
  };

  // console.log(searchData, "searchData");
  // console.log(searchDropdownData, "searchDropdownData");

  const dropdownData = [
    {
      id: 1,
      value: "Chennai",
    },
    {
      id: 2,
      value: "Delhi",
    },
    {
      id: 3,
      value: "Kerala",
    },
  ];
  const handleselect = (item) => {
    console.log(item, "e.taget");
    setSearchData({ ...searchData, pet_type: tabValue });
    setSearchData({ ...searchData, city: item });
    setDropList(false);
    // setSearchDropdownData(
    //   item
    //   //   {
    //   //   ...searchData,
    //   //   city: value?.searchcity?.data[0].city,
    //   //   // city: e.target.value,
    //   // }
    // );
  };
  const handleselect2 = (item) => {
    console.log(item, "e.taget");
    setSearchData({ ...searchData, locality: item });
    setLocalityList(false);
    // setSearchDropdownData(
    //   item
    //   //   {
    //   //   ...searchData,
    //   //   city: value?.searchcity?.data[0].city,
    //   //   // city: e.target.value,
    //   // }
    // );
    // let updatedValue = {
    //   ...overAllSearchData,
    //   city: searchData.city,
    //   locality: item,
    //   // pet_type: searchData.pet_type,
    //   limit: searchData.limit,
    // };
    // const data = {
    //   data: updatedValue,
    //   method: "post",
    //   apiName: "getAllPetSpace",
    // };
    // if (
    //   updatedValue.city !== "" &&
    //   updatedValue.locality !== "" &&
    //   tabValue === 1
    // ) {
    //   dispatch(actions.OVERALLSEARCH(data));
    // }
  };

  // if (searchData.city !== "" || searchData.locality !== "" || tabValue === 1) {
  //   const data = {
  //     data: searchData,
  //     method: "post",
  //     apiName: "getAllPetSpace",
  //   };
  //   dispatch(actions.OVERALLSEARCH(data));
  // }

  useEffect(() => {}, [searchData]);

  // const SendResult = overAllSearchResultValue?.overallsearch?.data;
  //overAllSearch
  const overAllSearch = () => {
    if (
      searchData.city !== "" &&
      searchData.locality !== "" &&
      tabValue === 1
    ) {
      navigate("/BoardingResult", {
        state: searchData,
      });
    }
    // let updatedValue = {
    //   ...overAllSearchData,
    //   city: searchData.city,
    //   locality: searchData.locality,
    //   pet_type: searchData.pet_type,
    // };
    // setOverAllSearchData({
    //   ...overAllSearchData,
    //   city: searchData.city,
    //   locality: searchData.locality,
    //   pet_type: searchData.pet_type,
    // });
  };

  console.log(searchData, "searchdata");
  console.log(overAllSearchData, "overAllSearchData");
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
              <Box>
                <Box>
                  <SearchBar
                    tabList={tabList}
                    tabValue={tabValue}
                    tabHandleChange={tabHandleChange}
                    // result={dropListResult}
                    droplist={dropList}
                    localityList={localityList}
                    // setState={setSearchDropdownData}
                    handleselect={(item) => {
                      handleselect(item);
                    }}
                    handleselect2={handleselect2}
                    AllLOCALITY={localityValue?.searchcitygetlocality?.data}
                    AllCITY={value?.searchcity?.data}
                    dropdownData={dropdownData}
                    dropdownValue={searchData.city}
                    SearchValue={searchData.locality}
                    dropdownName={"city"}
                    handleDropdownChange={(e) => {
                      OnSetDropdownSearch(e);
                    }}
                    handleSearch={(e) => {
                      OnSetSearch(e);
                    }}
                    overAllSearch={overAllSearch}
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
      {AllSevices.map((item, key) => {
        return (
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
            <Grid item lg={3} md={6} sm={6} xs={12}>
              <Box>
                <ImageCards
                  ImagePath={item.image1}
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
                  service={"Pet Grooming"}
                  sub={"Starting From ₹ 700"}
                />
              </Box>
              <Box sx={{ pt: "20px" }}>
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
              </Box>
            </Grid>
            <Grid item lg={3} md={6} sm={6} xs={12} pt={{ sm: 0, xs: "20px" }}>
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
            </Grid>
            {/* </Box> */}
          </Grid>
        );
      })}

      <Grid item textAlign={"center"} xs={12} pt={"40px"} pb={"40px"}>
        <Link to={"AllServices"} style={{ textDecoration: "none" }}>
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
