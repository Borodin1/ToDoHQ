import { createSlice } from "@reduxjs/toolkit";
import { ITodoInitialState } from "./types";
import { fetchTodos, updateTask } from "../api";

const initialState: ITodoInitialState = {
  todos: [],
  isLoading: false,
  isError: false,
  isOpenModal: false,
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    isOpen: (state) => {
      state.isOpenModal = !state.isOpenModal;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(fetchTodos.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.isError = false;
      state.todos = payload;
    });
    builder.addCase(fetchTodos.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });



     builder.addCase(updateTask.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.isError = false;
      const updatedTodo = payload;
      const index = state.todos.findIndex(todo => todo.id === updatedTodo.id);
      if (index !== -1) {
        state.todos[index] = updatedTodo;
      } 
    });
  },
});
export const { isOpen } = todosSlice.actions;
export const todosReducer = todosSlice.reducer;
