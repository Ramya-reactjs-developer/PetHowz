import React from "react";
import { Box, Grid } from "@mui/material";
import { useLocation } from "react-router-dom";
import CustomTypography from "../../Components/Typography/Typography";
// import GroomingCardsSection from "../../Components/GroomingCard/GroomingCard";
import CustomButton from "../../Components/Button/Button";
import { useEffect } from "react";
import actions from "../../Redux/Actions";
import { useDispatch, useSelector } from "react-redux";
import CardsSection from "../../Components/Cards/Cards";
import ServiceCardsSection from "../../Components/Cards/ServiceCards";

export const ServiceIndividualResult = () => {
  //   const dispatch = useDispatch();
  const { state } = useLocation();
  console.log(state, "state");
  //   const OverAllSearchResult = useSelector((state) => state?.overallsearch);
  //   console.log(
  //     OverAllSearchResult?.overallsearch.data?.spaces,
  //     "OverAllSearchResult"
  //   );
  //   console.log(OverAllSearchResult?.overallsearch.data, "SearchResult");

  // if (
  //   searchData.city !== "" ||
  //   searchData.locality !== "" ||
  //   tabValue === 1
  // ) {
  //   const data = {
  //     data: searchData,
  //     method: "post",
  //     apiName: "getAllPetSpace",
  //   };
  //   dispatch(actions.OVERALLSEARCH(data));
  // }
  //   useEffect(() => {
  //     const data = {
  //       data: state,
  //       method: "post",
  //       apiName: "getAllPetSpace",
  //     };
  //     dispatch(actions.OVERALLSEARCH(data));
  //   }, [dispatch]);
  return (
    <Grid className="container" item md={12} lg={12} sm={12} xs={12}>
      <Grid
        item
        p={"15px"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"flex-start"}
        gap={"5px"}
        md={12}
        lg={12}
        sm={12}
        xs={12}
      >
        {/* <CustomTypography
          text={OverAllSearchResult?.overallsearch.data?.title}
          type="heading3"
          // customClass="groomText"
        /> */}
        <Box sx={{ display: "flex", pt: "8px" }}>
          <CustomTypography
            text={state.title}
            type="header"
            colorType={"primary"}
            // customClass="groomText"
          />
          <CustomTypography
            text={state.locality}
            type="header"
            colorType={"primary"}
            // customClass="groomText"
          />
        </Box>
      </Grid>
      <Grid item md={12} lg={12} sm={12} xs={12}>
        {/* <CardsSection Data={state?.datas} /> */}
      </Grid>
      <Grid item md={12} lg={12} sm={12} xs={12} className="groomButton">
        <CustomButton
          btnTitle="Load More Spaces"
          color="primary"
          customClass="groomCardStyles"
          fontSize="12px"
        />
      </Grid>
    </Grid>
  );
};
