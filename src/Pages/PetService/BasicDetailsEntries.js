export const BasicDetailsEntries = [
  {
    isFileUploader: true,
    name: "fileUploader",
    label: "Add Photos",
    breakpoint: 8,
    customClass: "uploadImageContainer",
    validation: { required: true },
    error_message: "Upload Image",
  },
  {
    isTextInput: true,
    name: "firstText",
    label: "Contact Person Name",
    placeholder: "Enter Name",
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
    name: "firstText",
    label: "Contact Person Mobile Number",
    placeholder: "Enter Mobile Number",
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
    name: "firstText",
    label: "Name of Your Pet Service Space",
    placeholder: "",
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
    name: "firstText",
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
    isTextInput: true,
    name: "firstText",
    label: "City",
    placeholder: "Enter City",
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
    name: "firstText",
    label: "State",
    placeholder: "Enter State",
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
    name: "firstText",
    label: "Locality",
    placeholder: "Enter Locality",
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
    name: "firstText",
    label: "Pincode",
    placeholder: "Enter Pincode",
    breakpoint: 6,
    validation: { required: true },
    pattern: /^[a-zA-Z ]*$/,
    requiredField: true,
    customClass: "textBox",
    error_message: "Pincode",
    validation_error_message: "Text is in Invalid format",
  },
  {
    isTextInput: true,
    name: "firstText",
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
export const DefaultBasicDetailsValues = {
  firstText: "",
  SecondText: "",
  Status: "",
  ThirdText: "",
  fileUploader: "",
  // submit_button: '',
  // cancel_button: '',
};
