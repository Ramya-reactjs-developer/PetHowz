/* eslint-disable no-unused-expressions */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../Constants";
import { fetchData } from "../../Helpers";

const PHBBASICDETAILS = createAsyncThunk(
  "phbbasicdetails/phbbasicdetails",
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

const phbbasicdetailsSlice = createSlice({
  name: "Slice",
  initialState: {
    phbbasicdetails: {
      ...defaultState.List,
    },
  },
  extraReducers: {
    [PHBBASICDETAILS.fulfilled]: (state, action) => {
      (state.phbbasicdetails.loading = false),
        (state.phbbasicdetails.error = false),
        (state.phbbasicdetails = action.payload);
    },
    [PHBBASICDETAILS.pending]: (state, action) => {
      (state.phbbasicdetails.loading = true),
        (state.phbbasicdetails.error = false),
        (state.phbbasicdetails.loading = true);
    },
    [PHBBASICDETAILS.rejected]: (state, action) => {
      (state.phbbasicdetails.loading = false),
        (state.phbbasicdetails.error = true),
        (state.phbbasicdetails = action.payload);
    },
  },
});

const phbbasicdetailsAction = {
  PHBBASICDETAILS,
};
export { phbbasicdetailsAction };
export default phbbasicdetailsSlice.reducer;
