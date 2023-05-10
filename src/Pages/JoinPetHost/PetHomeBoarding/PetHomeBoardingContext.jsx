import { Grid } from "@mui/material";
import React, { useState, createContext } from "react";

export const PetHomeBoardingContext = createContext();

export const PetHomeBoardingProvider = (props) => {
  const [page, setPage] = useState(0);
 
  // React.useEffect(()=>{
  //   localStorage.setItem("pages",page)

  // },[page])
  // const pages = localStorage.getItem("pages")

  console.log(page, "klnkhcui");
  const [labelInfo, setlabelInfo] = useState({
    BasicDetails: {
      pet_boarding_space_name: "",
      name: "",
      mobile_number: "",
      street: "",
      city: "",
      locality: "",
      state: "",
      image: "",
      pincode: "",
      pin_location: "",
    },
    AboutYou: {
      professional_status: "",
      years_of_experience: "",
      tell_us_somthing_about_you: "",
      tell_us_about_the_type_of_pet_and_your_experience: "",
      oral_medication: "",
      first_aid: "",
      do_you_have_kids_at_home: "",
      do_you_have_other_pets_at_home: "",
    },
    AYPetSpace: {
      type_of_boarding: "",
      category_of_pet_boarded: "",
      no_of_pets: "",
      total_sq_feet_of_the_space: "",
      price_for_per_day_boarding: "",
      price_for_day_care: "",
      no_of_bedrooms: "",
      how_many_pets_can_you_host_at_max: "",
      photos: "",
    },
    RulesAmenties: {
      do_you_have_deticated_boardng_area_for_pets: "",
      do_you_have_a_playing_area_for_pets: "",
      do_you_ac_in_pet_sleeping_area: "",
      do_you_have_cctv_at_your_boarding_space: "",
      do_you_have_openspace_at_your_boarding_space: "",
      do_you_provide_first_aid: "",
      pets_allowed_on_beds: "",
      pets_allowed_on_furniture: "",
      pet_should_be_vaccinated: "",
      pet_should_be_potty_trained: "",
      cuddle_time: "",
      walking: "",
      play_time: "",
      dedicated_pet_sitter_during_boarding_time: "",
      periodic_update_about_pets: "",
      meals_included_in_boarding_charges: "",
      meal_type: "",
      what_you_provide_in_meals_as_your_boarding: "",
      anything_else_is_provided: "",
    },
    AddOn: {
      package_name: "",
      included: "",
      description: "",
      rate: "",
      images: "",
    },
  });
  // console.log(labelInfo,"labelInfo");

  const nextPage = () => {
    setPage(page + 1);

  };

  const prevPage = () => {
    setPage(page - 1);
  };
  console.log(labelInfo, "page");
  const handleChange = (value, name) => {
    console.log(value, name, ",ioioioi");
    setlabelInfo({
      ...labelInfo,
      BasicDetails: { ...labelInfo.BasicDetails, [name]: value },
      AboutYou: { ...labelInfo.AboutYou, [name]: value },
      AYPetSpace: { ...labelInfo.AYPetSpace, [name]: value },
      RulesAmenties: { ...labelInfo.RulesAmenties, [name]: value },
      AddOn: { ...labelInfo.AddOn, [name]: value },
    });
  };
  const handleOnChange = (event, name) => {
    console.log(event.target.value, ",ioioikkkkoi");
    setlabelInfo({
      ...labelInfo,
      AYPetSpace: { ...labelInfo.AYPetSpace, [name]: event.target.value },
      RulesAmenties: { ...labelInfo.RulesAmenties, [name]: event.target.value },
      BasicDetails: { ...labelInfo.BasicDetails, [name]: event.target.value },
      AboutYou: { ...labelInfo.AboutYou, [name]: event.target.value },
      AddOn: { ...labelInfo.AddOn, [name]: event.target.value },
    });
  };

  // const setSenderInfo = (prop) => (event) => {
  //   setlabelInfo({
  //     ...labelInfo,
  //     sender: { ...labelInfo.sender, [prop]: event.target.value },
  //   });
  // };
  // const setRecevierInfo = (prop) => (event) => {
  //   setlabelInfo({
  //     ...labelInfo,
  //     recevier: { ...labelInfo.recevier, [prop]: event.target.value },
  //   });
  // };
  const steps = [
    { title: "Basic Details" },
    { title: "About You" },
    { title: "About Your Pet Boarding Space" },
    { title: "Rules & Amenities" },
    { title: "Add Ons" },
  ];

  return (
    <Grid container md={12} sm={12} xs={12}>
      <PetHomeBoardingContext.Provider
        value={{
          page,
          steps,
          nextPage,
          prevPage,
          labelInfo,
          handleChange,
          handleOnChange,
          // setSenderInfo,
          // setRecevierInfo,
        }}
      >
        {props.children}
      </PetHomeBoardingContext.Provider>
    </Grid>
  );
};
