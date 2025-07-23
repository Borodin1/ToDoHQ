import axios, { isAxiosError } from "axios";
import { IAuthenticate, IAuthUpdate } from "./../model/types";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAuth = createAsyncThunk(
  "auth/authenticate",
  async (authData: IAuthenticate, thunkAPI) => {
    const url = import.meta.env.VITE_API_URL;
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
          ? { firstName, lastName, username, email, password, confirmPassword }
          : { password, identifier };

      const response = await axios.post(`${url}/auth/${endpoint}`, body, {
        headers: { "Content-Type": "application/json" },
      });
      const data = response.data;
      localStorage.setItem("token", data.jwt);
      localStorage.setItem("user", JSON.stringify(data.user));

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

export const fetchUpdateUser = createAsyncThunk(
  "auth/updateUser",
  async (authBody: IAuthUpdate, thunkAPI) => {
    const url = import.meta.env.VITE_API_URL;
    try {
      const cleanBody = Object.fromEntries(
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        Object.entries(authBody).filter(([_, value]) => value !== "")
      );
      const token = localStorage.getItem("token");
      const response = await axios.put(
        `${url}/auth/update-profile`,
        cleanBody,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.data;
      localStorage.setItem("user", JSON.stringify(data));

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
