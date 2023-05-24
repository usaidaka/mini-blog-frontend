import { configureStore } from "@reduxjs/toolkit";

import postsReducer from "../features/postsSlice";
import changePwdReducer from "../features/changePwdSlice";
import authReducer from "../features/authSlice";
import categoryReducer from "../features/categorySlice.jsx";
import changeUsernameReducer from "../features/changeUsernameSlice";
import changeEmailReducer from "../features/changeEmailSlice";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    auth: authReducer,
    category: categoryReducer,
    changesPwd: changePwdReducer,
    changesUsername: changeUsernameReducer,
    changesEmail: changeEmailReducer,
  },
});
