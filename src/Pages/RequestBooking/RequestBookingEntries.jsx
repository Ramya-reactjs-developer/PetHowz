import { useNavigate } from "react-router";
// eslint-disable-next-line react-hooks/rules-of-hooks
// const navigate = useNavigate();
// const onAddAnother = () => {
//   navigate("./AddYourPetLogin")
// };
export const RequestBookingEntries = [
  
  {
    isCustomTypography: true,
    name: "name1",
    text: "Booking Details",
    breakpoint: 12,
    customClass: "HeaderRED",
  },
  {
    isDropdown: true,
    name: "pet_details",
    labelText: "Your Pet Type",
    placeholder: "Select Profession",
    DropdownData: [],
    breakpoint: 5,
    disabled: true,
    validation: { required: true },
  },
  {
    isAddButton: true,
    name: "name7",
    buttonTitle:"+",
    breakpoint: 2,
    // onClickHandle:{onAddAnother},
    customClass: "Addbtn",
    color: "primary"
  },
  // {
  //   isMultipleSelectChip: true,
  //   name: "name2",
  //   breakpoint: 6,
  //   label: "Select Pet",
  //   labelText: "Select Pet",
  //   dropPlaceholder: "Select Pet",
  //   disabled: true,
  //   DropdownData: [
  //     {
  //       id: 1,
  //       value: "Cartomancy",
  //     },
  //     {
  //       id: 2,
  //       value: "Face Reading",
  //     },
  //     {
  //       id: 3,
  //       value: "Lal Kitab",
  //     },
  //     {
  //       id: 4,
  //       value: "Life Coach",
  //     },
  //     {
  //       id: 5,
  //       value: "Loshu Grid",
  //     },
  //   ],
  //   validation: { required: true },
  //   error_message: "Primary Skills",
  // },
  {
    isBirthdayPicker: true,
    name: "name4",
    date: true,
    label: "Select Date and Time",
    placeholder: "Date and Time",
    pattern: /^\d{2}-[a-zA-Z]{3}-\d{4}$/,
    breakpoint: 5,
    validation_error_message: "Date of Birth is in Invalid format",
    validation: { required: true },
    requiredField: true,
    // maxDate: "11/02/2004",
    error_message: "Date of Birth",
  },
  {
    isDateTimePicker: true,
    date: true,
    name: "what_is_the_suitable_time_for_an_intervie",
    label: "What is the Suitable Date and  Time for an Interview? ",
    error_message: "Interview time is required.",
    breakpoint: 6,
    placeholder: "Eg: 10:00 AM",
    validation: { required: true },
    requiredField: true,
  },
  {
    isBirthdayPicker: true,
    name: "name",
    date: true,
    label: "Select Date and Time",
    placeholder: "Date and Time",
    pattern: /^\d{2}-[a-zA-Z]{3}-\d{4}$/,
    breakpoint: 6,
    validation_error_message: "Date of Birth is in Invalid format",
    validation: { required: true },
    requiredField: true,
    // maxDate: "11/02/2004",
    error_message: "Date of Birth",
  },

  {
    isDateTimePicker: true,
    date: true,
    name: "what_is_the_suitable_time_for_an_interview",
    label: "What is the Suitable Date and  Time for an Interview? ",
    error_message: "Interview time is required.",
    breakpoint: 6,
    placeholder: "Eg: 10:00 AM",
    validation: { required: true },
    requiredField: true,
  },
  {
    isTextInput: true,
    name: "specific_request",
    label: "Do you have any specific request for your pet",
    placeholder: "Enter Name",
    breakpoint: 12,
    validation: { required: true },
    pattern: /^([a-z0-9])(\w)+([a-z0-9])$/i,
    requiredField: true,
    customClass: "textBox",
    error_message: "First Text",
    validation_error_message: "Text is in Invalid format",
  },
  //   {
  //     isEmptySpace: true,
  //     breakpoint: 6,
  //     name: "space",
  //   },
  {
    isEmptySpace: true,
    breakpoint: 4,
    name: "space",
  },
  {
    isSubmitButton: true,
    name: "name7",
    buttonTitle: "Submit Booking Request",
    breakpoint: 6,
    customClass: "sourceButton",
  },
];

export const DefaultRequestBookingValues = {
  name1: "",
  name2: "",
  name3: "",
  name4: "",
  name6: "",
  name7: "",
  fourthText: "",
};
