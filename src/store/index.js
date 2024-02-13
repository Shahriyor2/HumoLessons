import { userReducer } from "./UserReducer/UserReducer";
import { loginReducer } from "./loginReducer/LoginReducer";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    user: userReducer.reducer,
    login: loginReducer.reducer,
  },
});
