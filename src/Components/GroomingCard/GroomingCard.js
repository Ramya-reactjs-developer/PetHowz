import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../Redux/Actions/index";
import { Box, CardActionArea, Grid } from "@mui/material";
import PropTypes from "prop-types";
import CustomTypography from "../Typography/Typography";
import CustomButton from "../Button/Button";
import CustomIcons from "../../Utils/Icons/Index";
import { CustomizedRatings } from "../StarRatings/CustomizedRatings";
import "./GroomingCard.css";

export default function GroomingCardsSection({ Data }) {
  const GroomingData = Data;

      // const dispatch = useDispatch();
      // const { grooming } = useSelector((state) => state?.grooming);
      // console.log(grooming, "galleryImage");

      // React.useEffect(() => {
      //   const data = { data: {}, method: "get", apiName: "getAllPetSpace" };
      //   dispatch(actions.GROOMING(data));
      // }, [dispatch]);

  return (
    <Grid
      container
      xl={12}
      lg={12}
      md={12}
      sm={12}
      xs={12}
      className="mainCard"
    >
      <Grid item className="CardPositions">
        {/* {grooming?.data?.map((item, key) => { */}
        {GroomingData?.map((item, key) => {
          return (
            <Box key={key}>
              <Card className="mainCardSize">
                <Box>
                  <CardActionArea className="groomImage">
                    <img src={item.image} alt="dog" />
                  </CardActionArea>
                  <CardContent>
                    <CustomTypography
                      // text={item.Pet_boarding_space_name}
                      text={item.name}
                      type="header"
                      colorType="black"
                    />
                    <Box className="AddressArea">
                      <Grid className="AddressArea1">
                        <img src={CustomIcons.Location} alt="location" />
                        <CustomTypography
                          // text={item.city}
                          text={item.address}
                          type="link"
                          colorType="senary"
                          fontSize="12px"
                          customClass="addressText"
                        />
                        <CustomTypography
                          text=","
                          type="link"
                          colorType="senary"
                          fontSize="12px"
                          customClass="addressText"
                        />
                        <CustomTypography
                          text={item.state}
                          type="link"
                          colorType="senary"
                          fontSize="12px"
                          customClass="addressText"
                        />
                      </Grid>
                      {/* <Box>
                          <CustomTypography
                            text={item.distance}
                            type="caption"
                            colorType="senary"
                            fontSize="12px"
                          />
                        </Box> */}
                    </Box>

                    <Box className="AddressSubPosition2">
                      <img src={CustomIcons.Building} alt="location" />
                      <CustomTypography
                        // text={item.category_of_pet_boarded}
                        text={item.type}
                        type="caption"
                        colorType="senary"
                        fontSize="12px"
                      />
                    </Box>
                    <Box className="ReviewsPosition">
                      <Box>
                        <Box>
                          <CustomizedRatings Data={item.ratings} />
                        </Box>

                        <CustomTypography
                          text={item.reviews}
                          type="caption"
                          colorType="senary"
                          fontSize="12px"
                        />
                      </Box>

                      <CustomButton
                        btnTitle="Details"
                        color="primary"
                        btnStyles="CardStyles"
                        fontSize="12px"
                      />
                    </Box>
                  </CardContent>
                </Box>
              </Card>
            </Box>
          );
        })}
      </Grid>
    </Grid>
  );
}

GroomingCardsSection.propTypes = {
  Data: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
  image: PropTypes.string,
};
GroomingCardsSection.defaultProps = {
  image: "",
};
