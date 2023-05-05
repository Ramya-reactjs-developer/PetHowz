import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../Constants/commonSchema";
import { fetchData } from "../../Helpers";

const REGISTERTOPETHOWZ = createAsyncThunk(
  "registertopethowz/registertopethowz",
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

const registertopethowzSlice = createSlice({
  name: "registertopethowzSlice",
  initialState: {
    registertopethowz: {
      ...defaultState.List,
    },
  },
  reducers: {
    reset: (state) => {
      state.registertopethowz = defaultState.List;
    },
  },
  extraReducers: {
    [REGISTERTOPETHOWZ.fulfilled]: (state, action) => {
      state.registertopethowz = {
        loading: false,
        error: false,
        data: action.payload,
      };
    },
    [REGISTERTOPETHOWZ.pending]: (state) => {
      state.registertopethowz = {
        loading: true,
        error: false,
        data: null,
      };
    },
    [REGISTERTOPETHOWZ.rejected]: (state, action) => {
      state.registertopethowz = {
        loading: false,
        error: true,
        data: action.payload,
      };
    },
  },
});

const registertopethowzAction = {
  REGISTERTOPETHOWZ,
  reset: registertopethowzSlice.actions.reset,
};

export { registertopethowzAction };
export default registertopethowzSlice.reducer;
