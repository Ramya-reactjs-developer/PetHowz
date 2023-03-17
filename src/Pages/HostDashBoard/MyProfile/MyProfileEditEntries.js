// import CustomIcons from '../../utils/icon';

 export const MyProfileEditEntries = [
    {
        isTextInput: true,
        name: "your_name",
        label: "Your Name",
        placeholder: "Enter Name",
        breakpoint: 3,
        validation: { required: true },
        pattern: /^[a-zA-Z ]*$/,
        requiredField: true,
        customClass: "textBoxArea",
        error_message: "First Text",
        validation_error_message: "Text is in Invalid format",
   },
   {
    isEmptySpace: true,
    breakpoint: 1,
    name: 'space',
  },
   {
    isTextInput: true,
    name: "mobile-number",
    label: "Mobile Number",
    placeholder: "Enter Name",
    breakpoint: 3,
    validation: { required: true },
    pattern: /^[a-zA-Z ]*$/,
    requiredField: true,
    customClass: "textBox",
    error_message: "First Text",
    validation_error_message: "Text is in Invalid format",
   },
   {
    isEmptySpace: true,
    breakpoint: 1,
    name: 'space',
  },
   {
    isTextInput: true,
    name: "email",
    label: "email",
    placeholder: "Enter Name",
    breakpoint: 3,
    validation: { required: true },
    pattern: /^[a-zA-Z ]*$/,
    requiredField: true,
    customClass: "textBox",
    error_message: "First Text",
    validation_error_message: "Text is in Invalid format",
   },
   
   {
    isRadioAction: true,
    name: "Profile",
    label: "Do you have a playing area for pets?",
    breakpoint: 3,
    radioButtonData: [{ name: "Active" }, { name: "Inactive" }],
    validation: { required: true },
    requiredField: true,
    error_message: "Status",
   },
   {
    isEmptySpace: true,
    breakpoint: 1,
    name: 'space',
  },

   {
    isBirthdayPicker: true,
    name: 'dob',
    date: true,
    label: 'Date of Birth',
    placeholder: 'DD-MM-YYYY',
    pattern: /^\d{2}-[a-zA-Z]{3}-\d{4}$/,
    breakpoint: 3,
    validation_error_message: 'Date of Birth is in Invalid format',
    validation: { required: true },
    requiredField: true,
    maxDate: '11/02/2004',
    error_message: 'Date of Birth',
   },
   {
    isEmptySpace: true,
    breakpoint: 4,
    name: 'space',
  },
   {
    isTextInput: true,
    name: "your_name",
    label: "Your Name",
    placeholder: "Enter Name",
    breakpoint: 3,
    validation: { required: true },
    pattern: /^[a-zA-Z ]*$/,
    requiredField: true,
    customClass: "textBox",
    error_message: "First Text",
    validation_error_message: "Text is in Invalid format",
   },
   {
    isEmptySpace: true,
    breakpoint: 1,
    name: 'space',
  },
{
isTextInput: true,
name: "mobile-number",
label: "Mobile Number",
placeholder: "Enter Name",
breakpoint: 3,
validation: { required: true },
pattern: /^[a-zA-Z ]*$/,
requiredField: true,
customClass: "textBox",
error_message: "First Text",
validation_error_message: "Text is in Invalid format",
   },
   {
    isEmptySpace: true,
    breakpoint: 1,
    name: 'space',
  },
{
isTextInput: true,
name: "email",
label: "email",
placeholder: "Enter Name",
breakpoint: 4,
validation: { required: true },
pattern: /^[a-zA-Z ]*$/,
requiredField: true,
customClass: "textBox",
error_message: "First Text",
validation_error_message: "Text is in Invalid format",
   },
   {
    isTextInput: true,
    name: "your_name",
    label: "Your Name",
    placeholder: "Enter Name",
    breakpoint: 3,
    validation: { required: true },
    pattern: /^[a-zA-Z ]*$/,
    requiredField: true,
    customClass: "textBox",
    error_message: "First Text",
    validation_error_message: "Text is in Invalid format",
   },
   {
    isEmptySpace: true,
    breakpoint: 1,
    name: 'space',
  },
{
isTextInput: true,
name: "mobile-number",
label: "Mobile Number",
placeholder: "Enter Name",
breakpoint: 3,
validation: { required: true },
pattern: /^[a-zA-Z ]*$/,
requiredField: true,
customClass: "textBox",
error_message: "First Text",
validation_error_message: "Text is in Invalid format",
   },
   {
    isEmptySpace: true,
    breakpoint: 1,
    name: 'space',
  },
{
isTextInput: true,
name: "email",
label: "email",
placeholder: "Enter Name",
breakpoint: 4,
validation: { required: true },
pattern: /^[a-zA-Z ]*$/,
requiredField: true,
customClass: "textBox",
error_message: "First Text",
validation_error_message: "Text is in Invalid format",
   },
   {
    isEmptySpace: true,
    breakpoint: 10,
    name: 'space',
   },
  

     {
        isSubmitButton: true,
        name: 'submit_button',
        buttonTitle: 'Next',
        breakpoint: 2,
        customClass: 'ProfileSaveButton',
      },
  ];
  export const DefaultMyProfileEditEntries = {
    firstText: "",
    SecondText: "",
    fourthText: "",
    ThirdText: "",
    fifthText: "",
    sixthText: "",
    seventhText: "",
    fileUploader: "",
    pin_code: "",
    location: "",
    // submit_button: '',
    // cancel_button: '',
  };