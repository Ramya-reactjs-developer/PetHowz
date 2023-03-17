import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import groomingSlice from "../Slices/Grooming/Grooming";
import loginSlice from "../Slices/Login/login";


const reducer = combineReducers({
  grooming: groomingSlice,
  login: loginSlice,
});

const store = configureStore({
  reducer,
});
export default store;
