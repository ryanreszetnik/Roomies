import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Group } from "../data-types";
import { RootState } from "./store";

const initialState: Group[] = [
  { name: "Group 1 Long Name", id: "1" },
  { name: "Roomies", id: "2" },
  { name: "Group 3", id: "3" },
  { name: "Group 4", id: "4" },
  { name: "Group 5", id: "5" },
  { name: "Group 6", id: "6" },
];

const counterSlice = createSlice({
  name: "Groups",
  initialState,
  reducers: {
    addGroup(state, action: PayloadAction<Group>) {
      state.push(action.payload);
    },
  },
});

export const { addGroup } = counterSlice.actions;
export const getGroupById = (id: string) => (state: RootState) =>
  state.groups.find((group) => group.id === id);

export default counterSlice.reducer;
