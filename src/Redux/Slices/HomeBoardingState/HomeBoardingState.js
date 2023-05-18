/* eslint-disable no-unused-expressions */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../Constants";
import { fetchData } from "../../Helpers";

const HOMEBOARDINGSTATE = createAsyncThunk(
  "HomeBoardingState/HomeBoardingState",
  // eslint-disable-next-line default-param-last
  async (
    // eslint-disable-next-line default-param-last
    payload = {},

    { rejectWithValue }
  ) => {
    try {
      console.log(payload, "paylfmnvoad");
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

const HomeBoardingStateSlice = createSlice({
  name: "HomeBoardingStateSlice",
  initialState: {
    HomeBoardingState: {
      ...defaultState.List,
    },
  },
  extraReducers: {
    [HOMEBOARDINGSTATE.fulfilled]: (state, action) => {
      (state.HomeBoardingState.loading = false),
        (state.HomeBoardingState.error = false),
        (state.HomeBoardingState = action.payload);
    },
    [HOMEBOARDINGSTATE.pending]: (state, action) => {
      (state.HomeBoardingState.loading = true),
        (state.HomeBoardingState.error = false),
        (state.HomeBoardingState.loading = true);
    },
    [HOMEBOARDINGSTATE.rejected]: (state, action) => {
      (state.HomeBoardingState.loading = false),
        (state.HomeBoardingState.error = true),
        (state.HomeBoardingState = action.payload);
    },
  },
});

const HomeBoardingStateAction = {
  HOMEBOARDINGSTATE,
};
export { HomeBoardingStateAction };
export default HomeBoardingStateSlice.reducer;
