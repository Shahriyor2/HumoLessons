import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showFrom: false,
  keyChange: false,
  data: [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
      tags: ["loser"],
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sydney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
  ],
};

export const headerAddSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setShowForm(state, { payload }) {
      state.showFrom = payload;
    },
    setKeyChange(state, { payload }) {
      state.keyChange = payload;
    },
    setData(state, { payload }) {
      state.data = [...state.data, payload];
    },
    handleClickDelete(state, { payload }) {
      const findKey = state.data.filter((item) => item.key !== payload);
      state.data = findKey;
    },
  },
});

export const { setShowForm, setKeyChange, setData, handleClickDelete } =
  headerAddSlice.actions;
