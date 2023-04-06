export const PHBBasicDetailsEntries = [
  // {
  //   isEmptySpace: true,
  //   breakpoint: 4,
  //   name: "space",
  // },
  // {
  //   isProfileUploader: true,
  //   name: "image",
  //   label: "Add Photos",
  //   breakpoint: 4,
  //   customClass: "uploadImageContainer",
  //   validation: { required: true },
  //   error_message: "Upload Image",
  // },

  {
    isFileUploader: true,
    name: "image",
    label: "Choose Image",
    breakpoint: 12,
    customClass: "uploadImageContainer",
    validation: { required: true },
    error_message: "Upload Image",
  },
  {
    isTextInput: true,
    name: "pet_boarding_space_name",
    type: "text",
    label: "Name of Your Pet Service Space",
    placeholder: "",
    breakpoint: 12,
    validation: { required: true },
    // pattern: /^[a-zA-Z ]*$/,
    requiredField: true,
    customClass: "textBox",
    error_message: "First Text",
    validation_error_message: "Text is in Invalid format",
  },
  {
    isTextInput: true,
    name: "name",
    type: "text",
    label: "Contact Person Name",
    placeholder: "Enter Name",
    breakpoint: 6,
    validation: { required: true },
    // pattern: /^[a-zA-Z ]*$/,
    requiredField: true,
    customClass: "textBox",
    error_message: "First Text",
    validation_error_message: "Text is in Invalid format",
  },
  {
    isTextInput: true,
    type: "number",
    name: "mobile_number",
    label: "Contact Person Mobile Number",
    placeholder: "Enter Mobile Number",
    breakpoint: 6,
    validation: { required: true },
    pattern: /^(\+\d{1,3}[- ]?)?\d{10}$/,
    requiredField: true,
    customClass: "textBox",
    error_message: "First Text",
    validation_error_message: "Text is in Invalid format",
  },

  {
    isTextInput: true,
    type: "text",
    name: "street",
    label: "Street",
    placeholder: "",
    breakpoint: 6,
    // multiline: true,
    // rows: 3,
    validation: { required: true },
    // pattern: /^[a-zA-Z ]*$/,
    requiredField: true,
    customClass: "textBox",
    error_message: "First Text",
    validation_error_message: "Text is in Invalid format",
  },
  {
    isTextInput: true,
    type: "text",
    name: "city",
    label: "City",
    placeholder: "Enter City",
    breakpoint: 6,
    validation: { required: true },
    // pattern: /^[a-zA-Z ]*$/,
    requiredField: true,
    customClass: "textBox",
    error_message: "First Text",
    validation_error_message: "Text is in Invalid format",
  },
  {
    isTextInput: true,
    name: "locality",
    type: "text",
    label: "Locality",
    placeholder: "Enter Locality",
    breakpoint: 6,
    validation: { required: true },
    // pattern: /^[a-zA-Z ]*$/,
    requiredField: true,
    customClass: "textBox",
    error_message: "First Text",
    validation_error_message: "Text is in Invalid format",
  },
  {
    isTextInput: true,
    name: "state",
    type: "text",
    label: "State",
    placeholder: "Enter State",
    breakpoint: 6,
    validation: { required: true },
    // pattern: /^[a-zA-Z ]*$/,
    requiredField: true,
    customClass: "textBox",
    error_message: "First Text",
    validation_error_message: "Text is in Invalid format",
  },

  {
    isTextInput: true,
    name: "pincode",
    type: "number",
    label: "Pincode",
    placeholder: "Enter Pincode",
    breakpoint: 6,
    validation: { required: true },
    pattern: /^(\+\d{1,3}[- ]?)?\d{6}$/,
    requiredField: true,
    customClass: "textBox",
    error_message: "Pincode",
    validation_error_message: "Text is in Invalid format",
  },
  {
    isTextInput: true,
    name: "pin_location",
    type: "text",
    label: "Pin Location",
    placeholder: "Location",
    breakpoint: 6,
    validation: { required: true },
    pattern: /^[a-zA-Z ]*$/,
    requiredField: true,
    customClass: "textBox",
    error_message: "First Text",
    validation_error_message: "Text is in Invalid format",
  },

  // {
  //   isFileUploader: true,
  //   name: "fileUploader",
  //   label: "Add Photos",
  //   breakpoint: 8,
  //   customClass: "uploadImageContainer",
  //   validation: { required: true },
  //   error_message: "Upload Image",
  // },
  // {
  //     isSubmitButton: true,
  //     name: 'submit_button',
  //     buttonTitle: 'Submit',
  //     breakpoint: 1,
  //   },
];
export const DefaultPHBBasicDetailsValues = {
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
  // submit_button: "",
  // cancel_button: "",
};
