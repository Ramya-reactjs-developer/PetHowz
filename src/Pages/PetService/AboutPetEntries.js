export const AboutPetEntries = [
  {
    isDropdown: true,
    name: "professional_status",
    labelText: "Professional Status",
    placeholder: "Select Profession",
    DropdownData: [
      {
        id: 1,
        value: "Student",
      },
      {
        id: 2,
        value: "Housewife",
      },
      {
        id: 3,
        value: "Professional boarder",
      },
      {
        id: 4,
        value: "Working Professional",
      },
    ],
    breakpoint: 5,
    disabled: true,
    validation: { required: true },
  },
  {
    isTextInput: true,
    name: "tell_us_somthing_about_you",
    label: "Tell us Something about you and your passion towards pet",
    placeholder: "Enter Name",
    breakpoint: 10,
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
    isDropdown: true,
    name: "years_of_experience",
    labelText: "Year of Experience",
    placeholder: "Select Profession",
    DropdownData: [
      {
        id: 1,
        value: "Student",
      },
      {
        id: 2,
        value: "Housewife",
      },
      {
        id: 3,
        value: "Professional boarder",
      },
      {
        id: 4,
        value: "Working Professional",
      },
    ],
    breakpoint: 6,
    disabled: true,
    validation: { required: true },
  },
  {
    isDropdown: true,
    name: "service_provider_type",
    labelText: "Service Provider Type",
    placeholder: "Select Profession",
    DropdownData: [
      {
        id: 1,
        value: "Student",
      },
      {
        id: 2,
        value: "Housewife",
      },
      {
        id: 3,
        value: "Professional boarder",
      },
      {
        id: 4,
        value: "Working Professional",
      },
    ],
    breakpoint: 6,
    disabled: true,
    validation: { required: true },
  },
  {
    isMultipleSelectChip: true,
    name: "service_provider_for",
    breakpoint: 6,
    label: "Service Provider For",
    labelText: "Primary Skills",
    dropPlaceholder: "Primary Skills",
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
    isDropdown: true,
    name: "no_of_pets",
    labelText: "Boarding Capacity",
    placeholder: "Select Profession",
    dropPlaceholder: "Primary Skills",
    DropdownData: [
      {
        id: 1,
        value: "Student",
      },
      {
        id: 2,
        value: "Housewife",
      },
      {
        id: 3,
        value: "Professional boarder",
      },
      {
        id: 4,
        value: "Working Professional",
      },
    ],
    breakpoint: 6,
    disabled: true,
    validation: { required: true },
  },
  {
    isCustomTypography: true,
    name: "header_menu",
    text: "Amenities",
    breakpoint: 12,
  },
  {
    isRadioAction: true,
    name: "grooming_kit",
    label: "Do You have carry own grooming kit?",
    breakpoint: 6,
    radioButtonData: [{ name: "Yes" }, { name: "No" }],
    validation: { required: true },
    requiredField: true,
    error_message: "Status",
  },
  {
    isRadioAction: true,
    name: "mobile_grooming_van",
    label: "Do you have mobile grooming van?",
    breakpoint: 6,
    radioButtonData: [{ name: "Yes" }, { name: "No" }],
    validation: { required: true },
    requiredField: true,
    error_message: "Status",
  },
  {
    isRadioAction: true,
    name: "hair_dryer",
    label: "Will you carry hair dryer?",
    breakpoint: 6,
    radioButtonData: [{ name: "Yes" }, { name: "No" }],
    validation: { required: true },
    requiredField: true,
    error_message: "Status",
  },
  {
    isRadioAction: true,
    name: "hair_shampoo",
    label: "Will you carry hair shampoo/conditioner?",
    breakpoint: 6,
    radioButtonData: [{ name: "Yes" }, { name: "No" }],
    validation: { required: true },
    requiredField: true,
    error_message: "Status",
  },
  {
    isRadioAction: true,
    name: "carry_towel",
    label: "Will you carry towel to dry pets ofter bath?",
    breakpoint: 6,
    radioButtonData: [{ name: "Yes" }, { name: "No" }],
    validation: { required: true },
    requiredField: true,
    error_message: "Status",
  },
  {
    isRadioAction: true,
    name: "grooming_assistant",
    label: "Do you bring a grooming assistant?",
    breakpoint: 6,
    radioButtonData: [{ name: "Yes" }, { name: "No" }],
    validation: { required: true },
    requiredField: true,
    error_message: "Status",
  },
  {
    isCustomTypography: true,
    name: "header_menu",
    text: "Service Overview",
    breakpoint: 12,
  },
  {
    isTextInput: true,
    name: "service_overview",
    label: "Service Overview",
    placeholder: "",
    breakpoint: 12,
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
    isRadioAction: true,
    name: "doorstep_services",
    label: "Do you provide doorstep services?",
    breakpoint: 6,
    radioButtonData: [{ name: "Yes" }, { name: "No" }],
    validation: { required: true },
    requiredField: true,
    error_message: "Status",
  },
  {
    isTextInput: true,
    name: "location",
    label: "Enter Location",
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
    isProfileImageUploader: true,
    name: "photos",
    label: "Add Photos",
    breakpoint: 5,
    customClass: "profileImageContainer",
    validation: { required: true },
    error_message: "Upload Image",
  },
  {
    isEmptySpace: true,
    breakpoint: 6,
    name: "space",
  },
];
export const DefaultAboutPetValues = {
  professional_status: "",
  tell_us_somthing_about_you: "",
  years_of_experience: "",
  service_provider_type: "",
  service_provider_for: "",
  no_of_pets: "",
  grooming_kit: "",
  mobile_grooming_van: "",
  hair_dryer: "",
  hair_shampoo: "",
  carry_towel: "",
  grooming_assistant: "",
  service_overview: "",
  doorstep_services: "",
  location: "",
  photos:"",
};
