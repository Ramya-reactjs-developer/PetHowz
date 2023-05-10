// /* eslint-disable no-unused-expressions */
// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { defaultReject, defaultState } from "../../Constants";
// import { fetchData } from "../../Helpers";

// const TERMS_AND_CONDITION = createAsyncThunk(
//   "TermsAndCondition/TermsAndCondition",
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

// const TermsAndConditionSlice = createSlice({
//   name: "TermsAndConditionSlice",
//   initialState: {
//     TermsAndCondition: {
//       ...defaultState.List,
//     },
//   },
//   extraReducers: {
//     [TERMS_AND_CONDITION.fulfilled]: (state, action) => {
//       (state.TermsAndCondition.loading = false)
//         (state.TermsAndCondition.error = false)
//         (state.TermsAndCondition = action.payload);
//     },
//     [TERMS_AND_CONDITION.pending]: (state, action) => {
//       (state.TermsAndCondition.loading = true),
//         (state.TermsAndCondition.error = false),
//         (state.TermsAndCondition.loading = true);
//     },
//     [TERMS_AND_CONDITION.rejected]: (state, action) => {
//       (state.TermsAndCondition.loading = false),
//         (state.TermsAndCondition.error = true),
//         (state.TermsAndCondition = action.payload);
//     },
//   },
// });

// const TermsAndConditionAction = {
//   TERMS_AND_CONDITION,
// };
// export { TermsAndConditionAction };
// export default TermsAndConditionSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../Constants/commonSchema";
import { fetchData } from "../../Helpers";

const TERMS_AND_CONDITION = createAsyncThunk(
  "TermsAndCondition/TermsAndCondition",
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

const TermsAndConditionSlice = createSlice({
  name: "TermsAndConditionSlice",
  initialState: {
    TermsAndCondition: {
      ...defaultState.List,
    },
  },
  reducers: {
    reset: (state) => {
      state.TermsAndCondition = defaultState.List;
    },
  },
  extraReducers: {
    [TERMS_AND_CONDITION.fulfilled]: (state, action) => {
      state.TermsAndCondition = {
        loading: false,
        error: false,
        data: action.payload,
      };
    },
    [TERMS_AND_CONDITION.pending]: (state) => {
      state.TermsAndCondition = {
        loading: true,
        error: false,
        data: null,
      };
    },
    [TERMS_AND_CONDITION.rejected]: (state, action) => {
      state.TermsAndCondition = {
        loading: false,
        error: true,
        data: action.payload,
      };
    },
  },
});

const TermsAndConditionAction = {
  TERMS_AND_CONDITION,
  reset: TermsAndConditionSlice.actions.reset,
};

export { TermsAndConditionAction };
export default TermsAndConditionSlice.reducer;
