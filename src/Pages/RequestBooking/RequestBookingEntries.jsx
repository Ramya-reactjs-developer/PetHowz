export const RequestBookingEntries = [
  {
    isCustomTypography: true,
    name: "name1",
    text: "Booking Details",
    breakpoint: 12,
    customClass: "HeaderRED",
  },
  {
    isMultipleSelectChip: true,
    name: "name2",
    breakpoint: 6,
    label: "Select Pet",
    labelText: "Select Pet",
    dropPlaceholder: "Select Pet",
    disabled: true,
    DropdownData: [
      {
        id: 1,
        value: "Cartomancy",
      },
      {
        id: 2,
        value: "Face Reading",
      },
      {
        id: 3,
        value: "Lal Kitab",
      },
      {
        id: 4,
        value: "Life Coach",
      },
      {
        id: 5,
        value: "Loshu Grid",
      },
    ],
    validation: { required: true },
    error_message: "Primary Skills",
  },
  {
    isTextInput: true,
    name: "name3",
    label: "Address",
    placeholder: "",
    breakpoint: 6,
    multiline: true,
    rows: 3,
    validation: { required: true },
    pattern: /^[a-zA-Z ]*$/,
    requiredField: true,
    customClass: "textBox",
    error_message: "First Text",
    validation_error_message: "Text is in Invalid format",
  },
  {
    isBirthdayPicker: true,
    name: "name4",
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
    isTextInput: true,
    name: "name5",
    label: "Specific Request",
    placeholder: "Specific Request",
    breakpoint: 6,
    multiline: true,
    rows: 2,
    validation: { required: true },
    pattern: /^[a-zA-Z ]*$/,
    requiredField: true,
    customClass: "textBox",
    error_message: "First Text",
    validation_error_message: "Text is in Invalid format",
  },
  {
    isCustomTypography: true,
    name: "Pedigree",
    text: "Selected Service",
    text2: "Pet Hosting",
    breakpoint: 6,
    customClass: "TextAlignLeft",
    customClass1: "TextAlignLeft1",
    colorType: "text",
  },
  {
    isTextInput: true,
    name: "name6",
    label: "Vaccination Details",
    placeholder: "Vaccination Details",
    breakpoint: 6,
    multiline: true,
    rows: 2,
    validation: { required: true },
    pattern: /^[a-zA-Z ]*$/,
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
  // {
  //   isSubmitButton: true,
  //   name: "name7",
  //   buttonTitle: "Submit Booking Request",
  //   breakpoint: 6,
  //   customClass: "sourceButton",
  // },
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
