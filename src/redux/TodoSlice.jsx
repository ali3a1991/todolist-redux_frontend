import { createSlice } from "@reduxjs/toolkit";

const TodoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    removeTodo: (state, action) => {
      return state.filter((todo) => todo._id !== action.payload);
    },
    toggleTodo: (state, action) => {
      const todo = state.find((item) => item._id === action.payload);
      if (todo) {
        todo.complited = !todo.complited;
      }
    },
  },
});

export const { addTodo, removeTodo, toggleTodo } = TodoSlice.actions;
export default TodoSlice.reducer;