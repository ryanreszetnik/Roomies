import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Friend, User } from "../data-types";
import { RootState } from "./store";

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

export const getFriendsAsUsers =
  () =>
  (state: RootState): User[] =>
    state.friends.map((friend) => ({ name: friend.name, id: friend.id }));
export default counterSlice.reducer;
