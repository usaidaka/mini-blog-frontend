import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "../API/axios";

const CHANGE_UNAME = "/auth/changeUsername";

export const changeUname = createAsyncThunk(
  "change/Uname",
  async ({ currentUsername, newUsername }) => {
    try {
      const response = await axios.patch(
        CHANGE_UNAME,
        {
          currentUsername,
          newUsername,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  change: [],
  loading: false,
  error: null,
};

export const changeUsernameSlice = createSlice({
  name: "username",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(changeUname.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(changeUname.fulfilled, (state, action) => {
        state.loading = false;
        state.change = action.payload;
      })
      .addCase(changeUname.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default changeUsernameSlice.reducer;
