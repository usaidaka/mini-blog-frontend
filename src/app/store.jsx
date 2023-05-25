import { configureStore } from "@reduxjs/toolkit";

import postsReducer from "../features/postsSlice";
import changePwdReducer from "../features/changePwdSlice";
import authReducer from "../features/authSlice";
import categoryReducer from "../features/categorySlice.jsx";
import changeUsernameReducer from "../features/changeUsernameSlice";
import changeEmailReducer from "../features/changeEmailSlice";
import favReducer from "../features/favSlice";
import userReducer from "../features/userBlogSlice";
import getLikeReducer from "../features/getLikeSlice";
import likePostReducer from "../features/likeSlice";
import tokenReducer from "../features/getTokenSlice";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    auth: authReducer,
    category: categoryReducer,
    changesPwd: changePwdReducer,
    changesUsername: changeUsernameReducer,
    changesEmail: changeEmailReducer,
    pagFav: favReducer,
    userBlog: userReducer,
    likeInfo: getLikeReducer,
    likePost: likePostReducer,
    keepToken: tokenReducer,
  },
});
