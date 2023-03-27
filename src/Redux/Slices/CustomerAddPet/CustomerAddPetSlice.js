/* eslint-disable no-unused-expressions */
/* eslint-disable no-sequences */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../Constants";
import { fetchData } from "../../Helpers";

const CUSTOMER_ADD_ANOTHER_PET = createAsyncThunk(
  "CustomerAddAnotherPet/CustomerAddAnotherPet",
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

const CustomerAddAnotherPetSlice = createSlice({
  name: "CustomerAddAnotherPetSlice",
  initialState: {
    CustomerAddAnotherPet: {
      ...defaultState.List,
    },
  },
  extraReducers: {
    [CUSTOMER_ADD_ANOTHER_PET.fulfilled]: (state, action) => {
      (state.CustomerAddAnotherPet.loading = false)(
        (state.CustomerAddAnotherPet.error = false)
      )((state.CustomerAddAnotherPet = action.payload));
    },
    [CUSTOMER_ADD_ANOTHER_PET.pending]: (state, action) => {
      (state.CustomerAddAnotherPet.loading = true),
        (state.CustomerAddAnotherPet.error = false),
        (state.CustomerAddAnotherPet.loading = true);
    },
    [CUSTOMER_ADD_ANOTHER_PET.rejected]: (state, action) => {
      (state.CustomerAddAnotherPet.loading = false),
        (state.CustomerAddAnotherPet.error = true),
        (state.CustomerAddAnotherPet = action.payload);
    },
  },
});

const CustomerAddAnotherPetAction = {
  CUSTOMER_ADD_ANOTHER_PET,
};
export { CustomerAddAnotherPetAction };
export default CustomerAddAnotherPetSlice.reducer;
