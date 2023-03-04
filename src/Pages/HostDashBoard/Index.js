import { Box, Grid } from "@mui/material";
import React from "react";
import DashBoardCard from "../../Components/DashBoardCard/DashBoardCard";
import CustomIcons from "../../Utils/Icons/Index";
import CustomTypography from "../../Components/Typography/Typography";
import CustomTab from "../../Components/Tab/Tab";

export const MyDashBoard = () => {
  const tabNames = [
    { label: "Pet Home Boarding" },
    { label: "Pet Home Boarding + Services" },
    { label: "Pet Services" },
  ];
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
            tittle="Total Bookings"
            icon={CustomIcons.Building}
            number="5"
            MWidth="300px"
          />
        </Grid>
        <Grid item lg={2} md={3} sm={4} xs={12}>
          <DashBoardCard
            id="card2"
            tittle="Booking Requests"
            icon={CustomIcons.Building}
            number="5"
            MWidth="300px"
          />
        </Grid>
        <Grid item lg={2} md={3} sm={4} xs={12}>
          <DashBoardCard
            id="card3"
            tittle="Services Provided"
            icon={CustomIcons.Building}
            number="5"
            MWidth="300px"
          />
        </Grid>
      </Grid>
      <Grid item textAlign={"left"} xs={12} pt={"40px"}>
        <CustomTypography
          text="Booking Request"
          type="subHeading"
          colorType="text"
        />
      </Grid>
      <Grid>
        <CustomTab tabs={tabNames} />
      </Grid>
    </Grid>
  );
};
