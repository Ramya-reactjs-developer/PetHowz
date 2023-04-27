// /* eslint-disable no-unused-expressions */
// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { defaultReject, defaultState } from "../../Constants";
// import { fetchData } from "../../Helpers";

// const LOGIN = createAsyncThunk(
//   "login/login",
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

// const loginSlice = createSlice({
//   name: "loginSlice",
//   initialState: {
//     login: {
//       ...defaultState.List,
//     },
//   },
//   extraReducers: {
//     [LOGIN.fulfilled]: (state, action) => {
//       (state.login.loading = false),
//         (state.login.error = false),
//         (state.login = action.payload);
//     },
//     [LOGIN.pending]: (state, action) => {
//       (state.login.loading = true),
//         (state.login.error = false),
//         (state.login.loading = true);
//     },
//     [LOGIN.rejected]: (state, action) => {
//       (state.login.loading = false),
//         (state.login.error = true),
//         (state.login = action.payload);
//     },
//   },
// });

// const loginAction = {
//   LOGIN,
// };
// export { loginAction };
// export default loginSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../Constants/commonSchema";
import { fetchData } from "../../Helpers";

const LOGIN_ADMIN = createAsyncThunk(
  "loginAdmin/login_admin",
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

const loginSlice = createSlice({
  name: "loginSlice",
  initialState: {
    login: {
      ...defaultState.List,
    },
  },
  reducers: {
    logout: (state) => {
      state.login = defaultState.List;
    },
  },
  extraReducers: {
    [LOGIN_ADMIN.fulfilled]: (state, action) => {
      state.login = {
        loading: false,
        error: false,
        data: action.payload.data,
      };
    },
    [LOGIN_ADMIN.pending]: (state) => {
      state.login = {
        loading: true,
        error: false,
        data: null,
      };
    },
    [LOGIN_ADMIN.rejected]: (state, action) => {
      state.login = {
        loading: false,
        error: true,
        data: action.payload,
      };
    },
  },
});

const loginAction = {
  LOGIN_ADMIN,
  logout: loginSlice.actions.logout,
};

export { loginAction };
export default loginSlice.reducer;
