/* eslint-disable no-unused-expressions */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../Constants";
import { fetchData } from "../../Helpers";

const TERMS_AND_CONDITION = createAsyncThunk(
  "TermsAndCondition/TermsAndCondition",
  // eslint-disable-next-line default-param-last
  async (
    // eslint-disable-next-line default-param-last
    payload = {},

    { rejectWithValue }
  ) => {
    try {
      const data = await fetchData(
        payload?.data,
        payload?.method,
        payload?.apiName
      );
      return {
        ...defaultState.List,
        message: data?.data.Message,
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
      (state.TermsAndCondition.loading = false)
        (state.TermsAndCondition.error = false)
        (state.TermsAndCondition = action.payload);
    },
    [TERMS_AND_CONDITION.pending]: (state, action) => {
      (state.TermsAndCondition.loading = true),
        (state.TermsAndCondition.error = false),
        (state.TermsAndCondition.loading = true);
    },
    [TERMS_AND_CONDITION.rejected]: (state, action) => {
      (state.TermsAndCondition.loading = false),
        (state.TermsAndCondition.error = true),
        (state.TermsAndCondition = action.payload);
    },
  },
});

const TermsAndConditionAction = {
  TERMS_AND_CONDITION,
};
export { TermsAndConditionAction };
export default TermsAndConditionSlice.reducer;
