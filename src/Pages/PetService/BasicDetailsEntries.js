export const BasicDetailsEntries = [
  {
    isEmptySpace: true,
    breakpoint: 4,
    name: "space",
  },
  {
    isFileUploader: true,
    name: "image",
    label: "Choose Image",
    // placeholder:"choose",
    breakpoint: 4,
    validation: { required: true },
    error_message: "Upload Image",
  },
  {
    isEmptySpace: true,
    breakpoint: 4,
    name: "space",
  },
  {
    isTextInput: true,
    name: "pet_service_name",
    label: "Name of your pet service",
    placeholder: "Pet service Name",
    breakpoint: 12,
    validation: { required: true },
    pattern: /^[a-zA-Z ]*$/,
    requiredField: true,
    customClass: "textBox",
    error_message: "First Text",
    validation_error_message: "Text is in Invalid format",
  },
  {
    isTextInput: true,
    name: "name",
    label: "Contact Person Name",
    placeholder: "Enter name",
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
    name: "mobile_number",
    label: "Contact Person Mobile Number",
    placeholder: "Enter Mobile Number",
    breakpoint: 6,
    // validation: { required: true },
    // pattern: /^[a-zA-Z ]*$/,
    // requiredField: true,
    customClass: "textBox",
    error_message: "First Text",
    validation_error_message: "Text is in Invalid format",
  },
  {
    isTextInput: true,
    name: "street",
    label: "Street",
    placeholder: "",
    breakpoint: 6,
    // multiline: true,
    // rows: 3,
    validation: { required: true },
    pattern: /^[a-zA-Z ]*$/,
    requiredField: true,
    customClass: "textBox",
    error_message: "First Text",
    validation_error_message: "Text is in Invalid format",
  },
  {
    isTextInput: true,
    name: "city",
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
    name: "locality",
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
    name: "state",
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
    name: "pin_code",
    label: "Pincode",
    placeholder: "Enter Pincode",
    breakpoint: 6,
    // validation: { required: true },
    // pattern: /^[a-zA-Z ]*$/,
    // requiredField: true,
    customClass: "textBox",
    error_message: "Pincode",
    validation_error_message: "Text is in Invalid format",
  },
  {
    isTextInput: true,
    name: "pin_location",
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
];
export const DefaultBasicDetailsValues = {
  image: "",
  pet_service_name: "",
  name: "",
  mobile_number: "",
  street: "",
  city: "",
  locality: "",
  state: "",
  pin_code: "",
  pin_location: "",
  // submit_button: '',
  // cancel_button: '',
};