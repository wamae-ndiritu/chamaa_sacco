import { createSlice } from "@reduxjs/toolkit";

const userInfoFromLocalStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : {};

export const memberSlice = createSlice({
  name: "member",
  initialState: {
    userInfo: userInfoFromLocalStorage,
    members: [],
    loading: false,
    error: null,
    success: false,
    updateSuccess: false,
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
    updateProfileStart: (state) => {
      state.loading = true;
      state.updateSuccess = false;
    },
    updateProfileSuccess: (state, action) => {
      state.loading = false;
      state.updateSuccess = true;
      state.userInfo = action.payload;
    },
    updateProfileFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    getMembersStart: (state) => {
      state.loading = true;
    },
    getMembersSuccess: (state, action) => {
      state.loading = false;
      state.members = action.payload;
    },
    getMembersFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFail,
  logoutUser,
  updateProfileStart,
  updateProfileSuccess,
  updateProfileFail,
  getMembersStart,
  getMembersSuccess,
  getMembersFail,
} = memberSlice.actions;
export default memberSlice.reducer;
