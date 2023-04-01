// /* eslint-disable no-unused-expressions */
// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { defaultReject, defaultState } from "../../Constants";
// import { fetchData } from "../../Helpers";

// const GROOMINGSERVICE = createAsyncThunk(
//   "groomingService/groomingService",
//   // eslint-disable-next-line default-param-last
//   async (
//     // eslint-disable-next-line default-param-last
//     payload = {},

//     { rejectWithValue }
//   ) => {
//     try {
//       console.log(payload, "payload");
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

// const groomingServiceSlice = createSlice({
//   name: "groomingServiceSlice",
//   initialState: {
//     groomingService: {
//       ...defaultState.List,
//     },
//   },
//   extraReducers: {
//     [GROOMINGSERVICE.fulfilled]: (state, action) => {
//       (state.groomingService.loading = false),
//         (state.groomingService.error = false),
//         (state.groomingService = action.payload);
//     },
//     [GROOMINGSERVICE.pending]: (state, action) => {
//       (state.groomingService.loading = true),
//         (state.groomingService.error = false),
//         (state.groomingService.loading = true);
//     },
//     [GROOMINGSERVICE.rejected]: (state, action) => {
//       (state.groomingService.loading = false),
//         (state.groomingService.error = true),
//         (state.groomingService = action.payload);
//     },
//   },
// });

// const groomingServiceAction = {
//   GROOMINGSERVICE,
// };
// export { groomingServiceAction };
// export default groomingServiceSlice.reducer;

/* eslint-disable no-unused-expressions */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../Constants";
import { fetchData } from "../../Helpers";

const PETCARE = createAsyncThunk(
  "petCareService/petCare",
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

const petCareSlice = createSlice({
  name: "petCareSlice",
  initialState: {
    petCare: {
      ...defaultState.List,
    },
  },
  extraReducers: {
    [PETCARE.fulfilled]: (state, action) => {
      (state.petCare.loading = false),
        (state.petCare.error = false),
        (state.petCare = action.payload);
    },
    [PETCARE.pending]: (state, action) => {
      (state.petCare.loading = true),
        (state.petCare.error = false),
        (state.petCare.loading = true);
    },
    [PETCARE.rejected]: (state, action) => {
      (state.petCare.loading = false),
        (state.petCare.error = true),
        (state.petCare = action.payload);
    },
  },
});

const petCareAction = {
  PETCARE,
};
export { petCareAction };
export default petCareSlice.reducer;
