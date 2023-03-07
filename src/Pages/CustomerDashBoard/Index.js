import { Grid } from "@mui/material";
import React from "react";
import DashBoardCard from "../../Components/DashBoardCard/DashBoardCard";
import CustomIcons from "../../Utils/Icons/Index";
import CustomTypography from "../../Components/Typography/Typography";
import CustomTab from "../../Components/Tab/Tab";

export const CustomerDashBoard = () => {
  const tabNames = [{ label: "Pet Home Boarding" }, { label: "Pet Services" }];
  return (
    <Grid container item xs={12}>
      <Grid
        item
        display={"flex"}
        alignItems={"center"}
        justifyContent={"flex-start"}
        flexWrap={"wrap"}
        gap={"30px"}
        pt={"30px"}
        xs={12}
      >
        <Grid item lg={2} md={3} sm={4} xs={12}>
          <DashBoardCard
            id="card1"
            tittle="Bookings Done"
            icon={CustomIcons.Building}
            number="5"
            MWidth="300px"
          />
        </Grid>
        <Grid item lg={2} md={3} sm={4} xs={12}>
          <DashBoardCard
            id="card2"
            tittle="Booking Requests Send"
            icon={CustomIcons.Building}
            number="5"
            MWidth="300px"
          />
        </Grid>
        <Grid item lg={2} md={3} sm={4} xs={12}>
          <DashBoardCard
            id="card3"
            tittle="Pets Added"
            icon={CustomIcons.Building}
            number="5"
            MWidth="300px"
          />
        </Grid>
      </Grid>
      <Grid item textAlign={"left"} xs={12} pt={"40px"}>
        <CustomTypography
          text="Booking Requests Send"
          type="subHeading"
          colorType="text"
        />
      </Grid>
      <Grid item xs={12}>
        <CustomTab tabs={tabNames} />
      </Grid>
    </Grid>
  );
};
