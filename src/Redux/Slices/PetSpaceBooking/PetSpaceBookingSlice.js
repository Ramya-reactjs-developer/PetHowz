// /* eslint-disable no-unused-expressions */
// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { defaultReject, defaultState } from "../../Constants";
// import { fetchData } from "../../Helpers";

// const PET_SPACE_BOOKING = createAsyncThunk(
//   "PetSpaceBooking/PetSpaceBooking",
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
// const GET_PET_SPACE_BOOKING = createAsyncThunk(
//   "getPetSpaceBooking/getPetSpaceBooking",
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
// const PetSpaceBookingSlice = createSlice({
//   name: "PetSpaceBookingSlice",
//   initialState: {
//     PetSpaceBooking: {
//       ...defaultState.List,
//     },
//     getPetSpaceBooking:{
//       ...defaultState.List,
//     },
//   },
//   extraReducers: {
//     [PET_SPACE_BOOKING.fulfilled]: (state, action) => {
//       (state.PetSpaceBooking.loading = false),
//         (state.PetSpaceBooking.error = false),
//         (state.PetSpaceBooking = action.payload);
//     },
//     [PET_SPACE_BOOKING.pending]: (state, action) => {
//       (state.PetSpaceBooking.loading = true),
//         (state.PetSpaceBooking.error = false),
//         (state.PetSpaceBooking.loading = true);
//     },
//     [PET_SPACE_BOOKING.rejected]: (state, action) => {
//       (state.PetSpaceBooking.loading = false),
//         (state.PetSpaceBooking.error = true),
//         (state.PetSpaceBooking = action.payload);
//     },
//     [GET_PET_SPACE_BOOKING.fulfilled]: (state, action) => {
//       (state.getPetSpaceBooking.loading = false),
//         (state.getPetSpaceBooking.error = false),
//         (state.getPetSpaceBooking = action.payload);
//     },
//     [GET_PET_SPACE_BOOKING.pending]: (state, action) => {
//       (state.getPetSpaceBooking.loading = true),
//         (state.getPetSpaceBooking.error = false),
//         (state.getPetSpaceBooking.loading = true);
//     },
//     [GET_PET_SPACE_BOOKING.rejected]: (state, action) => {
//       (state.getPetSpaceBooking.loading = false),
//         (state.getPetSpaceBooking.error = true),
//         (state.getPetSpaceBooking = action.payload);
//     },
//   },
// });

// const PetSpaceBookingAction = {
//   PET_SPACE_BOOKING,
//   GET_PET_SPACE_BOOKING,
// };
// export { PetSpaceBookingAction };
// export default PetSpaceBookingSlice.reducer;


/* eslint-disable no-unused-expressions */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../Constants";
import { fetchData } from "../../Helpers";

const PET_SPACE_BOOKING = createAsyncThunk(
  "PetSpaceBooking/PetSpaceBooking",
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
const GET_PET_SPACE_BOOKING = createAsyncThunk(
  "getPetSpaceBooking/getPetSpaceBooking",
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
const GET_PET_BOARDING_SPACE_BOOKING = createAsyncThunk(
  "getPetBoardingSpaceBooking/getPetBoardingSpaceBooking",
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
const PetSpaceBookingSlice = createSlice({
  name: "PetSpaceBookingSlice",
  initialState: {
    PetSpaceBooking: {
      ...defaultState.List,
    },
    getPetSpaceBooking: {
      ...defaultState.List,
    },
    getPetBoardingSpaceBooking: {
      ...defaultState.List,
    },
   
  },
  extraReducers: {
    [PET_SPACE_BOOKING.fulfilled]: (state, action) => {
      (state.PetSpaceBooking.loading = false),
        (state.PetSpaceBooking.error = false),
        (state.PetSpaceBooking = action.payload);
    },
    [PET_SPACE_BOOKING.pending]: (state, action) => {
      (state.PetSpaceBooking.loading = true),
        (state.PetSpaceBooking.error = false),
        (state.PetSpaceBooking.loading = true);
    },
    [PET_SPACE_BOOKING.rejected]: (state, action) => {
      (state.PetSpaceBooking.loading = false),
        (state.PetSpaceBooking.error = true),
        (state.PetSpaceBooking = action.payload);
    },
     [GET_PET_SPACE_BOOKING.fulfilled]: (state, action) => {
      (state.getPetSpaceBooking.loading = false),
        (state.getPetSpaceBooking.error = false),
        (state.getPetSpaceBooking = action.payload);
    },
    [GET_PET_SPACE_BOOKING.pending]: (state, action) => {
      (state.getPetSpaceBooking.loading = true),
        (state.getPetSpaceBooking.error = false),
        (state.getPetSpaceBooking.loading = true);
    },
    [GET_PET_SPACE_BOOKING.rejected]: (state, action) => {
      (state.getPetSpaceBooking.loading = false),
        (state.getPetSpaceBooking.error = true),
        (state.getPetSpaceBooking = action.payload);
    },
    [GET_PET_BOARDING_SPACE_BOOKING.fulfilled]: (state, action) => {
      (state.getPetBoardingSpaceBooking.loading = false),
        (state.getPetBoardingSpaceBooking.error = false),
        (state.getPetBoardingSpaceBooking = action.payload);
    },
    [GET_PET_BOARDING_SPACE_BOOKING.pending]: (state, action) => {
      (state.getPetBoardingSpaceBooking.loading = true),
        (state.getPetBoardingSpaceBooking.error = false),
        (state.getPetBoardingSpaceBooking.loading = true);
    },
    [GET_PET_BOARDING_SPACE_BOOKING.rejected]: (state, action) => {
      (state.getPetBoardingSpaceBooking.loading = false),
        (state.getPetBoardingSpaceBooking.error = true),
        (state.getPetBoardingSpaceBooking = action.payload);
    },
  },
});

const PetSpaceBookingAction = {
  PET_SPACE_BOOKING,
  GET_PET_SPACE_BOOKING,
  GET_PET_BOARDING_SPACE_BOOKING,

};
export { PetSpaceBookingAction };
export default PetSpaceBookingSlice.reducer;
