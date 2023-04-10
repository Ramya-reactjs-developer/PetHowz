/* eslint-disable no-unused-expressions */
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
import HomePetCardsSection from "../../Components/homeBoarding/homeBoarding";

export const HomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { ourService } = useSelector((state) => state?.ourService);
  console.log(ourService, "ourService");

  React.useEffect(() => {
    const data = {
      data: {
        limit: 8,
      },
      method: "post",
      apiName: "getAllServiceMaster",
    };
    dispatch(actions?.OURSERVICE(data));
  }, [dispatch]);

  React.useEffect(() => {
    const data = {
      data: {
        city: "",
        limit: 8,
      },
      method: "post",
      apiName: "getAllPetSpace",
    };
    dispatch(actions?.PETBOARDING(data));
  }, [dispatch]);

  //dispatch
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
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
    service_master_id: 0,
  });
  // const [searchDropdownData, setSearchDropdownData] = useState({ city: "" });
  const [dropList, setDropList] = useState(false);
  const [cityResult, setCityResult] = useState(false);
  const [localityList, setLocalityList] = useState(false);
  const [localityResult, setLocalityResult] = useState(false);

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
    setSearchData({ ...searchData, city: e?.target?.value });
    var updatedValue = { city: e?.target?.value };
    const data1 = {
      data: updatedValue,
      method: "post",
      apiName: "getAllCity",
    };

    if (updatedValue?.city?.length >= 0) {
      dispatch(actions?.SEARCHCITY(data1));

      // setDropListResult(true);
    } else if (updatedValue?.city?.length === 0) {
      setDropList(false);
    }
    if (AllCity?.searchcity?.data?.length !== 0) {
      setCityResult(true);
      setDropList(true);
    } else {
      setCityResult(false);
    }
  };

  //search loaclity
  const OnSetSearch = (e) => {
    setSearchData({ ...searchData, locality: e?.target?.value });
    var updatedValue = { locality: e?.target?.value };
    const data1 = {
      data: { ...updatedValue, city: searchData?.city },
      method: "post",
      apiName: "getLocality",
    };
    if (updatedValue?.locality?.length >= 0) {
      dispatch(actions?.SEARCHCITYGETLOCALITY(data1));

      // setDropListResult(true);
    } else if (updatedValue?.locality?.length === 0) {
      setLocalityList(false);
    }
    if (AllLocality?.searchcitygetlocality?.data?.length !== 0) {
      setLocalityResult(true);
      setLocalityList(true);
    } else {
      setLocalityResult(false);
    }
  };

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
    // setSearchData({ ...searchData, pet_type: tabValue });
    setSearchData({ ...searchData, city: item });
    setOverAllSearchData({ ...overAllSearchData, city: item });
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
    setOverAllSearchData({ ...overAllSearchData, locality: item });
    setLocalityList(false);
  };

  // if (searchData.city !== "" || searchData.locality !== "" || tabValue === 1) {
  //   const data = {
  //     data: searchData,
  //     method: "post",
  //     apiName: "getAllPetSpace",
  //   };
  //   dispatch(actions.OVERALLSEARCH(data));
  // }

  useEffect(() => {
    console.log(overAllSearchData, "hhhhhh");
  }, [searchData, cityResult]);

  // const SendResult = overAllSearchResultValue?.overallsearch?.data;
  //overAllSearch
  const overAllSearch = () => {
    if (
      overAllSearchData?.city !== "" &&
      overAllSearchData?.locality !== "" &&
      tabValue === 1
    ) {
      navigate("/BoardingResult", {
        state: overAllSearchData,
      });
    }
    if (
      overAllSearchData?.city !== ("" && undefined) &&
      overAllSearchData?.locality !== ("" && undefined) &&
      tabValue === 0
    ) {
      navigate("/ServiceResult", {
        state: overAllSearchData,
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

  // const [searchData, setSearchData] = useState("");
  const [tmpIdArr, setTmpIdsArr] = React.useState();
  // const [petTmpIdArr, setPetTmpIdsArr] = React.useState();

  console.log(searchData, "ss");
  // const OnSetSearch = (e) => {
  //   setSearchData(e.target.value);
  // };

  const { petBoarding } = useSelector((state) => state?.petBoarding);
  console.log(petBoarding, "galleryImageValue");

  // useEffect(() => {
  //   const tmpArr = [];
  //   const petTmpIdArr = [];
  //   console.log(petTmpIdArr, "tmpIdsArr");
  //   petBoarding?.data?.spaces?.map((value) => {
  //     petTmpIdArr?.push(value.pet_space_id);
  //       console.log(value, "index");
  //     tmpArr?.push({
  //       sno: value,
  //     });
  //   });

  //   setPetTmpIdsArr(petTmpIdArr);
  // }, [petBoarding]);

  const onClickHandle = (item, index) => {
    const petKey = item;
    console.log(petKey, "petKeypetKey");
    navigate("/petCare", {
      // state: petKey,
      state: petKey,
      // state: id_pass,
      // id_pass,
    });
  };

  React.useEffect(() => {
    const tmpArr = [];
    const tmpIdsArr = [];
    console.log(tmpIdsArr, "tmpIdsArr");
    ourService?.data?.map((value, index) => {
      tmpIdsArr?.push(value.service_master_id);
      console.log();
      tmpArr?.push({
        sno: index,
      });
    });
    setTmpIdsArr(tmpIdsArr);
  }, [ourService]);

  const onHandleClick = (key, index) => {
    navigate("/grooming", {
      state: tmpIdArr[key],
      // state: id_pass,
      // id_pass,
    });
  };

  // const id_pass = petBoarding?.data?.map((item) => item.user_id);
  // console.log(id_pass, "check");

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
                    tabList={tabList}
                    tabValue={tabValue}
                    tabHandleChange={tabHandleChange}
                    cityResult={cityResult}
                    droplist={dropList}
                    localityList={localityList}
                    localityResult={localityResult}
                    // setState={setSearchDropdownData}
                    handleselect={(item) => {
                      handleselect(item);
                    }}
                    handleselect2={handleselect2}
                    AllLOCALITY={AllLocality?.searchcitygetlocality?.data}
                    AllCITY={AllCity?.searchcity?.data}
                    dropdownData={dropdownData}
                    dropdownValue={searchData?.city}
                    SearchValue={searchData?.locality}
                    dropdownName={"city"}
                    handleDropdownChange={(e) => {
                      OnSetDropdownSearch(e);
                    }}
                    // SearchValue={searchData}
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
        justifyContent={{ sm: "flex-start", xs: "center" }}
        flexWrap={"wrap"}
        pl={{ lg: "5px", md: "150px", sm: "30px", xs: "5px" }}
        pr={{ lg: "5px", md: "150px", sm: "10px", xs: "0px" }}
        md={12}
        xs={12}
        pt={"30px"}
      >
        {ourService?.data?.map((data, index) => {
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
                  subId={data?.service_master_id}
                  // onHandleClick={(id, index) => onHandleClick(id, index)}
                  // onHandleClick={(subId, id, index) =>
                  //   onHandleClick(subId, id, index)
                  // }
                  onHandleClick={() =>
                    onHandleClick(index, data?.service_master_id)
                  }
                />
              </Box>
            </Grid>
          );
        })}
      </Grid>
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
            <HomePetCardsSection
              // Data={CardData}
              onClickHandle={(item) => onClickHandle(item)}
            />
          </Box>
        </Grid>
        <Grid item textAlign={"center"} xs={12} pt={"60px"} pb={"60px"}>
          <Link to="/AllPetBoarding" style={{ textDecoration: "none" }}>
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
