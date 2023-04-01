/* eslint-disable no-unused-expressions */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../Constants";
import { fetchData } from "../../Helpers";

const OURSERVICEBYID = createAsyncThunk(
  "ourServiceById/ourServiceById",
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

const ourServiceByIdSlice = createSlice({
  name: "ourServiceByIdSlice",
  initialState: {
    ourServiceById: {
      ...defaultState.List,
    },
  },
  extraReducers: {
    [OURSERVICEBYID.fulfilled]: (state, action) => {
      (state.ourServiceById.loading = false),
        (state.ourServiceById.error = false),
        (state.ourServiceById = action.payload);
    },
    [OURSERVICEBYID.pending]: (state, action) => {
      (state.ourServiceById.loading = true),
        (state.ourServiceById.error = false),
        (state.ourServiceById.loading = true);
    },
    [OURSERVICEBYID.rejected]: (state, action) => {
      (state.ourServiceById.loading = false),
        (state.ourServiceById.error = true),
        (state.ourServiceById = action.payload);
    },
  },
});

const ourServiceByIdAction = {
  OURSERVICEBYID,
};
export { ourServiceByIdAction };
export default ourServiceByIdSlice.reducer;
