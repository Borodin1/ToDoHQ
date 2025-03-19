import { createSlice } from "@reduxjs/toolkit";
import { IAuthState } from "./types";
import { fetchAuth } from "../api";

const user = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user") as string)
  : null;


const initialState: IAuthState = {
  token: localStorage?.getItem("token") || null,
  user: {
    firstName: user?.firstName || null,
    lastName: user?.lastName || null,
    username: user?.username || null,
    email: user?.email || null,
  },
  isLoading: false,
  isError: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.token = null;
      state.user = {
        firstName: null,
        lastName: null,
        username: null,
        email: null,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAuth.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(fetchAuth.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.token = payload.jwt;
      state.user = {
        firstName: payload.user.firstName,
        lastName: payload.user.lastName,
        username: payload.user.username,
        email: payload.user.email,
      };
    });

    builder.addCase(fetchAuth.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export const {logout} = authSlice.actions
export const authReducer = authSlice.reducer;
