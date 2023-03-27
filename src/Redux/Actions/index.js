import { CustomerAddAnotherPetAction } from "../Slices/CustomerAddPet/CustomerAddPetSlice";
import { groomingAction } from "../Slices/Grooming/Grooming";
import { loginAction } from "../Slices/Login/login";
<<<<<<< HEAD
import { ourServiceAction } from "../Slices/OurService/OurService";
import { petBoardingAction } from "../Slices/PetBoarding/PetBoarding";
import { petBoardingByIdAction } from "../Slices/PetBoarding/PetBoardingById";
=======
import { registertopethowzAction } from "../Slices/RegisterToPethowz/RegisterToPetHowz";
import { searchcityAction } from "../Slices/SearchCity/SearchCitySlice";
import { TermsAndConditionAction } from "../Slices/TermsAndCondition/TermsAndConditionSlice";
import { userAddressDetailsAction } from "../Slices/userAddress/userAddressDetailsSlice";
>>>>>>> 4bb443e51543d3cb5c7db7a52fd50555f68aa702

const actions = {
  ...groomingAction,
  ...loginAction,
<<<<<<< HEAD
  ...ourServiceAction,
  ...petBoardingAction,
  ...petBoardingByIdAction,
=======
  ...registertopethowzAction,
  ...userAddressDetailsAction,
  ...TermsAndConditionAction,
  ...CustomerAddAnotherPetAction,
  ...searchcityAction,
>>>>>>> 4bb443e51543d3cb5c7db7a52fd50555f68aa702
};

export default actions;
