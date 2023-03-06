import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import groomingSlice from "../Slices/Grooming/Grooming";


const reducer = combineReducers({
  grooming: groomingSlice,
});

const store = configureStore({
  reducer,
});
export default store;
