import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import groomingSlice from "../Slices/Grooming/Grooming";
import loginSlice from "../Slices/Login/login";
import registertopethowzSlice from "../Slices/RegisterToPethowz/RegisterToPetHowz";
import userAddressDetailsSlice from "../Slices/userAddress/userAddressDetailsSlice";
import TermsAndConditionSlice from "../Slices/TermsAndCondition/TermsAndConditionSlice";
import CustomerAddAnotherPetSlice from "../Slices/CustomerAddPet/CustomerAddPetSlice"
import SearchCitySlice from "../Slices/SearchCity/SearchCitySlice";

const reducer = combineReducers({
  grooming: groomingSlice,
  userAddressDetails: userAddressDetailsSlice,
  login: loginSlice,
  registertopethowz: registertopethowzSlice,
  TermsAndCondition: TermsAndConditionSlice,
  CustomerAddAnotherPet: CustomerAddAnotherPetSlice,
  searchcity: SearchCitySlice,
});

const store = configureStore({
  reducer,
});
export default store;
