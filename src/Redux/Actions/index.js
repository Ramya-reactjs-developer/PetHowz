import { AddYourPetAction } from "../Slices/AddYourPet/AddYourPetSlice";
import { BookingRequestAction } from "../Slices/BookingRequest/BookingRequestSlice";
import { CustomerAddAnotherPetAction } from "../Slices/CustomerAddPet/CustomerAddPetSlice";
import { groomingAction } from "../Slices/Grooming/Grooming";
import { loginAction } from "../Slices/Login/login";
import { ourServiceAction } from "../Slices/OurService/OurService";
import { petBoardingAction } from "../Slices/PetBoarding/PetBoarding";
import { petBoardingByIdAction } from "../Slices/PetBoarding/PetBoardingById";
import { phbbasicdetailsAction } from "../Slices/PetHomeBoardingSlice/PHBBasicDetailsSlice";
import { registertopethowzAction } from "../Slices/RegisterToPethowz/RegisterToPetHowz";
import { overallsearchAction } from "../Slices/SearchCity/OverAllSearchSlice";
import { searchcityAction } from "../Slices/SearchCity/SearchCitySlice";
import { searchcitygetlocalityAction } from "../Slices/SearchCity/SearchGetLocalitySlice";
import { TermsAndConditionAction } from "../Slices/TermsAndCondition/TermsAndConditionSlice";
import { userAddressDetailsAction } from "../Slices/userAddress/userAddressDetailsSlice";

const actions = {
  ...groomingAction,
  ...loginAction,
  ...ourServiceAction,
  ...petBoardingAction,
  ...petBoardingByIdAction,
  ...registertopethowzAction,
  ...userAddressDetailsAction,
  ...TermsAndConditionAction,
  ...CustomerAddAnotherPetAction,
  ...AddYourPetAction,
  ...searchcityAction,
  ...searchcitygetlocalityAction,
  ...overallsearchAction,
  ...BookingRequestAction,
  ...phbbasicdetailsAction,
};

export default actions;
