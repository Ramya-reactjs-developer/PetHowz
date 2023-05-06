// /* eslint-disable no-unused-expressions */
// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { defaultReject, defaultState } from "../../Constants";
// import { fetchData } from "../../Helpers";

// const PHBADDONS = createAsyncThunk(
//   "phbaddons/phbaddons",
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

// const phbaddonsSlice = createSlice({
//   name: "Slice",
//   initialState: {
//     phbaddons: {
//       ...defaultState.List,
//     },
//   },
//   extraReducers: {
//     [PHBADDONS.fulfilled]: (state, action) => {
//       (state.phbaddons.loading = false),
//         (state.phbaddons.error = false),
//         (state.phbaddons = action.payload);
//     },
//     [PHBADDONS.pending]: (state, action) => {
//       (state.phbaddons.loading = true),
//         (state.phbaddons.error = false),
//         (state.phbaddons.loading = true);
//     },
//     [PHBADDONS.rejected]: (state, action) => {
//       (state.phbaddons.loading = false),
//         (state.phbaddons.error = true),
//         (state.phbaddons = action.payload);
//     },
//   },
// });

// const phbaddonsAction = {
//   PHBADDONS,
// };
// export { phbaddonsAction };
// export default phbaddonsSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../Constants";
import { fetchData } from "../../Helpers";

const PHBADDONS = createAsyncThunk(
  "phbaddons/phbaddons",
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

const phbaddonsSlice = createSlice({
  name: "phbaddonsSlice",
  initialState: {
    phbaddons: {
      ...defaultState.List,
    },
  },
  reducers: {
    reset: (state) => {
      state.phbaddons = defaultState.List;
    },
  },
  extraReducers: {
    [PHBADDONS.fulfilled]: (state, action) => {
      state.phbaddons = {
        loading: false,
        error: false,
        data: action.payload
      };
    },
    [PHBADDONS.pending]: (state, action) => {
      state.phbaddons = {
        loading: true,
        error: false,
        data: null,
      };
    },
    [PHBADDONS.rejected]: (state, action) => {
      state.phbaddons = {
        loading: false,
        error: true,
        data: action.payload,
      };
    },
  },
});

const phbaddonsAction = {
  PHBADDONS,
  reset: phbaddonsSlice.actions.reset,
};
export { phbaddonsAction };
export default phbaddonsSlice.reducer;
