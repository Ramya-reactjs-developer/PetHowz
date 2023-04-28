/* eslint-disable no-unused-expressions */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../Constants";
import { fetchData } from "../../Helpers";

const ABOUTPET = createAsyncThunk(
  "aboutPet/aboutPet",
  // eslint-disable-next-line default-param-last
  async (
    // eslint-disable-next-line default-param-last
    payload = {},

    { rejectWithValue }
  ) => {
    try {
      console.log(payload, "dataValue");
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

const aboutPetSlice = createSlice({
  name: "aboutPetSlice",
  initialState: {
    aboutPet: {
      ...defaultState.List,
    },
  },
  extraReducers: {
    [ABOUTPET.fulfilled]: (state, action) => {
      (state.aboutPet.loading = false),
        (state.aboutPet.error = false),
        (state.aboutPet = action.payload);
    },
    [ABOUTPET.pending]: (state, action) => {
      (state.aboutPet.loading = true),
        (state.aboutPet.error = false),
        (state.aboutPet.loading = true);
    },
    [ABOUTPET.rejected]: (state, action) => {
      (state.aboutPet.loading = false),
        (state.aboutPet.error = true),
        (state.aboutPet = action.payload);
    },
  },
});

const aboutPetAction = {
  ABOUTPET,
};
export { aboutPetAction };
export default aboutPetSlice.reducer;
