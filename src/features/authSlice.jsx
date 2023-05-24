import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "../API/axios";

const AUTH_ACCESS = "/auth";

export const accessAll = createAsyncThunk("posts/access", async () => {
  try {
    const response = await axios.get(AUTH_ACCESS, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

const initialState = {
  auth: [],
  loading: true,
  error: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(accessAll.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(accessAll.fulfilled, (state, action) => {
        state.loading = false;
        state.auth = action.payload;
      })
      .addCase(accessAll.rejected, (state) => {
        state.loading = false;
        state.error = false;
      });
  },
});

export default authSlice.reducer;
