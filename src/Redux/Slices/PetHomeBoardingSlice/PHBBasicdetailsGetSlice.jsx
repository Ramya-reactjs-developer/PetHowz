/* eslint-disable no-unused-expressions */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../Constants";
import { fetchData } from "../../Helpers";



const PHBBASICDETAILSGET = createAsyncThunk(
  "phbbasicdetailsget/phbbasicdetailsget",
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

const phbbasicdetailsgetSlice = createSlice({
  name: "Slice",
  initialState: {
    phbbasicdetailsget: {
      ...defaultState.List,
    },
  },
  reducers: {
    reset: (state) => {
      state.phbbasicdetailsget = defaultState.List;
    },
  },
  extraReducers: {
    [PHBBASICDETAILSGET.fulfilled]: (state, action) => {
      state.phbbasicdetailsget = {
        loading: false,
        error: false,
        data: action.payload
      };
    },
    [PHBBASICDETAILSGET.pending]: (state, action) => {
      state.phbbasicdetailsget = {
        loading: true,
        error: false,
        data: null,
      };
    },
    [PHBBASICDETAILSGET.rejected]: (state, action) => {
      state.phbbasicdetailsget = {
        loading: false,
        error: true,
        data: action.payload,
      };
    },
  },
});

const phbbasicdetailsgetAction = {
  PHBBASICDETAILSGET,
  reset: phbbasicdetailsgetSlice.actions.reset,
};
export { phbbasicdetailsgetAction };
export default phbbasicdetailsgetSlice.reducer;
