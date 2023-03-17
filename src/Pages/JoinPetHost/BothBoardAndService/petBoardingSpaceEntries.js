export const petSpaceEntries = [
  {
    isTextInput: true,
    name: "firstText",
    label: "Type of Boarding",
    value: "state",
    placeholder: "Individual House",
    breakpoint: 6,
    validation: { required: true },
    pattern: /^[a-zA-Z ]*$/,
    requiredField: true,
    customClass: "textBox",
    error_message: "First Text",
    validation_error_message: "Text is in Invalid format",
  },
  // {
  //   isCustomTypography: true,
  //   name: 'basic_details',
  //   text: 'Type of Boarding',
  //   breakpoint: 12,
  //   customClass: 'login_header',
  // },
  // {
  //   isDropdown: true,
  //   name: "firstText",
  //   label: "Professional Status",
  //   placeholder: "Select Profession",
  //   DropdownData: [
  //     {
  //       id: 1,
  //       value: "Student",
  //     },
  //     {
  //       id: 2,
  //       value: "Housewife",
  //     },
  //     {
  //       id: 3,
  //       value: "Professional boarder",
  //     },
  //     {
  //       id: 4,
  //       value: "Working Professional",
  //     },
  //   ],
  //   breakpoint: 6,
  //   disabled: true,
  //   validation: { required: true },
  // },
  // {
  //   isMultipleSelectChip: true,
  //   name: "secondText",
  //   breakpoint: 6,
  //   label: "Category of Pet Boarded",
  //   labelText: "Primary Skills",
  //   dropPlaceholder: "Primary Skills",
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
    isTextInput: true,
    name: "secondText",
    label: "Category of Pet Boarded",
    placeholder: "Cat",
    breakpoint: 6,
    validation: { required: true },
    pattern: /^[a-zA-Z ]*$/,
    requiredField: true,
    customClass: "textBox",
    error_message: "First Text",
    validation_error_message: "Text is in Invalid format",
  },
  {
    isTextInput: true,
    name: "thirdText",
    label: "No of Pets (Boarding Capacity)",
    placeholder: "Enter Number",
    breakpoint: 6,
    validation: { required: true },
    pattern: /^[a-zA-Z ]*$/,
    requiredField: true,
    customClass: "textBox",
    error_message: "First Text",
    validation_error_message: "Text is in Invalid format",
  },
  {
    isTextInput: true,
    name: "fourthText",
    label: "Total Sq Feet of the Space",
    placeholder: "Enter Number",
    breakpoint: 6,
    validation: { required: true },
    pattern: /^[a-zA-Z ]*$/,
    requiredField: true,
    customClass: "textBox",
    error_message: "First Text",
    validation_error_message: "Text is in Invalid format",
  },
  {
    isTextInput: true,
    name: "fivethText",
    label: "Price for Pet Day Boardind (24 Hours) ",
    placeholder: "Enter Price",
    breakpoint: 6,
    validation: { required: true },
    pattern: /^[a-zA-Z ]*$/,
    requiredField: true,
    customClass: "textBox",
    error_message: "First Text",
    validation_error_message: "Text is in Invalid format",
  },
  {
    isTextInput: true,
    name: "sixthText",
    label: "Price for Day Care (Boarding",
    placeholder: "Enter Price",
    breakpoint: 6,
    validation: { required: true },
    pattern: /^[a-zA-Z ]*$/,
    requiredField: true,
    customClass: "textBox",
    error_message: "First Text",
    validation_error_message: "Text is in Invalid format",
  },
  {
    isTextInput: true,
    name: "seventhText",
    label: "No of Bed Rooms",
    placeholder: "Enter Number",
    breakpoint: 6,
    validation: { required: true },
    pattern: /^[a-zA-Z ]*$/,
    requiredField: true,
    customClass: "textBox",
    error_message: "First Text",
    validation_error_message: "Text is in Invalid format",
  },
  {
    isTextInput: true,
    name: "eighthText",
    label: "How many pets can you host at?",
    placeholder: "Enter a Number",
    breakpoint: 6,
    validation: { required: true },
    pattern: /^[a-zA-Z ]*$/,
    requiredField: true,
    customClass: "textBox",
    error_message: "First Text",
    validation_error_message: "Text is in Invalid format",
  },
  {
    isFileUploader: true,
    name: "fileUploader",
    label: "Add Photos",
    breakpoint: 8,
    customClass: "uploadImageContainer",
    validation: { required: true },
    error_message: "Upload Image",
  },
  // {
  //     isSubmitButton: true,
  //     name: 'submit_button',
  //     buttonTitle: 'Submit',
  //     breakpoint: 1,
  //   },
];
export const DefaultPetSpaceValues = {
  firstText: "",
  secondText: "",
  thirdText: "",
  fourthText: "",
  fivethText: "",
  sixthText: "",
  seventhText: "",
  eighthText: "",
  fileUploader: "",
  // submit_button: '',
  // cancel_button: '',
};
