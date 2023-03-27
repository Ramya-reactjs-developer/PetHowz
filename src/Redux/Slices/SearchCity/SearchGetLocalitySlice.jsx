/* eslint-disable no-unused-expressions */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchData } from "../../Helpers";
import { defaultReject, defaultState } from "../../Constants";

const SEARCHCITYGETLOCALITY = createAsyncThunk(
  "searchcitygetlocality/searchcitygetlocality",
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

const searchcitygetlocalitySlice = createSlice({
  name: "Slice",
  initialState: {
    searchcitygetlocality: {
      ...defaultState.List,
    },
  },
  extraReducers: {
    [SEARCHCITYGETLOCALITY.fulfilled]: (state, action) => {
      (state.searchcitygetlocality.loading = false),
        (state.searchcitygetlocality.error = false),
        (state.searchcitygetlocality = action.payload);
    },
    [SEARCHCITYGETLOCALITY.pending]: (state, action) => {
      (state.searchcitygetlocality.loading = true),
        (state.searchcitygetlocality.error = false),
        (state.searchcitygetlocality.loading = true);
    },
    [SEARCHCITYGETLOCALITY.rejected]: (state, action) => {
      (state.searchcitygetlocality.loading = false),
        (state.searchcitygetlocality.error = true),
        (state.searchcitygetlocality = action.payload);
    },
  },
});

const searchcitygetlocalityAction = {
  SEARCHCITYGETLOCALITY,
};
export { searchcitygetlocalityAction };
export default searchcitygetlocalitySlice.reducer;
