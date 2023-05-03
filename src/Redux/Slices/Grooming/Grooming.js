/* eslint-disable no-unused-expressions */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../Constants";
import { fetchData } from "../../Helpers";

const GROOMINPETGSERVICE = createAsyncThunk(
  "groomingPetService/groomingPetService",
  // eslint-disable-next-line default-param-last
  async (
    // eslint-disable-next-line default-param-last
    payload = {},

    { rejectWithValue }
  ) => {
    try {
      console.log(payload, "paylfmnvoad");
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

const groomingPetServiceSlice = createSlice({
  name: "groomingServiceSlice",
  initialState: {
    groomingPetService: {
      ...defaultState.List,
    },
  },
  extraReducers: {
    [GROOMINPETGSERVICE.fulfilled]: (state, action) => {
      (state.groomingPetService.loading = false),
        (state.groomingPetService.error = false),
        (state.groomingPetService = action.payload);
    },
    [GROOMINPETGSERVICE.pending]: (state, action) => {
      (state.groomingPetService.loading = true),
        (state.groomingPetService.error = false),
        (state.groomingPetService.loading = true);
    },
    [GROOMINPETGSERVICE.rejected]: (state, action) => {
      (state.groomingPetService.loading = false),
        (state.groomingPetService.error = true),
        (state.groomingPetService = action.payload);
    },
  },
});

const groomingPetServiceAction = {
  GROOMINPETGSERVICE,
};
export { groomingPetServiceAction };
export default groomingPetServiceSlice.reducer;
