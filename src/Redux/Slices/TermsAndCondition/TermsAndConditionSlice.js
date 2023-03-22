import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import React from "react";
import { defaultReject, defaultState } from "../../Constants";
import { fetchData } from "../../Helpers";

const TERMS_AND_CONDITION = createAsyncThunk(
  "TermsAndCondition/TermsAndCondition",
  async (payload = {}, { rejectWithValue }) => {
    try {
      const data = await fetchData(
        payload?.data,
        payload?.method,
        payload?.apiName
      );
      return {
        ...defaultState.List,
        message: data?.data.message,
        data: data?.data?.data,
      };
    } catch (error) {
      return rejectWithValue({
        ...defaultReject.List,
        message: error.message,
      });
    }
  }
);
const TermsAndConditionSlice = createSlice({
  name: "TermsAndConditionSlice",
  initialState: {
    TermsAndCondition: {
      ...defaultState.List,
    },
  },
  extraReducers: {
    [TERMS_AND_CONDITION.fulfilled]: (state, action) => {
      (state.TermsAndCondition.loading = false)(
        (state.TermsAndCondition.error = false)
      )((state.TermsAndCondition = action.payload));
    },
    [TERMS_AND_CONDITION.pending]: (state, action) => {
      (state.TermsAndCondition.loading = true)(
        (state.TermsAndCondition.error = false)
      )((state.TermsAndCondition = true));
    },
    [TERMS_AND_CONDITION.rejected]: (state, action) => {
      (state.TermsAndCondition.loading = false)(
        (state.TermsAndCondition.error = true)
      )((state.TermsAndCondition = action.payload));
    },
  },
});
const TermsAndConditionAction = {
  TERMS_AND_CONDITION,
};
export { TermsAndConditionAction };
export default TermsAndConditionSlice.reducer;
