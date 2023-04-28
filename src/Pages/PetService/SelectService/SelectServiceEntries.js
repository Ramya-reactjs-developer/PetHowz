export const SelectServiceEntries = [
  //   {
  //     isCheckBoxEdit: true,
  //     name: "check_name",
  //     // label: "I'm 18 and above",
  //     breakpoint: 12,
  //     checkBoxData: [{ name: "" }],
  //     pattern: /^[A-Za-z][A-Za-z0-9_]{7,29}$/,
  //     validation: {
  //       required: true,
  //     },
  //     labelPlacement: "end",
  //     // requiredField: true,
  //     error_message: "This field is required",
  //   },
  {
    isCheckBoxAction: true,
    name: "service_master_id",
    label: "Select Services",
    breakpoint: 6,
    checkBoxData: [
      { id: 1, name: "Pet Grooming" },
      { id: 2, name: "Pet Walking" },
      { id: 3, name: "Pet Training" },
      { id: 4, name: "Pet Taxi" },
    ],

    validation: { required: true },
    error_message: "This field is required",
  },
  //   {
  //     isCheckBoxAction: true,
  //     name: "meal",
  //     // label: "Meal Type",
  //     breakpoint: 6,
  //     checkBoxData: [
  //       { id: 0, name: "Pet Walking" },
  //     ],
  //     validation: { required: true },
  //     error_message: "This field is required",
  //   },
];
export const DefaultSelectServiceValues = {
  //   check_name: "",
  service_master_id: "",
  //   meal:""
};
