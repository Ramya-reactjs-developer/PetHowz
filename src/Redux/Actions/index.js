import { AddYourPetAction } from "../Slices/AddYourPet/AddYourPetSlice";
import { CustomerAddAnotherPetAction } from "../Slices/CustomerAddPet/CustomerAddPetSlice";
import { groomingAction } from "../Slices/Grooming/Grooming";
import { loginAction } from "../Slices/Login/login";
import { ourServiceAction } from "../Slices/OurService/OurService";
import { petBoardingAction } from "../Slices/PetBoarding/PetBoarding";
import { petBoardingByIdAction } from "../Slices/PetBoarding/PetBoardingById";
import { PetSpaceBookingAction } from "../Slices/PetSpaceBooking/PetSpaceBookingSlice";
import { registertopethowzAction } from "../Slices/RegisterToPethowz/RegisterToPetHowz";
import { searchcityAction } from "../Slices/SearchCity/SearchCitySlice";
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

  ...PetSpaceBookingAction,
};

export default actions;
