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
import AddYourPetSlice from "../Slices/AddYourPet/AddYourPetSlice";
import PetSpaceBookingSlice from "../Slices/PetSpaceBooking/PetSpaceBookingSlice";

const reducer = combineReducers({
  grooming: groomingSlice,
  userAddressDetails: userAddressDetailsSlice,
  login: loginSlice,
  ourService: ourServiceSlice,
  petBoarding: petBoardingSlice,
  petBoardingById: petBoardingByIdSlice,
  PetSpaceBooking: PetSpaceBookingSlice,
  registertopethowz: registertopethowzSlice,
  TermsAndCondition: TermsAndConditionSlice,
  AddYourPets: AddYourPetSlice,
  CustomerAddAnotherPet: CustomerAddAnotherPetSlice,
  searchcity: SearchCitySlice,
 
});

const store = configureStore({
  reducer,
});
export default store;
