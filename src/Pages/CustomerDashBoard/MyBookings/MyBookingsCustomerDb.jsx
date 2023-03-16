import { Box, Grid } from "@mui/material";
import React from "react";
import CustomTypography from "../../../Components/Typography/Typography";
import CustomTab from "../../../Components/Tab/Tab";
import PetHomeCard from "../../../Components/Cards/PetHomeCard";

export const MyBookingsCustomerDB = () => {
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

  const CardData = [
    {
      ownerPic:
        "https://play-lh.googleusercontent.com/i1qvljmS0nE43vtDhNKeGYtNlujcFxq72WAsyD2htUHOac57Z9Oiew0FrpGKlEehOvo=w240-h480-rw",
      ownername: "John",
      petName: "Max,chalie",
      venueBooked: "Adhi Pet Care",
      totalCosts: "380",
      bookedDate: "20 Jun 2022",
      noOfDays: "5",
    },
    {
      ownerPic:
        "https://play-lh.googleusercontent.com/i1qvljmS0nE43vtDhNKeGYtNlujcFxq72WAsyD2htUHOac57Z9Oiew0FrpGKlEehOvo=w240-h480-rw",
      ownername: "John",
      petName: "Max,chalie",
      venueBooked: "Adhi Pet Care",
      totalCosts: "380",
      bookedDate: "20 Jun 2022",
      noOfDays: "5",
    },
  ];
  const CardData2 = [
    {
      ownerPic:
        "https://play-lh.googleusercontent.com/i1qvljmS0nE43vtDhNKeGYtNlujcFxq72WAsyD2htUHOac57Z9Oiew0FrpGKlEehOvo=w240-h480-rw",
      ownername: "Surya",
      petName: "Ramya,Jothi",
      venueBooked: "Joyhi Pet Care",
      totalCosts: "280",
      bookedDate: "02 Jun 2022",
      noOfDays: "6",
    },
  ];
  return (
    <Grid container item xs={10}>
      {" "}
      <Grid item textAlign={"left"} xs={12} pt={"40px"}>
        <CustomTypography
          text="MyBookings"
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
          {value === 0 && <PetHomeCard Data={CardData} />}
          {value === 1 && <PetHomeCard Data={CardData2} />}
        </Box>
      </Grid>
    </Grid>
  );
};
