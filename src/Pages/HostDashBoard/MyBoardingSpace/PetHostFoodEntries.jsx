export const PetHostFoodEntries = [
  {
    isCustomTypography: true,
    name: "What Provided In Meals",
    text: "What Provided In Meals",
    breakpoint: 4,
  },
  {
    isCustomTypography: true,
    name: "What you Provided In Meals as of Your Boarding",
    text: "What you Provided In Meals as of Your Boarding",
    breakpoint: 4,
  },
  {
    isEmptySpace: true,
    breakpoint: 4,
    name: "space",
  },
  {
    isRadioAction: true,
    name: "Veg",
    label: "Veg",
    breakpoint: 4,
    radioButtonData: [{ name: "Yes" }, { name: "No" }],
    defaultValue: "No",
    validation: { required: true },
    error_message: "Status",
  },

  {
    isCustomTypography: true,
    name: "Pedigree",
    text: "Pedigree",
    breakpoint: 4,
  },

  {
    isEmptySpace: true,
    breakpoint: 4,
    name: "space",
  },
  {
    isRadioAction: true,
    name: "Non-Veg",
    label: "Non-Veg",
    breakpoint: 4,
    radioButtonData: [{ name: "Yes" }, { name: "No" }],
    defaultValue: "No",
    validation: { required: true },
    error_message: "Status",
  },
];
