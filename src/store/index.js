import { userReducer } from "./userReducer/userReducer";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    userReducer,
  },
});
