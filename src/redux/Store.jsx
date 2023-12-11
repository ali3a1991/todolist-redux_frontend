import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./TodoSlice";
import user from "./UserSlice";

const store = configureStore({
  reducer: {
    todos: todoReducer,
    user: user,
  },
});

export default store;
