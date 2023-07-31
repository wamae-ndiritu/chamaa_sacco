import { createSlice } from "@reduxjs/toolkit";

export const memberSlice = createSlice({
  name: "member",
  initialState: {
    userInfo: {},
    loading: false,
    error: null,
  },
  reducers: {
    loginStart: (state) => {
      state.loading = true;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.userInfo = action.payload;
    },
    loginFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { loginStart, loginSuccess, loginFail } = memberSlice.actions;
export default memberSlice.reducer;
