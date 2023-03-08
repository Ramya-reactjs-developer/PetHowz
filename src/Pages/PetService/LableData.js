import React, { useState, createContext } from "react";

export const LabelContext = createContext();

export const LabelData = (props) => {
  const [page, setPage] = useState(0);
  console.log(page, "klnkhcui");
  const [labelInfo, setlabelInfo] = useState({
    sender: {
      firstText: "",
      SecondText: "",
      fourthText: "",
      ThirdText: "",
      fifthText: "",
      sixthText: "",
      seventhText: "",
      fileUploader: "",
      pin_code: "",
      location: "",
    },
    receiver: {
      // professional_status: "",
      tell_us_something_about_you_and_your_passion_towards_pet: "",
      tell_us_about_the_type_of_pet_you_have_and_your_experience: "",
      tell_us_about_the_type_of_pet_you_have_and_your_experience_two: "",
      can_provide_oral_medication: "",
      can_you_provide_first_aid: "",
    },
    // receiver: {
    //   Status1: "",
    //   Status2: "",
    //   Status3: "",
    //   Status4: "",
    //   Status5: "",
    //   Status6: "",
    //   Status7: "",
    //   tell_us_something_about_you_and_your_passion_towards_pet: "",
    //   Status9: "",
    //   Status10: "",
    // },
    // weight: "",
    // shippingOption: "1",
  });

  const nextPage = () => {
    setPage(page + 1);
  };

  const prevPage = () => {
    setPage(page - 1);
  };
  console.log(page, "page");
  // const handleChange = (prop) => (event) => {
  //   setlabelInfo({ ...labelInfo, [prop]: event.target.value });
  // };

  // const setSenderInfo = (prop) => (event) => {
  //   setlabelInfo({
  //     ...labelInfo,
  //     sender: { ...labelInfo.sender, [prop]: event.target.value },
  //   });
  // };
  // const setRecevierInfo = (prop) => (event) => {
  //   setlabelInfo({
  //     ...labelInfo,
  //     receiver: { ...labelInfo.receiver, [prop]: event.target.value },
  //   });
  // };

  const handleChange = (value, name) => {
    // console.log(value, name, "value");
    setlabelInfo({
      ...labelInfo,
      sender: { ...labelInfo.sender, [name]: value },
      receiver: { ...labelInfo.receiver, [name]: value },
      weight: { ...labelInfo.weight, [name]: value },
      shippingOption: { ...labelInfo.shippingOption, [name]: value },
    });
  };
    const handleOnChange = (event, name) => {
      // console.log(event.target.value, ",ooooo");
      setlabelInfo({
        ...labelInfo,
        sender: { ...labelInfo.sender, [name]: event.target.value },
        receiver: { ...labelInfo.receiver, [name]: event.target.value },
        // weight: { ...labelInfo.weight, [name]: value },
        // shippingOption: { ...labelInfo.shippingOption, [name]: value },
      });
    };
  const steps = [
    { title: "Basic Details" },
    { title: "About You" },
    { title: "Services Provider" },
    { title: "Upload Images" },
    { title: "Service Packages" },
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
        // setSenderInfo,
        // setRecevierInfo,
        handleOnChange,
      }}
    >
      {props.children}
    </LabelContext.Provider>
  );
};
