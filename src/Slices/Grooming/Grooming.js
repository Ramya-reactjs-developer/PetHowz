/* eslint-disable no-unused-expressions */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../Constants";
import { fetchData } from "../../Helpers";

const GROOMING = createAsyncThunk(
  "grooming/grooming",
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

const groomingSlice = createSlice({
  name: "groomingSlice",
  initialState: {
    grooming: {
      ...defaultState.List,
    },
  },
  extraReducers: {
    [GROOMING.fulfilled]: (state, action) => {
      (state.grooming.loading = false),
        (state.grooming.error = false),
        (state.grooming = action.payload);
    },
    [GROOMING.pending]: (state, action) => {
      (state.grooming.loading = true),
        (state.grooming.error = false),
        (state.grooming.loading = true);
    },
    [GROOMING.rejected]: (state, action) => {
      (state.grooming.loading = false),
        (state.grooming.error = true),
        (state.grooming = action.payload);
    },
  },
});

const groomingAction = {
  GROOMING,
};
export { groomingAction };
export default groomingSlice.reducer;
