import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import groomingSlice from "../Slices/Grooming/Grooming";
import loginSlice from "../Slices/Login/login";
import ourServiceSlice from "../Slices/OurService/OurService";
import petBoardingSlice from "../Slices/PetBoarding/PetBoarding";
import petBoardingByIdSlice from "../Slices/PetBoarding/PetBoardingById";
import registertopethowzSlice from "../Slices/RegisterToPethowz/RegisterToPetHowz";
import userAddressDetailsSlice from "../Slices/userAddress/userAddressDetailsSlice";
import TermsAndConditionSlice from "../Slices/TermsAndCondition/TermsAndConditionSlice";
import CustomerAddAnotherPetSlice from "../Slices/CustomerAddPet/CustomerAddPetSlice";
import SearchCitySlice from "../Slices/SearchCity/SearchCitySlice";
import ourServiceByIdSlice from "../Slices/OurService/OurServiceById";
import SearchGetLocalitySlice from "../Slices/SearchCity/SearchGetLocalitySlice";
import OverAllSearchSlice from "../Slices/SearchCity/OverAllSearchSlice";
import AddYourPetSlice from "../Slices/AddYourPet/AddYourPetSlice";
import PetSpaceBookingSlice from "../Slices/PetSpaceBooking/PetSpaceBookingSlice";
import petCareSlice from "../Slices/Grooming/GroomingService";
import PHBBasicDetailsSlice from "../Slices/PetHomeBoardingSlice/PHBBasicDetailsSlice";
import PHBAboutYouSlice from "../Slices/PetHomeBoardingSlice/PHBAboutYouSlice";
import PHBAYPetSpaceSlice from "../Slices/PetHomeBoardingSlice/PHBAYPetSpaceSlice";
import PHBRulesAmentiesSlice from "../Slices/PetHomeBoardingSlice/PHBRulesAmentiesSlice";
import PHBAddOnsSlice from "../Slices/PetHomeBoardingSlice/PHBAddOnsSlice";
import aboutPetSlice from "../Slices/AboutPet/AboutPet";
import createPackageSlice from "../Slices/CreatePackage/CreatePackage";
import basicDetailsSlice from "../Slices/ServiceBasicDetails/BasicDetails";
import groomingServiceSlice from "../Slices/Grooming/Grooming";
import groomingPetServiceSlice from "../Slices/Grooming/Grooming";
import serviceDetailsSlice from "../Slices/ServiceDetails/ServiceDetails";
import HomeBoardingStateSlice from "../Slices/HomeBoardingState/HomeBoardingState";
import PHBBasicdetailsGetSlice from "../Slices/PetHomeBoardingSlice/PHBBasicdetailsGetSlice";
const reducer = combineReducers({
  grooming: groomingSlice,
  groomingPetService: groomingPetServiceSlice,
  userAddressDetails: userAddressDetailsSlice,
  login: loginSlice,
  HomeBoardingState: HomeBoardingStateSlice,
  ourService: ourServiceSlice,
  petBoarding: petBoardingSlice,
  petBoardingById: petBoardingByIdSlice,
  PetSpaceBooking: PetSpaceBookingSlice,
  registertopethowz: registertopethowzSlice,
  TermsAndCondition: TermsAndConditionSlice,
  AddYourPets: AddYourPetSlice,
  CustomerAddAnotherPet: CustomerAddAnotherPetSlice,
  searchcity: SearchCitySlice,
  groomingService: groomingServiceSlice,
  AddYourPet: AddYourPetSlice,
  CustomerAddAnotherPet: CustomerAddAnotherPetSlice,
  searchcity: SearchCitySlice,
  ourServiceById: ourServiceByIdSlice,
  searchcitygetlocality: SearchGetLocalitySlice,
  overallsearch: OverAllSearchSlice,
  petCareService: petCareSlice,
  phbbasicdetails: PHBBasicDetailsSlice,
  phbbasicdetailsget:PHBBasicdetailsGetSlice,
  phbaboutyou: PHBAboutYouSlice,
  phbaypetspace: PHBAYPetSpaceSlice,
  phbrulesamenties: PHBRulesAmentiesSlice,
  phbaddons: PHBAddOnsSlice,
  aboutPet: aboutPetSlice,
  createPackage: createPackageSlice,
  basicDetails: basicDetailsSlice,
  serviceDetails: serviceDetailsSlice,
});

const store = configureStore({
  reducer,
});
export default store;
