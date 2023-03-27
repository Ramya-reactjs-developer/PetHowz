/* eslint-disable no-unused-expressions */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchData } from "../../Helpers";
import { defaultReject, defaultState } from "../../Constants";

const SEARCHCITY = createAsyncThunk(
  "searchcity/searchcity",
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

const searchcitySlice = createSlice({
  name: "Slice",
  initialState: {
    searchcity: {
      ...defaultState.List,
    },
  },
  extraReducers: {
    [SEARCHCITY.fulfilled]: (state, action) => {
      (state.searchcity.loading = false),
        (state.searchcity.error = false),
        (state.searchcity = action.payload);
    },
    [SEARCHCITY.pending]: (state, action) => {
      (state.searchcity.loading = true),
        (state.searchcity.error = false),
        (state.searchcity.loading = true);
    },
    [SEARCHCITY.rejected]: (state, action) => {
      (state.searchcity.loading = false),
        (state.searchcity.error = true),
        (state.searchcity = action.payload);
    },
  },
});

const searchcityAction = {
  SEARCHCITY,
};
export { searchcityAction };
export default searchcitySlice.reducer;

// /* eslint-disable no-sequences */
// /* eslint-disable no-unused-vars */
// /* eslint-disable no-param-reassign */
// /* eslint-disable no-unused-expressions */
// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { fetchData } from "../../Helpers";
// import { defaultReject, defaultState } from "../../Constants";

// const SEARCHCITY = createAsyncThunk(
//   "SearchCity/SearchCity",
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
// const SEARCHCITY_CREATE = createAsyncThunk(
//   "SearchCity/SearchCityCreate",
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
// // const SEARCHCITY_EDIT = createAsyncThunk(
// //   "SearchCity/SearchCityEdit",
// //   // eslint-disable-next-line default-param-last
// //   async (
// //     // eslint-disable-next-line default-param-last
// //     payload = {},
// //     { rejectWithValue }
// //   ) => {
// //     try {
// //       const data = await fetchData(
// //         payload?.data,
// //         payload?.method,
// //         `${payload?.apiName}${payload?.id}`
// //       );
// //       return {
// //         ...defaultState.List,
// //         message: data?.data.Message,
// //         data: data?.data?.data,
// //       };
// //     } catch (error) {
// //       return rejectWithValue({
// //         ...defaultReject.List,
// //         message: error.message,
// //       });
// //     }
// //   }
// // );

// // const MASTER_DELETE = createAsyncThunk(
// //   "master/masterDelete",
// //   // eslint-disable-next-line default-param-last
// //   async (
// //     // eslint-disable-next-line default-param-last
// //     payload = {},
// //     { rejectWithValue }
// //   ) => {
// //     try {
// //       const data = await fetchData(
// //         payload?.data,
// //         payload?.method,
// //         `${payload?.apiName}${payload?.id}`
// //       );
// //       return {
// //         ...defaultState.List,
// //         message: data?.data.Message,
// //         data: data?.data?.data,
// //       };
// //     } catch (error) {
// //       return rejectWithValue({
// //         ...defaultReject.List,
// //         message: error.message,
// //       });
// //     }
// //   }
// // );

// const SEARCHCITY_GET = createAsyncThunk(
//   "SearchCity/SearchCityGet",
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
//         `${payload?.apiName}${payload?.id}`
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

// const SearchCitySlice = createSlice({
//   name: "SearchCitySlice",
//   initialState: {
//     master: {
//       ...defaultState.List,
//     },
//     masterEdit: {
//       ...defaultState.List,
//     },
//     masterCreate: {
//       ...defaultState.List,
//     },
//     masterDelete: {
//       ...defaultState.List,
//     },
//     masterGet: {
//       ...defaultState.List,
//     },
//   },
//   extraReducers: {
//     [SEARCHCITY.fulfilled]: (state, action) => {
//       (state.SearchCity.loading = false),
//         (state.SearchCity.error = false),
//         (state.SearchCity = action.payload);
//     },
//     [SEARCHCITY.pending]: (state, action) => {
//       (state.SearchCity.loading = true),
//         (state.SearchCity.error = false),
//         (state.SearchCity.loading = true);
//     },
//     [SEARCHCITY.rejected]: (state, action) => {
//       (state.SearchCity.loading = false),
//         (state.SearchCity.error = true),
//         (state.SearchCity = action.payload);
//     },
//     [SEARCHCITY_CREATE.fulfilled]: (state, action) => {
//       (state.SearchCityCreate.loading = false),
//         (state.SearchCityCreate.error = false),
//         (state.SearchCityCreate = action.payload);
//     },
//     [SEARCHCITY_CREATE.pending]: (state, action) => {
//       (state.SearchCityCreate.loading = true),
//         (state.SearchCityCreate.error = false),
//         (state.SearchCityCreate.loading = true);
//     },
//     [SEARCHCITY_CREATE.rejected]: (state, action) => {
//       (state.SearchCityCreate.loading = false),
//         (state.SearchCityCreate.error = true),
//         (state.SearchCityCreate = action.payload);
//     },
//     // [SEARCHCITY_EDIT.fulfilled]: (state, action) => {
//     //   (state.masterEdit.loading = false),
//     //     (state.masterEdit.error = false),
//     //     (state.masterEdit = action.payload);
//     // },
//     // [MASTER_EDIT.pending]: (state, action) => {
//     //   (state.masterEdit.loading = true),
//     //     (state.masterEdit.error = false),
//     //     (state.masterEdit.loading = true);
//     // },
//     // [MASTER_EDIT.rejected]: (state, action) => {
//     //   (state.masterEdit.loading = false),
//     //     (state.masterEdit.error = true),
//     //     (state.masterEdit = action.payload);
//     // },
//     // [MASTER_DELETE.fulfilled]: (state, action) => {
//     //   (state.masterDelete.loading = false),
//     //     (state.masterDelete.error = false),
//     //     (state.masterDelete = action.payload);
//     // },
//     // [MASTER_DELETE.pending]: (state, action) => {
//     //   (state.masterDelete.loading = true),
//     //     (state.masterDelete.error = false),
//     //     (state.masterDelete.loading = true);
//     // },
//     // [MASTER_DELETE.rejected]: (state, action) => {
//     //   (state.masterDelete.loading = false),
//     //     (state.masterDelete.error = true),
//     //     (state.masterDelete = action.payload);
//     // },
//     [SEARCHCITY_GET.fulfilled]: (state, action) => {
//       (state.SearchCityGet.loading = false),
//         (state.SearchCityGet.error = false),
//         (state.SearchCityGet = action.payload);
//     },
//     [SEARCHCITY_GET.pending]: (state, action) => {
//       (state.SearchCityGet.loading = true),
//         (state.SearchCityGet.error = false),
//         (state.masterGet.loading = true);
//     },
//     [SEARCHCITY_GET.rejected]: (state, action) => {
//       (state.SearchCityGet.loading = false),
//         (state.SearchCityGet.error = true),
//         (state.SearchCityGet = action.payload);
//     },
//   },
// });

// const SearchCityAction = {
//   SEARCHCITY,
//   SEARCHCITY_CREATE,
//   //   MASTER_EDIT,
//   //   MASTER_DELETE,
//   SEARCHCITY_GET,
// };
// export { SearchCityAction };
// export default SearchCitySlice.reducer;
