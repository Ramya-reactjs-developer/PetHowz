import { Box, Grid } from "@mui/material";
import React from "react";
import DashBoardCard from "../../Components/DashBoardCard/DashBoardCard";
import CustomIcons from "../../Utils/Icons/Index";
import CustomTypography from "../../Components/Typography/Typography";
import CustomTab from "../../Components/Tab/Tab";
import BookingRequestsSend from "../../Components/Cards/BookingRequestsSend";
import ProceedToPayModal from "./ProceedToPayModal";
import "./cusStyle.css";
import Bg from "../../Assets/Images/coming-soon3.png";
export const CustomerDashBoard = () => {
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
      Status: "Pending",
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
  const [open, setOpen] = React.useState(true);
  const [Modal, setModal] = React.useState(false);

  const modalOpen = () => {
    setModal(true);
  };
  const onMoadalClose = () => {
    setModal(false);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Grid container item xl={12} lg={12} md={12} sm={12} xs={12}>
      <Grid
        container
        className="bodyContent"
        item
        xl={12}
        lg={12}
        md={12}
        sm={12}
        xs={12}
      >
        <Grid item>
          <Grid
            item
            display={"flex"}
            alignItems={"center"}
            justifyContent={"flex-start"}
            flexWrap={"wrap"}
            // rowGap={{
            //   xl: "30px",
            //   lg: "30px",
            //   md: "30px",
            //   sm: "30px",
            //   xs: "30px",
            // }}
            // columnGap={{
            //   xl: 0,
            //   lg: 0,
            //   md: "30px",
            //   sm: "30px",
            //   xs: "30px",
            // }}
            gap={"30px"}
            xs={12}
          >
            <Grid item xl={3} lg={3} md={4} sm={5} xs={8}>
              <DashBoardCard
                id="card1"
                tittle="Bookings Done"
                icon={CustomIcons.Building}
                number="5"
                MWidth="300px"
              />
            </Grid>
            <Grid item xl={3} lg={3} md={4} sm={5} xs={8}>
              <DashBoardCard
                id="card2"
                tittle=" Requests Send"
                icon={CustomIcons.Building}
                number="5"
                MWidth="300px"
              />
            </Grid>
            <Grid item xl={3} lg={3} md={4} sm={5} xs={8}>
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
              type="caption"
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
            {Modal ? (
              <ProceedToPayModal open={open} onModalClose={onMoadalClose} />
            ) : (
              ""
            )}
            <Box pt={"20px"}>
              {value === 0 && (
                <BookingRequestsSend
                  Data={CardData}
                  onClickHandle={modalOpen}
                />
              )}
              {value === 1 && <BookingRequestsSend Data={CardData} />}
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        className="imageBg"
        item
        xl={12}
        lg={12}
        md={12}
        sm={12}
        xs={12}
      >
        <img src={Bg} alt="vf" />
      </Grid>
    </Grid>
  );
};
