import React, { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import CustomTypography from "../../Components/Typography/Typography";
import actions from "../../Redux/Actions";
import { useDispatch, useSelector } from "react-redux";
import ServiceCardsSection from "../../Components/Cards/ServiceCards";

export const ServiceResult = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { state } = useLocation();
  console.log(state, "state");
  const OverAllSearchResult = useSelector((state) => state?.overallsearch);
  console.log(OverAllSearchResult?.overallsearch?.data, "OverAllSearchResult");
  console.log(OverAllSearchResult?.overallsearch?.message, "OverAllSearch");

  useEffect(() => {
    const fetchData = async () => {
      const data = {
        data: {
          service_master_id: 0,
          city: state.city,
          locality: state.locality,
          limit: -1,
        },
        method: "post",
        apiName: `getPetServiceByServiceMasterId/:service_master_id`,
      };
      dispatch(actions.OVERALLSEARCH(data));
    };
    fetchData();
  }, [dispatch, state.city, state.locality]);

  const onDiscover = (key) => {
    navigate("/petHowz/ServiceIndividualResult", {
      state: OverAllSearchResult?.overallsearch?.data[key],
    });
  };
  return (
    <>
      <Grid className="container" item md={12} lg={12} sm={12} xs={12}>
        <Grid
          item
          p={"15px"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"flex-start"}
          flexWrap={"wrap"}
          gap={"5px"}
          md={12}
          lg={12}
          sm={12}
          xs={12}
        >
          <CustomTypography
            text={"Pet Services"}
            type="heading3"
            // customClass="groomText"
          />
          <Box sx={{ display: "flex", pt: "8px" }}>
            <CustomTypography
              text={" in " + state?.city + ", "}
              type="header"
              colorType={"primary"}
              // customClass="groomText"
            />
            <CustomTypography
              text={state?.locality}
              type="header"
              colorType={"primary"}
              // customClass="groomText"
            />
          </Box>
        </Grid>
        <Grid item md={12} lg={12} sm={12} xs={12}>
          <ServiceCardsSection
            Data={OverAllSearchResult?.overallsearch?.data}
            onDiscover={(key) => onDiscover(key)}
            nos={5}
          />
        </Grid>
      </Grid>
    </>
  );
};
