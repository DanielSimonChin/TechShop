import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { email, isAdmin, name, _id, jwt } = action.payload;

      state.userInfo = action.payload;
      localStorage.setItem(
        "userInfo",
        JSON.stringify({ email, isAdmin, name, _id })
      );

      const expires = new Date();
      expires.setTime(expires.getTime() + 30 * 24 * 60 * 60 * 1000); // 30 days

      const cookieString = `jwt=${jwt};expires=${expires.toUTCString()};path=/`;
      document.cookie = cookieString;
    },
    logout: (state, action) => {
      state.userInfo = null;
      localStorage.clear();

      document.cookie = "jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"; // remove jwt cookie
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;
