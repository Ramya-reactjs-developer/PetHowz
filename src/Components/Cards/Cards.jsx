import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, CardActionArea, CardActions } from "@mui/material";
import { AddressPostion, CardBtnStyles, ReviewsPosition } from "./Style";
import StarRating from "../StarRatings/StarRatings";
import PropTypes from "prop-types";
import CustomTypography from "../Typography/Typography";
import CustomButton from "../Button/Button";
import CustomIcons from "../../Utils/Icons/Index";

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

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "50px",
        flexWrap: "wrap",
      }}
    >
      {CardData.map((item, key) => {
        return (
          <Box
          // sx={{
          //   display: "flex",
          //   alignItems: "center",
          //   justifyContent: "space-evenly",
          // }}
          >
            <Card
              key={key}
              sx={{
                maxWidth: 340,
              }}
            >
              <Box>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    image={item.image}
                    alt="dog"
                    sx={{ width: "340px", height: "200px" }}
                  />
                </CardActionArea>
                <CardActions>
                  <CardContent>
                    {/* <Typography gutterBottom variant="h5" component="div">
                      {item.name}
                    </Typography> */}
                    <Box></Box>
                    <CustomTypography
                      text={item.name}
                      type="h6"
                      colorType="black"
                    />
                    <Box sx={AddressPostion}>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        <img src={CustomIcons.Location} alt="location" />
                        <CustomTypography
                          text={item.address}
                          type="caption"
                          colorType="senary"
                        />
                      </Box>
                      <Box>
                        <CustomTypography
                          text={item.distance}
                          type="caption"
                          colorType="senary"
                        />
                      </Box>
                      {/* <Typography color="text.secondary">
                        <img src={CustomIcons.Location} alt="location" />
                        {item.address}
                      </Typography> */}
                      {/* <Typography variant="body2" color="text.secondary">
                        {item.distance}
                      </Typography> */}
                    </Box>
                    {/* <Typography color="text.secondary">{item.type}</Typography> */}
                    <Box>
                      <CustomTypography
                        text={item.type}
                        type="caption"
                        colorType="senary"
                      />
                    </Box>
                    <Box sx={ReviewsPosition}>
                      <Box>
                        <Typography>
                          <StarRating Data={item.ratings} />
                        </Typography>
                        {/* <Typography variant="body2" color="text.secondary">
                          {item.reviews}
                        </Typography> */}
                        <CustomTypography
                          text={item.reviews}
                          type="caption"
                          colorType="senary"
                        />
                      </Box>
                      {/* <Button
                        size="large"
                        variant="contained"
                        color="secondary"
                      >
                        View Details
                      </Button> */}
                      <CustomButton
                        btnTitle="View Details"
                        color="primary"
                        btnStyles={CardBtnStyles}
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
  );
}

CardsSection.propTypes = {
  Data: PropTypes.arrayOf.isRequired,
};
