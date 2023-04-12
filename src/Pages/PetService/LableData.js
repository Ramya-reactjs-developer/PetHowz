import React, { useState, createContext } from "react";

export const LabelContext = createContext();

export const LabelData = (props) => {
  const [page, setPage] = useState(0);
  const [labelInfo, setlabelInfo] = useState({
    sender: {
      image: [],
      pet_service_name: "",
      name: "",
      mobile_number: "",
      street: "",
      city: "",
      locality: "",
      state: "",
      pin_code: "",
      pin_location: "",
    },
    check: {
      meal_type: "",
      // meal: "",
    },
    receiver: {
      professional_status: "",
      tell_us_somthing_about_you: "",
      years_of_experience: "",
      service_provider_type: "",
      service_provider_for: "",
      no_of_pets: "",
      grooming_kit: "",
      mobile_grooming_van: "",
      hair_dryer: "",
      hair_shampoo: "",
      carry_towel: "",
      grooming_assistant: "",
      service_overview: "",
      doorstep_services: "",
      location: "",
      photos: "",
    },
    weight: {
      package_name: "",
      included: "",
      rate: "",
    },
    shippingOption: {
      fileUploader: [],
      fileUploaderImage: [],
    },
    service: {
      header_menu: "",
      firstText: "",
      whats_included: "",
      rate: "",
    },
  });

  const nextPage = () => {
    setPage(page + 1);
  };

  const prevPage = () => {
    setPage(page - 1);
  };
  console.log(page, "page");


  const handleChange = (value, name) => {
    // console.log(value, name, "value");
    setlabelInfo({
      ...labelInfo,
      sender: { ...labelInfo.sender, [name]: value },
      receiver: { ...labelInfo.receiver, [name]: value },
      weight: { ...labelInfo.weight, [name]: value },
      shippingOption: { ...labelInfo.shippingOption, [name]: value },
      service: { ...labelInfo.shippingOption, [name]: value },
      check: { ...labelInfo.shippingOption, [name]: value },
    });
  };
    const handleOnChange = (event, name) => {
      setlabelInfo({
        ...labelInfo,
        sender: { ...labelInfo.sender, [name]: event.target.value },
        receiver: { ...labelInfo.receiver, [name]: event.target.value },
        weight: { ...labelInfo.weight, [name]: event.target.value },
        service: { ...labelInfo.weight, [name]: event.target.value },
        check: { ...labelInfo.weight, [name]: event.target.value },
        shippingOption: {
          ...labelInfo.shippingOption,
          [name]: event.target.value,
        },
      });
    };
  const steps = [
    { title: "Basic Details" },
    { title: "Select Services" },
    { title: "About Your Service" },
    { title: "Create Package" },
    { title: "Create value" },
  ];

  return (
    <LabelContext.Provider
      value={{
        page,
        steps,
        nextPage,
        prevPage,
        labelInfo,
        handleChange,
        handleOnChange,
      }}
    >
      {props.children}
    </LabelContext.Provider>
  );
};
