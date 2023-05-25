import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "../API/axios";

const USER_BLOG = "/blog/pagUser";

export const userBlog = createAsyncThunk("posts/byUser", async () => {
  try {
    const response = await axios.get(USER_BLOG, {
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
  user: [],
  loading: true,
  error: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    postLike(state, action) {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userBlog.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(userBlog.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(userBlog.rejected, (state) => {
        state.loading = false;
        state.error = false;
      });
  },
});

export const { postLike } = userSlice.actions;

export default userSlice.reducer;
