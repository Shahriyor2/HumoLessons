import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authentifaceted: false,
};

export const userReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAuthentifacated(state) {
      state.authentifaceted = true;
    },
  },
});

export const { setAuthentifacated } = userReducer.actions;
export default userReducer.reducer;

// "redux-toolkit": "^1.8.5",
