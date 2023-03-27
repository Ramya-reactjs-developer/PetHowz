import React from "react";
import { Grid } from "@mui/material";
import { useLocation } from "react-router-dom";
import CustomTypography from "../../Components/Typography/Typography";
import GroomingCardsSection from "../../Components/GroomingCard/GroomingCard";
import CustomButton from "../../Components/Button/Button";
import { useEffect } from "react";
import actions from "../../Redux/Actions";
import { useDispatch, useSelector } from "react-redux";

export const BoardingResult = () => {
  const dispatch = useDispatch();
  const { state } = useLocation();
  console.log(state, "state");
  const OverAllSearchResult = useSelector((state) => state?.overallsearch);
  console.log(OverAllSearchResult?.overallsearch?.data, "OverAllSearchResult");

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
  useEffect(() => {
    const data = {
      data: state,
      method: "post",
      apiName: "getAllPetSpace",
    };
    dispatch(actions.OVERALLSEARCH(data));
  }, []);
  return (
    <Grid className="container" item md={12} lg={12} sm={12} xs={12}>
      <Grid item md={12} lg={12} sm={12} xs={12}>
        <CustomTypography
          text="Grooming"
          type="header"
          customClass="groomText"
        />
      </Grid>
      <Grid item md={12} lg={12} sm={12} xs={12}>
        <GroomingCardsSection Data={OverAllSearchResult?.overallsearch?.data} />
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
