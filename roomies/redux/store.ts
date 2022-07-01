import { configureStore } from "@reduxjs/toolkit";
import friendsReducer from "./friendsReducer";
import groupsReducer from "./groupsReducer";
// ...

const store = configureStore({
  reducer: {
    groups: groupsReducer,
    friends: friendsReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
