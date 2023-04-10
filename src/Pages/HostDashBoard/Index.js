import { Box, Grid } from "@mui/material";
import React from "react";
import DashBoardCard from "../../Components/DashBoardCard/DashBoardCard";
import CustomIcons from "../../Utils/Icons/Index";
import CustomTypography from "../../Components/Typography/Typography";
import CustomTab from "../../Components/Tab/Tab";
import BookingRequestsCard from "../../Components/Cards/BookingRequestsCard";

export const HostDashBoard = () => {
  const CardData = [
    {
      CustomerName: "John",
      petType: "Dog",
      totalCosts: "380",
      Status: "Pending",
      bookedDate: "20 Jun 2022",
      noOfDays: "5",
    },
    {
      CustomerName: "Britto",
      petType: "Dog",
      totalCosts: "380",
      bookedDate: "20 Jun 2022",
      noOfDays: "5",
    },
  ];
  const [value, setValue] = React.useState(0);

  const tabList = [
    {
      id: 1,
      tabText: "Pet Home Boarding",
      tabColor: "white",
    },
    {
      id: 2,
      tabText: "Pet Services",
      tabColor: "white",
    },
  ];
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Grid container item xl={12} lg={12} md={12} sm={12} xs={12}>
      <Grid
        item
        display={"flex"}
        alignItems={"center"}
        justifyContent={"flex-start"}
        flexWrap={"wrap"}
        gap={"30px"}
        xs={12}
      >
        <Grid item xl={3} lg={3} md={4} sm={5} xs={8}>
          <DashBoardCard
            id="card1"
            tittle="Total Bookings"
            icon={CustomIcons.Building}
            number="5"
            MWidth="300px"
          />
        </Grid>
        <Grid item xl={3} lg={3} md={4} sm={5} xs={8}>
          <DashBoardCard
            id="card2"
            tittle="Booking Requests"
            icon={CustomIcons.Building}
            number="5"
            MWidth="300px"
          />
        </Grid>
        <Grid item xl={3} lg={3} md={4} sm={5} xs={8}>
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
      <Grid className="customTab" item pt={3} xs={12}>
        <CustomTab
          tabList={tabList}
          handleChange={handleChange}
          value={value}
          className="tabBar"
        />
        <Box pt={"20px"}>
          {value === 0 && <BookingRequestsCard Data={CardData} />}
          {value === 1 && <BookingRequestsCard Data={CardData} />}
        </Box>
      </Grid>
    </Grid>
  );
};
