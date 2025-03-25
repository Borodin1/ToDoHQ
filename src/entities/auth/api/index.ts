import axios, { isAxiosError } from "axios";
import { IAuthenticate } from "./../model/types";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAuth = createAsyncThunk(
  "auth/authenticate",
  async (authData: IAuthenticate, thunkAPI) => {
    const url = import.meta.env.VITE_API_URL
    try {
      const {
        type,
        username,
        firstName,
        lastName,
        identifier,
        email,
        password,
        confirmPassword,
      } = authData;
      const endpoint = type === "register" ? "register" : "login";

      const body =
        type === "register"
          ? { firstName, lastName, username, email, password,confirmPassword }
          : { password, identifier };

      const response = await axios.post(
        `${url}${endpoint}`,
        body,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      const data = response.data;
      localStorage.setItem("token", data.jwt);
      localStorage.setItem('user',JSON.stringify(data.user))
      
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
