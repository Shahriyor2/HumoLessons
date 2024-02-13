import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authenticated: localStorage.getItem("authenticated") === "true",
};

export const userReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAuthenticated(state, action) {
      state.authenticated = action.payload;
      localStorage.setItem("authenticated", action.payload);
    },
  },
});

export const { setAuthenticated } = userReducer.actions;
