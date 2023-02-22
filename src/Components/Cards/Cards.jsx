import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, CardActionArea, CardActions } from "@mui/material";
import { AddressPostion, ReviewsPosition } from "./Style";
import StarRating from "../StarRatings/StarRatings";
import PropTypes from "prop-types";

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
                maxWidth: 300,
              }}
            >
              <Box>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    image={item.image}
                    alt="dog"
                    sx={{ width: "300px", height: "200px" }}
                  />
                </CardActionArea>
                <CardActions>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {item.name}
                    </Typography>
                    <Box sx={AddressPostion}>
                      <Typography color="text.secondary">
                        {item.address}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item.distance}
                      </Typography>
                    </Box>
                    <Typography color="text.secondary">{item.type}</Typography>
                    <Box sx={ReviewsPosition}>
                      <Box>
                        <Typography>
                          <StarRating Data={item.ratings} />
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {item.reviews}
                        </Typography>
                      </Box>
                      <Button
                        size="large"
                        variant="contained"
                        color="secondary"
                      >
                        View Details
                      </Button>
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
