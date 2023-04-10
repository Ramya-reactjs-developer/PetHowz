import { Box, Grid } from "@mui/material";
import React from "react";
import CustomTypography from "../../../Components/Typography/Typography";
import CustomTab from "../../../Components/Tab/Tab";
import BookingRequestsCard from "../../../Components/Cards/BookingRequestsCard";

export const BookingRequestsHostDB = () => {
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
    <Grid container item xs={12}>
      {" "}
      <Grid item textAlign={"left"} xs={12}>
        <CustomTypography
          text="BookingRequests"
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
