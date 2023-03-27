import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import groomingSlice from "../Slices/Grooming/Grooming";
import loginSlice from "../Slices/Login/login";
import ourServiceSlice from "../Slices/OurService/OurService";
import petBoardingSlice from "../Slices/PetBoarding/PetBoarding";
import petBoardingByIdSlice from "../Slices/PetBoarding/PetBoardingById";

const reducer = combineReducers({
  grooming: groomingSlice,
  login: loginSlice,
  ourService: ourServiceSlice,
  petBoarding: petBoardingSlice,
  petBoardingById: petBoardingByIdSlice,
});

const store = configureStore({
  reducer,
});
export default store;
