/* eslint-disable no-unused-expressions */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../Constants";
import { fetchData } from "../../Helpers";

const PHBAYPETSPACE = createAsyncThunk(
  "phbaypetsspace/phbaypetsspace",
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

const phbaypetspaceSlice = createSlice({
  name: "Slice",
  initialState: {
    phbaypetspace: {
      ...defaultState.List,
    },
  },
  extraReducers: {
    [PHBAYPETSPACE.fulfilled]: (state, action) => {
      (state.phbaypetspace.loading = false),
        (state.phbaypetspace.error = false),
        (state.phbaypetspace = action.payload);
    },
    [PHBAYPETSPACE.pending]: (state, action) => {
      (state.phbaypetspace.loading = true),
        (state.phbaypetspace.error = false),
        (state.phbaypetspace.loading = true);
    },
    [PHBAYPETSPACE.rejected]: (state, action) => {
      (state.phbaypetspace.loading = false),
        (state.phbaypetspace.error = true),
        (state.phbaypetspace = action.payload);
    },
  },
});

const phbaypetspaceAction = {
  PHBAYPETSPACE,
};
export { phbaypetspaceAction };
export default phbaypetspaceSlice.reducer;
