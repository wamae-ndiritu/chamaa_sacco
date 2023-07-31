import { createSlice } from "@reduxjs/toolkit";

const userInfoFromLocalStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : {};

export const memberSlice = createSlice({
  name: "member",
  initialState: {
    userInfo: userInfoFromLocalStorage,
    loading: false,
    error: null,
    success: false,
  },
  reducers: {
    loginStart: (state) => {
      state.loading = true;
      state.error = false;
      state.success = false;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.userInfo = action.payload;
      state.success = true;
    },
    loginFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    logoutUser: (state) => {
      state.userInfo = {};
    },
  },
});

export const { loginStart, loginSuccess, loginFail, logoutUser } =
  memberSlice.actions;
export default memberSlice.reducer;
