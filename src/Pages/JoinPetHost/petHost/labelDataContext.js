import React, { useState, createContext } from "react";

export const LabelContext = createContext();

export const LabelProvider = (props) => {
  const [page, setPage] = useState(0);
  console.log(setPage, "klnkhcui");
  const [labelInfo, setlabelInfo] = useState({
    BasicDetails: {
      NameofPet: "",
      mobile_number: "",
      Status1: "",
      dob: "",
      NameOfYourPetBoardingSpace: "",
      Address: "",
      City: "",
      State: "",
      Locality: "",
      Pincode: "",
    },
    AboutYou: {
      ProfessionalStatus: "",
      LiveAloneOrWithFamily: "",
      Aboutyou: "",
      aboutthepet: "",
      aboutthepettype: "",
      OralMedication: "",
      FirstAid: "",
    },
    sender: {
      firstText: "",
      secondText: "",
      thirdText: "",
      fourthText: "",
      fivethText: "",
      sixthText: "",
      seventhText: "",
      eighthText: "",
      fileUploader: [],
    },
    receiver: {
      Status1: "",
      Status2: "",
      Status3: "",
      Status4: "",
      Status5: "",
      Status6: "",
      Status7: "",
      Status8: "",
      Status9: "",
      Status10: "",
      Status11: "",
      Status12: "",
      Status13: "",
      Status14: "",
      Status15: "",
      Status16: "",
      Status17: "",
      Status18: "",
      Status19: "",
      ThirdText: "",
    },
    AddOn: { AddOnPackage: "", add_button: "", WhatisIncluded: "", Rate: "" },
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
      sender: { ...labelInfo.sender, [name]: value },
      receiver: { ...labelInfo.receiver, [name]: value },
      AddOn: { ...labelInfo.AddOn, [name]: value },
      // shippingOption: { ...labelInfo.shippingOption, [name]: value },
    });
  };
  const handleOnChange = (event, name) => {
    console.log(event.target.value, ",ioioikkkkoi");
    setlabelInfo({
      ...labelInfo,
      sender: { ...labelInfo.sender, [name]: event.target.value },
      receiver: { ...labelInfo.receiver, [name]: event.target.value },
      BasicDetails: { ...labelInfo.BasicDetails, [name]: event.target.value },
      AddOn: { ...labelInfo.AddOn, [name]: event.target.value },
      // shippingOption: { ...labelInfo.shippingOption, [name]: value },
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
    { title: "Get Sender addrtess" },
    { title: "Get Reciver addrtess" },
    { title: "Get Weight" },
    { title: "Get Shipping Option" },
    { title: "confirm" },
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
        // setSenderInfo,
        // setRecevierInfo,
      }}
    >
      {props.children}
    </LabelContext.Provider>
  );
};
