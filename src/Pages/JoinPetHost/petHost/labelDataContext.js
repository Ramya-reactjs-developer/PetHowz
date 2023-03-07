import React, { useState, createContext } from "react";

export const LabelContext = createContext();

export const LabelProvider = (props) => {
  const [page, setPage] = useState(0);
  console.log(setPage, "klnkhcui");
  const [labelInfo, setlabelInfo] = useState({
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
      Status13:"",
      Status14:"",
      Status15:"",
      Status16:"",
      Status17:"",
      Status18:"",
      Status19:"",
      ThirdText:"",
    },
    weight: {
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
    shippingOption: {
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
    console.log(value, name,',ioioioi');
    setlabelInfo({
      ...labelInfo,
      sender: { ...labelInfo.sender, [name]: value },
      receiver: { ...labelInfo.receiver, [name]: value },
      weight: { ...labelInfo.weight, [name]: value },
      shippingOption: { ...labelInfo.shippingOption, [name]: value },

    });
  };
  const handleOnChange = (event, name) => {
    console.log(event.target.value,',ioioikkkkoi');
    setlabelInfo({
      ...labelInfo,
      // sender: { ...labelInfo.sender, [name]: value },
      receiver: { ...labelInfo.receiver, [name]: event.target.value },
      // weight: { ...labelInfo.weight, [name]: value },
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
        handleOnChange
        // setSenderInfo,
        // setRecevierInfo,
      }}
    >
      {props.children}
    </LabelContext.Provider>
  );
};
