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
  pagination: {
    current: 1,
    pageSize: 5,
    total: 0,
  },
};

initialState.pagination.total = initialState.data.length;

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
      state.pagination.total += 1;
    },
    handleClickDelete(state, { payload }) {
      const findKey = state.data.filter((item) => item.key !== payload);
      state.data = findKey;
      state.pagination.total -= 1;
    },
    handlePageChange(state, { payload }) {
      state.pagination = (prev) => ({ ...prev, current: payload });
    },
  },
});

export const {
  setShowForm,
  setKeyChange,
  setData,
  handleClickDelete,
  handlePageChange,
} = headerAddSlice.actions;
