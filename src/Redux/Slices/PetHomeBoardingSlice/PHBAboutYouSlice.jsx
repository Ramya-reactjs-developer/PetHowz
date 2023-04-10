/* eslint-disable no-unused-expressions */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../Constants";
import { fetchData } from "../../Helpers";

const PHBABOUTYOU = createAsyncThunk(
  "phbaboutyou/phbaboutyou",
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

const phbaboutyouSlice = createSlice({
  name: "Slice",
  initialState: {
    phbaboutyou: {
      ...defaultState.List,
    },
  },
  extraReducers: {
    [PHBABOUTYOU.fulfilled]: (state, action) => {
      (state.phbaboutyou.loading = false),
        (state.phbaboutyou.error = false),
        (state.phbaboutyou = action.payload);
    },
    [PHBABOUTYOU.pending]: (state, action) => {
      (state.phbaboutyou.loading = true),
        (state.phbaboutyou.error = false),
        (state.phbaboutyou.loading = true);
    },
    [PHBABOUTYOU.rejected]: (state, action) => {
      (state.phbaboutyou.loading = false),
        (state.phbaboutyou.error = true),
        (state.phbaboutyou = action.payload);
    },
  },
});

const phbaboutyouAction = {
  PHBABOUTYOU,
};
export { phbaboutyouAction };
export default phbaboutyouSlice.reducer;
