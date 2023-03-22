/* eslint-disable no-unused-expressions */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../Constants";
import { fetchData } from "../../Helpers";

const REGISTERTOPETHOWZ = createAsyncThunk(
  "registertopethowz/registertopethowz",
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

const registertopethowzSlice = createSlice({
  name: "Slice",
  initialState: {
    registertopethowz: {
      ...defaultState.List,
    },
  },
  extraReducers: {
    [REGISTERTOPETHOWZ.fulfilled]: (state, action) => {
      (state.registertopethowz.loading = false),
        (state.registertopethowz.error = false),
        (state.registertopethowz = action.payload);
    },
    [REGISTERTOPETHOWZ.pending]: (state, action) => {
      (state.registertopethowz.loading = true),
        (state.registertopethowz.error = false),
        (state.registertopethowz.loading = true);
    },
    [REGISTERTOPETHOWZ.rejected]: (state, action) => {
      (state.registertopethowz.loading = false),
        (state.registertopethowz.error = true),
        (state.registertopethowz = action.payload);
    },
  },
});

const registertopethowzAction = {
  REGISTERTOPETHOWZ,
};
export { registertopethowzAction };
export default registertopethowzSlice.reducer;
