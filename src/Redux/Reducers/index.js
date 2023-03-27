import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import groomingSlice from "../Slices/Grooming/Grooming";
import loginSlice from "../Slices/Login/login";
<<<<<<< HEAD
import ourServiceSlice from "../Slices/OurService/OurService";
import petBoardingSlice from "../Slices/PetBoarding/PetBoarding";
import petBoardingByIdSlice from "../Slices/PetBoarding/PetBoardingById";
=======
import registertopethowzSlice from "../Slices/RegisterToPethowz/RegisterToPetHowz";
import userAddressDetailsSlice from "../Slices/userAddress/userAddressDetailsSlice";
import TermsAndConditionSlice from "../Slices/TermsAndCondition/TermsAndConditionSlice";
import CustomerAddAnotherPetSlice from "../Slices/CustomerAddPet/CustomerAddPetSlice"
import SearchCitySlice from "../Slices/SearchCity/SearchCitySlice";
>>>>>>> 4bb443e51543d3cb5c7db7a52fd50555f68aa702

const reducer = combineReducers({
  grooming: groomingSlice,
  userAddressDetails: userAddressDetailsSlice,
  login: loginSlice,
<<<<<<< HEAD
  ourService: ourServiceSlice,
  petBoarding: petBoardingSlice,
  petBoardingById: petBoardingByIdSlice,
=======
  registertopethowz: registertopethowzSlice,
  TermsAndCondition: TermsAndConditionSlice,
  CustomerAddAnotherPet: CustomerAddAnotherPetSlice,
  searchcity: SearchCitySlice,
>>>>>>> 4bb443e51543d3cb5c7db7a52fd50555f68aa702
});

const store = configureStore({
  reducer,
});
export default store;
