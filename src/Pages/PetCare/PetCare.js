import { Grid, CardActionArea } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import actions from "../../Redux/Actions/index";
import customImages from "../../Utils/Images";
import CustomIcons from "../../Utils/Icons/Index";
import GroomModal from "./Model";
import ImageList from "../../Components/ImageList/ImageList";
import MealCard from "../../Components/Cards/MealCard";
import "./PetCare.css";
import CustomTypography from "../../Components/Typography/Typography";
import AboutBoardingService from "../../Components/AboutBoardingService/AboutBoardingService";
import ScrollToTop from "../../Components/ScrollToTop/ScrollToTop";
import CustomButton from "../../Components/Button/Button";
// import ServicePackagesCards from "../../Components/Cards/ServicePackagesCard";

const PetCare = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { state } = useLocation();
  // const location = useLocation();

  // const value = location.state;
  console.log(state, "valueState");

  const { petCare } = useSelector((state) => state?.petCareService);
  console.log(petCare?.data?.amenities, "groomingServiceData");

  // const { petBoarding } = useSelector((state) => state?.petBoarding);
  // console.log(petBoarding, "petBoarding");
  React.useEffect(() => {
    localStorage.setItem("pet_space_id", state);
  }, []);
  useEffect(() => {
    const data = {
      data: {},
      method: "get",
      apiName: `getPetBoardingById/${state}`,
    };
    dispatch(actions.PETCARE(data));
  }, [dispatch, state]);

  const [Modal, setModal] = React.useState(false);

  const modalOpen = () => {
    setModal(true);
  };

  const packageData = [
    {
      price: "₹ 1999",
      offeredPrice: "₹ 999",
      service1: "Bath with Shampoo and conditioner",
      service2: "Blow Dry",
      service3: "Nail Clipping",
      service4: "Ear Cleaning",
      service5: "Paw Massage",
      service6: "Combing/Brushing",
    },
  ];
  const listData = petCare?.data?.amenities?.[0] || {};

  const filteredKeys = Object.keys(listData).filter(
    (key) => listData[key] === "No"
  );
  console.log(filteredKeys, "listData");
  const imageList = [
    {
      // image: CustomIcons.BoardingArea,
      // text: "Dedicated Boarding Area",
      key: "text",
    },
    {
      // image: CustomIcons.PlayArea,
      // text: "Dedicated Play Area",
      key: "text",
    },
    {
      // image: CustomIcons.AC,
      // text: "A/C-Pet Sleeping Area",
      // key: "do_you_ac_in_pet_sleeping_area",
      key: "text",
    },
    {
      // image: CustomIcons.petsAllowed,
      // text: "Pets Allowed on Beds",
      // key: "pets_allowed_on_beds",
      key: "text",
    },
    {
      // image: CustomIcons.furniture,
      // text: "Pets Allowed on Furniture",
      // key: "pets_allowed_on_furniture",
      key: "text",
    },
    {
      // image: CustomIcons.PeriodicUpdate,
      // text: "Periodic update-Photos/Videos",
      // key: "periodic_update_about_pets",
      // key: "text",
    },
    {
      // image: CustomIcons.CuddleTime,
      // text: "Cuddle Time",
      // key: "cuddle_time",
      key: "text",
    },
    {
      // image: CustomIcons.Playtime,
      // text: "Play Time",
      // key: "play_time",
      key: "text",
    },
    {
      // image: CustomIcons.PetSitter,
      // text: "Dedicated Pet Sitter",
      // key: "dedicated_pet_sitter_during_boarding_time",
      key: "text",
    },
    {
      // image: CustomIcons.OutdoorSpace,
      // text: "Outdoor Space/Open Space",
      // key: "do_you_have_openspace_at_your_boarding_space",
      key: "text",
    },
    {
      // image: CustomIcons.Cctv,
      // text: "CCTV (@ Boarding area)",
      // key: "do_you_have_cctv_at_your_boarding_space",
      key: "text",
    },
  ];
  const CardData = [
    {
      mealImage:
        "https://static.onecms.io/wp-content/uploads/sites/19/2019/02/19/apple-quinoa-bowl-with-cinnamon-ricotta-1809-p102-2000.jpg",
      meal1: "Scrambled Egg 1 Nos",
      meal2: "Boiled Rice - 1 Bowl",
      meal3: "Steamed Carrot - 60 gms",
      meal4: "Chicken Breast - 60 gms",
      price: "₹ 450",
    },
  ];
  const login = localStorage.getItem("LoginChecker");
  const onRequest = () => {
    if (login !== null) {
      navigate("/petHowz/RequestBooking");
    } else {
      navigate("/petHowz/login", { state: "/petHowz/RequestBooking" });
    }
  };
  const petPhotos = petCare?.data?.petHomeImages?.map((data) => data?.photos);
  console.log(petPhotos, "petPhotos");
  return (
    <Grid className="container" p={3}>
      {/* {petCare?.data?.map((data) => {
        return ( */}
      <>
        <Grid container md={12} lg={12} sm={12} xs={12} pb={3}>
          <ScrollToTop />
          {petCare?.data?.petHomeImages?.map((data) => {
            return (
              <Grid
                item
                md={12}
                lg={12}
                sm={12}
                xs={12}
                m={1}
                className="petLeftImage"
              >
                <img src={data?.photos} alt="" />
              </Grid>
            );
          })}

          {/* <Grid
                item
                md={3.5}
                lg={3.5}
                sm={12}
                xs={12}
                m={1}
                className="centerImage"
              >
                <img src={customImages.PetImage} alt="" />
              </Grid>
              <Grid item md={3} lg={3} sm={12} xs={12}>
                <Grid item m={1} className="rightTop">
                  <img src={customImages.Service} alt="" />
                </Grid>
                <Grid m={1} className="rightBottom">
                  <CardActionArea onClick={modalOpen}>
                    <img src={customImages.PetImage} alt="" />
                  </CardActionArea>
                  {Modal && <GroomModal />}
                </Grid>
              </Grid> */}
        </Grid>
        {/* {petCare?.data?.map((data) => {
          return ( */}
        <Grid
          container
          item
          md={12}
          lg={12}
          sm={12}
          xs={12}
          pb={2}
          className="AboutPetBoard"
        >
          <Grid item md={12} lg={12} sm={12} xs={12} pl={3}>
            <Grid item md={12} lg={12} sm={12} xs={12}>
              <CustomTypography
                type="head"
                text={petCare?.data?.pet_boarding_space_name}
                customClass="aboutPet"
              />
            </Grid>
            <Grid container item md={12} lg={12} sm={12} xs={12} pb={2}>
              <AboutBoardingService
                image={petCare?.data?.image}
                Heading="About Me"
                firstName="Hey, I am"
                Name={petCare?.data?.name}
                professional={petCare?.data?.professional_status}
                year={petCare?.data?.years_of_experience}
                content="I am a pet lover and would love to take care of furry friends. I have a 5 year old dog at my parents house, but I don't have any pets right here in Bangalore at my place. I absolutely adore animals, and as I work from home I think I would be able to properly take care of them. I have taken care of my own dog in my hometown for 5 years, a labrador named Alex. I have d1 pet sitting for a lot of my friends. I do realise if the pet is not doing well by observing their eating habits and how active they are. I have also given oral medications to my own dog. Also, I will not leave the pet unattended at anytime."
                // btnTitle="Request Booking"
                // requestBtnStyles="requestBtn"
                // BtnText="Response Time 1 hour"
                Area={petCare?.data?.total_sq_feet_of_the_space}
                Size={petCare?.data?.no_of_bedrooms}
                Type={petCare?.data?.type_of_boarding}
                Prefer="1200 Sq.ft"
                Capacity="1200 Sq.ft"
                petsAccepted={petCare?.data?.category_of_pet_boarded}
                location={petCare?.data?.locality}
                Provide={petCare?.data?.can_provide}
                // onRequest={onRequest}
              />
            </Grid>
          </Grid>
        </Grid>

        {/* );
        })} */}
        {/* {petCare?.data?.map((data) => {
          return ( */}

        {/* );
        })} */}

        <Grid container md={12} sm={12} lg={12} xs={12} pl={3} pt={2}>
          <Grid item md={12} sm={12} lg={12} xs={12} display="flex">
            <Grid className="AmenitiesImage">
              <img src={CustomIcons.Amenities} alt="" />
            </Grid>
            <Grid p={2}>
              <CustomTypography
                type="head"
                text="Amenities"
                customClass="AmenitiesHeader"
              />
            </Grid>
          </Grid>
          <ImageList
            imageLists={petCare?.data?.amenities}
            // customClass="textthrough"
          />

          {/* <ImageList imageLists={imageList} filteredKeys={filteredKeys} /> */}
          {/* {petCare?.data?.amenities?.map((data) => {
            return (
              <Grid>
                <img src={CustomIcons.BoardingArea} alt="" />
                <CustomTypography
                  text={
                    data?.pets_allowed_on_furniture?.length === 2
                      ? "Pet should be Vaccinated "
                      : ""
                  }
                />
              </Grid>
            );
          })} */}

          {/* {petCare?.data?.amenities?.map((data) => {
            return (
              <Grid>
                <ImageList
                  // imageLists={imageList}
                  image={CustomIcons.BoardingArea}
                  text={
                    data?.do_you_have_dedicated_boarding_area_for_pets
                      ?.length === 3
                      ? "Dedicated Boarding Area" + "aboutPetSpace"
                      : "Dedicated Boarding Area" + "aboutPetSpace"
                  }
                  // text="Dedicated Boarding Area"
                />
              </Grid>
            );
          })} */}
        </Grid>
        <Grid container md={12} sm={12} lg={12} xs={12} pt={3} pl={3}>
          <Grid item md={12} sm={12} lg={12} xs={12} display="flex">
            <Grid className="AmenitiesImage">
              <img src={CustomIcons.Food} alt="" />
            </Grid>
            <Grid p={2}>
              <Grid display="flex">
                <CustomTypography
                  type="head"
                  text="Food Offered"
                  customClass="AmenitiesHeader"
                />
                <CustomTypography
                  type="head"
                  text="&nbsp;(inclusive of the Boarding charges)"
                  customClass="AmenitiesHeader"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={12} sm={12} lg={12} xs={12} pt={3} pl={1.5}>
            <Grid item md={12} sm={12} lg={12} xs={12} display="flex">
              <Grid item className="AmenitiesVegImage">
                <img src={CustomIcons.Vegnonveg} alt="" />
              </Grid>
              <Grid pl={2} display="flex">
                {petCare?.data?.food?.map((data) => {
                  return (
                    <Grid p={1}>
                      <CustomTypography
                        type="head"
                        text={data?.meal_type}
                        customClass="vegNonVeg"
                      />
                    </Grid>
                  );
                })}

                {/* <Grid pl={2}>
                  <CustomTypography
                    type="head"
                    text="Veg & Non Veg"
                    customClass="vegNonVeg"
                  />
                </Grid> */}
              </Grid>
            </Grid>
            {petCare?.data?.amenities?.map((item) => {
              return (
                <Grid>
                  <Grid item display="flex" pt={1}>
                    <Grid>
                      <CustomTypography
                        type="head"
                        text="Note :"
                        customClass="noteAmenity"
                      />
                    </Grid>
                    <Grid pl={2} pb={1}>
                      <Grid>
                        <CustomTypography
                          type="head"
                          // text="Normal serving of 2 meal of chicken soup per day"
                          text={item.what_you_provide_in_meals_as_your_boarding}
                          customClass="noteAmenitySub"
                        />
                        {/* <CustomTypography
                    type="head"
                    // text=" pet owner to provide their preferred food to the pets"
                      text={item.anything_else_is_provided}
                    customClass="noteAmenitySub"
                  /> */}
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
        <Grid container p={3} pl={3} className="AboutPetBoard">
          <Grid item md={12} sm={12} lg={12} xs={12} display="flex">
            <Grid className="AmenitiesVegImage">
              <img src={CustomIcons.Addons} alt="" />
            </Grid>
            <Grid pl={3}>
              <CustomTypography
                type="head"
                text="Add Ons"
                customClass="AmenitiesHeader"
              />
            </Grid>
          </Grid>
          <Grid pt={3} pl={1}>
            <CustomTypography
              type="head"
              text="Add-ons from the host"
              customClass="noteAmenitySub"
            />
          </Grid>
        </Grid>
        <Grid pt={2}>
          <MealCard Data={CardData} />
        </Grid>
        <Grid item md={12} lg={12} sm={12} xs={12} className="serviceBtn">
          <CustomButton
            btnTitle="Request Booking"
            color="primary"
            customClass="requestBtn"
            onClickHandle={onRequest}
          />
          <CustomTypography
            type="head"
            text="Response Time 1 hour"
            customClass="btnBottomText"
          />
        </Grid>
        {/* {petCare?.data?.amenities?.map((item) => {
          return (
            <Grid
              container
              md={12}
              sm={12}
              lg={12}
              xs={12}
              className="BoardingRules"
            >
              <Grid item>
                <Grid item>
                  <CustomTypography
                    type="head"
                    text="Boarding Rules"
                    customClass="noteAmenity"
                  />
                </Grid>
                <Grid item>
                  <CustomTypography
                    type="head"
                    // text="Pet should be Vaccinated "
                    text={
                      item.pet_should_be_vaccinated?.length === 3
                        ? "Pet should be Vaccinated "
                        : ""
                    }
                    customClass="noteAmenitySub"
                  />
                </Grid>
                <Grid item>
                  <CustomTypography
                    type="head"
                    // text="Pet should be Potty trained"
                    text={
                      item.pet_should_be_potty_trained.length === 3
                        ? "Pet should be Potty trained"
                        : ""
                    }
                    customClass="noteAmenitySub"
                  />
                  {console.log(
                    item.pet_should_be_potty_trained?.length,
                    "hguyg"
                  )}
                </Grid>
              </Grid>
              <Grid item className="petBoardingRules">
                <Grid item>
                  <CustomTypography
                    type="head"
                    text="Boarding Rules"
                    customClass="noteAmenity"
                  />
                </Grid>
                <Grid item>
                  <CustomTypography
                    type="head"
                    // text="Shin Tsu Male 3 Years"
                    text={
                      petCare.data?.do_you_have_other_pets_at_home.length === 3
                        ? "shi tsu male 5 Years "
                        : ""
                    }
                    customClass="noteAmenitySub"
                  />
                </Grid>
                <Grid item>
                  <CustomTypography
                    type="head"
                    text={
                      petCare.data?.do_you_have_kids_at_home.length === 3
                        ? "Kids "
                        : ""
                    }
                    customClass="noteAmenitySub"
                  />
                </Grid>
              </Grid>
            </Grid>
          );
        })} */}
      </>
    </Grid>
  );
};

export default PetCare;
