/* eslint-disable no-unused-expressions */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../Constants";
import { fetchData } from "../../Helpers";

const PETBOARDINGBYID = createAsyncThunk(
  "petBoardingById/petBoardingById",
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

const petBoardingByIdSlice = createSlice({
  name: "petBoardingByIdSlice",
  initialState: {
    petBoardingById: {
      ...defaultState.List,
    },
  },
  extraReducers: {
    [PETBOARDINGBYID.fulfilled]: (state, action) => {
      (state.petBoardingById.loading = false),
        (state.petBoardingById.error = false),
        (state.petBoardingById = action.payload);
    },
    [PETBOARDINGBYID.pending]: (state, action) => {
      (state.petBoardingById.loading = true),
        (state.petBoardingById.error = false),
        (state.petBoardingById.loading = true);
    },
    [PETBOARDINGBYID.rejected]: (state, action) => {
      (state.petBoardingById.loading = false),
        (state.petBoardingById.error = true),
        (state.petBoardingById = action.payload);
    },
  },
});

const petBoardingByIdAction = {
  PETBOARDINGBYID,
};
export { petBoardingByIdAction };
export default petBoardingByIdSlice.reducer;
