export const PetHostFoodEntries = [
  {
    isRadioAction: true,
    text: "What Provided In Meals",
    customClass: "Meals",
    name: "Veg",
    label: "Veg",
    name2: "NonVeg",
    label2: "Non-Veg",
    breakpoint: 4,
    radioButtonData: [{ name: "Yes" }, { name: "No" }],
    radioButtonData2: [{ name: "Yes" }, { name: "No" }],
    defaultValue: "No",
    validation: { required: true },
    error_message: "Status",
  },

  {
    isCustomTypography: true,
    name: "WhatyouProvidedInMealsasofYourBoarding",
    text: "What you Provided In Meals as of Your Boarding",
    text2: "Pedigree",
    breakpoint: 4,
    customClass: "Meals",
    customClass1: "Food",
  },
  {
    isEmptySpace: true,
    breakpoint: 8,
    name: "space",
  },
  {
    isSubmitButton: true,
    name: "name7",
    buttonTitle: "Save & Submit",
    breakpoint: 2,
    customClass: "sourceButton",
  },
];
export const DefaultFoodEntriesValues = {
  WhatProvidedInMeals: "",
  WhatyouProvidedInMealsasofYourBoarding: "",
  Veg: "",
  NonVeg: "",
};
