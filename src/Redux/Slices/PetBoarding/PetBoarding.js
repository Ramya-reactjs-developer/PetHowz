/* eslint-disable no-unused-expressions */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../Constants";
import { fetchData } from "../../Helpers";

const PETBOARDING = createAsyncThunk(
  "petBoarding/petBoarding",
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

const petBoardingSlice = createSlice({
  name: "petBoardingSlice",
  initialState: {
    petBoarding: {
      ...defaultState.List,
    },
  },
  extraReducers: {
    [PETBOARDING.fulfilled]: (state, action) => {
      (state.petBoarding.loading = false),
        (state.petBoarding.error = false),
        (state.petBoarding = action.payload);
    },
    [PETBOARDING.pending]: (state, action) => {
      (state.petBoarding.loading = true),
        (state.petBoarding.error = false),
        (state.petBoarding.loading = true);
    },
    [PETBOARDING.rejected]: (state, action) => {
      (state.petBoarding.loading = false),
        (state.petBoarding.error = true),
        (state.petBoarding = action.payload);
    },
  },
});

const petBoardingAction = {
  PETBOARDING,
};
export { petBoardingAction };
export default petBoardingSlice.reducer;
