import { groomingAction } from "../Slices/Grooming/Grooming";
import { loginAction } from "../Slices/Login/login";


const actions = {
  ...groomingAction,
  ...loginAction,
};

export default actions;
