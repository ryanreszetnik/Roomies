import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Friend, Group, User } from "../data-types";
import { RootState } from "./store";

const initialState: Group[] = [];

const counterSlice = createSlice({
  name: "Groups",
  initialState,
  reducers: {
    createGroup(state, action: PayloadAction<string>) {
      state.push({
        name: action.payload,
        id: `${state.length}`,
        members: [],
        todos: [],
        transactions: [],
        shoppingItems: [],
      });
    },
    inviteUsers(
      state,
      action: PayloadAction<{ groupId: string; users: User[] }>
    ) {
      const group = state.find((group) => group.id === action.payload.groupId);
      if (group) {
        group.members.push(...action.payload.users);
      }
    },
  },
});

export const { createGroup, inviteUsers } = counterSlice.actions;
export const getGroupById = (id: string) => (state: RootState) =>
  state.groups.find((group) => group.id === id);

export default counterSlice.reducer;
