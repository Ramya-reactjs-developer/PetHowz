/* eslint-disable no-unused-expressions */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchData } from "../../Helpers";
import { defaultReject, defaultState } from "../../Constants";

const OVERALLSEARCH = createAsyncThunk(
  "overallsearch/overallsearch",
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

const overallsearchSlice = createSlice({
  name: "Slice",
  initialState: {
    overallsearch: {
      ...defaultState.List,
    },
  },
  extraReducers: {
    [OVERALLSEARCH.fulfilled]: (state, action) => {
      (state.overallsearch.loading = false),
        (state.overallsearch.error = false),
        (state.overallsearch = action.payload);
    },
    [OVERALLSEARCH.pending]: (state, action) => {
      (state.overallsearch.loading = true),
        (state.overallsearch.error = false),
        (state.overallsearch.loading = true);
    },
    [OVERALLSEARCH.rejected]: (state, action) => {
      (state.overallsearch.loading = false),
        (state.overallsearch.error = true),
        (state.overallsearch = action.payload);
    },
  },
});

const overallsearchAction = {
  OVERALLSEARCH,
};
export { overallsearchAction };
export default overallsearchSlice.reducer;
