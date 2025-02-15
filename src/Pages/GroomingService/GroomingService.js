import React, { useEffect } from "react";
import { Grid, CardActionArea } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import actions from "../../Redux/Actions/index";
import CustomIcons from "../../Utils/Icons/Index";
import CustomTypography from "../../Components/Typography/Typography";
import ImageList from "../../Components/ImageList/ImageList";
import Service from "../../Components/AboutService/Service";
import ServicePackagesCards from "../../Components/Cards/ServicePackagesCard";
import customImages from "../../Utils/Images";
import GroomModal from "./Model";
import "./GroomingService.css";
import ScrollToTop from "../../Components/ScrollToTop/ScrollToTop";
import CustomButton from "../../Components/Button/Button";

const GroomingService = () => {
  const [Modal, setModal] = React.useState(false);
  // const navigate = useNavigate();
  // const dispatch = useDispatch();
  // const { state } = useLocation();
  // console.log(state, "eswarState");

  // useEffect(() => {
  //   const data = {
  //     data: {},
  //     method: "get",
  //     apiName: `getPetServiceById/${76}`,
  //   };
  //   // console.log(data, "jkvjfhuvh");

  //   dispatch(actions.GROOMINGSERVICE(data));
  // }, [dispatch, state]);

  const dispatch = useDispatch();
  const { state } = useLocation();
  // console.log(state, "eswarState");
  // React.useEffect(() => {
  //   localStorage.setItem("pet_service_id", state);
  // }, []);
  // React.useEffect(() => {
  //   localStorage.setItem("service_master_id", state);
  // }, []);
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
  const { groomingPetService } = useSelector(
    (state) => state?.groomingPetService
  );
  const imagesAdd = groomingPetService?.data?.map((data) =>
    data?.serviceAmenities?.map((item) => {
      return item?.grooming_kit;
    })
  );
  // console.log( groomingPetService?.data?.map((data) => data?.serviceAmenities?.map((item) => {
  //   return(item?.grooming_kit)
  // })), "imagesAdd");

  const imageList = [
    {
      image: CustomIcons.BoardingArea,
      text: "Dedicated Boarding Area",
    },
    {
      image: CustomIcons.PlayArea,
      text: "Dedicated Play Area",
    },
    {
      image: CustomIcons.AC,
      text: "A/C-Pet Sleeping Area",
    },
    {
      image: CustomIcons.petsAllowed,
      text: "Pets Allowed on Beds",
    },
    {
      image: CustomIcons.furniture,
      text: "Pets Allowed on Furniture",
    },
    {
      image: CustomIcons.PeriodicUpdate,
      text: "Periodic update-Photos/Videos",
    },
    {
      image: CustomIcons.CuddleTime,
      text: "Cuddle Time",
    },
    {
      image: CustomIcons.Playtime,
      text: "Play Time",
    },
    {
      image: CustomIcons.PetSitter,
      text: "Dedicated Pet Sitter",
    },
    {
      image: CustomIcons.OutdoorSpace,
      text: "Outdoor Space/Open Space",
    },
    {
      image: CustomIcons.Cctv,
      text: "CCTV (@ Boarding area)",
    },
  ];

  useEffect(() => {
    // alert(serviceMasterid)
    const data = {
      data: { id: state.masterId },
      method: "post",
      apiName: `getPetServiceById/${state.serviceId}`,
      // apiName: `getPetServiceById/${76}`,
    };
    dispatch(actions.GROOMINPETGSERVICE(data));
  }, [dispatch, state]);
  const providerImage = groomingPetService?.data?.map((data) => {
    data?.serviceProvider?.map((item) => {
      return item.photos;
    });
  });
  // console.log(providerImage, "providerImage");
  return (
    <Grid className="container">
      {groomingPetService?.data?.map((data) => {
        return (
          <Grid>
            {/* <Grid container md={12} lg={12} sm={12} xs={12}>
              <Grid item md={3} lg={3} sm={12} xs={12}>
                <Grid m={1} className="rightBottom">
                  <Grid
                    item
                    md={3}
                    lg={3}
                    sm={6}
                    xs={6}
                    m={1}
                    className="petLeftImage"
                  >
                    <img src={item?.photos} alt="" />
                  </Grid>
                  {Modal && <GroomModal />}
                </Grid>
              </Grid>
            </Grid> */}
            <Grid container md={12} lg={12} sm={12} xs={12}>
              <ScrollToTop />
              {data?.serviceProvider?.map((data) => {
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
            </Grid>
            <Grid>
              <CustomTypography
                type="head"
                text={data?.pet_service_name}
                customClass="serviceHeader"
              />
            </Grid>
            <Grid
              container
              md={12}
              lg={12}
              sm={12}
              xs={12}
              className="location_Area"
            >
              <Grid item md={3} lg={3} sm={6} xs={6}>
                <CustomTypography
                  type="head"
                  text="Location"
                  customClass="firstLocation"
                />
                <Grid display="flex">
                  <Grid>
                    <CustomTypography
                      type="head"
                      text={data?.locality}
                      customClass="secondLocation"
                    />
                  </Grid>
                  <Grid pl={0.5}>
                    <CustomTypography
                      type="head"
                      text={data?.location}
                      customClass="secondLocation"
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item md={3} lg={3} sm={6} xs={6}>
                <CustomTypography
                  type="head"
                  text="Pets Accepted"
                  customClass="firstLocation"
                />
                <CustomTypography
                  type="head"
                  text={data?.service_provider_for}
                  customClass="secondLocation"
                />
              </Grid>
              <Grid item md={3} lg={3} sm={6} xs={6}>
                <CustomTypography
                  type="head"
                  text="Capacity"
                  customClass="firstLocation"
                />
                <CustomTypography
                  type="head"
                  text={data?.no_of_pets}
                  customClass="secondLocation"
                />
              </Grid>
              <Grid item md={3} lg={3} sm={6} xs={6}>
                <CustomTypography
                  type="head"
                  text="Type"
                  customClass="firstLocation"
                />
                <CustomTypography
                  type="head"
                  text={data?.service_provider_type}
                  customClass="secondLocation"
                />
              </Grid>
            </Grid>
            <Grid item md={12} lg={12} sm={12} xs={12}>
              <CustomTypography
                type="head"
                text="About Pet Service Provider"
                customClass="aboutPet"
              />
            </Grid>
            <Grid container item md={12} lg={12} sm={12} xs={12} pb={2}>
              <Service
                image={data.image}
                Name="Hey, I am "
                Name1={data?.name}
                professional={data?.professional_status}
                year={data?.years_of_experience}
                content="I am a pet lover and would love to take care of furry friends. I have a 5 year old dog at my parents house, but I don't have any pets right here in Bangalore at my place. I absolutely adore animals, and as I work from home I think I would be able to properly take care of them. I have taken care of my own dog in my hometown for 5 years, a labrador named Alex. I have d1 pet sitting for a lot of my friends. I do realise if the pet is not doing well by observing their eating habits and how active they are. I have also given oral medications to my own dog. Also, I will not leave the pet unattended at anytime. I will accept any bookings according to my schedule only. I'll have all the treats in the world to pamper these furry friends. Although I don't have much experience in grooming, I used to get my dog groomed from the veterinarian clinic. I will provide a loving and comfortable stay for the pets and I will absolutely be very careful everytime I am pet sitting :)"
                // btnTitle="Request Booking"
                // requestBtnStyles="requestBtn"
                // BtnText="Response Time 1 hour"
              />
            </Grid>
            <Grid
              container
              item
              md={12}
              lg={12}
              sm={12}
              xs={12}
              className="overviewSec"
            >
              <CustomTypography
                type="head"
                text={data?.service_overview}
                customClass="serviceOverview"
              />
              <CustomTypography
                type="head"
                text="We are a leading pet grooming service provider in Bengaluru, we provide superlative quality, convenient, flexible, cost-effective and complete grooming services at the comfort of your home. Our pet grooming packages include a bath with shampoo and conditioner, full body hair trimming, nail cutting, ear cleaning, tick and flea treatment, and much more. Our cat and dog grooming service in the city is the most dependable and trustworthy service as we provide trained professionals and use premium quality products and equipment. You can choose from a variety of pet grooming packages on our app and book your pet grooming based on your pet's specific requirements."
                customClass="overviewContent"
              />
            </Grid>
            <Grid container md={12} sm={12} lg={12} xs={12} pl={3}>
              <Grid item md={12} sm={12} lg={12} xs={12} display="flex">
                <Grid className="AmenitiesImage">
                  <img src={CustomIcons.Amenities} alt="" />
                </Grid>
                <Grid pl={3}>
                  <CustomTypography
                    type="head"
                    text="Amenities"
                    customClass="AmenitiesHeader"
                  />
                </Grid>
              </Grid>
              <ImageList imageLists={imageList} />
            </Grid>
            <Grid
              container
              item
              md={12}
              lg={12}
              sm={12}
              xs={12}
              mt={3}
              className="groomingPackage"
            >
              <CustomTypography
                type="head"
                text="Grooming Packages"
                customClass="packageHead"
              />
              <Grid item md={12} lg={12} sm={12}>
                <ServicePackagesCards Data={packageData} />
              </Grid>
              <Grid item md={12} lg={12} sm={12} xs={12} className="serviceBtn">
                <CustomButton
                  btnTitle="Request Booking"
                  color="primary"
                  customClass="requestBtn"
                  // onClickHandle={onRequest}
                />
                <CustomTypography
                  type="head"
                  text="Response Time 1 hour"
                  customClass="btnBottomText"
                />
              </Grid>
            </Grid>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default GroomingService;
