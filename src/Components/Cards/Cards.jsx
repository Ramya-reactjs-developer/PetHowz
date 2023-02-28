import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Box, CardActionArea, CardActions, Grid } from "@mui/material";
import { AddressPostion, CardBtnStyles, ReviewsPosition } from "./Style";
import PropTypes from "prop-types";
import CustomTypography from "../Typography/Typography";
import CustomButton from "../Button/Button";
import CustomIcons from "../../Utils/Icons/Index";
import { CustomizedRatings } from "../StarRatings/CustomizedRatings";

export default function CardsSection({ Data }) {
  const CardData = Data;
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
  const OverAllCArdPostions = {
    p: "25px",
    display: "flex",
    alignItems: "center",

    gap: { lg: "30px", md: "100px", sm: "150px" },
    flexWrap: "wrap",
  };

  const CardSize = {
    width: "100%",
    maxWidth: "250px",
  };
  const CardMediaSize = {
    margin: "auto",
    width: "100%",
    height: "200px",
    maxWidth: "250px",
  };

  const AddressSubPosition1 = {
    display: "flex",
    alignItems: "center",
    gap: "7px",
  };
  const AddressSubPosition2 = {
    pt: "10px",
    display: "flex",
    alignItems: "center",
    gap: "7px",
  };

  return (
    <Grid container item xl={12} lg={12} md={12} sm={12} xs={12}>
      <Box sx={OverAllCArdPostions}>
        {CardData.map((item, key) => {
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
                  <CardActions>
                    <CardContent>
                      <Box></Box>
                      <CustomTypography
                        text={item.name}
                        type="h6"
                        colorType="black"
                      />
                      <Box sx={AddressPostion}>
                        <Box sx={AddressSubPosition1}>
                          <img src={CustomIcons.Location} alt="location" />
                          <CustomTypography
                            text={item.address}
                            type="caption"
                            colorType="senary"
                            fontSize="10px"
                          />
                        </Box>
                        <Box>
                          <CustomTypography
                            text={item.distance}
                            type="caption"
                            colorType="senary"
                            fontSize="10px"
                          />
                        </Box>
                      </Box>

                      <Box sx={AddressSubPosition2}>
                        <img src={CustomIcons.Building} alt="location" />
                        <CustomTypography
                          text={item.type}
                          type="caption"
                          colorType="senary"
                          fontSize="10px"
                        />
                      </Box>
                      <Box sx={ReviewsPosition}>
                        <Box>
                          <Box>
                            <CustomizedRatings Data={item.ratings} />
                          </Box>

                          <CustomTypography
                            text={item.reviews}
                            type="caption"
                            colorType="senary"
                            fontSize="10px"
                          />
                        </Box>

                        <CustomButton
                          btnTitle="View Details"
                          color="primary"
                          btnStyles={CardBtnStyles}
                          fontSize="10px"
                        />
                      </Box>
                    </CardContent>
                  </CardActions>
                </Box>
              </Card>
            </Box>
          );
        })}
      </Box>
    </Grid>
  );
}

CardsSection.propTypes = {
  Data: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
};
