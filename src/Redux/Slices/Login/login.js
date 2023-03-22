/* eslint-disable no-unused-expressions */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../Constants";
import { fetchData } from "../../Helpers";

const LOGIN = createAsyncThunk(
  "login/login",
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

const loginSlice = createSlice({
  name: "loginSlice",
  initialState: {
    login: {
      ...defaultState.List,
    },
  },
  extraReducers: {
    [LOGIN.fulfilled]: (state, action) => {
      (state.login.loading = false)
        (state.login.error = false)
        (state.login = action.payload);
    },
    [LOGIN.pending]: (state, action) => {
      (state.login.loading = true),
        (state.login.error = false),
        (state.login.loading = true);
    },
    [LOGIN.rejected]: (state, action) => {
      (state.login.loading = false),
        (state.login.error = true),
        (state.login = action.payload);
    },
  },
});

const loginAction = {
  LOGIN,
};
export { loginAction };
export default loginSlice.reducer;
