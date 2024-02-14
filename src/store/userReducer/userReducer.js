import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authenticated: Boolean(localStorage.getItem("authenticated")) === true,
  data: "",
  isLoading: true,
};

export const userReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAuthenticated(state, action) {
      state.authenticated = action.payload;
      localStorage.setItem("authenticated", Boolean(action.payload));
    },
    setIsLoading(state) {
      state.isLoading = false;
    },
  },
});

export const { setAuthenticated, setIsLoading } = userReducer.actions;
