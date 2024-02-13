import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: {
    userName: "",
    password: "",
  },
};

export const loginReducer = createSlice({
  name: "login",
  initialState,
  reducers: {
    handleChange(state, action) {
      const { name, value } = action.payload;
      state.userData[name] = value;
    },
    handleChangeInput(state) {
      if (state.userData.userName || state.userData.password) {
        state.userData.userName = "";
        state.userData.password = "";
      } else {
        state.userData.userName = "mor_2314";
        state.userData.password = "83r5^_";
      }
    },
  },
});

export const { handleChange, handleChangeInput } = loginReducer.actions;
