import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import groomingSlice from "../Slices/Grooming/Grooming";
import loginSlice from "../Slices/Login/login";
import registertopethowz from "../Slices/RegisterToPethowz/RegisterToPetHowz";

const reducer = combineReducers({
  grooming: groomingSlice,
  login: loginSlice,
  registertopethowz: registertopethowz,
});

const store = configureStore({
  reducer,
});
export default store;
