import { configureStore } from "@reduxjs/toolkit";
import { counter } from "./features/counter/Counter.slice";
// App configure store options
const configureStoreOpts = {
  reducer: {
    counter,
  },
};
// App store configuration
export const store = configureStore(configureStoreOpts);
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
