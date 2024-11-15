import { createSlice } from "@reduxjs/toolkit";
import { Root } from "@/app/data/response.d";
interface ResponseState {
  response: Root[];
}
const initialState: ResponseState = {
  response: [],
};

const responseSlice = createSlice({
  name: "response",
  initialState,
  reducers: {
    setInitialResponse: (state, action) => {
      state.response = action.payload;
    },
  },
});
export const { setInitialResponse } = responseSlice.actions;
export default responseSlice.reducer;
