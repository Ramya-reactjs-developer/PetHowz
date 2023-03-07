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
