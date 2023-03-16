// import * as React from "react";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";

// import Typography from "@mui/material/Typography";

// import { Box, Button, CardActions, CardMedia } from "@mui/material";

// import {
//   MealCardButtonPostion,
//   MealCardButtonStyle,
//   MealCardHeader,
//   MealCardMedia,
//   MealCardPostion,
//   MealCardTopButton,
//   MealCardTopButtonPosition,
//   MealTypography,
//   textAlign,
// } from "./Style";
// import PropTypes from "prop-types";
// import CustomButton from "../Button/Button";
// import CustomIcons from "../../Utils/Icons/Index";

// export default function MealCard({ Data }) {
//   const CardData = Data;
//   //  [
//   //   {
//   //     mealImage:
//   //       "https://static.onecms.io/wp-content/uploads/sites/19/2019/02/19/apple-quinoa-bowl-with-cinnamon-ricotta-1809-p102-2000.jpg",
//   //     meal1: "Scrambled Egg 1 Nos",
//   //     meal2: "Boiled Rice - 1 Bowl",
//   //     meal3: "Steamed Carrot - 60 gms",
//   //     meal4: "Chicken Breast - 60 gms",
//   //     price: "₹ 450",
//   //   },
//   // ];

//   return (
//     <Box sx={{ width: "100%", maxWidth: "500px", maxHeight: "465" }}>
//       <Box sx={MealCardTopButtonPosition}>
//         {/* <Button sx={MealCardTopButton} variant="contained">
//           Meow Meal
//         </Button> */}
//         <CustomButton
//           btnTitle="Meow Meal"
//           color="primary"
//           btnStyles={MealCardTopButton}
//           fontSize="12px"
//         />
//       </Box>
//       <Card sx={MealCardPostion}>
//         <Box>
//           {CardData.map((item, key) => {
//             return (
//               <Box key={key}>
//                 <CardActions>
//                   <CardContent>
//                     <Box sx={MealCardHeader}>
//                       <Box>
//                         <CardMedia
//                           component="img"
//                           image={item.mealImage}
//                           alt="Meal"
//                           sx={MealCardMedia}
//                         />
//                       </Box>
//                       <Box>
//                         {" "}
//                         <Typography variant="h6" sx={textAlign}>
//                           Whats Included
//                         </Typography>
//                         <Box sx={MealTypography}>
//                           <img src={CustomIcons.DoneTick} alt="tick" />

//                           <Typography color="text.secondary" fontSize="16">
//                             {item.meal1}
//                           </Typography>
//                         </Box>
//                         <Box sx={MealTypography}>
//                           <img src={CustomIcons.DoneTick} alt="tick" />
//                           <Typography color="text.secondary" fontSize="16">
//                             {item.meal2}
//                           </Typography>
//                         </Box>
//                         <Box sx={MealTypography}>
//                           <img src={CustomIcons.DoneTick} alt="tick" />
//                           <Typography color="text.secondary" fontSize="16">
//                             {item.meal3}
//                           </Typography>
//                         </Box>
//                         <Box sx={MealTypography}>
//                           <img src={CustomIcons.DoneTick} alt="tick" />
//                           <Typography color="text.secondary" fontSize="16">
//                             {item.meal4}
//                           </Typography>
//                         </Box>
//                       </Box>
//                     </Box>{" "}
//                     <Box
//                       sx={{
//                         pt: "10px",
//                         display: "flex",
//                         gap: "5rem",
//                       }}
//                     >
//                       <Typography color="text.secondary" fontSize="16">
//                         Meow meal is an authentic food prepared <br></br>
//                         by our expert cooks exclusively for pets
//                       </Typography>
//                       <Box>
//                         <Typography
//                           gutterBottom
//                           variant="h5"
//                           fontWeight="bold"
//                           lineHeight="normal"
//                         >
//                           {item.price}
//                         </Typography>
//                         <Typography fontWeight="bold" lineHeight="normal">
//                           {" "}
//                           Per Meal
//                         </Typography>
//                       </Box>
//                     </Box>
//                     <Box sx={MealCardButtonPostion}>
//                       <Button sx={MealCardButtonStyle} variant="contained">
//                         Add
//                       </Button>
//                     </Box>
//                   </CardContent>
//                 </CardActions>
//               </Box>
//             );
//           })}
//         </Box>
//       </Card>
//     </Box>
//   );
// }
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";

import { Box, Button, CardActions, CardMedia, Grid } from "@mui/material";

import {
  MealCardButtonPostion,
  MealCardButtonStyle,
  MealCardHeader,
  MealCardMedia,
  MealCardPostion,
  MealCardTopButton,
  MealCardTopButtonPosition,
  MealTypography,
  textAlign,
} from "./Style";
import PropTypes from "prop-types";
import CustomButton from "../Button/Button";
import CustomIcons from "../../Utils/Icons/Index";

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
    <Grid
      container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
      }}
      item
      xs={12}
    >
      <Grid
        item
        xs={12}
        sx={{
          p: "25px",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          gap: "30px",
          flexWrap: "wrap",
        }}
      >
        {CardData.map((item, key) => {
          return (
            <Grid item key={key}>
              <Box sx={MealCardTopButtonPosition}>
                <CustomButton
                  btnTitle="Meow Meal"
                  color="primary"
                  btnStyles={MealCardTopButton}
                  fontSize="12px"
                />
              </Box>
              <Card sx={MealCardPostion}>
                <Box>
                  <Box>
                    <CardActions>
                      <CardContent>
                        <Box sx={{ borderBottom: "2px dashed #707070" }}>
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
                                <img src={CustomIcons.DoneTick} alt="tick" />

                                <Typography
                                  color="text.secondary"
                                  fontSize="16"
                                >
                                  {item.meal1}
                                </Typography>
                              </Box>
                              <Box sx={MealTypography}>
                                <img src={CustomIcons.DoneTick} alt="tick" />
                                <Typography
                                  color="text.secondary"
                                  fontSize="16"
                                >
                                  {item.meal2}
                                </Typography>
                              </Box>
                              <Box sx={MealTypography}>
                                <img src={CustomIcons.DoneTick} alt="tick" />
                                <Typography
                                  color="text.secondary"
                                  fontSize="16"
                                >
                                  {item.meal3}
                                </Typography>
                              </Box>
                              <Box sx={MealTypography}>
                                <img src={CustomIcons.DoneTick} alt="tick" />
                                <Typography
                                  color="text.secondary"
                                  fontSize="16"
                                >
                                  {item.meal4}
                                </Typography>
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                        <Box
                          sx={{
                            pt: "10px",
                            display: { sm: "flex", xs: "block" },
                            alignItems: "center",
                            justifyContent: "space-between",
                          }}
                        >
                          <Typography color="text.secondary" fontSize="12">
                            Meow meal is an authentic food prepared <br></br>
                            by our expert cooks exclusively for pets
                          </Typography>
                          <Box>
                            <Typography
                              variant="h4"
                              fontWeight="bold"
                              lineHeight="normal"
                              textAlign={"center"}
                            >
                              {item.price}
                            </Typography>
                            <Typography
                              fontWeight="bold"
                              textAlign={"center"}
                              lineHeight="normal"
                            >
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
                </Box>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
}

MealCard.propTypes = {
  Data: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
};
