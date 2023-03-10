export const UploadImageEntries = [
  {
    isCustomTypography: true,
    name: "pet_walking",
    text: "Pet Walking",
    breakpoint: 6,
  },
  {
    isCustomTypography: true,
    name: "grooming",
    text: "Grooming",
    breakpoint: 6,
  },
  {
    isFileUploader: true,
    name: "fileUploader",
    label: "Add Photos",
    breakpoint: 6,
    customClass: "uploadImageContainer",
    validation: { required: true },
    error_message: "Upload Image",
  },
  {
    isFileUploader: true,
    name: "fileUploaderImage",
    label: "Add Photos",
    breakpoint: 6,
    customClass: "uploadImageContainer",
    validation: { required: true },
    error_message: "Upload Image",
  },
];
export const DefaultUploadImageValues = {
    fileUploader: "",
    fileUploaderImage: ""
};