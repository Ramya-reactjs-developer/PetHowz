export const PHBAddOnsEntries = [
  {
    isTextInput: true,
    name: "package_name",
    label: "Name Of Your Add On Package",
    placeholder: "Enter Package Name",
    breakpoint: 11,
    value: "state",
    type: "text",
    customClass: "",
    pattern: /^[a-zA-Z ]*$/,
    validation: { required: true },
    requiredField: true,
    validation_error_message: "Text is in Invalid format",
    error_message: "First Text",
  },

  {
    isTextInput: true,
    name: "included",
    label: "What is Included ?",
    placeholder: "List what are included with the package",
    breakpoint: 12,
    value: "state",
    type: "text",
    customClass: "",
    pattern: /^[a-zA-Z ]*$/,
    validation: { required: true },
    requiredField: true,
    validation_error_message: "Text is in Invalid format",
    error_message: "First Text",
    multiline: true,
    rows: 2,
  },
  {
    isTextInput: true,
    name: "description",
    label: "Description",
    placeholder: "Enter description of the package",
    breakpoint: 12,
    value: "state",
    type: "text",
    customClass: "",
    pattern: /^[a-zA-Z ]*$/,
    validation: { required: true },
    requiredField: true,
    validation_error_message: "Text is in Invalid format",
    error_message: "First Text",
    multiline: true,
    rows: 2,
  },
  {
    isTextInput: true,
    name: "rate",
    label: "Rate",
    placeholder: "Enter the rate of packages",
    breakpoint: 12,
    value: "state",
    type: "text",
    customClass: "",
    // pattern: /^[a-zA-Z ]*$/,
    validation: { required: true },
    requiredField: true,
    validation_error_message: "Text is in Invalid format",
    error_message: "First Text",
  },
  {
    isFileUploader: true,
    name: "images",
    label: "Add Photos",
    breakpoint: 6,
    customClass: "uploadImageContainer",
    validation: { required: true },
    error_message: "Upload Image",
  },
];
export const DefaultPHBAddOnsValues = {
  package_name: "",
  included: "",
  description: "",
  rate: "",
  images: "",
};
