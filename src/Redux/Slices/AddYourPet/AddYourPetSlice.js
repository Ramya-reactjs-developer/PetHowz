/* eslint-disable no-unused-expressions */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../Constants";
import { fetchData } from "../../Helpers";

const ADD_YOUR_PET = createAsyncThunk(
  "AddYourPet/AddYourPet",
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

const AddYourPetSlice = createSlice({
  name: "AddYourPetSlice",
  initialState: {
    AddYourPet: {
      ...defaultState.List,
    },
  },
  extraReducers: {
    [ADD_YOUR_PET.fulfilled]: (state, action) => {
      (state.AddYourPet.loading = false)
        (state.AddYourPet.error = false)
        (state.AddYourPet = action.payload);
    },
    [ADD_YOUR_PET.pending]: (state, action) => {
      (state.AddYourPet.loading = true),
        (state.AddYourPet.error = false),
        (state.AddYourPet.loading = true);
    },
    [ADD_YOUR_PET.rejected]: (state, action) => {
      (state.AddYourPet.loading = false),
        (state.AddYourPet.error = true),
        (state.AddYourPet = action.payload);
    },
  },
});

const AddYourPetAction = {
  ADD_YOUR_PET,
};
export { AddYourPetAction };
export default AddYourPetSlice.reducer;
