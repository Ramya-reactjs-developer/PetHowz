const entries = [
  {
    textField: true,
    entryName: "email",
    label: "Username",
    placeholder: "Email",
    type: "text",
    pattern: /^\w+([\\.-]?\w+)@\w+([\\.-]?\w+)(\.\w{2,3})+$/,
    validation: {
      isRequired: true,
    },
  },
  {
    textField: true,
    entryName: "password",
    label: "Password",
    placeholder: "Password",
    type: "password",
    validation: {
      isRequired: true,
    },
  },
];
export default entries;
