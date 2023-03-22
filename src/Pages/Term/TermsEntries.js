export const AddTermsentries = [
    {
        isCheckBoxAction: true,
        name: "verified_the_data",
        // label: "I Confirm I have verified the data above and it is accurate.",
        breakpoint: 12,
        checkBoxData: [{ name: "" }],
        pattern: /^[A-Za-z][A-Za-z0-9_]{7,29}$/,
        // requiredField: true,
        validation: { required: true },
        error_message: "This field is required",
        // labelPlacement:true
        // id: true,
      },
  ];
  export const DefaultTermsValues = {
    verified_the_data:""
  };