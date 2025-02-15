/* eslint-disable no-unused-expressions */
import React, { useEffect } from "react";
import GroomingCardsSection from "../../Components/GroomingCard/GroomingCard";
import { Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import actions from "../../Redux/Actions/index";
import customImages from "../../Utils/Images/index";
import CustomTypography from "../../Components/Typography/Typography";
import CustomButton from "../../Components/Button/Button";
import "./Grooming.css";

export const Grooming = () => {
  const dispatch = useDispatch();
  // const { state } = useLocation();
  const location = useLocation();
  const navigate = useNavigate();

  const value = location.state;
  // console.log(value, "value");

  const { ourServiceById } = useSelector((state) => state?.ourServiceById);
  // console.log(
  //   ourServiceById?.data?.map((item) => item?.datas),
  //   "ourServiceById"
  // );

  const { ourService } = useSelector((state) => state?.ourService);
  // console.log(ourService, "ourService");

  useEffect(() => {
    const data = {
      data: {
        city: "",
        locality: "",
        limit: -1,
      },
      method: "post",
      // apiName: `getPetServiceByServiceMasterId/${state.response?.[0]?.service_master_id}`,
      apiName: `getPetServiceByServiceMasterId/${value}`,
    };
    dispatch(actions.OURSERVICEBYID(data));
  }, [dispatch, value]);

  const { state } = useLocation();
  // console.log(state, "state");
  const onClickHandleService = (item, index) => {
    const petKey = item;
    // console.log(petKey, "petKeypetKey");
    navigate("/petHowz/GroomingService", {
      // state: petKey,
      state: petKey,
      // state: id_pass,
      // id_pass,
    });
  };
  return (
    <Grid className="container" item md={12} lg={12} sm={12} xs={12}>
      {ourServiceById?.data?.map((data) => {
        return (
          <Grid item md={12} lg={12} sm={12} xs={12}>
            <CustomTypography
              text={data?.title}
              // text="Grooming"
              type="header"
              customClass="groomText"
            />
          </Grid>
        );
      })}
      {/* {ourServiceById?.data?.map((data) => {
        return ( */}
      <Grid item md={12} lg={12} sm={12} xs={12} className="hhhhhhh">
        <GroomingCardsSection
          onClickHandle={(item) => onClickHandleService(item)}
        />
      </Grid>
      {/* );
       })} */}

      <Grid item md={12} lg={12} sm={12} xs={12} className="groomButton">
        {/* <CustomButton
          btnTitle="Load More Spaces"
          color="primary"
          customClass="groomCardStyles"
          fontSize="12px"
        /> */}
      </Grid>
    </Grid>
  );
};
