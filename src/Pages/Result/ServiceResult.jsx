import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import CustomTypography from "../../Components/Typography/Typography";
// import GroomingCardsSection from "../../Components/GroomingCard/GroomingCard";
import CustomButton from "../../Components/Button/Button";
import { useEffect } from "react";
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
  console.log(OverAllSearchResult?.overallsearch?.data[0]?.datas, "Service");

  useEffect(() => {
    const data = {
      data: state,
      method: "post",
      apiName: "getPetServiceByServiceMasterId/:service_master_id",
    };
    dispatch(actions.OVERALLSEARCH(data));
  }, [dispatch]);

  const onDiscover = (key) => {
    navigate("/ServiceIndividualResult", {
      state: OverAllSearchResult?.overallsearch?.data[key],
    });
  };
  return (
    <>
      {OverAllSearchResult?.overallsearch?.data?.length !== 0 ? (
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
      ) : (
        <Box height={"50vh"} sx={{ display: "grid", placeItems: "center" }}>
          <Typography variant="h3"> Loading</Typography>
        </Box>
      )}
    </>
  );
};
