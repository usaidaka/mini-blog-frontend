import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "../API/axios";

const CHANGE_EMAIL = "/auth/changePhone";

export const changePhone = createAsyncThunk(
  "change/email",
  async ({ currentPhone, newPhone }) => {
    try {
      const response = await axios.patch(
        CHANGE_EMAIL,
        { currentPhone, newPhone },
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

export const changePhoneSlice = createSlice({
  name: "phone",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(changePhone.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(changePhone.fulfilled, (state, action) => {
        state.loading = false;
        state.change = action.payload;
      })
      .addCase(changePhone.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default changePhoneSlice.reducer;
