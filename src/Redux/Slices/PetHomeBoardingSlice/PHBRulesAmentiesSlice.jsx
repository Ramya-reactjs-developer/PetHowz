// /* eslint-disable no-unused-expressions */
// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { defaultReject, defaultState } from "../../Constants";
// import { fetchData } from "../../Helpers";

// const PHBRULESAMENTIES = createAsyncThunk(
//   "phbrulesamenties/phbrulesamenties",
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

// const phbrulesamentiesSlice = createSlice({
//   name: "Slice",
//   initialState: {
//     phbrulesamenties: {
//       ...defaultState.List,
//     },
//   },
//   extraReducers: {
//     [PHBRULESAMENTIES.fulfilled]: (state, action) => {
//       (state.phbrulesamenties.loading = false),
//         (state.phbrulesamenties.error = false),
//         (state.phbrulesamenties = action.payload);
//     },
//     [PHBRULESAMENTIES.pending]: (state, action) => {
//       (state.phbrulesamenties.loading = true),
//         (state.phbrulesamenties.error = false),
//         (state.phbrulesamenties.loading = true);
//     },
//     [PHBRULESAMENTIES.rejected]: (state, action) => {
//       (state.phbrulesamenties.loading = false),
//         (state.phbrulesamenties.error = true),
//         (state.phbrulesamenties = action.payload);
//     },
//   },
// });

// const phbrulesamentiesAction = {
//   PHBRULESAMENTIES,
// };
// export { phbrulesamentiesAction };
// export default phbrulesamentiesSlice.reducer;

/* eslint-disable no-unused-expressions */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../Constants";
import { fetchData } from "../../Helpers";

const PHBRULESAMENTIES = createAsyncThunk(
  "phbrulesamenties/phbrulesamenties",
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

const phbrulesamentiesSlice = createSlice({
  name: "phbrulesamentiesSlice",
  initialState: {
    phbrulesamenties: {
      ...defaultState.List,
    },
  },
  reducers: {
    reset: (state) => {
      state.phbrulesamenties = defaultState.List;
    },
  },
  extraReducers: {
    [PHBRULESAMENTIES.fulfilled]: (state, action) => {
      state.phbrulesamenties = {
        loading: false,
        error: false,
        data: action.payload
      };
    },
    [PHBRULESAMENTIES.pending]: (state, action) => {
      state.phbrulesamenties = {
        loading: true,
        error: false,
        data: null,
      };
    },
    [PHBRULESAMENTIES.rejected]: (state, action) => {
      state.phbrulesamenties = {
        loading: false,
        error: true,
        data: action.payload,
      };
    },
  },
});

const phbrulesamentiesAction = {
  PHBRULESAMENTIES,
  reset: phbrulesamentiesSlice.actions.reset,
};
export { phbrulesamentiesAction };
export default phbrulesamentiesSlice.reducer;
