import * as React from "react";
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
// import PropTypes from "prop-types";
import CustomTypography from "../Typography/Typography";
import CustomButton from "../Button/Button";

export const MyPetsCards = () => {
  const CardData = [
    {
      image:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--Zib71Fgv--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/n082uxea33j6zq3mca7u.png",
      name: "Aadhi Pet Care",
      address: "Anna Nagar, Chennai",
      type: "Villa",
      distance: "0.2kms",
      reviews: "(75 reviews)",
    },
  ];
  const [open, setOpen] = React.useState(false);
  const [hide, setHide] = React.useState(true);
  const OnOpen = () => {
    setOpen(true);
    setHide(false);
  };
  const OnClose = () => {
    setOpen(false);
    setHide(true);
  };
  const ListData = [
    {
      PetName: "Alan",
      PetType: "Dog",
      DateofBirth: "01-02-2020",
      Interests: "Interests",
      WalkingRoutine: "30 mins daily at 5PM",

      Breed: "Golden Retriever",
      Weight: "5.2 Kgs",
      FoodPreference: "Bones, Pedigree, Lamb.",
    },
  ];
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
          p: "25px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {CardData.map((item, key) => {
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
                    gap: "10px",
                    flexWrap: "wrap",
                  }}
                >
                  {/* <Box sx={{ maxWidth: "350px" }}> */}
                  <CardActionArea
                    sx={{ maxWidth: "130px", textAlign: "center" }}
                  >
                    <CardMedia
                      component="img"
                      image={item.image}
                      alt="dog"
                      sx={{
                        p: "10px",
                        margin: "auto",
                        width: "100%",
                        height: "110px",
                        maxWidth: "110px",
                        borderRadius: "50%",
                      }}
                    />

                    {ListData.map((item, key) => {
                      return (
                        <Box key={key}>
                          <Typography color="text.secondary">
                            {item.PetName}
                          </Typography>
                        </Box>
                      );
                    })}
                  </CardActionArea>
                  {/* </Box> */}
                  {hide ? (
                    <CardActions sx={{ maxWidth: "280px" }}>
                      <CardContent>
                        {ListData.map((item, key) => {
                          return (
                            <Box key={key}>
                              <Box
                                sx={{
                                  display: "flex",
                                  alignItems: "center",
                                  gap: "5px ",
                                }}
                              >
                                <Typography fontWeight="bold">
                                  {" "}
                                  Date of Birth
                                </Typography>
                                <Typography color="text.secondary">
                                  {item.DateofBirth}
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
                                <Typography fontWeight="bold">
                                  Weight
                                </Typography>
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
                          );
                        })}
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
                  <Box>
                    {open ? (
                      <CardActions>
                        <CardContent
                        // sx={{
                        //   display: "flex",
                        //   alignItems: "center",
                        //   justifyContent: "space-evenly",
                        // }}
                        >
                          {ListData.map((item, key) => {
                            return (
                              <Box
                                key={key}
                                sx={{
                                  m: "0px",
                                  p: "0px",
                                  display: "flex",
                                  gap: "70px",
                                  flexWrap: "wrap",
                                  textAlign: "left",
                                }}
                              >
                                <Box sx={{ height: "10px" }}>
                                  <Typography fontWeight="bold">
                                    Pet Type
                                  </Typography>
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
                                  <Typography fontWeight="bold">
                                    Walking Routine
                                  </Typography>
                                  <Typography color="text.secondary">
                                    {item.WalkingRoutine}
                                  </Typography>
                                </Box>
                                <Box sx={{ height: "10px" }}>
                                  <Typography fontWeight="bold">
                                    Breed
                                  </Typography>
                                  <Typography color="text.secondary">
                                    {item.Breed}
                                  </Typography>
                                </Box>

                                <Box sx={{ height: "10px" }}>
                                  <Typography fontWeight="bold">
                                    Weight
                                  </Typography>
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
                            );
                          })}
                        </CardContent>
                      </CardActions>
                    ) : (
                      ""
                    )}
                  </Box>
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
                          {ListData.map((item, key) => {
                            return (
                              <Box key={key}>
                                <CustomTypography
                                  text={item.PetName}
                                  type="subHeading"
                                  colorType="text"
                                />
                              </Box>
                            );
                          })}
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

// MyPetsCards.propTypes = {
//   Data: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
// };
