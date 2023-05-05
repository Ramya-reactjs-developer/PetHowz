// /* eslint-disable no-unused-expressions */
// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { defaultReject, defaultState } from "../../Constants";
// import { fetchData } from "../../Helpers";

// const USER_ADDRESS_DETAILS = createAsyncThunk(
//   "userAddressDetails/userAddressDetails",
//   // eslint-disable-next-line default-param-last
//   async (
//     // eslint-disable-next-line default-param-last
//     payload = {},

//     { rejectWithValue }
//   ) => {
//     try {
//       const data = await fetchData(
//         payload?.data,
//         payload?.method,
//         payload?.apiName
//       );
//       return {
//         ...defaultState.List,
//         message: data?.data.Message,
//         data: data?.data?.data,
//       };
//     } catch (error) {
//       return rejectWithValue({
//         ...defaultReject.List,
//         message: error.message,
//       });
//     }
//   }
// );

// const userAddressDetailsSlice = createSlice({
//   name: "userAddressDetailsSlice",
//   initialState: {
//     userAddressDetails: {
//       ...defaultState.List,
//     },
//   },
//   extraReducers: {
//     [USER_ADDRESS_DETAILS.fulfilled]: (state, action) => {
//       (state.userAddressDetails.loading = false)(
//         (state.userAddressDetails.error = false)
//       )((state.userAddressDetails = action.payload));
//     },
//     [USER_ADDRESS_DETAILS.pending]: (state, action) => {
//       (state.userAddressDetails.loading = true),
//         (state.userAddressDetails.error = false),
//         (state.userAddressDetails.loading = true);
//     },
//     [USER_ADDRESS_DETAILS.rejected]: (state, action) => {
//       (state.userAddressDetails.loading = false),
//         (state.userAddressDetails.error = true),
//         (state.userAddressDetails = action.payload);
//     },
//   },
// });

// const userAddressDetailsAction = {
//   USER_ADDRESS_DETAILS,
// };
// export { userAddressDetailsAction };
// export default userAddressDetailsSlice.reducer;
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../Constants/commonSchema";
import { fetchData } from "../../Helpers";

const USER_ADDRESS_DETAILS = createAsyncThunk(
  "userAddressDetails/userAddressDetails",
  async (payload = {}, { rejectWithValue }) => {
    try {
      const data = await fetchData(
        payload?.data,
        payload?.method,
        payload?.apiName
      );

      return {
        data: data?.data,
      };
    } catch (error) {
      return rejectWithValue({
        ...defaultReject.List,
        message: error.message,
      });
    }
  }
);

const userAddressDetailsSlice = createSlice({
  name: "userAddressDetailsSlice",
  initialState: {
    userAddressDetails: {
      ...defaultState.List,
    },
  },
  reducers: {
    reset: (state) => {
      state.userAddressDetails = defaultState.List;
    },
  },
  extraReducers: {
    [USER_ADDRESS_DETAILS.fulfilled]: (state, action) => {
      state.userAddressDetails = {
        loading: false,
        error: false,
        data: action.payload,
      };
    },
    [USER_ADDRESS_DETAILS.pending]: (state) => {
      state.userAddressDetails = {
        loading: true,
        error: false,
        data: null,
      };
    },
    [USER_ADDRESS_DETAILS.rejected]: (state, action) => {
      state.userAddressDetails = {
        loading: false,
        error: true,
        data: action.payload,
      };
    },
  },
});

const userAddressDetailsAction = {
  USER_ADDRESS_DETAILS,
  reset: userAddressDetailsSlice.actions.reset,
};
export { userAddressDetailsAction };
export default userAddressDetailsSlice.reducer;
