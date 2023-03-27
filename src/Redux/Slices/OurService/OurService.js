/* eslint-disable no-unused-expressions */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../Constants";
import { fetchData } from "../../Helpers";

const OURSERVICE = createAsyncThunk(
  "ourService/ourService",
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

const ourServiceSlice = createSlice({
  name: "ourServiceSlice",
  initialState: {
    ourService: {
      ...defaultState.List,
    },
  },
  extraReducers: {
    [OURSERVICE.fulfilled]: (state, action) => {
      (state.ourService.loading = false),
        (state.ourService.error = false),
        (state.ourService = action.payload);
    },
    [OURSERVICE.pending]: (state, action) => {
      (state.ourService.loading = true),
        (state.ourService.error = false),
        (state.ourService.loading = true);
    },
    [OURSERVICE.rejected]: (state, action) => {
      (state.ourService.loading = false),
        (state.ourService.error = true),
        (state.ourService = action.payload);
    },
  },
});

const ourServiceAction = {
  OURSERVICE,
};
export { ourServiceAction };
export default ourServiceSlice.reducer;
