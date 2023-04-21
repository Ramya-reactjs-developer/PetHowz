/* eslint-disable no-unused-expressions */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../Constants";
import { fetchData } from "../../Helpers";

const BASICDETAILS = createAsyncThunk(
  "basicDetails/basicDetails",
  // eslint-disable-next-line default-param-last
  async (
    // eslint-disable-next-line default-param-last
    payload = {},

    { rejectWithValue }
  ) => {
    try {
      const data = await fetchData(
        payload?.id,
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

const basicDetailsSlice = createSlice({
  name: "basicDetailsSlice",
  initialState: {
    basicDetails: {
      ...defaultState.List,
    },
  },
  extraReducers: {
    [BASICDETAILS.fulfilled]: (state, action) => {
      (state.basicDetails.loading = false),
        (state.basicDetails.error = false),
        (state.basicDetails = action.payload);
    },
    [BASICDETAILS.pending]: (state, action) => {
      (state.basicDetails.loading = true),
        (state.basicDetails.error = false),
        (state.basicDetails.loading = true);
    },
    [BASICDETAILS.rejected]: (state, action) => {
      (state.basicDetails.loading = false),
        (state.basicDetails.error = true),
        (state.basicDetails = action.payload);
    },
  },
});

const basicDetailsAction = {
  BASICDETAILS,
};
export { basicDetailsAction };
export default basicDetailsSlice.reducer;
