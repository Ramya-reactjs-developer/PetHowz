import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import {
  Box,
  CardActionArea,
  CardActions,
  Grid,
  Typography,
} from "@mui/material";
// import { AddressPosition, CardBtnStyles, ReviewsPosition } from "./Style";
import PropTypes from "prop-types";
import CustomTypography from "../Typography/Typography";
import CustomButton from "../Button/Button";

export const MyPetsCards = ({ ListData, onEdit }) => {
  const [open, setOpen] = React.useState(false);
  const [hide, setHide] = React.useState(true);

  const [dob] = React.useState(ListData[0].DateofBirth);
  const [age, setAge] = React.useState("");

  function calculateAge() {
    const birthDate = new Date(dob);
    const today = new Date();
    let yearsDiff = today.getFullYear() - birthDate.getFullYear();
    console.log(yearsDiff, "y");
    setAge(yearsDiff);
  }
  // Check if the birth month and day is later than current month and day
  //   if (
  //     today.getMonth() < birthDate.getMonth() ||
  //     (today.getMonth() === birthDate.getMonth() &&
  //       today.getDate() < birthDate.getDate())
  //   ) {
  //     yearsDiff--;
  //   }

  //   setAge(yearsDiff);
  // }
  React.useEffect(() => {
    calculateAge();
    return () => {};
  }, [age, dob]);

  const OnOpen = () => {
    setOpen(true);
    setHide(false);
  };
  const OnClose = () => {
    setOpen(false);
    setHide(true);
  };

  return (
    <Grid
      container
      // sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      item
      xl={12}
      lg={12}
      md={12}
      sm={12}
      xs={12}
    >
      <Grid
        item
        sx={{
          pt: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {ListData.map((item, key) => {
          return (
            <Box key={key}>
              <Card
                sx={{
                  width: "100%",
                }}
              >
                <Box
                  sx={{
                    display: { xs: "flex" },
                    // gap: "15px",
                    // flexWrap: "wrap",
                  }}
                >
                  {/* <Box sx={{ maxWidth: "350px" }}> */}
                  <Box sx={{ maxWidth: "130px", textAlign: "center" }}>
                    <CardMedia
                      component="img"
                      image={item.image}
                      alt="dog"
                      sx={{
                        p: "15px",

                        height: "110px",
                        width: "110px",
                        borderRadius: "50%",
                      }}
                    />

                    <Typography color="text.secondary">
                      {item.PetName}
                    </Typography>
                  </Box>
                  {/* </Box> */}
                  {hide ? (
                    <CardActions sx={{ maxWidth: "280px" }}>
                      <CardContent>
                        <Box>
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: "5px ",
                            }}
                          >
                            <Typography fontWeight="bold"> Age</Typography>
                            <Typography color="text.secondary">
                              {/* {item.DateofBirth} */}
                              {age}
                            </Typography>
                          </Box>

                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: "5px ",
                              pt: "10px",
                            }}
                          >
                            <Typography fontWeight="bold">Weight</Typography>
                            <Typography color="text.secondary">
                              {item.Weight}
                            </Typography>
                          </Box>
                          <Box sx={{ pt: "10px" }}>
                            <Typography color="text.secondary">
                              {item.Breed}
                            </Typography>
                          </Box>
                        </Box>

                        <Box sx={{ pt: "15px" }}>
                          <CustomButton
                            btnTitle="View Details"
                            color="primary"
                            btnStyles={{
                              color: "white",
                              width: "120px",
                              borderRadius: "25px",
                              background: "#F85A47",
                            }}
                            onClickHandle={OnOpen}
                          />
                        </Box>
                      </CardContent>
                    </CardActions>
                  ) : (
                    ""
                  )}

                  {open ? (
                    <CardActions>
                      <CardContent>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "left",
                            justifyContent: "flex-start",
                            gap: "80px",
                            flexWrap: "wrap",
                            textAlign: "left",
                          }}
                        >
                          <Box sx={{ height: "10px" }}>
                            <Typography fontWeight="bold">Pet Type</Typography>
                            <Typography color="text.secondary">
                              {item.PetType}
                            </Typography>
                          </Box>

                          <Box sx={{ height: "10px" }}>
                            <Typography fontWeight="bold">
                              DateofBirth
                            </Typography>
                            <Typography color="text.secondary">
                              {item.DateofBirth}
                            </Typography>
                          </Box>
                          <Box sx={{ height: "10px" }}>
                            <Typography fontWeight="bold">Interests</Typography>
                            <Typography color="text.secondary">
                              {item.Interests}
                            </Typography>
                          </Box>

                          <Box sx={{ height: "10px" }}>
                            <Typography fontWeight="bold">
                              Walking Routine
                            </Typography>
                            <Typography color="text.secondary">
                              {item.WalkingRoutine}
                            </Typography>
                          </Box>
                          <Box sx={{ height: "10px" }}>
                            <Typography fontWeight="bold">Breed</Typography>
                            <Typography color="text.secondary">
                              {item.Breed}
                            </Typography>
                          </Box>

                          <Box sx={{ height: "10px" }}>
                            <Typography fontWeight="bold">Weight</Typography>
                            <Typography color="text.secondary">
                              {item.Weight}
                            </Typography>
                          </Box>
                          <Box sx={{ height: "10px" }}>
                            <Typography fontWeight="bold">
                              Food Preference
                            </Typography>
                            <Typography color="text.secondary">
                              {item.FoodPreference}
                            </Typography>
                          </Box>
                        </Box>
                      </CardContent>
                    </CardActions>
                  ) : (
                    ""
                  )}
                </Box>
                {open ? (
                  <Box>
                    <Box
                      sx={{
                        p: "5px",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "5px",
                          pt: "10px",
                        }}
                      >
                        <CustomTypography
                          text="About  "
                          type="subHeading"
                          colorType="text"
                        />
                        <Box>
                          <Box>
                            <CustomTypography
                              text={item.PetName}
                              type="subHeading"
                              colorType="text"
                            />
                          </Box>
                        </Box>
                      </Box>
                      <Typography>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Omnis saepe earum ea ut non dolorem architecto
                        aliquid vero eligendi, minus deserunt commodi
                        consequuntur error voluptatibus placeat accusamus
                        voluptatem distinctio quae.
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        p: "5px",
                      }}
                    >
                      <CustomButton
                        btnTitle="Edit Details"
                        color="primary"
                        onClickHandle={onEdit}
                        btnStyles={{
                          color: "red",
                          border: " 1px solid red",
                          width: "120px",
                          borderRadius: "25px",
                          background: "transparent",
                        }}
                      />
                      <CustomButton
                        btnTitle="Hide Details"
                        color="primary"
                        btnStyles={{
                          width: "120px",
                          borderRadius: "20px",
                          background: "#F85A47",
                          color: "white",
                        }}
                        onClickHandle={OnClose}
                      />
                    </Box>
                  </Box>
                ) : (
                  ""
                )}
              </Card>
            </Box>
          );
        })}
      </Grid>
    </Grid>
  );
};

MyPetsCards.propTypes = {
  ListData: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
};
