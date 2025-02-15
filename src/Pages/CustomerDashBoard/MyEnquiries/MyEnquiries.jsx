import { Box, Grid } from "@mui/material";
import React from "react";
import CustomTab from "../../../Components/Tab/Tab";
import ProceedToPayModal from "../ProceedToPayModal";
import BookingRequestsSend from "../../../Components/Cards/BookingRequestsSend";
import "../cusStyle.css";
import Bg from "../../../Assets/Images/coming-soon3.png";
export const MyEnquiriesCustomerDB = () => {
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
    <Grid container item xs={12}>
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
        <Grid className="customTab" item xs={12}>
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
              <BookingRequestsSend Data={CardData} onClickHandle={modalOpen} />
            )}
            {value === 1 && <BookingRequestsSend Data={CardData} />}
          </Box>
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
