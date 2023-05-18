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
import CustomIcons from "../../Utils/Icons/Index";
import { CustomizedRatings } from "../StarRatings/CustomizedRatings";
import { useSelector } from "react-redux";
import {
  AddressPosition,
  AddressSubPosition1,
  AddressSubPosition2,
  CardBtnStyles,
  CardMediaSize,
  CardSize,
  OverAllCArdPostions,
  ReviewsPosition,
} from "./Style";

export default function CardsSection({ Data, onClickHandle }) {
  // const CardData = Data;
  // const { onClickHandle } = props;
  // [
  //   {
  //     image:
  //       "https://res.cloudinary.com/practicaldev/image/fetch/s--Zib71Fgv--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/n082uxea33j6zq3mca7u.png",
  //     name: "Aadhi Pet Care",
  //     address: "Anna Nagar, Chennai",
  //     type: "Villa",
  //     distance: "0.2kms",
  //     reviews: "(75 reviews)",
  //   },
  // ];

  const OverAllSearchResult = useSelector((state) => state?.overallsearch);
  console.log(OverAllSearchResult, "OverAllSearchResult");

  return (
    <Grid
      container
      // sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      item
      xs={12}
    >
      {Array.isArray(Data) && Data.length > 0 ? (
        <Grid item sx={OverAllCArdPostions}>
          {Data?.map((item, key) => {
            return (
              <Box key={key}>
                <Card sx={CardSize}>
                  <Box>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        image={item.image}
                        alt="dog"
                        sx={CardMediaSize}
                      />
                    </CardActionArea>
                    <CardActions sx={{ Width: "250px" }}>
                      <CardContent sx={{ Width: "100%" }}>
                        <CustomTypography
                          text={item?.pet_boarding_space_name}
                          type="h6"
                          colorType="text"
                        />
                        <Box sx={AddressPosition}>
                          <Box sx={AddressSubPosition1}>
                            <img src={CustomIcons.Location} alt="location" />
                            <CustomTypography
                              text={item.locality}
                              type="title"
                              customStyle={{ fontSize: "10px" }}
                              colorType="senary"
                            />
                          </Box>
                          <Box>
                            <CustomTypography
                              text={item.distance}
                              type="title"
                              customStyle={{ fontSize: "10px" }}
                              colorType="senary"
                            />
                          </Box>
                        </Box>

                        <Box sx={AddressSubPosition2}>
                          <img src={CustomIcons.Building} alt="location" />
                          <CustomTypography
                            text={item.type_of_boarding}
                            type="title"
                            customStyle={{ fontSize: "10px" }}
                            colorType="senary"
                          />
                        </Box>
                        <Box sx={ReviewsPosition}>
                          <Grid md={7}>
                            <Grid>
                              <CustomizedRatings Data={item.ratings} />
                            </Grid>

                            <CustomTypography
                              text={item.reviews}
                              type="title"
                              customStyle={{ fontSize: "10px" }}
                              colorType="senary"
                            />
                          </Grid>
                          <Grid md={5}>
                            <CustomButton
                              btnTitle="View Details"
                              color="primary"
                              btnStyles={CardBtnStyles}
                              // onClickHandle={onClickHandle}
                              onClickHandle={() =>
                                onClickHandle(item?.pet_space_id)
                              }
                            />
                          </Grid>
                        </Box>
                      </CardContent>
                    </CardActions>
                  </Box>
                </Card>
              </Box>
            );
          })}
        </Grid>
      ) : (
        <Grid container item xs={12} height={"50vh"}>
          <Grid
            item
            sx={{
              display: "grid",
              placeItems: "center",
            }}
            xs={12}
          >
            <Typography fontFamily={"Roboto-Regular"} variant="h4">
              No Results Found
            </Typography>
          </Grid>
        </Grid>
      )}
    </Grid>
  );
}

CardsSection.propTypes = {
  Data: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
};
