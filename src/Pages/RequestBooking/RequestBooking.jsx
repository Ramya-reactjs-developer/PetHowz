import { Box, Card, Grid } from "@mui/material";
import React from "react";
import CustomTypography from "../../Components/Typography/Typography";
import "./ReqBookingStyle.css";
import { BoardingSpaceDetailList } from "../../Components/BoardingSpaceDetailsList/BoardingSPaceDetailsList";
import CustomForm from "../../Components/CustomForm/CustomForm";
import { CardContent } from "@material-ui/core";
import {
  DefaultRequestBookingValues,
  RequestBookingEntries,
} from "./RequestBookingEntries";
import CustomButton from "../../Components/Button/Button";
import BookingSubmitModal from "./BookingSubmitModal";
export const RequestBooking = () => {
  const [entry, setEntry] = React.useState([]);
  const [open, setOpen] = React.useState(true);
  const [Modal, setModal] = React.useState(false);

  const modalOpen = () => {
    setModal(true);
  };
  const onMoadalClose = () => {
    setModal(false);
  };

  const ListData = [
    {
      area: "1200 Sq.ft",
      size: "3 Bedrooms",
      type: "Villa",
      prefer: "Small Pets",

      capacity: "8-10 pets",
      petsAccepted: "Cats & Dogs",
      location: "Anna Nagar, Chennai",
      canProvide: "Oral Medication",
    },
  ];
  return (
    <Grid container item xs={12} className="BG">
      <Grid item p={"30px"} height={{ lg: "100vh" }} sm={6} xs={12}>
        <Box sx={{ pt: "20px" }}>
          <CustomTypography
            text="Aadhi Pet Care"
            type="heading3"
            colorType={"text"}
            customStyle={{ fontWeight: "Bold" }}
          />
        </Box>

        <Box sx={{ pt: "20px" }}>
          <CustomTypography
            text="Boarding Space Details"
            type="heading3"
            colorType={"text"}
          />
        </Box>
        <Box sx={{ pt: "20px" }}>
          <BoardingSpaceDetailList Data={ListData} />
        </Box>
      </Grid>
      <Grid item textAlign={"center"} sm={6} xs={12}>
        <Grid item>
          <Card sx={{ mt: "60px" }}>
            <CardContent>
              <CustomForm
                AllEntries={RequestBookingEntries}
                defaultValues={DefaultRequestBookingValues}
                // onReceiveData={modalOpen}
              />
              {Modal ? (
                <BookingSubmitModal open={open} onModalClose={onMoadalClose} />
              ) : (
                ""
              )}
              <CustomButton
                btnTitle="Booking Request Submitting"
                color={"primary"}
                onClickHandle={modalOpen}
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
};
