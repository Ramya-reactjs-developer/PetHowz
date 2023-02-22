import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";

import { Box, Button, CardActions, CardMedia } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import {
  MealCardButtonPostion,
  MealCardButtonStyle,
  MealCardHeader,
  MealCardMedia,
  MealCardPostion,
  MealCardTopButton,
  MealCardTopButtonPosition,
  MealIcon,
  MealTypography,
  textAlign,
} from "./Style";
import PropTypes from "prop-types";
export default function MealCard({ Data }) {
  const CardData = Data;
  //  [
  //   {
  //     mealImage:
  //       "https://static.onecms.io/wp-content/uploads/sites/19/2019/02/19/apple-quinoa-bowl-with-cinnamon-ricotta-1809-p102-2000.jpg",
  //     meal1: "Scrambled Egg 1 Nos",
  //     meal2: "Boiled Rice - 1 Bowl",
  //     meal3: "Steamed Carrot - 60 gms",
  //     meal4: "Chicken Breast - 60 gms",
  //     price: "₹ 450",
  //   },
  // ];

  return (
    <Box sx={{ width: "100%", maxWidth: "500px", maxHeight: "465" }}>
      <Box sx={MealCardTopButtonPosition}>
        <Button sx={MealCardTopButton} variant="contained">
          Meow Meal
        </Button>
      </Box>
      <Card sx={MealCardPostion}>
        <Box>
          {CardData.map((item, key) => {
            return (
              <Box key={key}>
                <CardActions>
                  <CardContent>
                    <Box sx={MealCardHeader}>
                      <Box>
                        <CardMedia
                          component="img"
                          image={item.mealImage}
                          alt="Meal"
                          sx={MealCardMedia}
                        />
                      </Box>
                      <Box>
                        {" "}
                        <Typography variant="h6" sx={textAlign}>
                          Whats Included
                        </Typography>
                        <Box sx={MealTypography}>
                          <Typography sx={MealIcon}>
                            <DoneIcon />
                          </Typography>
                          <Typography color="text.secondary" fontSize="16">
                            {item.meal1}
                          </Typography>
                        </Box>
                        <Box sx={MealTypography}>
                          <Typography sx={MealIcon}>
                            <DoneIcon />
                          </Typography>
                          <Typography color="text.secondary" fontSize="16">
                            {item.meal2}
                          </Typography>
                        </Box>
                        <Box sx={MealTypography}>
                          <Typography sx={MealIcon}>
                            <DoneIcon />
                          </Typography>
                          <Typography color="text.secondary" fontSize="16">
                            {item.meal3}
                          </Typography>
                        </Box>
                        <Box sx={MealTypography}>
                          <Typography sx={MealIcon}>
                            <DoneIcon />
                          </Typography>
                          <Typography color="text.secondary" fontSize="16">
                            {item.meal4}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>{" "}
                    <Box
                      sx={{
                        pt: "10px",
                        display: "flex",
                        gap: "5rem",
                      }}
                    >
                      <Typography color="text.secondary" fontSize="16">
                        Meow meal is an authentic food prepared <br></br>
                        by our expert cooks exclusively for pets
                      </Typography>
                      <Box>
                        <Typography
                          gutterBottom
                          variant="h5"
                          fontWeight="bold"
                          lineHeight="normal"
                        >
                          {item.price}
                        </Typography>
                        <Typography fontWeight="bold" lineHeight="normal">
                          {" "}
                          Per Meal
                        </Typography>
                      </Box>
                    </Box>
                    <Box sx={MealCardButtonPostion}>
                      <Button sx={MealCardButtonStyle} variant="contained">
                        Add
                      </Button>
                    </Box>
                  </CardContent>
                </CardActions>
              </Box>
            );
          })}
        </Box>
      </Card>
    </Box>
  );
}
MealCard.propTypes = {
  Data: PropTypes.arrayOf.isRequired,
};
