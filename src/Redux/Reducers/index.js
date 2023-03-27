import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import groomingSlice from "../Slices/Grooming/Grooming";
import loginSlice from "../Slices/Login/login";
import registertopethowzSlice from "../Slices/RegisterToPethowz/RegisterToPetHowz";
import userAddressDetailsSlice from "../Slices/userAddress/userAddressDetailsSlice";
import TermsAndConditionSlice from "../Slices/TermsAndCondition/TermsAndConditionSlice";
import CustomerAddAnotherPetSlice from "../Slices/CustomerAddPet/CustomerAddPetSlice"
import SearchCitySlice from "../Slices/SearchCity/SearchCitySlice";
import AddYourPetSlice from "../Slices/AddYourPet/AddYourPetSlice";
import BookingRequestSlice from "../Slices/BookingRequest/BookingRequestSlice";

const reducer = combineReducers({
  grooming: groomingSlice,
  userAddressDetails: userAddressDetailsSlice,
  login: loginSlice,
  registertopethowz: registertopethowzSlice,
  TermsAndCondition: TermsAndConditionSlice,
  AddYourPet:AddYourPetSlice,
  CustomerAddAnotherPet: CustomerAddAnotherPetSlice,
  searchcity: SearchCitySlice,
  BookingRequest:BookingRequestSlice,
});

const store = configureStore({
  reducer,
});
export default store;
