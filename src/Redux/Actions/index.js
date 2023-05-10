import { AddYourPetAction } from "../Slices/AddYourPet/AddYourPetSlice";
import { CustomerAddAnotherPetAction } from "../Slices/CustomerAddPet/CustomerAddPetSlice";
// import { groomingAction } from "../Slices/Grooming/Grooming";
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
import { aboutPetAction } from "../Slices/AboutPet/AboutPet";
import { createPackageAction } from "../Slices/CreatePackage/CreatePackage";
import { basicDetailsAction } from "../Slices/ServiceBasicDetails/BasicDetails";
import { groomingPetServiceAction } from "../Slices/Grooming/Grooming";
import { serviceDetailsAction } from "../Slices/ServiceDetails/ServiceDetails";

const actions = {
  // ...groomingAction,
  ...groomingPetServiceAction,
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
  ...aboutPetAction,
  ...createPackageAction,
  ...basicDetailsAction,
  ...serviceDetailsAction,
};

export default actions;
