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
        email,
        password,
        confirmPassword,
      } = authData;
      const endpoint = type === "register" ? "register" : "login";

      if (type === "login") {
        if (!password || (!email && !username)) {
          throw new Error("Please provide either an email or a username along with a password.");
        }
      } else if (type === "register") {
        if (
          !firstName ||
          !lastName ||
          !username ||
          !email ||
          !password ||
          !confirmPassword
        ) {
          throw new Error("All fields are required.");
        }
        if (password !== confirmPassword) {
          throw new Error("Passwords do not match");
        }
      }

      const body =
        type === "register"
          ? { firstName, lastName, username, email, password,confirmPassword }
          : { password, ...(email ? { email } : { username }) };

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
