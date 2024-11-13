import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setStateMenu: (state, action) => {
      state.open = !state.open;
    },
  },
});
export const { setStateMenu } = menuSlice.actions;
export default menuSlice.reducer;
