import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { isAxiosError } from "axios";
import { ITodoFetch } from "../model/types";

const url = import.meta.env.VITE_API_URL;
const token = localStorage.getItem("token");

export const fetchTodos = createAsyncThunk(
  "todos/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${url}/todos`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = response.data;
      localStorage.setItem("todos", JSON.stringify(data));

      return data;
    } catch (error: unknown) {
      if (isAxiosError(error)) {
        return thunkAPI.rejectWithValue({ message: error.message });
      } else {
        return thunkAPI.rejectWithValue({
          message: "An unknown error occurred",
        });
      }
    }
  }
);

export const createTask = createAsyncThunk(
  "todos/createTodo",
  async (todoData: ITodoFetch, thunkAPI) => {
    try {
      const response = await axios.post(
        `${url}/todos`,
        { data: todoData },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error: unknown) {
      if (isAxiosError(error)) {
        return thunkAPI.rejectWithValue({ message: error.message });
      } else {
        return thunkAPI.rejectWithValue({
          message: "An unknown error occurred",
        });
      }
    }
  }
);

export const deleteTask = createAsyncThunk(
  "todos/deleteTask",
  async (id: number, thunkAPI) => {
    try {
      const response = await axios.delete(`${url}/todos/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error: unknown) {
      if (isAxiosError(error)) {
        return thunkAPI.rejectWithValue({ message: error.message });
      } else {
        return thunkAPI.rejectWithValue({
          message: "An unknown error occured.",
        });
      }
    }
  }
);
