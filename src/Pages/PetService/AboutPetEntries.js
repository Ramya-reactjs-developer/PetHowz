export const AboutPetEntries = [
  {
    isDropdown: true,
    name: "professional_status",
    label: "Professional Status",
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
    name: "tell_us_something_about_you_and_your_passion_towards_pet",
    label: "Tell us Something about you and your passion towards pet",
    placeholder: "Enter Name",
    breakpoint: 10,
    validation: { required: true },
    pattern: /^[a-zA-Z ]*$/,
    requiredField: true,
    customClass: "textBox",
    error_message: "First Text",
    validation_error_message: "Text is in Invalid format",
  },
  {
    isTextInput: true,
    name: "tell_us_about_the_type_of_pet_you_have_and_your_experience",
    label:
      "Tell us about the type of pet you have and your experience in boarding or other services",
    placeholder: "",
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
    isTextInput: true,
    name: "tell_us_about_the_type_of_pet_you_have_and_your_experience_two",
    label:
      "Tell us about the type of pet you have and your experience in boarding or other services",
    placeholder: "",
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
    isRadioAction: true,
    name: "can_provide_oral_medication",
    label: "Can provide oral medication?",
    breakpoint: 6,
    radioButtonData: [{ name: "Yes" }, { name: "No" }],
    validation: { required: true },
    requiredField: true,
    error_message: "Status",
  },
  {
    isRadioAction: true,
    name: "can_you_provide_first_aid",
    label: "Can you provide first aid?",
    breakpoint: 6,
    radioButtonData: [{ name: "Yes" }, { name: "No" }],
    validation: { required: true },
    requiredField: true,
    error_message: "Status",
  },
];
export const DefaultAboutPetValues = {
  professional_status: "",
  tell_us_something_about_you_and_your_passion_towards_pet: "",
  tell_us_about_the_type_of_pet_you_have_and_your_experience: "",
  tell_us_about_the_type_of_pet_you_have_and_your_experience_two: "",
  can_provide_oral_medication: "",
  can_you_provide_first_aid: "",
};
