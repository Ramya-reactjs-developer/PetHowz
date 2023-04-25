/* eslint-disable no-unused-expressions */
import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import actions from "../../Redux/Actions/index";
// import CustomButton from "../../Components/Button/Button";
import "./AllPetBoarding.css";
import HomePetCardsSection from "../homeBoarding/homeBoarding";

export const AllPetBoarding = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const { state } = useLocation();
  const location = useLocation();

  const value = location.state;
  console.log(value, "value");

  //  const { petBoarding } = useSelector((state) => state?.petBoarding);
  // console.log(
  //   petBoarding?.data?.map((item) => item?.datas),
  //   "ourServiceById"
  // );

  const { ourService } = useSelector((state) => state?.ourService);
  console.log(ourService, "ourService");

  React.useEffect(() => {
    const data = {
      data: {
        city: "",
        limit: -1,
      },
      method: "post",
      apiName: "getAllPetSpace",
    };
    dispatch(actions.PETBOARDING(data));
  }, [dispatch]);

  const onClickHandle = (item, index) => {
    const petKey = item;
    console.log(petKey, "petKeypetKey");
    navigate("/petHowz/petCare", {
      // state: petKey,
      state: petKey,
      // state: id_pass,
      // id_pass,
    });
  };

  const { state } = useLocation();
  console.log(state, "state");

  return (
    <Grid className="container" item md={12} lg={12} sm={12} xs={12}>
      {/* {ourServiceById?.data?.map((data) => {
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
      })} */}
      {/* {ourServiceById?.data?.map((data) => {
        return ( */}
      <Grid item md={12} lg={12} sm={12} xs={12} className="AllPetBoarding">
        <HomePetCardsSection onClickHandle={(item) => onClickHandle(item)} />
      </Grid>
      {/* );
       })} */}

      {/* <Grid item md={12} lg={12} sm={12} xs={12} className="groomButton">
        <CustomButton
          btnTitle="Load More Spaces"
          color="primary"
          customClass="groomCardStyles"
          fontSize="12px"
        />
      </Grid> */}
    </Grid>
  );
};
