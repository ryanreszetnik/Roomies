import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Friend } from "../data-types";

const initialState: Friend[] = [];

const counterSlice = createSlice({
  name: "Friends",
  initialState,
  reducers: {
    addFriends(state, action: PayloadAction<Friend[]>) {
      state.push(...action.payload);
    },
  },
});

export const { addFriends } = counterSlice.actions;
export default counterSlice.reducer;
