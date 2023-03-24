/* eslint-disable no-unused-expressions */
/* eslint-disable no-sequences */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../Constants";
import { fetchData } from "../../Helpers";

const CUSTOMER_ADD_PET = createAsyncThunk(
  "CustomerAddPet/CustomerAddPet",
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

const CustomerAddPetSlice = createSlice({
  name: "CustomerAddPetSlice",
  initialState: {
    CustomerAddPet: {
      ...defaultState.List,
    },
  },
  extraReducers: {
    [CUSTOMER_ADD_PET.fulfilled]: (state, action) => {
      (state.CustomerAddPet.loading = false)(
        (state.CustomerAddPet.error = false)
      )((state.CustomerAddPet = action.payload));
    },
    [CUSTOMER_ADD_PET.pending]: (state, action) => {
      (state.CustomerAddPet.loading = true),
        (state.CustomerAddPet.error = false),
        (state.CustomerAddPet.loading = true);
    },
    [CUSTOMER_ADD_PET.rejected]: (state, action) => {
      (state.CustomerAddPet.loading = false),
        (state.CustomerAddPet.error = true),
        (state.CustomerAddPet = action.payload);
    },
  },
});

const CustomerAddPetAction = {
  CUSTOMER_ADD_PET,
};
export { CustomerAddPetAction };
export default CustomerAddPetSlice.reducer;
