import { configureStore } from "@reduxjs/toolkit";
import autherReducer from "../features/auth/authSlice";

export const store = configureStore({
  reducer: {
    auth: autherReducer,
  },
});
