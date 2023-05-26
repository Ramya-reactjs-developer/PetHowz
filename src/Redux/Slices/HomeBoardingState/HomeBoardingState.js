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
const HOMEBOARDINGDISTRICT = createAsyncThunk(
  "HomeBoardingDistrict/HomeBoardingDistrict",
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
const HOMEBOARDINGCITY = createAsyncThunk(
  "HomeBoardingCity/HomeBoardingCity",
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
const HOMEBOARDINGLOCALITY = createAsyncThunk(
  "HomeBoardingLocality/HomeBoardingLocality",
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
    HomeBoardingDistrict: {
      ...defaultState.List,
    },
    HomeBoardingCity: {
      ...defaultState.List,
    },
    HomeBoardingLocality: {
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
    [HOMEBOARDINGDISTRICT.fulfilled]: (state, action) => {
      (state.HomeBoardingDistrict.loading = false),
        (state.HomeBoardingDistrict.error = false),
        (state.HomeBoardingDistrict = action.payload);
    },
    [HOMEBOARDINGDISTRICT.pending]: (state, action) => {
      (state.HomeBoardingDistrict.loading = true),
        (state.HomeBoardingDistrict.error = false),
        (state.HomeBoardingDistrict.loading = true);
    },
    [HOMEBOARDINGDISTRICT.rejected]: (state, action) => {
      (state.HomeBoardingDistrict.loading = false),
        (state.HomeBoardingDistrict.error = true),
        (state.HomeBoardingDistrict = action.payload);
    },
    [HOMEBOARDINGCITY.fulfilled]: (state, action) => {
      (state.HomeBoardingCity.loading = false),
        (state.HomeBoardingCity.error = false),
        (state.HomeBoardingCity = action.payload);
    },
    [HOMEBOARDINGCITY.pending]: (state, action) => {
      (state.HomeBoardingCity.loading = true),
        (state.HomeBoardingCity.error = false),
        (state.HomeBoardingCity.loading = true);
    },
    [HOMEBOARDINGCITY.rejected]: (state, action) => {
      (state.HomeBoardingCity.loading = false),
        (state.HomeBoardingCity.error = true),
        (state.HomeBoardingCity = action.payload);
    },
    [HOMEBOARDINGLOCALITY.fulfilled]: (state, action) => {
      (state.HomeBoardingLocality.loading = false),
        (state.HomeBoardingLocality.error = false),
        (state.HomeBoardingLocality = action.payload);
    },
    [HOMEBOARDINGLOCALITY.pending]: (state, action) => {
      (state.HomeBoardingLocality.loading = true),
        (state.HomeBoardingLocality.error = false),
        (state.HomeBoardingLocality.loading = true);
    },
    [HOMEBOARDINGLOCALITY.rejected]: (state, action) => {
      (state.HomeBoardingLocality.loading = false),
        (state.HomeBoardingLocality.error = true),
        (state.HomeBoardingLocality = action.payload);
    },
  },
});

const HomeBoardingStateAction = {
  HOMEBOARDINGSTATE,
  HOMEBOARDINGDISTRICT,
  HOMEBOARDINGCITY,
  HOMEBOARDINGLOCALITY,
};
export { HomeBoardingStateAction };
export default HomeBoardingStateSlice.reducer;
