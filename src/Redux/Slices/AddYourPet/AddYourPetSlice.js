// /* eslint-disable no-unused-expressions */
// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { defaultReject, defaultState } from "../../Constants";
// import { fetchData } from "../../Helpers";

// const ADD_YOUR_PET = createAsyncThunk(
//   "AddYourPet/AddYourPet",
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
// const GET_YOUR_PET_TYPE = createAsyncThunk(
//   "getYourPetType/getYourPetType",
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
// const GET_PET_BREED = createAsyncThunk(
//   "getPetBreed/getPetBreed",
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
// const AddYourPetSlice = createSlice({
//   name: "AddYourPetSlice",
//   initialState: {
//     AddYourPets: {
//       ...defaultState.List,
//     },
//     getYourPetType: {
//       ...defaultState.List,
//     },
//     getPetBreed: {
//       ...defaultState.List,
//     },
//   },
//   extraReducers: {
//     [ADD_YOUR_PET.fulfilled]: (state, action) => {
//       (state.AddYourPets.loading = false),
//         (state.AddYourPets.error = false),
//         (state.AddYourPets = action.payload);
//     },
//     [ADD_YOUR_PET.pending]: (state, action) => {
//       (state.AddYourPets.loading = true),
//         (state.AddYourPets.error = false),
//         (state.AddYourPets.loading = true);
//     },
//     [ADD_YOUR_PET.rejected]: (state, action) => {
//       (state.AddYourPets.loading = false),
//         (state.AddYourPets.error = true),
//         (state.AddYourPets = action.payload);
//     },
//      [GET_YOUR_PET_TYPE.fulfilled]: (state, action) => {
//       (state.getYourPetType.loading = false),
//         (state.getYourPetType.error = false),
//         (state.getYourPetType = action.payload);
//     },
//     [GET_YOUR_PET_TYPE.pending]: (state, action) => {
//       (state.getYourPetType.loading = true),
//         (state.getYourPetType.error = false),
//         (state.getYourPetType.loading = true);
//     },
//     [GET_YOUR_PET_TYPE.rejected]: (state, action) => {
//       (state.getYourPetType.loading = false),
//         (state.getYourPetType.error = true),
//         (state.getYourPetType = action.payload);
//     },
//     [GET_PET_BREED.fulfilled]: (state, action) => {
//       (state.getPetBreed.loading = false),
//         (state.getPetBreed.error = false),
//         (state.getPetBreed = action.payload);
//     },
//     [GET_PET_BREED.pending]: (state, action) => {
//       (state.getPetBreed.loading = true),
//         (state.getPetBreed.error = false),
//         (state.getPetBreed.loading = true);
//     },
//     [GET_PET_BREED.rejected]: (state, action) => {
//       (state.getPetBreed.loading = false),
//         (state.getPetBreed.error = true),
//         (state.getPetBreed = action.payload);
//     },
//   },
// });

// const AddYourPetAction = {
//   ADD_YOUR_PET,
//   GET_YOUR_PET_TYPE,
//   GET_PET_BREED,
// };
// export { AddYourPetAction };
// export default AddYourPetSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../Constants/commonSchema";
import { fetchData } from "../../Helpers";

const ADD_YOUR_PET = createAsyncThunk(
  "AddYourPet/AddYourPet",
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

const GET_YOUR_PET_TYPE = createAsyncThunk(
  "getYourPetType/getYourPetType",
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

const GET_PET_BREED = createAsyncThunk(
  "getPetBreed/getPetBreed",
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
    AddYourPets: {
      ...defaultState.List,
    },
    getYourPetType: {
      ...defaultState.List,
    },
    getPetBreed: {
      ...defaultState.List,
    },
  },
  reducers: {
    reset: (state) => {
      state.AddYourPets = defaultState.List;
    },
  },
  extraReducers: {
    [ADD_YOUR_PET.fulfilled]: (state, action) => {
      state.AddYourPets = {
        loading: false,
        error: false,
        data: action.payload,
      };
    },
    [ADD_YOUR_PET.pending]: (state) => {
      state.AddYourPets = {
        loading: true,
        error: false,
        data: null,
      };
    },
    [ADD_YOUR_PET.rejected]: (state, action) => {
      state.AddYourPets = {
        loading: false,
        error: true,
        data: action.payload,
      };
    },

    [GET_YOUR_PET_TYPE.fulfilled]: (state, action) => {
      state.getYourPetType = {
        loading: false,
        error: false,
        data: action.payload,
      };
    },
    [GET_YOUR_PET_TYPE.pending]: (state) => {
      state.getYourPetType = {
        loading: true,
        error: false,
        data: null,
      };
    },
    [GET_YOUR_PET_TYPE.rejected]: (state, action) => {
      state.getYourPetType = {
        loading: false,
        error: true,
        data: action.payload,
      };
    },

    [GET_PET_BREED.fulfilled]: (state, action) => {
      state.getPetBreed = {
        loading: false,
        error: false,
        data: action.payload,
      };
    },
    [GET_PET_BREED.pending]: (state) => {
      state.getPetBreed = {
        loading: true,
        error: false,
        data: null,
      };
    },
    [GET_PET_BREED.rejected]: (state, action) => {
      state.getPetBreed = {
        loading: false,
        error: true,
        data: action.payload,
      };
    },
  },
});

const AddYourPetAction = {
  ADD_YOUR_PET,
  GET_YOUR_PET_TYPE,
  GET_PET_BREED,
  reset: AddYourPetSlice.actions.reset,
};
export { AddYourPetAction };
export default AddYourPetSlice.reducer;

// const TermsAndConditionAction = {
//   ADD_YOUR_PET,
//   reset: AddYourPetSlice.actions.reset,
// };

// export { TermsAndConditionAction };
// export default AddYourPetSlice.reducer;
