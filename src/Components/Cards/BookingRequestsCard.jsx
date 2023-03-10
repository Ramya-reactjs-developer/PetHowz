import * as React from "react";
import Card from "@mui/material/Card";

import Typography from "@mui/material/Typography";

import { Box, Button, CardMedia, Grid } from "@mui/material";
import {
  Info1Postion,
  Info1SubPostion1,
  // Info1SubPostion2,
  // Info1SubPostion3,
  // Info2Postion,
  // Info2SubPostion1,
  OwnerProfile,
  OwnerProfileSize,
  PetHomeCardPosition,
  PetHomeCardSize,
} from "./Style";
import PropTypes from "prop-types";

export default function BookingRequestsCard({ Data }) {
  const CardData = Data;
  //  [
  //   {
  //     ownerPic:
  //       "https://play-lh.googleusercontent.com/i1qvljmS0nE43vtDhNKeGYtNlujcFxq72WAsyD2htUHOac57Z9Oiew0FrpGKlEehOvo=w240-h480-rw",
  //     ownername: "John",
  //     petName: "Max,chalie",
  //     venueBooked: "Adhi Pet Care",
  //     totalCosts: "380",
  //     bookedDate: "20 Jun 2022",
  //     noOfDays: "5",
  //   },
  // ];

  return (
    <Grid
      container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: "30px",
      }}
      item
      xs={12}
    >
      {" "}
      <Grid
        item
        xs={12}
        sx={{
          p: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: { sm: "flex-start", xs: "center" },
          gap: "30px",
          flexWrap: "wrap",
        }}
      >
        {CardData.map((item, key) => {
          return (
            <Card
              key={key}
              sx={{ pb: "10px", background: "#FFF8F5 ", height: "auto" }}
            >
              <Card sx={PetHomeCardSize}>
                <Box sx={{ pt: "7px" }}>
                  <Box sx={PetHomeCardPosition}>
                    <Box
                      sx={{
                        display: { sm: "flex", xs: "block" },

                        justifyContent: "flex-start",
                        gap: "100px",
                      }}
                    >
                      <Box sx={Info1SubPostion1}>
                        <Box>
                          <Typography lineHeight={2.5}>
                            Customer Name
                          </Typography>
                          <Typography lineHeight={2.5}>Pet Type</Typography>
                          <Typography lineHeight={2.5}>Cost</Typography>
                        </Box>
                        <Box>
                          <Typography color="text.secondary" lineHeight={2.5}>
                            {item.CustomerName}
                          </Typography>
                          <Typography color="text.secondary" lineHeight={2.5}>
                            {item.petType}
                            <Typography color="text.secondary" lineHeight={2.5}>
                              {item.totalCosts}
                            </Typography>
                          </Typography>
                        </Box>
                      </Box>
                      <Box sx={Info1SubPostion1}>
                        <Box>
                          <Typography lineHeight={2.5}>Booking Date</Typography>

                          <Typography lineHeight={2.5}>No of Days</Typography>
                        </Box>
                        <Box>
                          <Typography color="text.secondary" lineHeight={2.5}>
                            {item.bookedDate}
                          </Typography>
                          <Typography color="text.secondary" lineHeight={2.5}>
                            {item.noOfDays}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Card>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: { sm: "flex-end", xs: "center" },
                  gap: "20px",
                  pr: "5px",
                  pt: "10px",
                }}
              >
                <Button
                  sx={{
                    width: { sm: "120px", xs: "100px" },
                    borderRadius: "10px",
                    background: "#F85A47",
                    color: "white",
                    textTransform: "none",
                  }}
                >
                  Approve
                </Button>
                <Button
                  sx={{
                    width: { sm: "120px", xs: "100px" },
                    borderRadius: "10px",
                    background: "transparent",
                    color: "#F85A47",
                    border: "1px solid #F85A47",
                    boxShadow: "none",
                    textTransform: "none",
                  }}
                >
                  Cancel
                </Button>
              </Box>
            </Card>
          );
        })}
      </Grid>
    </Grid>
  );
}
BookingRequestsCard.propTypes = {
  Data: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
};
