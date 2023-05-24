import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "../API/axios";

const CHANGE_PASS = "/auth/changePass";

export const changePass = createAsyncThunk(
  "change/password",
  async ({ currentPassword, password, confirmPassword }) => {
    try {
      const response = await axios.patch(
        CHANGE_PASS,
        {
          currentPassword,
          password,
          confirmPassword,
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

export const changeSlice = createSlice({
  name: "password",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(changePass.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(changePass.fulfilled, (state, action) => {
        state.loading = false;
        state.change = action.payload;
      })
      .addCase(changePass.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default changeSlice.reducer;
