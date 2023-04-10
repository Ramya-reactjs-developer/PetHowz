// import * as React from "react";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import { useDispatch, useSelector } from "react-redux";
// import actions from "../../Redux/Actions/index";
// import { Box, CardActionArea, Grid } from "@mui/material";
// import PropTypes from "prop-types";
// import CustomTypography from "../Typography/Typography";
// import CustomButton from "../Button/Button";
// import CustomIcons from "../../Utils/Icons/Index";
// import { CustomizedRatings } from "../StarRatings/CustomizedRatings";
// import "./GroomingCard.css";

// export default function GroomingCardsSection({ Data }) {
//   const GroomingData = Data;

//     const { ourServiceById } = useSelector((state) => state?.ourServiceById);

//       // const dispatch = useDispatch();
//       // const { grooming } = useSelector((state) => state?.grooming);
//       // console.log(grooming, "galleryImage");

//       // React.useEffect(() => {
//       //   const data = { data: {}, method: "get", apiName: "getAllPetSpace" };
//       //   dispatch(actions.GROOMING(data));
//       // }, [dispatch]);

//   return (
//     <Grid
//       container
//       xl={12}
//       lg={12}
//       md={12}
//       sm={12}
//       xs={12}
//       className="mainCard"
//     >
//       <Grid item className="CardPositions">
//         {/* {grooming?.data?.map((item, key) => { */}
//         {ourServiceById?.data?.map((item, key) => {
//           return (
//             <Box key={key}>
//               <Card className="mainCardSize">
//                 <Box>
//                   <CardActionArea className="groomImage">
//                     <img src={item?.datas.image} alt="dog" />
//                   </CardActionArea>
//                   <CardContent>
//                     <CustomTypography
//                       // text={item.Pet_boarding_space_name}
//                       text={item.name}
//                       type="header"
//                       colorType="black"
//                     />
//                     <Box className="AddressArea">
//                       <Grid className="AddressArea1">
//                         <img src={CustomIcons.Location} alt="location" />
//                         <CustomTypography
//                           // text={item.city}
//                           text={item.address}
//                           type="link"
//                           colorType="senary"
//                           fontSize="12px"
//                           customClass="addressText"
//                         />
//                         <CustomTypography
//                           text=","
//                           type="link"
//                           colorType="senary"
//                           fontSize="12px"
//                           customClass="addressText"
//                         />
//                         <CustomTypography
//                           text={item.state}
//                           type="link"
//                           colorType="senary"
//                           fontSize="12px"
//                           customClass="addressText"
//                         />
//                       </Grid>
//                       {/* <Box>
//                           <CustomTypography
//                             text={item.distance}
//                             type="caption"
//                             colorType="senary"
//                             fontSize="12px"
//                           />
//                         </Box> */}
//                     </Box>

//                     <Box className="AddressSubPosition2">
//                       <img src={CustomIcons.Building} alt="location" />
//                       <CustomTypography
//                         // text={item.category_of_pet_boarded}
//                         text={item.type}
//                         type="caption"
//                         colorType="senary"
//                         fontSize="12px"
//                       />
//                     </Box>
//                     <Box className="ReviewsPosition">
//                       <Box>
//                         <Box>
//                           <CustomizedRatings Data={item.ratings} />
//                         </Box>

//                         <CustomTypography
//                           text={item.reviews}
//                           type="caption"
//                           colorType="senary"
//                           fontSize="12px"
//                         />
//                       </Box>

//                       <CustomButton
//                         btnTitle="Details"
//                         color="primary"
//                         btnStyles="CardStyles"
//                         fontSize="12px"
//                       />
//                     </Box>
//                   </CardContent>
//                 </Box>
//               </Card>
//             </Box>
//           );
//         })}
//       </Grid>
//     </Grid>
//   );
// }

// GroomingCardsSection.propTypes = {
//   Data: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
//   image: PropTypes.string,
// };
// GroomingCardsSection.defaultProps = {
//   image: "",
// };

import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Box, CardActionArea, CardActions, Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
// import { AddressPosition, CardBtnStyles, ReviewsPosition } from "./Style";
import PropTypes from "prop-types";
import CustomTypography from "../Typography/Typography";
import CustomButton from "../Button/Button";
import CustomIcons from "../../Utils/Icons/Index";
import { CustomizedRatings } from "../StarRatings/CustomizedRatings";
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
import CardsSection from "../Cards/Cards";

export default function HomePetCardsSection({ Data, onClickHandle }) {
  const CardData = Data;

  const { petBoarding } = useSelector((state) => state?.petBoarding);
  console.log(petBoarding?.data, "petBoarding");
  //   console.log(
  //     petBoarding?.data?.[0]?.datas?.map((item) => item.service_name),
  //     "ourServiceByIdValue"
  //   );

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

  return (
    <Grid
      container
      // sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      item
      xs={12}
    >
      <Grid item xs={12} sx={OverAllCArdPostions}>
        {/* {petBoarding?.data?.map((item, key) => {
          return ( */}
        <Grid item xs={12}>
          {/* <Grid item xs={12}>
            <CustomTypography
              //   text={item?.title}
              text={petBoarding?.data?.title}
              type="caption"
              colorType={"text"}

              // customClass="groomText"
            />
          </Grid> */}
          <Grid item sx={OverAllCArdPostions}>
            {petBoarding?.data?.spaces?.map((item) => {
              return (
                <Box key={item?.pet_space_id}>
                  <Card sx={CardSize}>
                    <Box>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          image={item?.image}
                          alt="dog"
                          sx={CardMediaSize}
                        />
                      </CardActionArea>
                      <CardActions sx={{ maxWidth: "250px" }}>
                        <CardContent>
                          <Box></Box>
                          <CustomTypography
                            text={item?.name}
                            type="h6"
                            colorType="text"
                          />
                          <Box sx={AddressPosition}>
                            <Box sx={AddressSubPosition1}>
                              <img src={CustomIcons.Location} alt="location" />
                              <CustomTypography
                                text={item.address}
                                type="title"
                                customStyle={{ fontSize: "10px" }}
                                colorType="senary"
                              />
                            </Box>
                            <Box>
                              <CustomTypography
                                text={item?.distance}
                                type="title"
                                customStyle={{ fontSize: "10px" }}
                                colorType="senary"
                              />
                            </Box>
                          </Box>

                          <Box sx={AddressSubPosition2}>
                            <img src={CustomIcons.Building} alt="location" />
                            <CustomTypography
                              text={item.type}
                              type="title"
                              customStyle={{ fontSize: "10px" }}
                              colorType="senary"
                            />
                          </Box>
                          <Box sx={ReviewsPosition}>
                            <Box>
                              <Box>
                                <CustomizedRatings Data={item?.ratings} />
                              </Box>

                              <CustomTypography
                                text={item?.reviews}
                                type="title"
                                customStyle={{ fontSize: "10px" }}
                                colorType="senary"
                              />
                            </Box>

                            <CustomButton
                              btnTitle="View Details"
                              color="primary"
                              btnStyles={CardBtnStyles}
                              onClickHandle={() =>
                                onClickHandle(item?.pet_space_id)
                              }
                            />
                          </Box>
                        </CardContent>
                      </CardActions>
                    </Box>
                  </Card>
                </Box>
              );
            })}
          </Grid>
          {/* <CardsSection Data={petBoarding.data.spaces} /> */}
          {/* {item.spaces.length !== 0 ? ( */}
          {/* <Grid 
                  item
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"flex-start"}
                  gap={"40px"}
                  xs={12}
                  pt={"10px"}
                >
                  {item?.spaces?.map((item, key) => {
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
                            <CardActions sx={{ maxWidth: "250px" }}>
                              <CardContent>
                                <Box></Box>
                                <CustomTypography
                                  text={item.service_name}
                                  type="h6"
                                  colorType="text"
                                />
                                <Box sx={AddressPosition}>
                                  <Box sx={AddressSubPosition1}>
                                    <img
                                      src={CustomIcons.Location}
                                      alt="location"
                                    />
                                    <CustomTypography
                                      text={item.address}
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
                                  <img
                                    src={CustomIcons.Building}
                                    alt="location"
                                  />
                                  <CustomTypography
                                    text={item.type}
                                    type="title"
                                    customStyle={{ fontSize: "10px" }}
                                    colorType="senary"
                                  />
                                </Box>
                                <Box sx={ReviewsPosition}>
                                  <Box>
                                    <Box>
                                      <CustomizedRatings Data={item.ratings} />
                                    </Box>

                                    <CustomTypography
                                      text={item.reviews}
                                      type="title"
                                      customStyle={{ fontSize: "10px" }}
                                      colorType="senary"
                                    />
                                  </Box>

                                  <CustomButton
                                    btnTitle="View Details"
                                    color="primary"
                                    btnStyles={CardBtnStyles}
                                    onClickHandle={onClickHandle}
                                  />
                                </Box>
                              </CardContent>
                            </CardActions>
                          </Box>
                        </Card>
                      </Box>
                    );
                  })}
                </Grid> */}
          {/* ) : (
                "Not Found"
              )} */}
        </Grid>
        {/* );
        })} */}
      </Grid>
    </Grid>
  );
}

HomePetCardsSection.propTypes = {
  Data: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
};
