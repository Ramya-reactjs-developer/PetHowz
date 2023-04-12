/* eslint-disable no-unused-expressions */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../Constants";
import { fetchData } from "../../Helpers";

const CREATEPACKAGE = createAsyncThunk(
  "createPackage/createPackage",
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

const createPackageSlice = createSlice({
  name: "createPackageSlice",
  initialState: {
    createPackage: {
      ...defaultState.List,
    },
  },
  extraReducers: {
    [CREATEPACKAGE.fulfilled]: (state, action) => {
      (state.createPackage.loading = false),
        (state.createPackage.error = false),
        (state.createPackage = action.payload);
    },
    [CREATEPACKAGE.pending]: (state, action) => {
      (state.createPackage.loading = true),
        (state.createPackage.error = false),
        (state.createPackage.loading = true);
    },
    [CREATEPACKAGE.rejected]: (state, action) => {
      (state.createPackage.loading = false),
        (state.createPackage.error = true),
        (state.createPackage = action.payload);
    },
  },
});

const createPackageAction = {
  CREATEPACKAGE,
};
export { createPackageAction };
export default createPackageSlice.reducer;
