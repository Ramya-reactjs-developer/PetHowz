import { AddYourPetAction } from "../Slices/AddYourPet/AddYourPetSlice";
import { CustomerAddAnotherPetAction } from "../Slices/CustomerAddPet/CustomerAddPetSlice";
import { groomingAction } from "../Slices/Grooming/Grooming";
import { loginAction } from "../Slices/Login/login";
import { ourServiceAction } from "../Slices/OurService/OurService";
import { petBoardingAction } from "../Slices/PetBoarding/PetBoarding";
import { petBoardingByIdAction } from "../Slices/PetBoarding/PetBoardingById";
import { phbaypetspaceAction } from "../Slices/PetHomeBoardingSlice/PHBAYPetSpaceSlice";
import { phbaboutyouAction } from "../Slices/PetHomeBoardingSlice/PHBAboutYouSlice";
import { phbaddonsAction } from "../Slices/PetHomeBoardingSlice/PHBAddOnsSlice";
import { PetSpaceBookingAction } from "../Slices/PetSpaceBooking/PetSpaceBookingSlice";
import { phbbasicdetailsAction } from "../Slices/PetHomeBoardingSlice/PHBBasicDetailsSlice";
import { phbrulesamentiesAction } from "../Slices/PetHomeBoardingSlice/PHBRulesAmentiesSlice";
import { registertopethowzAction } from "../Slices/RegisterToPethowz/RegisterToPetHowz";
import { overallsearchAction } from "../Slices/SearchCity/OverAllSearchSlice";
import { searchcityAction } from "../Slices/SearchCity/SearchCitySlice";
import { searchcitygetlocalityAction } from "../Slices/SearchCity/SearchGetLocalitySlice";
import { TermsAndConditionAction } from "../Slices/TermsAndCondition/TermsAndConditionSlice";
import { userAddressDetailsAction } from "../Slices/userAddress/userAddressDetailsSlice";
import { ourServiceByIdAction } from "../Slices/OurService/OurServiceById";
import { petCareAction } from "../Slices/Grooming/GroomingService";

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
  ...ourServiceByIdAction,
  ...searchcitygetlocalityAction,
  ...overallsearchAction,
  // ...BookingRequestAction,
  ...petCareAction,
  ...phbbasicdetailsAction,
  ...phbaboutyouAction,
  ...phbaypetspaceAction,
  ...phbrulesamentiesAction,
  ...phbaddonsAction,
};

export default actions;
