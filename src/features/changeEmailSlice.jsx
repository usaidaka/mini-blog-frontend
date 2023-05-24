import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "../API/axios";

const CHANGE_EMAIL = "/auth/changeEmail";

export const changeEmail = createAsyncThunk(
  "change/email",
  async ({ currentEmail, newEmail }) => {
    try {
      const response = await axios.patch(
        CHANGE_EMAIL,
        { currentEmail, newEmail },
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

export const changeEmailSlice = createSlice({
  name: "email",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(changeEmail.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(changeEmail.fulfilled, (state, action) => {
        state.loading = false;
        state.change = action.payload;
      })
      .addCase(changeEmail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default changeEmailSlice.reducer;
