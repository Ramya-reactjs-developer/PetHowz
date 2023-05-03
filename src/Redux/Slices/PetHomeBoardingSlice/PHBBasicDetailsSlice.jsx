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
  reducers: {
    reset: (state) => {
      state.phbbasicdetails = defaultState.List;
    },
  },
  extraReducers: {
    [PHBBASICDETAILS.fulfilled]: (state, action) => {
      state.phbbasicdetails = {
        loading: false,
        error: false,
        data: action.payload.data,
      };
    },
    [PHBBASICDETAILS.pending]: (state, action) => {
      state.phbbasicdetails = {
        loading: true,
        error: false,
        data: null,
      };
    },
    [PHBBASICDETAILS.rejected]: (state, action) => {
      state.phbbasicdetails = {
        loading: false,
        error: true,
        data: action.payload,
      };
    },
  },
});

const phbbasicdetailsAction = {
  PHBBASICDETAILS,
  reset: phbbasicdetailsSlice.actions.reset,
};
export { phbbasicdetailsAction };
export default phbbasicdetailsSlice.reducer;
