import { CustomerAddAnotherPetAction } from "../Slices/CustomerAddPet/CustomerAddPetSlice";
import { groomingAction } from "../Slices/Grooming/Grooming";
import { loginAction } from "../Slices/Login/login";
import { registertopethowzAction } from "../Slices/RegisterToPethowz/RegisterToPetHowz";
import { overallsearchAction } from "../Slices/SearchCity/OverAllSearchSlice";

import { searchcityAction } from "../Slices/SearchCity/SearchCitySlice";
import { searchcitygetlocalityAction } from "../Slices/SearchCity/SearchGetLocalitySlice";

import { TermsAndConditionAction } from "../Slices/TermsAndCondition/TermsAndConditionSlice";
import { userAddressDetailsAction } from "../Slices/userAddress/userAddressDetailsSlice";

const actions = {
  ...groomingAction,
  ...loginAction,
  ...registertopethowzAction,
  ...userAddressDetailsAction,
  ...TermsAndConditionAction,
  ...CustomerAddAnotherPetAction,
  ...searchcityAction,
  ...searchcitygetlocalityAction,
  ...overallsearchAction,
};

export default actions;
