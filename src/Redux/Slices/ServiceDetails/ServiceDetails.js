/* eslint-disable no-sequences */
/* eslint-disable no-unused-expressions */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../Constants";
import { fetchData } from "../../Helpers";

const SERVICEDETAILS = createAsyncThunk(
  "serviceDetails/serviceDetails",
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

const serviceDetailsSlice = createSlice({
  name: "serviceDetailsSlice",
  initialState: {
    serviceDetails: {
      ...defaultState.List,
    },
  },
  extraReducers: {
    [SERVICEDETAILS.fulfilled]: (state, action) => {
      (state.serviceDetails.loading = false),
        (state.serviceDetails.error = false),
        (state.serviceDetails = action.payload);
    },
    [SERVICEDETAILS.pending]: (state, action) => {
      (state.serviceDetails.loading = true),
        (state.serviceDetails.error = false),
        (state.serviceDetails.loading = true);
    },
    [SERVICEDETAILS.rejected]: (state, action) => {
      (state.serviceDetails.loading = false),
        (state.serviceDetails.error = true),
        (state.serviceDetails = action.payload);
    },
  },
});

const serviceDetailsAction = {
  SERVICEDETAILS,
};
export { serviceDetailsAction };
export default serviceDetailsSlice.reducer;
