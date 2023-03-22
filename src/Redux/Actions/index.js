import { groomingAction } from "../Slices/Grooming/Grooming";
import { loginAction } from "../Slices/Login/login";
import { registertopethowzAction } from "../Slices/RegisterToPethowz/RegisterToPetHowz";

const actions = {
  ...groomingAction,
  ...loginAction,
  ...registertopethowzAction,
};

export default actions;
