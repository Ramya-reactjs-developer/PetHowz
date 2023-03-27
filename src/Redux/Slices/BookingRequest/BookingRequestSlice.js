/* eslint-disable no-unused-expressions */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../Constants";
import { fetchData } from "../../Helpers";

const BOOKINGREQUEST = createAsyncThunk(
  "BookingRequest/BookingRequest",
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

const BookingRequestSlice = createSlice({
  name: "loginSlice",
  initialState: {
    BookingRequest: {
      ...defaultState.List,
    },
  },
  extraReducers: {
    [BOOKINGREQUEST.fulfilled]: (state, action) => {
      (state.BookingRequest.loading = false)
        (state.BookingRequest.error = false)
        (state.BookingRequest = action.payload);
    },
    [BOOKINGREQUEST.pending]: (state, action) => {
      (state.BookingRequest.loading = true),
        (state.BookingRequest.error = false),
        (state.BookingRequest.loading = true);
    },
    [BOOKINGREQUEST.rejected]: (state, action) => {
      (state.BookingRequest.loading = false),
        (state.BookingRequest.error = true),
        (state.BookingRequest = action.payload);
    },
  },
});

const BookingRequestAction = {
  BOOKINGREQUEST,
};
export { BookingRequestAction };
export default BookingRequestSlice.reducer;
