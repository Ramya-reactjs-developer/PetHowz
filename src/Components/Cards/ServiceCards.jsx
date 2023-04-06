import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Box, CardActionArea, CardActions, Grid } from "@mui/material";
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
import { useNavigate } from "react-router";

export default function ServiceCardsSection({
  Data,
  onClickHandle,
  onDiscover,
  nos,
}) {
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
  const [currentPage, setCurrentPage] = React.useState(1);

  const [postsPerPage] = React.useState(nos);
  /**
   *  pagination(Get current posts)
   */
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  return (
    <Grid
      container
      // sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      item
      xs={12}
    >
      <Grid item xs={12} sx={OverAllCArdPostions}>
        {Data?.map((item, key) => {
          return (
            <Grid key={key} item xs={12}>
              <Grid item xs={12}>
                <CustomTypography
                  text={item?.title}
                  type="caption"
                  colorType={"text"}

                  // customClass="groomText"
                />
              </Grid>
              {/* {item.datas.length !==0 ? ():("Not Found")} */}
              <Grid
                item
                display={"flex"}
                alignItems={"center"}
                justifyContent={"flex-start"}
                flexWrap={"wrap"}
                gap={"40px"}
                xs={12}
                pt={"10px"}
              >
                {item?.datas
                  ?.slice(indexOfFirstPost, indexOfLastPost)
                  .map((item, key) => {
                    return (
                      <Box key={key}>
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
                                    <img
                                      src={CustomIcons?.Location}
                                      alt="location"
                                    />
                                    <CustomTypography
                                      text={item?.address}
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
                                  <img
                                    src={CustomIcons?.Building}
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
              </Grid>
              <Grid
                item
                md={12}
                lg={12}
                sm={12}
                xs={12}
                className="groomButton"
              >
                <CustomButton
                  btnTitle="Discover More"
                  color="primary"
                  customClass="groomCardStyles"
                  fontSize="12px"
                  onClickHandle={() => onDiscover(key)}
                />
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
}

ServiceCardsSection.propTypes = {
  Data: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
};
